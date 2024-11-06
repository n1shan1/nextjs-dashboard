import React from "react";
import styles from "./reportSummary.module.css";
import { MdTrendingUp, MdAttachMoney } from "react-icons/md";

const ReportSummary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryItem}>
        <MdTrendingUp size={30} className={styles.icon} />
        <div className={styles.text}>
          <h3>Total Revenue</h3>
          <p>$32,000</p>
        </div>
      </div>

      <div className={styles.summaryItem}>
        <MdAttachMoney size={30} className={styles.icon} />
        <div className={styles.text}>
          <h3>Total Sales</h3>
          <p>1,250</p>
        </div>
      </div>
    </div>
  );
};

export default ReportSummary;
