import PostCard from "../../components/PostCard/PostCard";
import { posts } from "../../tempdb";
import styles from "./Posts.module.css";
const Posts = () => {
  return (
    <main>
      <div className={styles.posts}>
        {posts.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </main>
  );
};
export default Posts;
