import React from "react";
import img from "../assets/burger.png";
import styles from "./HomeInitial.module.css";
import Slide from "../components/Slider/Slide";

const slides = [
  {
    text: "Spicy Beef",
    img: img,
  },
  {
    text: "The Best",
    img: img,
  },
];

const HomeInitial = () => {
  return (
    <section
      className={`${styles.hero} animePages `}
      area-label="Conteúdo Inicial"
    >
      <div className={styles.hero__container}>
        <div className={styles.hero__information}>
          <span>OPEN TODAY FOR GREAT FOOD</span>
          <h1>
            You Can Make Your Own <span>Burger</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <Slide slides={slides} />
      </div>
    </section>
  );
};

export default HomeInitial;
