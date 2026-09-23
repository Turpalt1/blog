import styles from "./CreatePost.module.css";
import Tiptap from "../../components/Tiptap/Tiptap";
const CreatePost = () => {
  return (
    <main>
      <form action="#" className={styles.form}>
        <h2 className={styles.title}>Заголовок</h2>
        <input type="text" />
        <h2 className={styles.title}>Контент</h2>
        <div className="card">
          <Tiptap />
        </div>
        <button>Создать пост</button>
      </form>
    </main>
  );
};
export default CreatePost;
