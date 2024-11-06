import React from "react";
import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";

const Page = async () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card
            noOfUsers={12}
            incdec={"Increase"}
            type={"Increase in the number of Customer."}
            delta={+12}
          />
          <Card
            noOfUsers={78}
            incdec={"Decrease"}
            type={"Decrease in the quantity of products sold."}
            delta={-100}
          />
          <Card
            noOfUsers={122}
            incdec={"Increase"}
            type={"Increase in the overall revenue generated."}
            delta={+10}
          />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Page;
