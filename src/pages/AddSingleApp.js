import React from "react";

import styles from "../components/addSingleApp.module.css";

const AddSingleApp = () => {
  return(
    <div className={styles.addSingleAppContainer}>
      <h1>Did not find what you were looking for?</h1>
      <h2>Fill in the form and we will add this application to the database</h2>
    </div>
  )
};

export default AddSingleApp;