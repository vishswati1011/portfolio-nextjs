import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// const inter = PT_Serif({subsets :['cyrillic-ext', 'cyrillic'],weight: '400', style: 'normal'});
const inter = Roboto({ subsets: ["latin", "cyrillic"], weight: "400", style: "normal" });
export const metadata: Metadata = {
  title: "Swati Vishwakarma",
  description: "Full Stack Mern Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
