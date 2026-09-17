import type { HTMLAttributes } from "react";
import logo from "../../assets/logo.png";
import CheckboxTheme from "../../UI/CheckboxTheme";
import InputSearch from "../../UI/InputSearch";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <header className={`${styles.header} ${className ?? ""}`}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <p>
          Meta<strong>Blog</strong>
        </p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.li}>
            <NavLink to="/" className={styles.link}>
              Home
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/blog" className={styles.link}>
              Blog
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/contact" className={styles.link}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.right}>
        <NavLink to="/auth/login" className={styles.btn}>
          Войти
        </NavLink>
        <CheckboxTheme />
      </div>
    </header>
  );
};
export default Header;
