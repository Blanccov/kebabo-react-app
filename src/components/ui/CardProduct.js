import React from "react";
import styles from "./CardProduct.module.scss";

const CardProduct = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <img src={props.src} alt={props.name} />
      <div className={styles.card__text}>
        <h2>{props.name}</h2>
        <h3>${props.price}</h3>
      </div>
    </div>
  );
};

export default CardProduct;
