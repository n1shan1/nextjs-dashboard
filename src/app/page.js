"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./ui/landingPage/landing.module.css";

const Page = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Welcome to the NextJS Admin Dashboard!
      </div>
      <div className={styles.buttonSection}>
        <h1 className={styles.headingText}>
          Click the button below to open the main dashboard.
        </h1>
        <div className={styles.buttonContainer}>
          <button className={styles.redirectButton} onClick={handleRedirect}>
            Go to Dashboard
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <section className={styles.footerContent}>
          <h1>Welcome to the Next.js Admin Dashboard</h1>
          <p>
            This modern, responsive dashboard is designed to provide you with a
            seamless experience in managing and analyzing data. Built with{" "}
            <strong>Next.js</strong>, it integrates smoothly with{" "}
            <strong>MongoDB</strong> for efficient data management and{" "}
            <strong>user authentication</strong> for secure access. Whether
            you're tracking revenue, viewing transactions, or managing team
            members, this dashboard provides a clean and intuitive interface for
            all your administrative needs.
          </p>
          <h2>Key Features:</h2>
          <ul>
            <li>
              <strong>User Authentication</strong>: Secure login system with
              customizable authentication options.
            </li>
            <li>
              <strong>Real-Time Data</strong>: Fetch and display real-time data
              from your MongoDB database, including user information,
              transactions, and revenue.
            </li>
            <li>
              <strong>Interactive Charts</strong>: Visualize key metrics with
              interactive charts powered by Recharts.
            </li>
            <li>
              <strong>Search Functionality</strong>: Quickly search through your
              users, teams, and transactions.
            </li>
            <li>
              <strong>Admin Tools</strong>: Easily manage teams, view detailed
              reports, and perform administrative tasks.
            </li>
          </ul>
          <p>
            This dashboard is built to help streamline administrative workflows
            and provide a comprehensive view of all critical data in one place.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
