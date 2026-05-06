export const WHATSAPP_NUMBER = "919779474708";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const waGeneric = () =>
  waLink("Hi! I found your website and would like to enquire about your products.");

export const waProduct = (name: string) =>
  waLink(`Hi! I'm interested in the ${name}. Could you share availability and pricing?`);

export const waCustomCake = (data: Record<string, string>) => {
  const lines = [
    "Hi Chandigarh Bakery! I'd like to enquire about a custom cake.",
    "",
    `• Name: ${data.name || "-"}`,
    `• Phone: ${data.phone || "-"}`,
    `• Occasion: ${data.occasion || "-"}`,
    `• Date required: ${data.date || "-"}`,
    `• Flavour preference: ${data.flavour || "-"}`,
    `• Servings: ${data.servings || "-"}`,
    `• Budget: ${data.budget || "-"}`,
    data.message ? `• Notes: ${data.message}` : "",
  ].filter(Boolean);
  return waLink(lines.join("\n"));
};

export const waExperience = () =>
  waLink("Hi! I'd like to enquire about your workshops, gifting boxes & curated hampers.");
