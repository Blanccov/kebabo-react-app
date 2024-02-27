import React from "react";
import styles from "./Footer.module.scss";

import RaccoIcon from "../../assets/racco-icon.svg";
import {
  TikTokIcon,
  InstagramIcon,
  TwitterIcon,
  SendIcon,
  PhoneIcon,
  PinIcon,
} from "../ui/Icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__item} ${styles["footer__item--1"]}`}>
        <div className={styles["footer__square"]}>
          <div className={styles["footer__square--1"]}>
            <PhoneIcon />
            Call Us <br />
            987-421-383
          </div>
          <div className={styles["footer__square--2"]}>
            <PinIcon />
            Address <br />
            Rejtana 48, Rzeszów
          </div>
          <div className={styles["footer__square--3"]}>
            <a href="test">
              <TwitterIcon />
            </a>
            <a href="test">
              <InstagramIcon />
            </a>
            <a href="test">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.footer__item} ${styles["footer__item--2"]}`}>
        <b>Send your feedback</b> <br />
        <span className={styles["text-small"]}>
          Send your impression ofter visting one of our kebabs!
        </span>
      </div>
      <div className={`${styles.footer__item} ${styles["footer__item--3"]}`}>
        <div className={styles["essa"]}>
          <input
            className={styles["footer__input"]}
            type="text"
            placeholder="E-mail"
          />
          <button className={styles["btn"]}>
            <SendIcon />
          </button>
        </div>
      </div>
      <div className={`${styles.footer__item} ${styles["footer__item--4"]}`}>
        <img src={RaccoIcon} alt="" />
      </div>
      <div className={`${styles.footer__item} ${styles["footer__item--5"]}`}>
        <span>
          “Kebabs: Not just a meal, but a celebration of flavors. Each bite
          takes you on an exquisite journey, where spices dance and traditions
          shine.” ~Chris Duck
        </span>
      </div>
      <div className={`${styles.footer__item} ${styles["footer__item--6"]}`}>
        <span> ©2023 CopyRight. All rights reserved </span>
      </div>
    </footer>
  );
};

export default Footer;
