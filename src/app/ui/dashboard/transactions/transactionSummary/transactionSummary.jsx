import React from "react";
import styles from "./transactionSummary.module.css";

const TransactionsSummary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryItem}>
        <h3>Total Transactions</h3>
        <p>245</p>
      </div>
      <div className={styles.summaryItem}>
        <h3>Total Revenue</h3>
        <p>$123,456.78</p>
      </div>
      <div className={styles.summaryItem}>
        <h3>Pending Transactions</h3>
        <p>12</p>
      </div>
      <div className={styles.summaryItem}>
        <h3>Completed Transactions</h3>
        <p>200</p>
      </div>
    </div>
  );
};

export default TransactionsSummary;
