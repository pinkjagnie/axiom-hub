import React from "react";
import { Link } from "react-router-dom";

import closeBtn from "../../img/closeX_200-200.svg"
import { GiNinjaVelociraptor } from "react-icons/gi";

import styles from "./errorModal.module.css";

const ErrorModal = (props) => {

  let title = '';
  let content = '';
  let url = props.packageName;

  if (props.errorMessage !== '') {
    title = <h1 style={{color: '#9b0000'}}>Ups!</h1>;
    content = <p style={{color: '#9b0000'}}>Something went wrong. {props.errorMessage}!</p>
  } else if (props.errorMessage === '') {
    title = <p>Thank you!</p>;
    content = <div><p>Thank you for your input! Now it's our turn.</p>
              <div className={styles.linkContainer}>
                <GiNinjaVelociraptor className={styles.icon} /><Link to={`/reports/${url}`} className={styles.link}>Go to this app report</Link>
              </div></div>
  }

  const closeHandler = () => {
    props.onClose();
  }

  return(
    <div className={styles.modalSection}>
      <div className={styles.modal}>
        <img src={closeBtn} alt="" className={styles.closeButton} onClick={closeHandler}/>
        <div className={styles.text}>
          {title}
          {content}
        </div>
        <button className={styles.closing} onClick={closeHandler}>Close</button>
      </div>
    </div>
  )
};

export default ErrorModal;