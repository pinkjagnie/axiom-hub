import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation/Navigation";

import logo from "../img/logo_axiomos_hub_220-50.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'><img src={logo} alt="AxiomOS logo" className={styles.logo} /></Link>
      <Navigation />
    </header>
  );
};

export default Header;