import React from "react";
import styles from "./Footer.module.css";

import About from "../Others/About";
import SocialMedia from "../Others/SocialMedia";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <About />
        <SocialMedia />
      </footer>
    </>
  );
};

export default Footer;
