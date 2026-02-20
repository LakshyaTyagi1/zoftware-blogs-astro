export const footerTranslations = {
  en: {
    mission:
      "Zoftware is on a mission to simplify technology buying for 100,000+ businesses.",
    sections: [
      {
        heading: "For Buyers",
        items: [
          { title: "Categories", link: "https://zoftwarehub.com/categories" },
          {
            title: "Consultation",
            link: "https://calendly.com/gauravsawhney/zoftwarediscoverycall",
            target: "_blank",
          },
          { title: "Support", link: "https://zoftwarehub.com/voice-bot" },
        ],
      },
      {
        heading: "For Vendors",
        items: [
          { title: "List your product", link: "https://zoftwarehub.com/vendors", target: "_blank" },
        ],
      },
      {
        heading: "Company",
        items: [
          { title: "About", link: "https://zoftwarehub.com/about-us" },
          { title: "Blogs", link: "/" },
          { title: "Privacy Policy", link: "https://zoftwarehub.com/privacy-policy" },
          { title: "Terms", link: "https://zoftwarehub.com/terms-and-conditions" },
        ],
      },
    ],
    newsletter: {
      heading: "Newsletter",
      description:
        "Get updates and buyer playbooks straight to your inbox.",
      placeholder: "yourname@company.com",
      cta: "Subscribe",
    },
    lang: { en: "English", ar: "العربية", enShort: "EN", arShort: "ع" },
    rights: "© 2026 Zoftware. All rights reserved.",
    fees:
      "We're outcome-focused. Assistance fees apply only when results are delivered.",
    toastWarning: "Enter a valid Email",
    toastSuccess: "Subscribed Successfully",
    toastFail: "Subscription Failed",
  },
  ar: {
    mission:
      "تهدف زوفتوير إلى تبسيط شراء التكنولوجيا لأكثر من 100,000 شركة.",
    sections: [
      {
        heading: "للمشترين",
        items: [
          { title: "الفئات", link: "https://zoftwarehub.com/categories" },
          {
            title: "استشارة",
            link: "https://calendly.com/gauravsawhney/zoftwarediscoverycall",
            target: "_blank",
          },
          { title: "الدعم", link: "https://zoftwarehub.com/voice-bot" },
        ],
      },
      {
        heading: "للبائعين",
        items: [
          { title: "أدرج منتجك", link: "https://zoftwarehub.com/vendors", target: "_blank" },
        ],
      },
      {
        heading: "الشركة",
        items: [
          { title: "نبذة عنا", link: "https://zoftwarehub.com/about-us" },
          { title: "المدونات", link: "/" },
          { title: "سياسة الخصوصية", link: "https://zoftwarehub.com/privacy-policy" },
          { title: "الشروط", link: "https://zoftwarehub.com/terms-and-conditions" },
        ],
      },
    ],
    newsletter: {
      heading: "النشرة البريدية",
      description:
        "احصل على التحديثات وأدلة المشتري مباشرة إلى بريدك.",
      placeholder: "أدخل بريدك الإلكتروني",
      cta: "اشترك",
    },
    lang: { en: "English", ar: "العربية", enShort: "EN", arShort: "ع" },
    rights: "© 2026 زوفتوير. جميع الحقوق محفوظة.",
    fees:
      "نركز على النتائج. تُطبق رسوم المساعدة فقط عند تحقيق النتائج.",
    toastWarning: "يرجى إدخال بريد إلكتروني صالح",
    toastSuccess: "تم الاشتراك بنجاح",
    toastFail: "فشل الاشتراك",
  },
} as const;

export type FooterLocale = keyof typeof footerTranslations;
export type FooterTranslation = (typeof footerTranslations)[FooterLocale];
