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
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <div className="flex justify-end">
          <button onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="bg-green-200 my-5 flex justify-between items-center p-2 rounded-md">
          <div className="font-semibold text-xl text-green-900">
            Join Our Whatsapp Group
          </div>
          <div>
            <Link href={"/aboutus"} className="bg-green-600 rounded-3xl px-3 py-1 text-white hover:scale-105 transition-all">
              Join Now
            </Link>
          </div>
        </div>
        <div className="bg-blue-200 flex justify-between items-center p-2 rounded-md">
          <div className="font-semibold text-xl text-blue-900">
            Join Our Telegram Group
          </div>
          <div>
            <Link href={"/"} className="bg-blue-600 rounded-3xl px-3 py-1 text-white hover:scale-105 transition-all">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
