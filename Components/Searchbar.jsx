"use client"

import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Searchbar = ({filterJobs, position, setPosition, location, setLocation}) => {


  const handleSearch = (e) => {
    e.preventDefault();
    filterJobs(position, location);
  }

  return (
    <div className="flex  items-center w-[100%]">
      <form onSubmit={handleSearch} className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg  overflow-hidden">
        {/* Position Input */}
        <div className="flex items-center flex-1 px-4 py-2">
          <span className="material-icons text-gray-500"><FaSearch className="text-xl" /></span>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="What position are you looking for?"
            className="w-full outline-none px-4 py-2 text-sm text-gray-600"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center flex-1 px-4 py-2 border-t md:border-t-0 md:border-l border-gray-200">
          <span className="material-icons text-gray-500"><FaLocationDot className="text-xl" /></span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full outline-none px-4 py-2 text-sm text-gray-600"
          />
        </div>

        {/* Search Button */}
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 text-sm hover:bg-blue-600 transition">
          Search job
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
