import Sidebar from "@/Components/Sidebar";
import { fetchCategory } from "@/Utils/utils";
import Link from "next/link";
import React from "react";
import { prisma } from "~/lib/prisma";

const page = async () => {
  let categories = await fetchCategory();
  


  const colors = [
    "#FF6347", // Tomato
    "#FFD700", // Gold
    "#32CD32", // Lime Green
    "#1E90FF", // Dodger Blue
    "#8A2BE2", // Blue Violet
    "#FF1493", // Deep Pink
    "#FF4500", // Orange Red
    "#00BFFF", // Deep Sky Blue
    "#FFD700", // Gold
    "#6A5ACD", // Slate Blue
    "#20B2AA", // Light Sea Green
    "#FF8C00", // Dark Orange
  ];

  const getGradientWithShades = (color) => {
    const lightColor = `${color}CC`; // Lighter shade
    const darkColor = `${color}99`; // Darker shade
    return `linear-gradient(0deg, ${lightColor}, ${color}, ${darkColor})`;
  };

  // Function to get a random color and create a gradient with its shades
  const getRandomGradient = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return getGradientWithShades(randomColor);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center py-8">
        <div className="container mx-auto w-full flex flex-col md:flex-row gap-5 px-4">
          {/* category Listings */}
          <div className="w-full md:w-[70%]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                {categories.length} Categories
              </h1>
            </div>
            <div className="py-3">
              {categories?.map((category, index) => (
                <Link key={index} href={`categories/category/${category._id}`}>
                  <div
                    style={{ background: getRandomGradient() }}
                    className="text-gray-900 p-4 mb-3 rounded-md hover:bg-slate-500 shadow-md flex flex-col gap-3 border border-gray-200"
                  >
                    <h1 className="font-bold text-2xl ">{category.name}</h1>
                    <p>{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-[30%]">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
