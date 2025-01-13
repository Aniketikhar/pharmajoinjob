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
            <Link href="/" rel="preload" prefetch={true} as={"image"}>
              <Image
                src={assets.pharmalogo}
                priority={true}
                width={200}
                alt="pharmajoin"
              />
            </Link>
          </div>
          <ul className="flex gap-1 md:gap-3 ">
            <li className="group">
              <a href="">
                <Image
                  src={assets.whatsapp}
                  priority={true}
                  title="whastapp"
                  width={30}
                  alt="whatsapp"
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </a>
            </li>
            <li className="group">
              <a href="">
                <Image
                  src={assets.facebook}
                  priority={true}
                  title="facebook"
                  width={30}
                  alt="facebook"
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </a>
            </li >
            <li className="group">
              <a href="">
                <Image
                  src={assets.instagram}
                  priority={true}
                  title="instagram"
                  width={30}
                  alt="instagram"
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </a>
            </li>
            <li className="group">
              <a href="">
                <Image
                  src={assets.telegram}
                  priority={true}
                  title="telegram"
                  width={30}
                  alt="telegram"
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </a>
            </li>
            <li className="group">
              <a href="">
                <Image
                  src={assets.linkedIn}
                  title="linkedIn"
                  priority={true}
                  width={30}
                  alt="linkedin"
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-slate-200 ">
          <div
            id="categories"
            className="container mx-auto py-3 flex flex-nowrap gap-2 overflow-x-scroll justify-start items-center"
          >
            <button
              key={"home"}
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
              key={"all"}
              onClick={() => {
                setActive("All Categories");
                router.push("/categories");
              }}
              className={`${
                active == "All Categories"
                  ? "bg-blue-500 underline text-white"
                  : ""
              } text-md text-gray-900 px-2 py-1 rounded-md  hover:underline hover:bg-blue-500 hover:text-gray-50`}
            >
              All Categories
            </button>
            {categories?.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(category.name);
                  router.push("/categories/category/" + category._id);
                }}
                className={`${
                  active == category.name
                    ? "bg-blue-500 underline text-white"
                    : ""
                } text-md text-gray-900 px-2 py-1 rounded-md  hover:underline hover:bg-blue-500 hover:text-gray-50`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
