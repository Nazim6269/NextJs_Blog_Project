import Comments from "@/Components/Comments/Comments";
import Menu from "@/Components/Menu/Menu";
import Image from "next/image";
import styles from "./singlePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/coding.png" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Nazim</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              deserunt aut placeat dolores atque ipsum soluta, esse maiores
              repudiandae tempora.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              deserunt aut placeat dolores atque ipsum soluta, esse maiores
              repudiandae tempora.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              deserunt aut placeat dolores atque ipsum soluta, esse maiores
              repudiandae tempora.
            </p>
          </div>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
