import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { getRandomMeal } from "./lib/recipesApi";

export default async function Home() {
  const meal = await getRandomMeal();
  const randomMeals = [];
  for (let i = 0; i < 5; i++) {
    randomMeals.push(meal);
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.hero}>
          <section className={styles.featured_recipe}>
            <Image
              src={randomMeals[0].meals[0].strMealThumb}
              alt={randomMeals[0].meals[0].strMeal}
              width={500}
              height={500}
              loading="eager"
              className={styles.featured_recipe_image}
            ></Image>
            <div className={styles.featured_recipe_info_wrapper}>
              <p className={styles.super_title_big}>FEATURED MEAL</p>
              <h3>{randomMeals[0].meals[0].strMeal}</h3>
              <button className={styles.button_to_recipe + " button_primary"}>
                To recipe
              </button>
            </div>
          </section>

          <section className={styles.latest_recipes}>
            <h3>The Latest</h3>
            <ul className={styles.latest_recipes_list}>
              {randomMeals.slice(1).map((meal, index) => (
                <li key={index} className={styles.latest_recipes_list_item}>
                  <Image
                    src={meal.meals[0].strMealThumb}
                    alt={meal.meals[0].strMeal}
                    width={100}
                    height={100}
                    loading="eager"
                    className={styles.latest_recipe_image}
                  ></Image>
                  <div>
                    <span className={styles.super_title_small}>
                      {meal.meals[0].strCategory} |{" "}
                    </span>
                    <span className={styles.super_title_small}>
                      {meal.meals[0].strArea}
                    </span>
                    <h5>{meal.meals[0].strMeal}</h5>
                  </div>
                </li>
              ))}
              <button className={styles.button_see_more + " button_primary"}>
                See more
              </button>
            </ul>
          </section>
        </div>

        <section className={styles.trending_container}>
          <div className={styles.trending_wrapper}>
            <h3>Trending Now</h3>
            <div className={styles.trending_list}>
              <div className={styles.trending_item}>
                <Image
                  src={randomMeals[0].meals[0].strMealThumb}
                  alt={randomMeals[0].meals[0].strMeal}
                  width={180}
                  height={180}
                  loading="lazy"
                  className={styles.trending_item_image}
                ></Image>
                <div className={styles.trending_item_info}>
                  <p className={styles.super_title_small}>Super Text</p>
                  <h3>Trending description text</h3>
                </div>
              </div>
              <div className={styles.trending_item}>
                <Image
                  src={randomMeals[0].meals[0].strMealThumb}
                  alt={randomMeals[0].meals[0].strMeal}
                  width={180}
                  height={180}
                  loading="lazy"
                  className={styles.trending_item_image}
                ></Image>
                <div className={styles.trending_item_info}>
                  <p className={styles.super_title_small}>Super Text</p>
                  <h3>Trending description text</h3>
                </div>
              </div>
              <div className={styles.trending_item}>
                <Image
                  src={randomMeals[0].meals[0].strMealThumb}
                  alt={randomMeals[0].meals[0].strMeal}
                  width={180}
                  height={180}
                  loading="lazy"
                  className={styles.trending_item_image}
                ></Image>
                <div className={styles.trending_item_info}>
                  <p className={styles.super_title_small}>Super Text</p>
                  <h3>Trending description text</h3>
                </div>
              </div>
              <div className={styles.trending_item}>
                <Image
                  src={randomMeals[0].meals[0].strMealThumb}
                  alt={randomMeals[0].meals[0].strMeal}
                  width={180}
                  height={180}
                  loading="lazy"
                  className={styles.trending_item_image}
                ></Image>
                <div className={styles.trending_item_info}>
                  <p className={styles.super_title_small}>Super Text</p>
                  <h3>Trending description text</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.fullwidth_image_with_textbox}>
          <Image
            src={randomMeals[0].meals[0].strMealThumb}
            alt={randomMeals[0].meals[0].strMeal}
            width={1920}
            height={1080}
            loading="lazy"
            className={styles.fullwidth_image}
          ></Image>
          <div className={styles.text_wrapper}>
            <p className={styles.super_title_big}>Super text</p>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              excepturi temporibus hic repellat praesentium minus eligendi quia
              neque, expedita doloremque.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
