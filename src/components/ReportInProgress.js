import React from "react";
import { Link } from "react-router-dom";

import progressGoal from "../img/inProgress_1000-1000.png";

import styles from "./reportInProgress.module.css";

const ReportInProgress = () => {
  return(
    <div className={styles.inProgressSection}>
      <div className={styles.progressContainer}>
        <div className={styles.goalContainer}>
          <img src={progressGoal} alt="in progress" />
        </div>
        <div className={styles.textContainer}>
          <h1>In progress...</h1>
          <p>The application is in the analysis phase</p>
          <div className={styles.sloganContainer}>
            <p>Check back later</p>
            <p>and in the meantime</p>
          </div>
        </div>
        <div className={styles.linkContainer}>
          <Link to='/reports' className={styles.link}>Keep looking</Link>
        </div>
      </div>
    </div>
  )
};

export default ReportInProgress;