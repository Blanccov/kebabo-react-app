import { useState } from "react";

import CarosuelCard from "./CarouselCard";
import styles from "./Carousel.module.scss";
import OpinionData from "../../data/OpinionData";

import LeftArrow from "../../assets/left-arrow-icon.svg";
import RightArrow from "../../assets/right-arrow-icon.svg";

const opinions = OpinionData();

const Carousel = () => {
  const [prevIndex, setPrevIndex] = useState(opinions.length - 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [animate, setAnimate] = useState(null);

  const next = () => {
    setAnimate(true);
    setTimeout(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % opinions.length);
    }, 500);

    setTimeout(() => {
      setAnimate(null);
    }, 1000);
  };

  const prev = () => {
    setAnimate(false);

    setTimeout(() => {
      setNextIndex(currentIndex);
      setCurrentIndex(prevIndex);
      setPrevIndex((prevIndex - 1 + opinions.length) % opinions.length);
    }, 500);

    setTimeout(() => {
      setAnimate(null);
    }, 1000);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles["carousel__inner"]} ${
          animate === false
            ? styles["carousel__inner--animate-left"]
            : animate === true
            ? styles["carousel__inner--animate-right"]
            : ""
        }`}
      >
        <CarosuelCard
          key="10"
          description={opinions[prevIndex].description}
          name={opinions[prevIndex].name}
          date={opinions[prevIndex].date}
          stars={opinions[prevIndex].stars}
          className={styles["carousel__item"]}
        />
        <CarosuelCard
          key={opinions[prevIndex].name}
          description={opinions[prevIndex].description}
          name={opinions[prevIndex].name}
          date={opinions[prevIndex].date}
          stars={opinions[prevIndex].stars}
          className={styles["carousel__item"]}
        />
        <CarosuelCard
          key={opinions[currentIndex].name}
          description={opinions[currentIndex].description}
          name={opinions[currentIndex].name}
          date={opinions[currentIndex].date}
          stars={opinions[currentIndex].stars}
          className={`${styles["carousel__item"]} ${styles["carousel__item--current"]}`}
        />
        <CarosuelCard
          key={opinions[nextIndex].name}
          description={opinions[nextIndex].description}
          name={opinions[nextIndex].name}
          date={opinions[nextIndex].date}
          stars={opinions[nextIndex].stars}
          className={styles["carousel__item"]}
        />
        <CarosuelCard
          key="11"
          description={opinions[nextIndex].description}
          name={opinions[nextIndex].name}
          date={opinions[nextIndex].date}
          stars={opinions[nextIndex].stars}
          className={styles["carousel__item"]}
        />
      </div>
      <div className={styles.carousel__buttons}>
        <button onClick={prev} disabled={animate !== null}>
          <img src={LeftArrow} alt="Left Arrow" />
        </button>
        <button onClick={next} disabled={animate !== null}>
          <img src={RightArrow} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
