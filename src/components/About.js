import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faPaypal, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./about.module.css";

const About = () => {
  return(
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

        <div className={styles.team}>
          <p className={styles.meetUs}>Let's meet!</p>
          <div className={styles.members}>

            <div className={styles.teamMember}>
              <div className={styles.name}>
                <div className={styles.profilePicture}>
                  <img src="https://avatars.githubusercontent.com/u/103602667?v=4" alt="miniature profile picture" />
                </div>
                <div className={styles.welcome}>
                  <p>@ojszymon</p>
                  <p>Lead developer</p>
                </div>
              </div>
              <p className={styles.aboutMember}>Go lang | Java | Very nice sheep | Spoiler: already has a wife</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.name}>
                <div className={styles.profilePicture}>
                  <img src="https://avatars.githubusercontent.com/u/97997260?v=4" alt="miniature profile picture" />
                </div>
                <div className={styles.welcome}>
                  <p>@pinkjagnie</p>
                  <p>Frontend developer</p>
                </div>
              </div>
              <p className={styles.aboutMember}>Just some React and CSS. Here also as a graphic artist and UI designer</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.name}>
                <div className={styles.profilePicture}>
                  <img src="https://avatars.githubusercontent.com/u/103602667?v=4" alt="miniature profile picture" />
                </div>
                <div className={styles.welcome}>
                  <p>@ojszymon</p>
                  <p>Lead developer</p>
                </div>
              </div>
              <p className={styles.aboutMember}>Go lang | Java | Very nice sheep | Spoiler: already has a wife</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.name}>
                <div className={styles.profilePicture}>
                  <img src="https://avatars.githubusercontent.com/u/97997260?v=4" alt="miniature profile picture" />
                </div>
                <div className={styles.welcome}>
                  <p>@pinkjagnie</p>
                  <p>Frontend developer</p>
                </div>
              </div>
              <p className={styles.aboutMember}>Just some React and CSS. Here also as a graphic artist and UI designer</p>
            </div>
          </div>
        </div>

      </div>
  )
};

export default About;