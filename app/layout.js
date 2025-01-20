import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import { Suspense } from "react";
import Footer from "@/Components/Footer";


export const metadata = {
  title: "Pharma Join",
  description:
    "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors. It serves as a bridge between employers in the pharmaceutical industry and skilled candidates, streamlining the hiring process and enabling career growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <Suspense fallback={<div>Loading... suspense hoook</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
