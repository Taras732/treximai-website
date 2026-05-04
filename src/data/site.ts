// Site-wide config + meta strings, sourced from figma-spec-desktop.md §3.1, §3.2, §4.1
// All copy is bilingual-ready; v1 ships UA-only with EN coming soon.

export const site = {
  name: "TreximAI",
  domain: "trexim.ai",
  url: "https://trexim.ai",
  founder: "Тарас Смалюх",
  city: "Одеса, Україна",

  // Direct contacts (per Figma footer + contacts page)
  email: "support@trexim.ai",
  phone: "+380990091802",
  phoneFormatted: "+380 99 009 18 02",
  address: "Одеса, вул. Приморська, 23, кв. 20",

  // Social (placeholders — replace when handles confirmed)
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
    youtube: "",
  },

  // SEO defaults (UA)
  seo: {
    title:
      "TreximAI — AI-платформа для логістики · Trexim",
    description:
      "AI-платформа для прогнозування доставки та автоматизації документообігу. Контроль перевезень, e-ТТН, GPS-моніторинг — для логістичних компаній і вантажовідправників.",
    ogImage: "/og-image.png",
    locale: "uk_UA",
  },
};
