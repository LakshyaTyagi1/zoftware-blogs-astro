import React, { useState } from "react";
import styles from "./footer.module.css";
import { footerTranslations } from "./constants";

function Footer() {
  const t = footerTranslations.en;
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function saveRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError(t.toastWarning);
      return;
    }

    setError("");
    setIsSaving(true);

    try {
      const response = await fetch("/api/newsletter.json", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          pageTitle: document.title,
          pageUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error(t.toastFail);
      }

      setEmail("");
      setConfirmationEmail(normalizedEmail);
      window.setTimeout(() => setConfirmationEmail(""), 3000);
    } catch {
      setError(t.toastFail);
    } finally {
      setIsSaving(false);
    }
  }

  function changeLanguage(lang: string) {
    // TODO: Implement language switching
    console.log("Language change to:", lang);
  }

  const footerSections = t.sections;

  return (
    <footer
      className="border-t border-[#E5E7EB] py-12 cursor-default relative"
      style={{ borderWidth: "0.56px" }}
      dir="ltr"
    >
      <section className={styles.page}>
        <p className={styles.mission}>
          {t.mission}
        </p>
        <div className={styles.footerSections}>
          {footerSections.map((section) => (
            <div key={section.heading} style={{ minWidth: "fit-content" }}>
              <h3 className={styles.sectionHeading}>
                {section.heading}
              </h3>
              <ul className={styles.sectionList}>
                {section.items.map((item) => (
                  <li key={item.title} className={styles.sectionItem}>
                    <a
                      href={item.link ?? "#"}
                      className={styles.sectionItemLink}
                      target={"target" in item && item.target === "_blank" ? "_blank" : "_self"}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div style={{ maxWidth: "min(296px, 100%)" }}>
            <h3 className={styles.newsletterHeading}>
              {t.newsletter.heading}
            </h3>
            <p className={styles.newsletterDescription}>
              {t.newsletter.description}
            </p>
            {confirmationEmail ? (
              <p className={styles.newsletterConfirmation} aria-live="polite">
                Thanks for signing up. You will receive newsletters at{" "}
                <strong>{confirmationEmail}</strong>.
              </p>
            ) : (
              <>
                <form
                  onSubmit={(e) => saveRequest(e)}
                  className={styles.newsletterForm}
                  style={{ height: "2.25rem" }}
                >
                  <input
                    required
                    type="email"
                    value={email}
                    placeholder={t.newsletter.placeholder}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.newsletterInput}
                    disabled={isSaving}
                  />
                  <button
                    className={styles.newsletterButton}
                    disabled={isSaving}
                  >
                    {isSaving ? "Subscribing..." : t.newsletter.cta}
                  </button>
                </form>
                {error ? (
                  <p className={styles.newsletterError} aria-live="polite">
                    {error}
                  </p>
                ) : null}
              </>
            )}
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarLeft}>
            <img
              width={24}
              height={24}
              alt="Zoftware Logo"
              src="/zoftware-mini-logo.svg"
              style={{ borderRadius: 0 }}
            />
            <p className={styles.copyright}>{t.rights}</p>
          </div>
          <div className={styles.langButtons}>
            <button onClick={() => changeLanguage("en")} className={styles.langButton}>
              <span className="hidden sm:block">{t.lang.en}</span>
              <span className="sm:hidden px-1">{t.lang.enShort}</span>
            </button>
            <button onClick={() => changeLanguage("ar")} className={styles.langButton}>
              <span className="hidden sm:block">{t.lang.ar}</span>
              <span className="sm:hidden px-1">{t.lang.arShort}</span>
            </button>
          </div>
        </div>
        <p className={styles.feesText}>{t.fees}</p>
      </section>
    </footer>
  );
}

export default Footer;
