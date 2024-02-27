import styles from "./CarouselCard.module.scss";
import Stars from "./Stars";

import AvatarIcon from "../../../assets/avatar-icon.svg";
import MeatPhoto from "../../../assets/meat-bg.png";

const CarosuelCard = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <img src={MeatPhoto} className={styles.card__photo} />
      <div className={styles["card__text"]}>
        <span>{props.description}</span>
      </div>
      <div className={styles["profile"]}>
        <div className={styles["profile__details"]}>
          <img src={AvatarIcon} alt="" />
          <span>
            {props.name},
            <br />
            {props.date}
          </span>
        </div>
        <Stars stars={props.stars} className={styles["profile__stars"]} />
      </div>
    </div>
  );
};

export default CarosuelCard;
