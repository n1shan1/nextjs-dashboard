import React from "react";
import styles from "./transactionFilters.module.css";

const TransactionsFilters = () => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.headerText}>Filter Transactions</div>
      <div className={styles.filterItem}>
        <label>Date Range:</label>
        <input type="date" />
        <span>to</span>
        <input type="date" />
      </div>
      <div className={styles.filterItem}>
        <label>Status:</label>
        <select>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div className={styles.filterItem}>
        <label>Amount Range:</label>
        <input type="number" placeholder="Min" />
        <span>to</span>
        <input type="number" placeholder="Max" />
      </div>
      <button className={styles.filterButton}>Apply Filters</button>
    </div>
  );
};

export default TransactionsFilters;
