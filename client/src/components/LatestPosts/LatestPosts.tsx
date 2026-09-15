import type { HTMLAttributes } from "react";
import styles from "./LatestPosts.module.css";
import { posts } from "../../tempdb";
import defaultAvatar from "../../assets/default-avatar.png";
const LatestPosts = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`${styles.latest} ${className ?? ""}`}>
      <h1 className={styles.title}>Latest Post</h1>
      <div className={styles.posts}>
        {posts.map((post) => {
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
        })}
      </div>
      <div className={styles.button}>
        <a href="#">View All Post</a>
      </div>
    </div>
  );
};
export default LatestPosts;
