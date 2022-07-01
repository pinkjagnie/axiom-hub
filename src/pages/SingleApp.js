import { Link, useParams } from 'react-router-dom';

import hubIcon from "../img/hub_300-300.png";

import { MdReadMore } from "react-icons/md";
import { FaClipboardList, FaQuestionCircle } from "react-icons/fa";

import styles from "../components/singleApp.module.css";

const data = [
  {
    "aid": 1,
    "app_name": "test1",
    "package_name": "com.test.telegram",
    "perrmisions_score": 3.2,
    "privacy_score": 2.3,
    "rules_score": 3,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.google.pl",
    "app_rules_report_link": "http://www.google.pl"
  },
  {
    "aid": 2,
    "app_name": "test22",
    "package_name": "com.test.instagram",
    "privacy_score": 2,
    "perrmisions_score": 3.2,
    "rules_score": 3,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.web.axiomos.pl",
    "app_rules_report_link": "http://www.web.axiomos.pl"
  },
  {
    "aid": 3,
    "app_name": "test33",
    "package_name": "com.test.facebook",
    "privacy_score": 9,
    "perrmisions_score": 3,
    "rules_score": 6,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.onet.pl",
    "app_rules_report_link": "http://www.onet.pl"
  },
  {
    "aid": 4,
    "app_name": "test44",
    "package_name": "com.test.whatsup",
    "privacy_score": 3,
    "perrmisions_score": 3.2,
    "rules_score": 8.8,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.google.pl",
    "app_rules_report_link": "http://www.google.pl"
  },
  {
    "aid": 5,
    "app_name": "test55",
    "package_name": "com.test.chrome",
    "privacy_score": 1,
    "perrmisions_score": 3.2,
    "rules_score": 5,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.test.pinkjagnie.pl",
    "app_rules_report_link": "http://www.test.pinkjagnie.pl"
  }
];


const SingleApp = () => {
  const { appId } = useParams();
  const value = data.find((value) => value.package_name === appId);
 
  return (
    <div className={styles.singleAppSection}>
      <div className={styles.infoContainer}>
        <div className={styles.infoText}>
          <div className={styles.appTitle}>
            <img src={hubIcon} alt="app icon"/>
            <h1>{value.app_name}</h1>
          </div>
          <p>version: {value.app_version}</p>
          <h2><FaClipboardList className={styles.icon}/> Scores</h2>
          <p>Perrmisions score: {value.perrmisions_score}</p>
          <p>Privacy score: {value.privacy_score}</p>
          <p>Rules score: {value.rules_score}</p>
          <h2><MdReadMore className={styles.icon}/> More to know</h2>
          <p>App privacy report link: <a href={value.app_privacy_report_link} target="_blank" rel="noopener noreferrer">here</a></p>
          <p>App rules report link: <a href={value.app_rules_report_link} target="_blank" rel="noopener noreferrer">here</a></p>
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
    </div>   
  );
};

export default SingleApp;