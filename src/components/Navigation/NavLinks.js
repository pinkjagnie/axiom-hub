import React from "react";
import { Link } from 'react-router-dom';

import {motion} from "framer-motion";

import styles from "./navigation.module.css";

const NavLinks = (props) => {

  const animateFrom = {opacity: 0, y: -40};
  const animateTo = {opacity: 1, y: 0};

  return(
    <ul>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={() => props.closeMenu()}>
        <Link to="/" className={styles.link}>Home</Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={() => props.closeMenu()}>
        <Link to="/reports" className={styles.link}>Reports</Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} onClick={() =>  props.closeMenu()}>
        <Link to='/about' className={styles.link}>About</Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={() => props.closeMenu()}>
        <a href="https://blog.axiomos.pl/" target="_blank" rel="noopener noreferrer" className={styles.link}>Blog</a>
      </motion.li>
    </ul>
  )
};

export default NavLinks;