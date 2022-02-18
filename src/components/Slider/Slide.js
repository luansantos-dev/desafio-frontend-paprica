import { useEffect, useRef, useState } from "react";
import styles from "./Slide.module.css";
import imgBG from "../../assets/burg1.png";

const Slide = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function prev() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  function next() {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
  }

  useEffect(() => {
    const autoplay = setTimeout(() => {
      prev();
      next();
    }, 4000);
    return () => clearTimeout(autoplay);
  });

  return (
    <div className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.item} key={index}>
            <picture>
              <img
                src={slide.img}
                alt={slide.text}
                className={styles.img}
              ></img>
            </picture>
            <p className={styles.title}>
              {`${slide.text} `}
              <span>Burger</span>
            </p>
          </div>
        ))}
      </div>
      <img src={imgBG} alt="imagem de hamburger" className={styles.imgBG}></img>
      <nav className={styles.navegation}>
        <button onClick={prev}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button onClick={next}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </nav>
    </div>
  );
};

export default Slide;
