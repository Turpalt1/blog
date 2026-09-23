import styles from "./UI.module.css";
import iconSunny from "../assets/sunny.png";
const CheckboxTheme = ({ ...props }) => {
  return (
    <div className={styles.theme}>
      <div className={styles.themeSwitch}>
        <img src={iconSunny} alt="theme" />
      </div>
      <input {...props} type="checkbox" />
    </div>
  );
};
export default CheckboxTheme;
