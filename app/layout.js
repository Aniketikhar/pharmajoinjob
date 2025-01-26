import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import { Suspense } from "react";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Pharma Join",
  description:
    "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors. It serves as a bridge between employers in the pharmaceutical industry and skilled candidates, streamlining the hiring process and enabling career growth.",
  keywords:
    "Internships, CDM, Clinical Research, Medical Writer, Packing Jobs, Pharmacovigilance, Production, QA, QC, Regulatory Affairs, Research & Development ,B.Pharm, M.pharm, MSc, Bsc, Pharm.D, Lifesciences, Ph.D, B.Tech, M.Tech, MBBS, BHMS, BDS, BAMS, ITI, Engineering, Diploma, D.Pharm, Pune, Mumbai, Hyderabad, Bangalore, Work From Home, Gujarat, Haryana, Ahmedabad ,Job Portal, Career Opportunities, Employment Search, Job Listings, Hiring Now, Apply Online, Work from Home, Remote Jobs, Full-Time Jobs, Part-Time Jobs, Software Developer Jobs, IT Specialist Careers, Data Scientist Opportunities, Web Developer Roles, Cloud Engineer Hiring, Nursing Jobs, Medical Careers, Healthcare Professionals Hiring, Pharmacy Jobs, Accountant Positions, Financial Analyst Jobs, Banking Careers, Teaching Positions, Online Tutoring Jobs, School Administrator Roles, Sales Assistant Jobs, Store Manager Hiring, Retail Associate Roles, Entry-Level Jobs, Internships, Graduate Opportunities, Mid-Level Careers, Senior Positions, Freelance Work, Temporary Positions, Contract-Based Jobs, Seasonal Hiring, Jobs in Pune, Pune Hiring Now, Remote Opportunities Worldwide, Find Jobs Near Me, Quick Job Application, Latest Job Openings, Best Job Portal, Resume Upload Platform, Career Development, Work-Life Balance Jobs, Employee Benefits, High-Paying Jobs, Job Alerts",
  openGraph: {
    title: "Pharma Join",
    description:
      "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors.",
    images: [],
    url: "",
  },
  twitter: {
    title: "Pharma Join",
    description:
      "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors.",
    images: [],
    url: "",
    card: "summary_large_image",
    site: "@pharmajoin",
    creator: "@pharmajoin",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7099571411029187"
     crossOrigin="anonymous"></script>
      </head>
      <body className={`antialiased`}>
        <Header />
        <Suspense fallback={<div>Loading... suspense hoook</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
