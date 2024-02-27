import React, { Fragment } from "react";

import styles from "./Menu.module.scss";

const menuLinks = [
    { title: "Home", href: "/"},
    { title: "Menu", href: "/"},
    { title: "Kebab Generator", href: "/"},
    { title: "Contact", href: "/"},
    { title: "Cart", href: "/"},
    { title: "My Orders", href: "/"},
    { title: "My informations", href: "/"},
    { title: "Logout", href: "/"},
]

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <h1 className={styles.modal__name}>Hi, {props.name}!</h1>
      {menuLinks.map((link, index) => (
        <a key={index} href={link.href} className={styles.modal__item}>{link.title}</a>
      ))}
    </div>
  );
};

const Menu = (props) => {
  return (
    <Fragment>
        <ModalOverlay name="Tadeusz" />
        <Backdrop />
    </Fragment>
  );
};

export default Menu;
