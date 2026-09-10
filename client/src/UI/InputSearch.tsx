import styles from "./UI.module.css";
import iconSearch from "../assets/search-outline.png";
const InputSearch = ({ ...props }) => {
  return (
    <div className={styles.search}>
      <img src={iconSearch} alt="" />
      <input {...props} placeholder="Search" type="text" />
    </div>
  );
};
export default InputSearch;
