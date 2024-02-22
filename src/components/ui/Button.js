import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { color } = props;

  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children} &nbsp;&nbsp;
      <ArrowIcon color={color} />
    </button>
  );
};

const ArrowIcon = ({ color }) => (
  <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8101 2L28.08 12.27L17.8101 22.54" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 12.27H27.29" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Button;
