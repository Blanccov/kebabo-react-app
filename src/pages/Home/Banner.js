import styles from "./Banner.module.scss";

import ChickenIcon from "../../assets/chicken-icon.svg";
import SheepIcon from "../../assets/sheep-icon.svg";
import Falafel from "../../assets/falafel-icon.svg";

const Banner = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles["banner__item"]} ${styles["banner__item--1"]}`}>
        <img src={ChickenIcon} alt="" />
        <div className={`${styles.banner__text}`}>
          <h2>Chicken Shawarma</h2>
          <span>
            Succulent slices of marinated chicken, slow-roasted on a vertical
            rotisserie, served with garlic sauce and pickles.
          </span>
        </div>
      </div>
      <div className={`${styles["banner__item"]} ${styles["banner__item--2"]}`}>
        <img src={SheepIcon} alt="" />
        <div className={`${styles.banner__text}`}>
          <h2>Lamb Kofta Kebab</h2>
          <span>
            Grilled skewers of minced lamb mixed with herbs and spices,
            accompanied by tzatziki sauce and fresh salad.
          </span>
        </div>
      </div>
      <div className={`${styles["banner__item"]} ${styles["banner__item--3"]}`}>
        <img src={Falafel} alt="" />
        <div className={`${styles.banner__text}`}>
          <h2>Falafel Wrap</h2>
          <span>
            Crispy chickpea patties wrapped in a soft flatbread with tahini
            sauce, tomatoes, and crisp lettuce.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
