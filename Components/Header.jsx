"use client";
import { assets, pages } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchCategory } from "@/Utils/utils";
import { useRouter } from "next/navigation";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const fetchCate = async () => {
    const response = await fetchCategory();
    setCategories(response);
  };

  useEffect(() => {
    fetchCate();
  }, []);

  return (
    <nav className="pt-3">
      <div className="">
        <div className="container mx-auto flex justify-between items-center">
          <div className="ps-1 md:ps-5">
            <Link href="/" passHref>
              <Image
                src={assets.pharmalogo}
                priority={true}
                width={200}
                alt="pharmajoin"
              />
            </Link>
          </div>
          <ul className="flex gap-3 ">
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="bg-slate-200 ">
          <ul
            id="categories"
            className="container mx-auto py-3 flex flex-nowrap gap-2 overflow-x-scroll justify-start items-center"
          >
            
            <button
              onClick={() => {
                setActive("Home");
                router.push("/");
              }}
              className={`${
                active == "Home" ? "bg-blue-500 underline text-white" : ""
              } text-md text-gray-900 px-2 py-1 rounded-md  hover:underline hover:bg-blue-500 hover:text-gray-50`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setActive("All Categories");
                router.push("/categories");
              }}
              className={`${
                active == "All Categories" ? "bg-blue-500 underline text-white" : ""
              } text-md text-gray-900 px-2 py-1 rounded-md  hover:underline hover:bg-blue-500 hover:text-gray-50`}
            >
              All Categories
            </button>
            {categories?.map((category, index) => (
              <button
              onClick={() => {
                setActive(category.name);
                router.push("/categories/category/" + category._id);
              }}
              className={`${
                active == category.name ? "bg-blue-500 underline text-white" : ""
              } text-md text-gray-900 px-2 py-1 rounded-md  hover:underline hover:bg-blue-500 hover:text-gray-50`}
            >
              {category.name}
            </button>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
