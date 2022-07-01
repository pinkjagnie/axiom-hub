import React from "react";

import styles from "./about.module.css";

const Team = () => {
  return(
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
  )
};

export default Team;