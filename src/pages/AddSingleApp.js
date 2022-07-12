import React, { useState } from "react";
import useInput from "../hooks/use-input";

import ErrorModal from "../components/Modal/ErrorModal";

import ninja from "../img/ninja_800-800.png";
import styles from "../components/addSingleApp.module.css";

const isUrl = (value) => value.includes('play.google.com/');

const AddSingleApp = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const {
    value: urlValue,
    isValid: urlIsValid,
    hasError: urlHasError,
    valueChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
    reset: resetUrl,
  } = useInput(isUrl);

  const urlName = urlValue.slice(
    urlValue.indexOf('=') + 1,
    urlValue.lastIndexOf('&h'),
  );

  let formIsValid = false;

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  async function addApp(urlName) {
    let errorModalMessage = '';
    const response = await fetch('https://test.axiomos.pl/api/reports/request', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        "package_name": urlName
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

    if (urlIsValid) {
      formIsValid = true;
    } else {
      return;
    }

    addApp(urlName);

    resetUrl();
    formIsValid = false;
  };

  const urlLabelClass = urlHasError ? {color: '#9b0000'} : undefined;
  const urlInputClass = urlHasError ? {border: '2px solid #9b0000'} : undefined;

  return(
    <div className={styles.addSingleAppContainer}>
      <div className={styles.titleSection}>
        <p>Did not find what you were looking for?</p>
        <p>Fill in the form and we will add this application to the database</p>
      </div>
      <div className={styles.ninjaIcon}>
        <img src={ninja} alt="ninja"/>
      </div>
      {modalIsShown && <ErrorModal onClose={hideModalHandler} errorMessage={errorMessage} />}
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="url" style={urlLabelClass}>Link to the package in Google Play</label>
          <input type="url" id="url" value={urlValue} onChange={urlChangeHandler} onBlur={urlBlurHandler} style={urlInputClass} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default AddSingleApp;