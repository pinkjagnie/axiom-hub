import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faPaypal, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./about.module.css";

const About = () => {
  return(
      <div className={styles.aboutContainer}>
        <h1>Let's meet!</h1>
        <h2>AxiomOS is a group of great people!</h2>
        <p>AxiomOS is made by developers, not just rom builders. Most of us work as a Java developer or QA specialist in our daily life. We create a system that we would like to use ourselves, having in mind something that is most important to us - Android is a system for phones and the phone is to be useful and effective, taking care of our privacy.</p>
        <h1>Wanna contact with us?</h1>
        <div className={styles.socialContainer}>
          <a href="mailto:contact@axiomos.pl">
            <FontAwesomeIcon icon={faEnvelope} className={styles.social} />
          </a>
          <a href="https://twitter.com/axiomos_aosp" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className={styles.social} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.social} />
          </a>
          <a href="https://t.me/axiomoshub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className={styles.social} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPaypal} className={styles.social} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPatreon} className={styles.social} />
          </a>
        </div>
      </div>
  )
};

export default About;