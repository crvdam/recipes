import { getCategories } from "@/app/lib/recipesApi"
import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div >
      <main>
          
        <ul className={styles.category_list} >
          {categories.categories.map((category) => (
            <li className={styles.list_item} key={category.idCategory}>
                <Link href={`/categories/${category.strCategory}`}>
                  <Image src={category.strCategoryThumb}
                    alt={category.strCategory + " category"} 
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
