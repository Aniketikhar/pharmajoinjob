"use client";

import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Admin Panel Header */}
      <div className={`flex text-center items-center ${isOpen ? "justify-between" : "justify-center"} `}>
        <div className={`text-xl font-bold ${isOpen ? "" : "hidden"}`}>
          Admin Panel
        </div>
        <div className="text-center">
          <button
            className=" text-center text-xl"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {/* Sidebar Links */}
      <ul className="mt-8 space-y-2">
        <Link href="/admin/Category">
          <li className="block px-4 py-2 hover:bg-gray-600 rounded">
            {isOpen ? "Categories" : "C"}
          </li>
        </Link>
        <Link href="/admin/CreateJob">
          <li className="block px-4 py-2 hover:bg-gray-600 rounded">
            {isOpen ? "Create Job" : "CJ"}
          </li>
        </Link>
        <Link href="/admin/JobList">
          <li className="block px-4 py-2 hover:bg-gray-600 rounded">
            {isOpen ? "List Jobs" : "LJ"}
          </li>
        </Link>
        <Link href="/admin/Subscriptions">
          <li className="block px-4 py-2 hover:bg-gray-600 rounded">
            {isOpen ? "Subscription" : "S"}
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
