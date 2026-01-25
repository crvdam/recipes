import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { Nunito_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Recipes",
};

const nunitoSans = Nunito_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${nunitoSans.className}`}>
        <Header />

        <div className="content">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
