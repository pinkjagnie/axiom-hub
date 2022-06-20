import React from "react";

import Navigation from "./Navigation/Navigation";

import "./Header.css";
import logo from "../img/logo_axiomos_hub_220-50.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="AxiomOS logo" className="logo" />
      <Navigation />
    </header>
  );
};

export default Header;