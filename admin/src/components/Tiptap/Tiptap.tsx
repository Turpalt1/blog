import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { MenuBar } from "./MenuBar";
import styles from "./TiptapInput.module.css";
const Tiptap = () => {
  const editor = useEditor({
    extensions: [TextStyleKit, StarterKit], // define your extension array
    content: ``, // initial content
  });
  return (
    <>
      {editor && <MenuBar editor={editor} />}
      <EditorContent
        className={styles.tiptapInput}
        placeholder="Enter text"
        editor={editor}
      />
    </>
  );
};
export default Tiptap;
