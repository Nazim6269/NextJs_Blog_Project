import CardList from "@/Components/CardList/CardList";
import CategoryList from "@/Components/CategoryList/CategoryList";
import Featured from "@/Components/Featured/Featured";
import Menu from "@/Components/Menu/Menu";
import styles from "./homePage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
