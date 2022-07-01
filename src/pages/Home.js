import React from "react";
import { Link } from "react-router-dom";

import phonesImg from "../img/phones_400-300.png";

import styles from "../components/home.module.css";

const Home = () => {
  return(
    <div className={styles.homeSection}>
      <div className={styles.sloganContainer}>
        <img src={phonesImg} alt="AxiomOS"/>
        <div className={styles.textContainer}>
          <h1>AxiomOS Hub - place where you will check if your application is safe and if it cares about your privacy</h1>
          <p>Feel free to search the app list or meet our team</p>
          <div className={styles.linkContainer}>
            <Link to='/reports' className={styles.link}>Look for app</Link>
            <Link to="/about" className={styles.link}>Meet our team</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;