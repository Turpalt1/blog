import PostCard from "../../components/PostCard/PostCard";
import { posts } from "../../tempdb";
import styles from "./Blog.module.css";
import InputSearch from "../../UI/InputSearch";
const Blog = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.options}>
          <div className={styles.search}>
            <InputSearch />
            <button>
              Поиск
            </button>
          </div>
        </div>
        <div className={styles.posts}>
          {posts.map((post) => {
            return <PostCard post={post} />;
          })}
        </div>
      </div>
    </main>
  );
};
export default Blog;
