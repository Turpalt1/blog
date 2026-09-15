import styles from "./Home.module.css";
import image from "../../assets/Image.png";
import defaultAvatar from "../../assets/default-avatar.png";
import Ads from "../../components/Ads/Ads";
import LatestPosts from "../../components/LatestPosts/LatestPosts";

const Home = () => {
  return (
    <main>
      <div className={styles.mainNews}>
        <img className={styles.mainNewsImg} src={image} alt="main news" />
        <div className={styles.mainNewsBlock}>
          <p className={styles.mainNewsTag}>Technology</p>
          <h1 className={styles.mainNewsTitle}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className={styles.mainNewsUser}>
            <div className={styles.mainNewsUserAvatar}>
              <img src={defaultAvatar} alt="Avatar" />
            </div>
            <p className={styles.mainNewsUserName}>Jason Francisco</p>
            <p className={styles.mainNewsUserDate}>August 20, 2022</p>
          </div>
        </div>
      </div>
      <Ads className={styles.ads} />
      <LatestPosts className={styles.latest} />
      <Ads className={styles.ads} />
    </main>
  );
};
export default Home;
