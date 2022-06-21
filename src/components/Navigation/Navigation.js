import React, { useState } from "react";

import NavLinks from "./NavLinks";

import { CgMenuRound, CgCloseO } from "react-icons/cg";
import "./Navigation.css";

const Navigation = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <CgMenuRound className="mobileHamburger" onClick={() => setOpenMenu(true)} />;

  const closeIcon = <CgCloseO className="mobileHamburger" onClick={() => setOpenMenu(false)} />;

  const closeMenu = () => setOpenMenu(false);

  return(
    <div className="navBar">
      <nav className="mobileNavigation">
        {openMenu ? closeIcon : hamburgerIcon}
        {openMenu && <NavLinks closeMenu={closeMenu} />}
      </nav>
      <nav className="desktopNavigation">
        <NavLinks />
      </nav>
    </div>
  )
};

export default Navigation;