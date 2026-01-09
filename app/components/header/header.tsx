"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderImage from "@/public/recipes_logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.spacer} />

      <header className={styles.header}>
        <div className={styles.nav_wrapper}>
          <Link href="/" className={styles.logo_wrapper}>
            <Image src={HeaderImage} 
              alt="Welcome to Recipes" 
              width={1536}
              height={1024}
              loading="eager"
              className={styles.header_image}>
            </Image>
          </Link>
          <nav
            id="main-nav"
            className={`${styles.nav} ${open ? styles.open : ""}`}
          >
            <ul className={styles.list}>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/ingredients">Ingredients</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </div>

        <button
          className={styles.toggle_menu_button}
          onClick={() => setOpen(prev => !prev)}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          Menu
        </button>
      </header>
    </>
  );
}
