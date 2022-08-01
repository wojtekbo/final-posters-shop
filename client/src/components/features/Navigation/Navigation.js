import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);

  function toggleMobileMenu() {
    setMenuIsActive(!menuIsActive);
    setHamburgerIsActive(!hamburgerIsActive);
  }

  return (
    <div className={styles.Navigation}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.nav_logo}>
            <img className={styles.logo} alt="logo" src="/img/logo/AoH-logo.png" />
          </Link>

          <ul className={menuIsActive ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`}>
            <li className={styles.nav_item}>
              <NavLink to="/" className={styles.nav_link}>
                Home
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink to="/products-list" className={styles.nav_link}>
                Produkty
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink to="/shopping-cart" className={styles.nav_link}>
                Koszyk <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
          </ul>
          <div
            className={menuIsActive ? `${styles.hamburger} ${styles.active}` : `${styles.hamburger}`}
            onClick={() => {
              toggleMobileMenu();
            }}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
