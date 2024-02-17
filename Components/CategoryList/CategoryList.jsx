import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/" className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/travel.png"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/" className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/fashion.png"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/" className={`${styles.category} ${styles.food}`}>
          <Image
            src="/food.png"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/" className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/coding.png"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/" className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/culture.png"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
