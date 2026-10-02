declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackFormSubmit(formType: "devis" | "rappel") {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "formulaire_envoye",
    form_type: formType,
  });
}
