import styles from "./UserCard.module.css";

type User = {
  username: string;
  date: string;
  avatar: string;
  email: string;
};
const UserCard = ({ user }: { user: User }) => {
  return (
    <div className={styles.user}>
      <div className={styles.top}>
        <div className={styles.avatar}>
          <img src={user.avatar} alt="avatar" />
        </div>
        <div className="">
          <h2 className={styles.title}>{user.username}</h2>
          <h2 className={styles.subtitle}>{user.email}</h2>
        </div>
      </div>
      <p className={styles.date}>{user.date}</p>
      <button className={styles.block}>Заблокировать</button>
    </div>
  );
};
export default UserCard;
