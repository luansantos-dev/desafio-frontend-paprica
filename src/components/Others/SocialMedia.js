import React from "react";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      <p>Don't Miss Our Promo On</p>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/agenciapaprica/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/AgenciaPaprica/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/agenciapaprica"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
