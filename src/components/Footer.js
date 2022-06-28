import React from "react";

import { GiPawHeart } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faPaypal, faPatreon } from "@fortawesome/free-brands-svg-icons";

import styles from "./footer.module.css";

const Footer = () => { 
  return (
    <div className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>&copy; AxiomOS project</p>
          <p>Want to contact with us? <a href="mailto:contact@axiomos.pl" className={styles.mail}>Just send us an email</a></p>
          <p>Built with <GiPawHeart className={styles.author} /> by <span><a href="https://github.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className={styles.author}>PinkJagnie</a></span></p>
        </div>
        <div className={styles.socialContainer}>
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
    </div>
  )
};

export default Footer;