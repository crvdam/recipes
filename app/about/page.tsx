import styles from "./about.module.css";
import theMealDbImage from "@/public/mealdbicon.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1>About</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

        <div className={styles.mealDb_wrapper}>
          <h3>Made with TheMealDB API</h3>
          <Image
            src={theMealDbImage}
            alt="Welcome to Recipes"
            width={1536}
            height={1024}
            loading="eager"
            className={styles.themealdb_image}
          ></Image>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          esse est voluptate quos ipsa id eveniet modi distinctio, ratione
          explicabo deleniti non temporibus voluptas perspiciatis adipisci quam
          nostrum in alias illum molestias facere possimus eius. Corrupti quia
          magni est sed necessitatibus, sit, tenetur nostrum quae natus iste
          atque neque. Nostrum!
        </p>
      </main>
    </div>
  );
}
