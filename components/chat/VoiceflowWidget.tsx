"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
        }) => void;
      };
    };
    __leadwingVoiceflowInitialized?: boolean;
  }
}

const SCRIPT_SRC = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

function loadVoiceflowScript(onReady: () => void) {
  const existingScript = document.querySelector(
    "script[data-voiceflow-widget='true']"
  ) as HTMLScriptElement | null;

  if (existingScript) {
    if (existingScript.dataset.loaded === "true") {
      onReady();
      return;
    }

    existingScript.addEventListener("load", onReady, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.src = SCRIPT_SRC;
  script.type = "module";
  script.async = true;
  script.dataset.voiceflowWidget = "true";
  script.addEventListener(
    "load",
    () => {
      script.dataset.loaded = "true";
      onReady();
    },
    { once: true }
  );
  document.body.appendChild(script);
}

export default function VoiceflowWidget() {
  useEffect(() => {
    const projectID = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;
    const versionID = process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID;

    if (!projectID || !versionID || typeof window === "undefined") {
      return;
    }

    const initializeWidget = () => {
      if (window.__leadwingVoiceflowInitialized) {
        return;
      }

      if (!window.voiceflow?.chat?.load) {
        return;
      }

      window.voiceflow.chat.load({
        verify: { projectID },
        url: "https://general-runtime.voiceflow.com",
        versionID
      });
      window.__leadwingVoiceflowInitialized = true;
    };

    loadVoiceflowScript(initializeWidget);
  }, []);

  return null;
}
