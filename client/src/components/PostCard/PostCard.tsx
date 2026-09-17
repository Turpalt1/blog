import styles from "./PostCard.module.css";
import defaultAvatar from "../../assets/default-avatar.png";

type Post = {
  post: {
    tag: string;
    title: string;
    text: string;
    username: string;
    date: string;
    image: string;
  };
};
const PostCard = ({ post }: Post) => {
  return (
    <div className={styles.post}>
      <div className={styles.postImg}>
        <img src={post.image} alt="image" />
      </div>
      <p className={styles.postTag}>{post.tag}</p>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <div className={styles.postUser}>
        <div className={styles.postUserAvatar}>
          <img src={defaultAvatar} alt="Avatar" />
        </div>
        <p className={styles.postUserName}>{post.username}</p>
        <p className={styles.postUserDate}>{post.date}</p>
      </div>
    </div>
  );
};
export default PostCard;
