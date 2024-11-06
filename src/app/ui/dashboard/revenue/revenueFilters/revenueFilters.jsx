import React from "react";
import styles from "./revenueFilters.module.css";

const RevenueFilters = () => {
  return (
    <div className={styles.container}>
      <select className={styles.filter}>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="yearly">Yearly</option>
      </select>
      <select className={styles.filter}>
        <option value="all">All Regions</option>
        <option value="na">North America</option>
        <option value="eu">Europe</option>
        <option value="asia">Asia</option>
      </select>
      <button className={styles.applyButton}>Apply Filters</button>
    </div>
  );
};

export default RevenueFilters;
