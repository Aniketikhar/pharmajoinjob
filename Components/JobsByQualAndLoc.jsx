"use client"
import { useRouter } from "next/navigation";
import React, { memo, useMemo } from "react";

function generateRandomColor() {
  const colors = [
    "#898b13",
    "#00008B",
    "#FF6700",
    "#8B0000",
    "#FF0000",
    "#006400",
    "#FF00FF",
    "#007BFF",
    "#1E90FF",
    "#8A2BE2",
    "#FF0000",
    "#002147",
  ];
  return colors[Math.floor(Math.random() * colors?.length)];
}

const JobsByQualAndLoc = memo(() => {
    const router = useRouter();
  const qualifications = [
    "B.Pharm",
    "M.pharm",
    "MSc",
    "Bsc",
    "Pharm.D",
    "Lifesciences",
    "Ph.D",
    "B.Tech",
    "M.Tech",
    "MBBS",
    "BHMS",
    "BDS",
    "BAMS",
    "ITI",
    "Engineering",
    "Diploma",
    "D.Pharm",
  ];

  const locations = [
    "Pune",
    "Mumbai",
    "Hyderabad",
    "Bangalore",
    "Work From Home",
    "Gujarat",
    "Haryana",
    "Ahmedabad",
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Jobs By Qualification</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {qualifications?.map((qualification, index) => (
            <div
              key={index}
              onClick={() => router.push(`/job?findby=${qualification}`)}
              className="flex cursor-pointer justify-center items-center text-white font-semibold text-center h-16 rounded-md shadow-md hover:scale-105 transition-transform"
              style={{ backgroundColor: generateRandomColor() }}
            >
              {qualification}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <h1 className="text-2xl font-bold mb-4">Jobs By Location</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {locations?.map((location, index) => (
            <div
              key={index}
              onClick={() => router.push(`/job?findby=${location}`)}
              className="flex cursor-pointer justify-center items-center bg-green-500 text-white font-semibold text-center h-16 rounded-md shadow-md hover:scale-105 transition-transform"
              style={{ backgroundColor: generateRandomColor() }}
            >
              {location}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default JobsByQualAndLoc;
