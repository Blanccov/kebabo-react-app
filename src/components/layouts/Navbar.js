import React from "react";
import styles from "./Navbar.module.scss";

import TikTokIcon from "../../assets/tiktok-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import LoupeIcon from "../../assets/loupe-icon.svg";
import CartIcon from "../../assets/cart-icon.svg";
import LogoIcon from "../../assets/logo-icon.svg";
import HamburgerIcon from "../../assets/hamburger-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles["navbar__social-icons--1"]} ${styles["navbar__item--1"]}`}
      >
        <a href="test">
          <img src={TikTokIcon} alt="" />
        </a>
        <a href="test">
          <img src={TwitterIcon} alt="" />
        </a>
        <a href="test">
          <img src={InstagramIcon} alt="" />
        </a>
      </div>
      <div className={`${styles["navbar__logo"]} ${styles["navbar__item--2"]}`}>
        <img src={LogoIcon} alt="" />
      </div>
      <div
        className={`${styles["navbar__social-icons--2"]} ${styles["navbar__item--3"]}`}
      >
        <a href="test">
          <img src={ProfileIcon} alt="" />
        </a>
        <a href="test">
          <img src={LoupeIcon} alt="" />
        </a>
        <a href="test">
          <img src={CartIcon} alt="" />
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
      <div className={`${styles["navbar__item--5"]} ${styles["navbar__hamburger"]}`}>
        <button className={`${styles["navbar__btn"]}`}>
          <img src={HamburgerIcon} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
