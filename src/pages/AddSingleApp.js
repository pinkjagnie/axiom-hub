import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";

import ErrorModal from "../components/Modal/ErrorModal";

import styles from "../components/addSingleApp.module.css";

const isNotEmpty = (value) => value.trim() !== '';
const isUrl = (value) => value.includes('play.google.com/');

const AddSingleApp = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

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

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  async function addApp(nameValue, urlValue) {
    let errorModalMessage = '';
    const response = await fetch('https://axiomos-hub-default-rtdb.europe-west1.firebasedatabase.app/addNewApp.json', {
      method: 'POST',
      // mode: 'cors',
      body: JSON.stringify({
        name: nameValue,
        url: urlValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        setModalIsShown(true);
        errorModalMessage = '';
        setErrorMessage(errorModalMessage)
      } else {
        return res.json().then((data) => {
          setModalIsShown(true);
          errorModalMessage = data.error;
          setErrorMessage(errorModalMessage)
        });
      }
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameIsValid && urlIsValid) {
      formIsValid = true;
    } else {
      return;
    }

    console.log(nameValue, urlValue);

    addApp(nameValue, urlValue);

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

      {modalIsShown && <ErrorModal onClose={hideModalHandler} errorMessage={errorMessage} />}
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