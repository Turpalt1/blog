import type { HTMLAttributes } from "react";
import styles from "./LatestPosts.module.css";
import { posts } from "../../tempdb";
import PostCard from "../PostCard/PostCard";
const LatestPosts = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`${styles.latest} ${className ?? ""}`}>
      <h1 className={styles.title}>Latest Post</h1>
      <div className={styles.posts}>
        {posts.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
      <div className={styles.button}>
        <a href="#">View All Post</a>
      </div>
    </div>
  );
};
export default LatestPosts;
