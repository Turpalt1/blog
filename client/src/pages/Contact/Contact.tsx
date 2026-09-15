import defaultAvatar from "../../assets/default-avatar.png";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import styles from "./Contact.module.css";
import iconFacebook from "../../assets/logo-facebook.png";
import iconInstagram from "../../assets/logo-instagram.png";
import iconTwitter from "../../assets/logo-twitter.png";
import iconYoutube from "../../assets/logo-youtube.png";

const Contact = () => {
  return (
    <main>
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.user}>
            <div className={styles.userAvatar}>
              <img src={defaultAvatar} alt="Avatar" />
            </div>
            <div className={styles.userText}>
              <p className={styles.userName}>Jonathan Doe</p>
              <p className={styles.userWork}>Collaborator & Editor</p>
            </div>
          </div>
          <p className={styles.description}>
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
          <ul className={styles.list}>
            <li>
              <a href="#">
                <img src={iconFacebook} alt="link facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconTwitter} alt="link twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconInstagram} alt="link instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconYoutube} alt="link youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <LatestPosts className={styles.latest} />
    </main>
  );
};
export default Contact;
