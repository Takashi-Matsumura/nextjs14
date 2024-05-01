import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BBS: my Blogs",
  description: "My Personal Blog Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header style={{ position: "fixed", top: 0, width: "100%" }} />
        <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          {children}
        </div>
        <Footer style={{ position: "fixed", bottom: 0, width: "100%" }} />
      </body>
    </html>
  );
}
