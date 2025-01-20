import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import { FaClosedCaptioning } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const PopUpModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "transparent",
          padding: "20px",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <div className="flex justify-end">
          <button onClick={onClose}>
            <IoClose className="text-white" />
          </button>
        </div>
        <div className=" my-2 flex justify-between items-center  rounded-md">
          {/* <div className="font-semibold text-sm md:text-xl text-green-900">
            Join Our Whatsapp Group
          </div>
          <div>
            <Link href={"/aboutus"} className="bg-green-600 rounded-3xl px-3 py-1 text-white hover:scale-105 transition-all">
              Join Now
            </Link>
          </div> */}
          <Link href={"https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb"}>
            <Image
              src={assets.whatsbanner}
              href={"/job"}
              priority={true}
              title="Join Us for latest Updates"
              alt="whatsappbanner"
              className="w-full transition-transform duration-300 group-hover:scale-125"
            />
          </Link>
        </div>
        <div className=" flex justify-between items-center  rounded-md">
          {/* <div className="font-semibold text-sm md:text-xl text-blue-900">
            Join Our Telegram Group
          </div>
          <div>
            <Link
              href={"/"}
              className="bg-blue-600 rounded-3xl px-3 py-1 text-white hover:scale-105 transition-all"
            >
              Join Now
            </Link>
          </div> */}
          <Link href={"https://t.me/pharmajoin"}>
            <Image
              src={assets.telebanner}
              priority={true}
              title="Join us for latest updates"
              alt="telegrambanner"
              className="w-full transition-transform duration-300 group-hover:scale-125"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
