"use client"

import contact from "@/Assets/contact.webp";
import { useState } from "react";

// export const metadata = {
//   title: "Contact Us | Pharma Join",
//   description:
//     "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors. It serves as a bridge between employers in the pharmaceutical industry and skilled candidates, streamlining the hiring process and enabling career growth.",
// };

const page = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Here you can add functionality to send form data to an API or email service
  };
  return (
    <div className=" flex justify-center bg-gradient-to-br from-blue-200 to-blue-100">
      <div className="py-4 w-full md:w-[70%] my-5 bg-white flex justify-center items-center flex-col-reverse md:flex-row rounded-xl shadow-2xl">
        <div className="p-8 flex w-full  md:w-1/2 flex-col justify-center">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center text-gray-700 mb-8">
              Have questions? We'd love to hear from you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-blue-100 w-1/2">
          <img
            src={contact.src}
            alt="Contact Us"
            className=" bg-center bg-no-repeat bg-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
