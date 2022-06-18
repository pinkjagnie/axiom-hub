import React from "react";

import "./Header.css";
import logo from "../img/logo_220-50.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="AxiomOS logo" className="logo" />
    </header>
  );
};

export default Header;