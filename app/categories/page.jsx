import Sidebar from "@/Components/Sidebar";
import SocialMediaBar from "@/Components/SocialMediaBar";
import WrapPopUp from "@/Components/WrapPopUp";
import { fetchCategory } from "@/Utils/utils";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {

  return {
    title: "Job Fields - PharmaJoin",
    openGraph: {
      title: "Job Fields - PharmaJoin",
    },
    twitter: {
      card: "summary_large_image",
      title: "Job Fields - PharmaJoin",
    },
  };

}

const page = async () => {
  let categories = await fetchCategory();

  const colors = [
    "#898b13",
    "#00008B",
    "#FF6700",
    "#8B0000",
    "#FF0000",
    "#006400",
    "#FF00FF",
    "#007BFF",
    "#1E90FF",
    "#8A2BE2",
    "#FF0000",
    "#002147",
  ];


  // Function to get a random color and create a gradient with its shades
  const getRandomGradient = () => {
    const randomColor = colors[Math.floor(Math.random() * colors?.length)];
    return randomColor;
  };

  return (
    <>
    <WrapPopUp />
    <SocialMediaBar />
      <div className="min-h-screen bg-gray-100 flex justify-center py-8">
        <div className="container mx-auto w-full flex flex-col md:flex-row gap-5 px-4">
          {/* category Listings */}
          <div className="w-full md:w-[70%]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-black">
                {categories?.length} Categories
              </h1>
            </div>
            <div className="py-3">
              {categories?.map((category, index) => (
                <Link key={index} href={`categories/category/${category?._id}`}>
                  <div
                    style={{ background: getRandomGradient() }}
                    className="text-white p-4 mb-3 rounded-md hover:bg-slate-500 shadow-md flex flex-col gap-3 border border-gray-200"
                  >
                    <h1 className="font-bold text-2xl ">{category?.name}</h1>
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
      <SocialMediaBar />
    </>
  );
};

export default page;
