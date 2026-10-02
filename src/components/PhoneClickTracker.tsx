"use client";

import { useEffect } from "react";
import { trackPhoneClick } from "@/lib/gtm";

export default function PhoneClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='tel:']");
      if (!link) return;
      trackPhoneClick(link.getAttribute("href") ?? "");
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
