import React from "react";
import styles from "./Stars.module.scss";
const StarIcon = ({ color }) => (
  <svg
    viewBox="0 0 36 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.star}
  >
    <path
      d="M18.0529 25.2538L8.41012 29.9637L10.2561 19.9854L2.45215 12.9137L13.2315 11.4604L18.0529 2.37695L22.8815 11.4604L33.6609 12.9137L25.8569 19.9854L27.7029 29.9637L18.0529 25.2538Z"
      fill={color}
      stroke="#161719"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Stars = (props) => {
  const n = props.stars;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= n) {
      stars.push(<StarIcon key={i} color="#161719" />);
    } else {
      stars.push(<StarIcon key={i} color="none" />);
    }
  }

  return <div className={props.className}>{stars}</div>;
};

export default Stars;
