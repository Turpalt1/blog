import type { HTMLAttributes } from "react";
import logo from "../../assets/logo.png";
import CheckboxTheme from "../../UI/CheckboxTheme";
import InputSearch from "../../UI/InputSearch";
import styles from "./Header.module.css";

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
            <a className={styles.link} href="#">
              Home
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="#">
              Blog
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.right}>
        <InputSearch />
        <CheckboxTheme />
      </div>
    </header>
  );
};
export default Header;
