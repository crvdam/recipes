import { getMealsInCategory } from "@/app/lib/recipesApi";
import Tile from "@/app/components/Tile/Tile";
import styles from "./category.module.css";

export default async function Category({ params }) {
  const { category } = await params;
  const data = await getMealsInCategory(category);

  return (
    <div>
      <main>
        <ul className={styles.list}>
          {data.meals.map((meal) => (
            <Tile
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              imageUrl={meal.strMealThumb}
              linkUrl={`/categories/${meal.strMeal}`}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
