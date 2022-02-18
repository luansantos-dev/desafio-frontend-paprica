import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import menu from "../../assets/menu.svg";
import MediaMobile from "../Hooks/MediaMobile";

const Header = () => {
  const mobile = MediaMobile("(max-width: 1000px)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.logo}>
            <img src={logo} alt="Isso é uma logo" width="173" height="34"></img>
          </div>

          <nav
            className={`${mobile ? styles.menuMobile : styles.header__menu} ${
              mobileMenu && styles.menuMobileActive
            }`}
          >
            <ul>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu">New Menu</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>

              <li>
                <NavLink to="/course">Main Course</NavLink>
              </li>
            </ul>
            <div className={styles.search}>
              <input type="search" placeholder="Search"></input>
              <button></button>
            </div>
          </nav>
          {mobile && (
            <button
              arial-label="menu"
              className={`${styles.buttonMobile}`}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <img src={menu} alt="teste"></img>
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
