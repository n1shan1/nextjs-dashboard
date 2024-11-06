import React from "react";
import styles from "./transactionsPage.module.css";
import TransactionsSummary from "../../ui/dashboard/transactions/transactionSummary/transactionSummary";
import TransactionsFilters from "../../ui/dashboard/transactions/transactionFilters/transactionFilters";
import TransactionsList from "../../ui/dashboard/transactions/transactionList/transactionList";

const TransactionsPage = () => {
  return (
    <div className={styles.container}>
      <TransactionsSummary />
      <TransactionsFilters />
      <TransactionsList />
    </div>
  );
};

export default TransactionsPage;
