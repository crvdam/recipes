import { getCategories } from "@/app/lib/recipesApi";
import styles from "./categoriesOverview.module.css";
import Tile from "@/app/components/Tile/Tile";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div>
      <main>
        <ul className={styles.list}>
          {categories.categories.map((category) => (
            <Tile
              key={category.idCategory}
              id={category.idCategory}
              name={category.strCategory}
              imageUrl={category.strCategoryThumb}
              linkUrl={`/categoriesOverview/${category.strCategory}`}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
