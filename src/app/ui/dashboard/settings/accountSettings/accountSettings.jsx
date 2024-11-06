import React from "react";
import styles from "./accountSettings.module.css";

const AccountSettings = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Username</label>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter new username"
      />

      <label className={styles.label}>Email</label>
      <input
        type="email"
        className={styles.input}
        placeholder="Enter new email"
      />

      <button className={styles.saveButton}>Save Changes</button>
    </div>
  );
};

export default AccountSettings;
