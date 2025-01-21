import { assets } from "@/Assets/assets";
import React from "react";
import about from "@/Assets/aboutus.png"

export const metadata = {
  title: "About Us | Pharma Join",
  description:
    "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors. It serves as a bridge between employers in the pharmaceutical industry and skilled candidates, streamlining the hiring process and enabling career growth.",
};

const page = () => {
  return (
    <div className="px-5 py-10 container mx-auto shadow-lg shadow-gray-500">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to Pharmajoin.in - Your Gateway to the Indian Pharmaceutical
        Industry
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <p className="text-base mb-6">
            <span className="font-semibold">
              Post Your Job - Chemical and Pharma Industries
            </span>
            <br />
            We are proud to present ourselves as one of India's top emerging job
            platforms, specializing in connecting professionals in the Chemical
            and Pharmaceutical sectors with the best opportunities.
          </p>
          <h2 className="text-xl font-semibold mb-2">About us?</h2>
          <p className="text-base mb-6">
            We provide recruiters with free access to an extensive pool of
            highly qualified candidates. Our wide-reaching network includes:
          </p>
          <h2 className="text-xl font-semibold mb-2">
            Our Services and Features
          </h2>
          <p className="text-base mb-6">
            - Active WhatsApp group members
            <br />
            - A growing base of LinkedIn followers
            <br />
            - Engaged Telegram group members
            <br />
            How to Post a Job?
          </p>
          <p className="text-base">
            Simply send your job description to{" "}
            <span className="font-medium">Pharmajoin9@gmail.com</span>, and our
            team, led by Hemant Tapkir, will ensure it reaches the right
            audience.
            <br />
            Leverage our vast network to connect with top talent and find the
            perfect fit for your organization.
          </p>
        </div>

        {/* Image Section */}
        {/* <div>
          <img
            src={`${about}`} // Replace with your image URL
            alt="Pharmaceutical Industry"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div> */}
      </div>
    </div>
  );
};

export default page;
