import React from "react";

import closeBtn from "../../img/closeX_200-200.svg"

import styles from "./infoModal.module.css";

const InfoModal = (props) => {

  return(
    <div className={styles.infoModalSection}>
      <div className={styles.infoModal}>
        <img src={closeBtn} alt="" className={styles.closeInfoModalButton} onClick={props.onClose}/>
        <div className={styles.infoModalText}>
          <p>{props.value.app_name}</p>
          <p>version: {props.value.app_version}</p>
          <p>Perrmisions score: {props.value.perrmisions_score}</p>
          <p>Privacy score: {props.value.privacy_score}</p>
          <p>Rules score: {props.value.rules_score}</p>
          <p>App privacy report link: <a href={props.value.app_privacy_report_link} target="_blank">here</a></p>
          <p>App rules report link: <a href={props.value.app_rules_report_link} target="_blank">here</a></p>
        </div>
        <div className={styles.infoModalLegend}>
          <p>Perrmisions score - it's Lorem ipsum dolor sit amet</p>
          <p>Privacy score - it's Lorem ipsum dolor sit amet</p>
          <p>Rules score - it's Lorem ipsum dolor sit amet</p>
        </div>
        <button className={styles.closingInfoModal} onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
};

export default InfoModal;