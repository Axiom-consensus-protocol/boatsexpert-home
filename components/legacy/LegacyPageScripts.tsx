"use client";

import { useEffect } from "react";

type LegacyPageScriptsProps = {
  code: string;
  page: string;
};

export function LegacyPageScripts({ code, page }: LegacyPageScriptsProps) {
  useEffect(() => {
    if (!code.trim()) return;

    const script = document.createElement("script");
    script.dataset.legacyPageScript = page;
    script.text = code;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [code, page]);

  return null;
}
