import React from "react";
import { Link } from "react-router-dom";

import hubIcon from "../img/hub_300-300.png";

import { MdReadMore } from "react-icons/md";
import { FaClipboardList, FaQuestionCircle } from "react-icons/fa";

import styles from "../components/singleApp.module.css";

const SingleReport = (props) => {
  return(
    <>
    <div className={styles.infoContainer}>
      <div className={styles.infoText}>
        <div className={styles.appTitle}>
          <img src={hubIcon} alt="app icon"/>
          <h1>{props.data.report.app_name}</h1>
          <p>{props.data.report.package_name}</p>
        </div>
        <p>version: {props.data.report.app_version}</p>
        <h2><FaClipboardList className={styles.icon}/> Scores</h2>
        <p>Perrmisions score: {props.data.report.perrmisions_score}</p>
        <p>Privacy score: {props.data.report.privacy_score}</p>
        <p>Rules score: {props.data.report.rules_score}</p>
        <h2><MdReadMore className={styles.icon}/> More to know</h2>
        {/* <p>App privacy report link: <a href={value.app_privacy_report_link} target="_blank" rel="noopener noreferrer">here</a></p>
          <p>App rules report link: <a href={value.app_rules_report_link} target="_blank" rel="noopener noreferrer">here</a></p> */}
      </div>
      <div className={styles.infoLegend}>
        <h3><FaQuestionCircle className={styles.icon}/> Legend</h3>
        <p>Perrmisions score - it's Lorem ipsum dolor sit amet</p>
        <p>Privacy score - it's Lorem ipsum dolor sit amet</p>
        <p>Rules score - it's Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className={styles.linkContainer}>
      <Link to='/reports' className={styles.link}>Keep looking</Link>
    </div>
    </>
  )
};

export default SingleReport;