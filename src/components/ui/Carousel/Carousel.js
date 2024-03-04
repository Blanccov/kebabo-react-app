import { useReducer, useState } from "react";
import CarosuelCard from "./CarouselCard";
import styles from "./Carousel.module.scss";
import OpinionData from "../../../data/OpinionData";

import { LeftArrow, RightArrow } from "../Icons";

const Carousel = () => {
  const opinions = OpinionData();
  const initialState = {
    prevPrevIndex: opinions ? opinions.length - 2 : 0,
    prevIndex: opinions ? opinions.length - 1 : 0,
    currentIndex: 0,
    nextIndex: 1,
    nextNextIndex: 2,
  };

  const reducer = (state, action) => {
    const actionHandlers = {
      NEXT: () => ({
        prevPrevIndex: state.prevIndex,
        prevIndex: state.currentIndex,
        currentIndex: state.nextIndex,
        nextIndex: state.nextNextIndex,
        nextNextIndex:
          (state.nextNextIndex + 1) % (opinions ? opinions.length : 1),
      }),
      PREV: () => ({
        prevPrevIndex:
          (state.prevPrevIndex - 1 + (opinions ? opinions.length : 1)) %
          (opinions ? opinions.length : 1),
        prevIndex:
          (state.prevIndex - 1 + (opinions ? opinions.length : 1)) %
          (opinions ? opinions.length : 1),
        currentIndex: state.prevIndex,
        nextIndex: state.currentIndex,
        nextNextIndex: state.nextIndex,
      }),
    };

    const actionHandler = actionHandlers[action.type];
    if (!actionHandler) {
      throw new Error("Unsupported action type");
    }

    return actionHandler();
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [animate, setAnimate] = useState(null);

  const next = () => {
    setAnimate(true);
    setTimeout(() => {
      dispatch({ type: "NEXT" });
    }, 500);

    setTimeout(() => {
      setAnimate(null);
    }, 1000);
  };

  const prev = () => {
    setAnimate(false);

    setTimeout(() => {
      dispatch({ type: "PREV" });
    }, 500);

    setTimeout(() => {
      setAnimate(null);
    }, 1000);
  };

  return (
    <div className={styles.carousel}>
      {opinions && (
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
            key={1}
            description={opinions[state.prevPrevIndex].description}
            name={opinions[state.prevPrevIndex].name}
            date={opinions[state.prevPrevIndex].date}
            stars={opinions[state.prevPrevIndex].stars}
            className={styles["carousel__item"]}
          />
          <CarosuelCard
            key={2}
            description={opinions[state.prevIndex].description}
            name={opinions[state.prevIndex].name}
            date={opinions[state.prevIndex].date}
            stars={opinions[state.prevIndex].stars}
            className={styles["carousel__item"]}
          />
          <CarosuelCard
            key={3}
            description={opinions[state.currentIndex].description}
            name={opinions[state.currentIndex].name}
            date={opinions[state.currentIndex].date}
            stars={opinions[state.currentIndex].stars}
            className={`${styles["carousel__item"]} ${styles["carousel__item--current"]}`}
          />
          <CarosuelCard
            key={4}
            description={opinions[state.nextIndex].description}
            name={opinions[state.nextIndex].name}
            date={opinions[state.nextIndex].date}
            stars={opinions[state.nextIndex].stars}
            className={styles["carousel__item"]}
          />
          <CarosuelCard
            key={5}
            description={opinions[state.nextNextIndex].description}
            name={opinions[state.nextNextIndex].name}
            date={opinions[state.nextNextIndex].date}
            stars={opinions[state.nextNextIndex].stars}
            className={styles["carousel__item"]}
          />
        </div>
      )}

      <div className={styles.carousel__buttons}>
        <button onClick={prev} disabled={animate !== null}>
          <LeftArrow />
        </button>
        <button onClick={next} disabled={animate !== null}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
