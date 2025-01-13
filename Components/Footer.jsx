import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-3">
      <div className=" my-5 container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between">
        <div className="ps-1 md:ps-5">
          <Link href="/">
            <Image
              src={assets.pharmalogoremovebg}
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
          </li>
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
      <p>© 2025 All rights reserved.</p>
    </div>
  );
};

export default Footer;
