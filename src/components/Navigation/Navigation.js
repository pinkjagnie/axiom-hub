import React, { useState } from "react";

import NavLinks from "./NavLinks";

import { CgMenuRound, CgCloseO } from "react-icons/cg";
import "./Navigation.css";

const Navigation = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <CgMenuRound className="hamburger" onClick={() => setOpenMenu(true)} />;

  const closeIcon = <CgCloseO className="hamburger" onClick={() => setOpenMenu(false)} />;

  const closeMenu = () => setOpenMenu(false);

  return(
    <div className="navBar">
      <nav className="navigation">
        {openMenu ? closeIcon : hamburgerIcon}
        {openMenu && <NavLinks closeMenu={closeMenu} />}
      </nav>
    </div>
  )
};

export default Navigation;