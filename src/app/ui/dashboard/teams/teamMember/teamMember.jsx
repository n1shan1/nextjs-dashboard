import React from "react";
import styles from "./teamMember.module.css";
import { MdPerson } from "react-icons/md"; // Example icon

const TeamMember = ({ name, role }) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.iconContainer}>
        <MdPerson size={40} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
