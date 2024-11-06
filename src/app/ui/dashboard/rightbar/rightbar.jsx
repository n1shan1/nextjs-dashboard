import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      {/* First Section */}
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="Astronaut floating in space"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>New Feature Available</span>
          <h3 className={styles.title}>
            Guide to Using the Latest Admin Dashboard Tools
          </h3>
          <span className={styles.subtitle}>Learn it in just 4 minutes!</span>
          <p className={styles.desc}>
            Dive into our updated admin dashboard and discover powerful tools to
            streamline your workflow. Whether it's task management or analytics,
            this guide covers everything.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch Now
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="Astronaut floating in space"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>Stay Tuned for More Updates</h3>
          <span className={styles.subtitle}>New features launching soon!</span>
          <p className={styles.desc}>
            We’re excited to introduce even more updates to enhance your
            experience. From improved UI to new analytics tools, our next
            release will take your productivity to the next level.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
