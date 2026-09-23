import type { HTMLAttributes } from "react";
import logo from "../../assets/logo.png";
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
              Create Post
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/users" className={styles.link}>
              Users
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/posts" className={styles.link}>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.right}>
        <NavLink to="/auth/login" className={styles.btn}>
          Войти
        </NavLink>
        {/* <CheckboxTheme /> */}
      </div>
    </header>
  );
};
export default Header;
