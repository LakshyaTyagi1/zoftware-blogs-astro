export const footerTranslations = {
  en: {
    mission:
      "Zoftware is on a mission to simplify technology buying for 100,000+ businesses.",
    sections: [
      {
        heading: "For Buyers",
        items: [
          { title: "How it works", link: "#" },
          { title: "Categories", link: "/categories" },
          { title: "Consultation", link: "#" },
          { title: "Support", link: "#" },
        ],
      },
      {
        heading: "For Vendors",
        items: [
          { title: "List your product", link: "#" },
          { title: "Partner program", link: "#" },
          { title: "Guidelines", link: "#" },
        ],
      },
      {
        heading: "Company",
        items: [
          { title: "About", link: "/about-us" },
          { title: "Blogs", link: "/blog" },
          { title: "Careers", link: "#" },
          { title: "Contact", link: "#" },
          { title: "Privacy Policy", link: "/privacy-policy" },
          { title: "Terms", link: "/terms-and-conditions" },
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
          { title: "كيف يعمل", link: "#" },
          { title: "الفئات", link: "#" },
          { title: "استشارة", link: "#" },
          { title: "الدعم", link: "#" },
        ],
      },
      {
        heading: "للبائعين",
        items: [
          { title: "أدرج منتجك", link: "#" },
          { title: "برنامج الشركاء", link: "#" },
          { title: "الإرشادات", link: "#" },
        ],
      },
      {
        heading: "الشركة",
        items: [
          { title: "نبذة عنا", link: "#" },
          { title: "المدونات", link: "/blog" },
          { title: "الوظائف", link: "#" },
          { title: "اتصل بنا", link: "#" },
          { title: "سياسة الخصوصية", link: "#" },
          { title: "الشروط", link: "#" },
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
