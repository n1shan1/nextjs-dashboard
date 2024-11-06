import React from "react";
import styles from "./notificationSettings.module.css";

const NotificationSettings = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Enable Email Notifications</label>
      <input type="checkbox" className={styles.checkbox} />

      <label className={styles.label}>Enable SMS Notifications</label>
      <input type="checkbox" className={styles.checkbox} />

      <button className={styles.saveButton}>Save Changes</button>
    </div>
  );
};

export default NotificationSettings;
