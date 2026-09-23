import defaultAvatar from "../../assets/default-avatar.png";
import styles from "./Profile.module.css";
const Profile = () => {
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
        </div>
      </div>
    </main>
  );
};
export default Profile;
