import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";

import styles from "../components/addSingleApp.module.css";

const isNotEmpty = (value) => value.trim() !== '';
const isUrl = (value) => value.includes('play.google.com/');

const AddSingleApp = () => {

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: urlValue,
    isValid: urlIsValid,
    hasError: urlHasError,
    valueChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
    reset: resetUrl,
  } = useInput(isUrl);

  let formIsValid = false;

  // POST

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameIsValid && urlIsValid) {
      formIsValid = true;
    } else {
      return;
    }

    console.log(nameValue, urlValue);

    // POST

    resetName();
    resetUrl();
    formIsValid = false;
  };

  const nameLabelClass = nameHasError ? {color: '#9b0000'} : undefined;
  const nameInputClass = nameHasError ? {border: '2px solid #9b0000'} : undefined;

  const urlLabelClass = urlHasError ? {color: '#9b0000'} : undefined;
  const urlInputClass = urlHasError ? {border: '2px solid #9b0000'} : undefined;

  return(
    <div className={styles.addSingleAppContainer}>

      <div className={styles.titleSection}>
        <p>Did not find what you were looking for?</p>
        <p>Fill in the form and we will add this application to the database</p>
      </div>

      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="name" style={nameLabelClass}>Name of the application package</label>
          <input type="text" id="name" value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler} style={nameInputClass} />
        </div>
        <div className={styles.control}>
          <label htmlFor="url" style={urlLabelClass}>Link to the package in Google Play</label>
          <input type="url" id="url" value={urlValue} onChange={urlChangeHandler} onBlur={urlBlurHandler} style={urlInputClass} />
        </div>
        <button>Submit</button>
      </form>
      <div className={styles.linkContainer}>
        <Link to='/reports' className={styles.link}>Go to search for Reports</Link>
      </div>
    </div>
  )
};

export default AddSingleApp;