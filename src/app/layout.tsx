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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
       
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
