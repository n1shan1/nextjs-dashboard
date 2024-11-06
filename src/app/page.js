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
        <p className={styles.footerContent}>
          Will add the documentation and details soon, stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Page;
