import { assets } from "@/Assets/assets";
import React from "react";


export const metadata = {
  title: "About Us | Pharma Join",
  description:
    "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors. It serves as a bridge between employers in the pharmaceutical industry and skilled candidates, streamlining the hiring process and enabling career growth.",
};

const page = () => {
  return (
    <div className="px-5 py-10 container mx-auto shadow-lg shadow-gray-500">
      <h1 className="text-3xl font-bold mb-6">
        Pharmajoin - About Us
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-6">
            About PharmaJoin
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              At PharmaJoin, we aim to bridge the gap between pharmaceutical
              professionals and leading job opportunities, ensuring a seamless
              hiring experience for both employers and candidates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-700">
              Our vision is to be the leading platform that simplifies
              recruitment in the pharmaceutical industry by leveraging
              technology to connect the right talent with the right employers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Why Choose PharmaJoin?
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Easy job search and application process</li>
              <li>Verified job listings from top pharmaceutical companies</li>
              <li>Advanced filtering to find the right match</li>
            </ul>
          </section>
        </div>
      

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={assets.aboutus.src} // Replace with your image URL
          alt="Pharmaceutical Industry"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      </div>
    </div>
  );
};

export default page;
