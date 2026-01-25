"use client";
import Link from "next/link";
import styles from "./FeaturedItem.module.css";
import Image from "next/image";

type TileProps = {
  id: string | number;
  name: string;
  imageUrl: string;
  category?: string;
  description?: string;
  linkUrl?: string;
};

export default function Tile({
  id,
  name,
  imageUrl,
  category,
  description,
  linkUrl = "#",
}: TileProps) {
  return (
    <Link href={linkUrl}>
      <section className={styles.featured_item_container}>
        <div className={styles.featured_item_wrapper}>
          <div key={id} className={styles.featured_item_left}>
            <Image
              src={imageUrl}
              alt={name + " category"}
              width={320}
              height={200}
              loading="lazy"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.featured_item_right}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </section>
    </Link>
  );
}
