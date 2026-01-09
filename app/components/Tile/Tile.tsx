"use client";
import Link from "next/link";
import styles from "./tile.module.css";
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
    <li key={id} className={styles.tile}>
      <Link href={linkUrl}>
        <Image
          src={imageUrl}
          alt={name + " category"}
          width={320}
          height={200}
          loading="lazy"
          className={styles.image}
        ></Image>
      </Link>
      <div className={styles.title}>{name}</div>
      <div className={styles.description}>{description}</div>
    </li>
  );
}
