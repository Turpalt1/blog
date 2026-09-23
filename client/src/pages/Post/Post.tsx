import defaultAvatar from "../../assets/default-avatar.png";
import postMainImage from "../../assets/postMainImage.png";
import postImage from "../../assets/postImage.png";

import styles from "./Post.module.css";
const Post = () => {
  return (
    <main className={styles.main}>
      <div className={styles.post}>
        <p className={styles.postTag}>Technology</p>
        <h1 className={styles.postMainTitle}>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className={styles.postUser}>
          <div className={styles.postUserAvatar}>
            <img src={defaultAvatar} alt="Avatar" />
          </div>
          <p className={styles.postUserName}>Jason Francisco</p>
          <p className={styles.postUserDate}>August 20, 2022</p>
        </div>
        <div className={styles.postMainImg}>
          <img src={postMainImage} alt="Main Image" />
        </div>
        <p className={styles.postParagraph}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
        </p>
        <p className={styles.postParagraph}>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <h2 className={styles.postTitle}>Research Your Destination</h2>
        <p className={styles.postParagraph}>
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p className={styles.postParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <p className={styles.postQuote}>
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </p>
        <div className={styles.postImage}>
          <img src={postImage} alt="postImage" />
        </div>
      </div>
    </main>
  );
};
export default Post;
