import styles from "./CarouselCard.module.scss";
import Stars from "./Stars";

import AvatarIcon from "../../assets/avatar-icon.svg";
import MeatPhoto from "../../assets/meat-bg.png";

const CarosuelCard = () => {
  return (
    <div className={styles.card}>
        <img src={MeatPhoto} className={styles.card__photo} />
      <div className={styles["card__text"]}>
        <span>
          I absolutely love the kebab restaurant in our neighborhood! The aroma
          that wafts through the air as you approach is simply irresistible. The
          variety of kebabs they offer is impressive, and each one is bursting
          with flavor.
        </span>
      </div>
      <div className={styles["profile"]}>
        <div className={styles["profile__details"]}>
          <img src={AvatarIcon} alt="" />
          <span>
            John Doe,
            <br />3 days ago
          </span>
        </div>
        <Stars stars="4" className={styles["profile__stars"]} />
      </div>
    </div>
  );
};

export default CarosuelCard;
