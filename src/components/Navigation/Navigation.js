import React, { useState } from "react";

import NavLinks from "./NavLinks";

import { CgMenuRound, CgCloseO } from "react-icons/cg";
import styles from "./navigation.module.css";

const Navigation = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <CgMenuRound className={styles.mobileHamburger} onClick={() => setOpenMenu(true)} />;

  const closeIcon = <CgCloseO className={styles.mobileHamburger} onClick={() => setOpenMenu(false)} />;

  const closeMenu = () => setOpenMenu(false);

  return(
    <div className={styles.navBar}>
      <nav className={styles.mobileNavigation}>
        {openMenu ? closeIcon : hamburgerIcon}
        {openMenu && <NavLinks closeMenu={closeMenu} />}
      </nav>
      <nav className={styles.desktopNavigation}>
        <NavLinks />
      </nav>
    </div>
  )
};

export default Navigation;