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
            <a href="https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb" target="_blank">
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
            <a href="https://t.me/pharmajoin" target="_blank">
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
            <a href="https://www.linkedin.com/in/sachin-kedar-092977339/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
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
      <p>© 2025 All rights reserved</p>
      <ul className="flex justify-center gap-5">
        <li><a href="/aboutus">About Us</a></li>|
        <li><a href="/privacy-policies">Privacy Policy</a></li>|
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Footer;
