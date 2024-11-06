import React from "react";
import styles from "./settingsPage.module.css";
import SettingsCard from "../../ui/dashboard/settings/settingsCard/settingsCard";
import AccountSettings from "../../ui/dashboard/settings/accountSettings/accountSettings";
import NotificationSettings from "../../ui/dashboard/settings/notificationSettings/notificationSettings";

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.settingsSections}>
        <SettingsCard title="Account Settings">
          <AccountSettings />
        </SettingsCard>
        <SettingsCard title="Notification Settings">
          <NotificationSettings />
        </SettingsCard>
      </div>
    </div>
  );
};

export default SettingsPage;
