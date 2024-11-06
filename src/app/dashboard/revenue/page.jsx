import React from "react";
import RevenueSummary from "../../ui/dashboard/revenue/revenueSummary/revenueSummary";
import RevenueDetails from "../../ui/dashboard/revenue/revenueDetails/revenueDetails";
import RevenueFilters from "../../ui/dashboard/revenue/revenueFilters/revenueFilters";

const RevenuePage = () => {
  return (
    <div className="dashboard">
      <RevenueSummary />
      <RevenueFilters />
      <RevenueDetails />
    </div>
  );
};

export default RevenuePage;
