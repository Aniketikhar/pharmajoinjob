import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-3">
      <div className="container mx-auto flex justify-between">
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
        <ul className="flex gap-3 ">
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <p>© 2025 All rights reserved.</p>
    </div>
  );
};

export default Footer;
