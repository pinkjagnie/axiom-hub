import React from "react";

import closeBtn from "../../img/closeX_200-200.svg"

import styles from "./legendModal.module.css";

const LegendModal = (props) => {

  return(
    <div className={styles.legendModalSection}>
      <div className={styles.legendModal}>
        <img src={closeBtn} alt="" className={styles.closeLegendModalButton} onClick={props.onClose}/>
        <div className={styles.legendModalText}>
          <p>Privacy score - it is Lorem ipsum dolor sit amet</p>
          <p>Rules score - it is Lorem ipsum dolor sit amet</p>
        </div>
        <button className={styles.closingLegendModal} onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
};

export default LegendModal;