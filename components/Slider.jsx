import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { sliderData } from "../db";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Handle Arrow
  const handleArrow = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? 2 : slideIndex - 1);
    }
    if (direction === "right") {
      setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => handleArrow("left")}
        className={styles.arrowContainer}
        style={{ left: "40px", transform: "rotate(-135deg)" }}
      ></div>
      <section
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
        className={styles.wrapper}
      >
        {sliderData.map((slide) => (
          <div key={slide._id} className={styles.slide}>
            <div className={styles.infoContainer}>
              <h2 className={styles.desc}>{slide.desc}</h2>
              <h1 className={styles.title}>{slide.title}</h1>
              <div className={styles.order}>
                <div>50% OFF</div>
                <div>ORDER NOW</div>
                <div>LAMA DEV</div>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={400}
                height={400}
              />
            </div>
          </div>
        ))}
      </section>
      <div
        onClick={() => handleArrow("right")}
        className={styles.arrowContainer}
        style={{ right: "40px", transform: "rotate(45deg)" }}
      ></div>
    </div>
  );
};

export default Slider;
