import React from "react";
import styles from "./transactionList.module.css";
import Transactions from "../transactions";

const TransactionsList = () => {
  return (
    <div className={styles.listContainer}>
      <h2>All Transactions</h2>
      <Transactions />
    </div>
  );
};

export default TransactionsList;
