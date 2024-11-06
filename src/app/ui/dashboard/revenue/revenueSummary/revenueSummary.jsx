import React from "react";
import styles from "./revenueSummary.module.css";

const RevenueSummary = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Total Revenue</h2>
      <div className={styles.revenueAmount}>
        <span className={styles.amount}>$12,345.67</span>
        <span className={styles.growth}>+15% from previous month</span>
      </div>
      <div className={styles.details}>
        <p className={styles.detail}>
          Revenue has seen a significant increase due to new product launches
          and promotions during the month.
        </p>
      </div>
    </div>
  );
};

export default RevenueSummary;
