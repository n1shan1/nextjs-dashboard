import React from "react";
import styles from "./settingsCard.module.css";

const SettingsCard = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default SettingsCard;
