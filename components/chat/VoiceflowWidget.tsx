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
        open: () => void;
      };
    };
  }
}

const PROJECT_ID = "69a7840e7e59042952d1d1af";
const SCRIPT_SRC = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

export default function VoiceflowWidget() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const v = document.createElement("script");
    const s = document.getElementsByTagName("script")[0];

    v.onload = () => {
      window.voiceflow?.chat?.load({
        verify: { projectID: PROJECT_ID },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: { url: "https://runtime-api.voiceflow.com" },
      });
    };

    v.src = SCRIPT_SRC;
    v.type = "text/javascript";
    s?.parentNode?.insertBefore(v, s);
  }, []);

  return null;
}
