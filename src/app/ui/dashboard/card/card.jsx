import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ noOfUsers, type, delta, incdec }) => {
  return (
    <div className={styles.container} aria-label="User Statistics Card">
      <MdSupervisedUserCircle
        size={32}
        aria-hidden="true"
        className={styles.icon}
      />
      <div className={styles.text}>
        <h2 className={styles.title}>{type}</h2>
        <p className={styles.number}>{noOfUsers}</p>
        <p className={styles.detail}>
          <span className={styles.positive}>{delta}%</span> {incdec} from last
          week
        </p>
      </div>
    </div>
  );
};

export default Card;
