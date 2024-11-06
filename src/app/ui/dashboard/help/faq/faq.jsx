import React from "react";
import styles from "./faq.module.css";

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>How can I reset my password?</h3>
        <p className={styles.answer}>
          You can reset your password by going to the settings page and clicking
          on "Reset Password" under the account section.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>How do I change my email address?</h3>
        <p className={styles.answer}>
          To change your email address, go to the account settings page and
          update your email under the personal details section.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>
          Where can I find the terms and conditions?
        </h3>
        <p className={styles.answer}>
          You can find the terms and conditions at the bottom of the page in the
          footer or from the settings menu.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
