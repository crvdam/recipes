import type { Metadata } from "next";
import "./globals.css";
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
      <body>
       <Header />
       
        {children}

        <Footer />
      </body>
    </html>
  );
}
