import React from "react";
import styles from "./reportTable.module.css";

const ReportTable = () => {
  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.tableTitle}>Detailed Sales Report</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Completed</td>
            <td>2024-10-12</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Pending</td>
            <td>2024-10-14</td>
            <td>$1,000</td>
          </tr>
          <tr>
            <td>Mike Johnson</td>
            <td>Cancelled</td>
            <td>2024-10-16</td>
            <td>$250</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
