import React from "react";

import ScrollToTop from "../components/ui/ScrollToTop";
import Team from "../components/Team";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "../components/about.module.css";

const About = () => {
  return(
    <>
    <ScrollToTop />
    <div className={styles.aboutContainer}>
      <div className={styles.description}>
        <div className={styles.dictionary}>
          <p>axiom</p>
          <p>/ˈaksɪəm/</p>
          <p>noun</p>
          <p>a statement or proposition on which an abstractly defined structure is based.</p>
        </div>
        <div className={styles.aboutUs}>
          <p>AxiomOS is a group of great people!</p>
          <p>AxiomOS is made by developers, not just rom builders. Most of us work as a Java developer or QA specialist in our daily life. We create a system that we would like to use ourselves, having in mind something that is most important to us - Android is a system for phones and the phone is to be useful and effective, taking care of our privacy.</p>
        </div>
      </div>

      <div className={styles.axiomContainer}>
        <a href="https://axiomos.pl" target="_blank" rel="noopener noreferrer" className={styles.link}>Go to AxiomOS</a>
      </div>

      <div className={styles.contactContainer}>
        <p>Wanna contact with us?</p>
        <div className={styles.socialContainer}>
          <a href="mailto:contact@axiomos.pl">
            <FontAwesomeIcon icon={faEnvelope} className={styles.social} />
            Send us an email
          </a>
          <a href="https://t.me/axiomoshub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className={styles.social} />
            Write to us on Telegram
          </a>
        </div>
      </div>

      <Team/>
          
    </div>
    </>
  )
};

export default About;