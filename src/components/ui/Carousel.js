import CarosuelCard from "./CarouselCard";
import styles from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles["carousel__items"]}>
        <CarosuelCard />
      </div>
    </div>
  );
};

export default Carousel;
