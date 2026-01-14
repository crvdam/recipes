import { getCategories } from "@/app/lib/recipesApi";
import styles from "./categoriesOverview.module.css";
import Tile from "@/app/components/Tile/Tile";
import FeaturedItem from "@/app/components/FeaturedItem/FeaturedItem";

export default async function Categories() {
  const categories = await getCategories();
  const featuredCategory = categories.categories[0];

  return (
    <div>
      <main>
        <FeaturedItem
          key={featuredCategory.idCategory}
          id={featuredCategory.idCategory}
          name={featuredCategory.strCategory}
          imageUrl={featuredCategory.strCategoryThumb}
          linkUrl={`/categoriesOverview/${featuredCategory.strCategory}`}
          description={featuredCategory.strCategoryDescription}
        ></FeaturedItem>
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
