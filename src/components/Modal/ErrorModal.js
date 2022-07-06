import React from "react";

import closeBtn from "../../img/closeX_200-200.svg"

import styles from "./errorModal.module.css";

const ErrorModal = (props) => {

  let title = '';
  let content = '';

  if (props.errorMessage !== '') {
    title = <h1 style={{color: '#9b0000'}}>Ups!</h1>;
    content = <p style={{color: '#9b0000'}}>Something went wrong. {props.errorMessage}!</p>
  } else if (props.errorMessage === '') {
    title = <p>Thank you!</p>;
    content = <p>Thank you for your input! Now it's our turn. We will verify your notification and add it to our database shortly.</p>
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