import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import CarosuelCard from "./CarouselCard";
import styles from "./Carousel.module.scss";
import OpinionData from "../../data/OpinionData";

const opinions = OpinionData();

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className={styles.carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={styles["carousel__inner"]}
      >
        {opinions.map((opinion) => (
          <CarosuelCard
            key={opinion.name}
            description={opinion.description}
            name={opinion.name}
            date={opinion.date}
            stars={opinion.stars}
            className={styles["carousel__item"]}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
