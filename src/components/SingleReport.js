import React from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "./ui/ScrollToTop";
import hubIcon from "../img/hub_300-300.png";

import { MdReadMore } from "react-icons/md";
import { FaClipboardList, FaQuestionCircle } from "react-icons/fa";

import styles from "../components/singleApp.module.css";

const SingleReport = (props) => {
  return(
    <>
    <ScrollToTop />
    <div className={styles.infoContainer}>
      <div className={styles.infoText}>
        <div className={styles.appTitle}>
          <img src={hubIcon} alt="app icon"/>
          {/* <img src={props.data.report.app_icon} alt="app icon" /> */}
          <div className={styles.appNames}>
            <h1>{props.data.report.app_name}</h1>
            <p>{props.data.report.package_name}</p>
            <p>version: {props.data.report.app_version}</p>
          </div>
        </div>
        <h2><FaClipboardList className={styles.icon}/> Scores</h2>
        <div className={styles.scoreContainer}>
          <p>Permissions score:</p>
          <p className={styles.score}>{props.data.report.permissions_score}</p>
        </div>
        <div className={styles.scoreContainer}>
          <p>Privacy score:</p>
          <p className={styles.score}>{props.data.report.privacy_score}</p>
        </div>
        <div className={styles.scoreContainer}>
          <p>Rules score:</p>
          <p className={styles.score}>{props.data.report.rules_score}</p>
        </div>
        <h2><MdReadMore className={styles.icon}/> More to know</h2>
        <div className={styles.numberContainer}>
          <div className={styles.number}><p>{props.data.report.trackers_count}</p></div>
          <p className={styles.numberName}>Trackers</p>
        </div>
          {props.data.report.trackers.map((tracker) => <div className={styles.numberList}><p key={tracker.ID}>{tracker.tracker_name}</p></div>)}
        <div className={styles.numberContainer}>
          <div className={styles.number}><p>{props.data.report.permissions_count}</p></div>
          <p className={styles.numberName}>Permissions</p>
        </div>
          {props.data.report.permissions.map((permission) => <div className={styles.numberList}><p key={permission.ID}>{permission.permission_name}</p></div>)}
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