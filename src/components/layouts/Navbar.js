import { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navbar.module.scss";

import Menu from "./Menu";
import LogoIcon from "../../assets/logo-icon.svg";

import {
  CartIcon,
  TikTokIcon,
  LoupeIcon,
  InstagramIcon,
  ProfileIcon,
  TwitterIcon,
  HamburgerIcon,
} from "../ui/Icons";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
  },
  exit: {
    scaleY: 0,
  },
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuToggle = () => {
    setMenu((prev) => !prev);
  };

  return (
    <Fragment>
      <AnimatePresence>
        {menu === true && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.modal}
          >
            <Menu />
          </motion.div>
        )}
      </AnimatePresence>
      <nav className={styles.navbar}>
        <div
          className={`${styles["navbar__social-icons--1"]} ${styles["navbar__item--1"]}`}
        >
          <a href="test">
            <TikTokIcon />
          </a>
          <a href="test">
            <TwitterIcon />
          </a>
          <a href="test">
            <InstagramIcon />
          </a>
        </div>
        <div
          className={`${styles["navbar__logo"]} ${styles["navbar__item--2"]}`}
        >
          <img src={LogoIcon} alt="" />
        </div>
        <div
          className={`${styles["navbar__social-icons--2"]} ${styles["navbar__item--3"]}`}
        >
          <a href="test">
            <ProfileIcon />
          </a>
          <a href="test">
            <LoupeIcon />
          </a>
          <a href="test">
            <CartIcon />
          </a>
        </div>
        <ul
          className={`${styles["navbar__navigation"]} ${styles["navbar__item--4"]}`}
        >
          <li>
            <a href="test">Home</a>
          </li>
          <li>
            <a href="test">Menu</a>
          </li>
          <li>
            <a href="test">Kebab Generator</a>
          </li>
          <li>
            <a href="test">Contact</a>
          </li>
        </ul>
        <div
          className={`${styles["navbar__item--5"]} ${styles["navbar__hamburger"]}`}
        >
          <button className={`${styles["navbar__btn"]}`} onClick={menuToggle}>
            <HamburgerIcon />
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
