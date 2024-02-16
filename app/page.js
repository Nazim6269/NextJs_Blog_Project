import CardList from "@/Components/CardList/CardList";
import CategoryList from "@/Components/CategoryList/CategoryList";
import Featured from "@/Components/Featured/Featured";
import Menu from "@/Components/Menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
