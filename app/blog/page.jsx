import CardList from "@/Components/CardList/CardList";
import Menu from "@/Components/Menu/Menu";
import styles from "./blogPage.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>style blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
