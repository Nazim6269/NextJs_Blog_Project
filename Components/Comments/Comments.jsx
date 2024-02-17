import Image from "next/image";
import Link from "next/link";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="write a comment ..."
          ></textarea>
          <button className={styles.button}>send</button>
        </div>
      ) : (
        <Link href="/">Login to write comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>NazimUddin</span>
              <span className={styles.date}>1.2.2024</span>
            </div>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              consectetur tempore expedita sed eius aliquid!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
