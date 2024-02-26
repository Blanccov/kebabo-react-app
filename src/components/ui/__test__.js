import { useState } from "react";

import { animate, motion, transform } from "framer-motion";

import CarosuelCard from "./CarouselCard";
import styles from "./Carousel.module.scss";
import OpinionData from "../../data/OpinionData";

import LeftArrow from "../../assets/left-arrow-icon.svg";
import RightArrow from "../../assets/right-arrow-icon.svg";

const opinions = OpinionData();

const variants = {
  animate: { x: "-50%" },
  transition: { type: "spring", stiffness: 120, damping: 20 },
};
const backVariants = {
  animate: { x: "50%" },
  transition: { type: "spring", stiffness: 120, damping: 20 },
};

const Carousel = () => {
  const [prevIndex, setPrevIndex] = useState(opinions.length - 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [anime, setAnime] = useState(variants);

  const next = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex(nextIndex);
    setNextIndex((nextIndex + 1) % opinions.length);
    setAnime(variants);
  };

  const prev = () => {
    setTimeout(() => {
      setNextIndex(currentIndex);
      setCurrentIndex(prevIndex);
      setPrevIndex((prevIndex - 1 + opinions.length) % opinions.length);
    }, 100);
    setAnime(backVariants);
  };

  return (
    <div className={styles.carousel}>
      <motion.div
        animate={anime.animate}
        transition={anime.transition}
        className={styles["carousel__inner"]}
        onAnimationComplete={() => {
          setAnime({
            animate: { x: 0 },
            transition: { duration: 0 },
          });
        }}
      >
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
      </motion.div>
      <div className={styles.carousel__buttons}>
        <button onClick={prev}>
          <img src={LeftArrow} />
        </button>
        <button onClick={next}>
          <img src={RightArrow} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
