declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function pushDataLayer(payload: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackFormSubmit(formType: "devis" | "rappel") {
  pushDataLayer({
    event: "formulaire_envoye",
    form_type: formType,
  });
}

export function trackPhoneClick(phoneNumber: string) {
  pushDataLayer({
    event: "clic_telephone",
    phone_number: phoneNumber,
  });
}
