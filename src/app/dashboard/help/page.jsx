import React from "react";
import styles from "./helpPage.module.css";
import FAQ from "../../ui/dashboard/help/faq/faq"; // FAQ section
import ContactForm from "../../ui/dashboard/help/contactForm/contactForm"; // Contact support form

const HelpPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Frequently Asked Questions</h2>
        <FAQ />
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Contact Support</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default HelpPage;
