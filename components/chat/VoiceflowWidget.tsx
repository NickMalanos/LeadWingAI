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
          voice?: { url: string };
        }) => void;
      };
    };
    __leadwingVoiceflowInitialized?: boolean;
  }
}

const SCRIPT_SRC = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

export default function VoiceflowWidget() {
  useEffect(() => {
    const projectID = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;
    const versionID = process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID;

    if (!projectID || !versionID || typeof window === "undefined") {
      return;
    }

    const initialize = () => {
      if (window.__leadwingVoiceflowInitialized || !window.voiceflow?.chat?.load) {
        return;
      }

      window.voiceflow.chat.load({
        verify: { projectID },
        url: "https://general-runtime.voiceflow.com",
        versionID,
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });

      window.__leadwingVoiceflowInitialized = true;
    };

    const existingScript = document.querySelector(
      "script[data-voiceflow-widget='true']"
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        initialize();
      } else {
        existingScript.addEventListener("load", initialize, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.type = "text/javascript";
    script.async = true;
    script.dataset.voiceflowWidget = "true";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        initialize();
      },
      { once: true }
    );

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
      return;
    }

    document.body.appendChild(script);
  }, []);

  return null;
}
