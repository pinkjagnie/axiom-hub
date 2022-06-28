import React from "react";

import Navigation from "./Navigation/Navigation";

import logo from "../img/logo_axiomos_hub_220-50.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="AxiomOS logo" className={styles.logo} />
      <Navigation />
    </header>
  );
};

export default Header;