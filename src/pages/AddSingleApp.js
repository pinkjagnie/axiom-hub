import React from "react";

import styles from "../components/addSingleApp.module.css";

const AddSingleApp = () => {
  return(
    <div className={styles.addSingleAppContainer}>

      <div className={styles.titleSection}>
        <p>Did not find what you were looking for?</p>
        <p>Fill in the form and we will add this application to the database</p>
      </div>

      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="name">Name of the application package</label>
          <input type="text" id="name"/>
        </div>
        <div className={styles.control}>
          <label htmlFor="url">Link to the package in Google Play</label>
          <input type="url" id="url"/>
        </div>
        <button>Submit</button>
      </form>

    </div>
  )
};

export default AddSingleApp;