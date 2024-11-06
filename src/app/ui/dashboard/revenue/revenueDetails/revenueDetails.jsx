import React from "react";
import styles from "./revenueDetails.module.css";

const RevenueDetails = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Revenue Breakdown</h2>
      <div className={styles.list}>
        <div className={styles.item}>
          <span className={styles.category}>Product Sales</span>
          <span className={styles.amount}>$7,890.45</span>
        </div>
        <div className={styles.item}>
          <span className={styles.category}>Subscriptions</span>
          <span className={styles.amount}>$2,350.22</span>
        </div>
        <div className={styles.item}>
          <span className={styles.category}>Advertising</span>
          <span className={styles.amount}>$1,105.00</span>
        </div>
        <div className={styles.item}>
          <span className={styles.category}>Other</span>
          <span className={styles.amount}>$1,000.00</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueDetails;
