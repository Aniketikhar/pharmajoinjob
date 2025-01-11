"use client";

import Sidebar from "@/Components/AdminComponent/Sidebar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function layout({ children }) {
  const [isOpen, setIsOpen] = useState(true); // Toggle for mobile menu

  // Function to handle sidebar toggle for mobile view
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <ToastContainer />
      <div className="bg-slate-100 flex">
        <div
          className={`${
            isOpen ? "w-64 p-3" : "w-16 p-1"
          } transition-all duration-300 bg-gray-800 text-white min-h-screen`}
        >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="p-2 md:p-5 w-full">{children}</div>
      </div>
    </>
  );
}
