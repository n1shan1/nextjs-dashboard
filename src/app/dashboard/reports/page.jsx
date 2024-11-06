import React from "react";
import styles from "./reportsPage.module.css";
import ReportSummary from "../../ui/dashboard/reports/reportSummary/reportSummary";
import ReportTable from "../../ui/dashboard/reports/reportTable/reportTable";

const ReportsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Reports Overview</h1>
      <ReportSummary />
      <ReportTable />
    </div>
  );
};

export default ReportsPage;
