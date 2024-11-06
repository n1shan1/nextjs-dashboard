import React from "react";
import styles from "./teamsPage.module.css";
import TeamMember from "../../ui/dashboard/teams/teamMember/teamMember";

const TeamsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Team Members</h1>
      <div className={styles.teamList}>
        <TeamMember name="John Doe" role="Project Manager" />
        <TeamMember name="Jane Smith" role="Lead Developer" />
        <TeamMember name="Adam Smith" role="Backend Associate" />
        <TeamMember name="Jenny Ile" role="Lead Manager UI/UX" />
        <TeamMember name="Morris Mirrage" role="SDE 1" />
        <TeamMember name="Jane Doe" role="Test Manager" />
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default TeamsPage;
