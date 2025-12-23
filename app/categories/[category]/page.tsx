import { getCategory } from "@/app/lib/recipesApi"
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function Category({ params }) {
  const { category } = await params;

  const data = await getCategory(category);

  return (
    <div >
      <main>
          <ul className={styles.category_list}>
            {data.meals.map((meal) => (
              <li key={meal.idMeal} className={styles.list_item}>
                <Link href={`/recipes/${meal.strMeal}`}>
                  <Image src={meal.strMealThumb}
                    alt={meal.strMeal + " category"} 
                    width={320}
                    height={200}
                    loading="eager"
                    className="">
                  </Image>

                {category.strCategory}
              </Link>
              </li>
            ))}
          </ul>

      </main>
    </div>
  );
}
