import styles from "./ErrorPage.module.css";
import image404 from "../../assets/404.png";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container`}>
        <div className={styles.block}>
          <div className={styles.errorImage}>
            <img src={image404} alt="404 page not found" />
          </div>
          <h2 className={styles.title}>Looks like you’ve got lost….</h2>
          <NavLink to="/" className={styles.btn}>
            Back to Dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;