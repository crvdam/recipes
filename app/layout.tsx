import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
       <Header />
       
       <div className={styles.site_content}>
        {children}
       </div>

        <Footer />
      </body>
    </html>
  );
}
