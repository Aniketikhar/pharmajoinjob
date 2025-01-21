import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { PiMoneyWavyFill } from "react-icons/pi";
import { FaShareAlt, FaUserGraduate } from "react-icons/fa";
import { useRouter } from "next/router";

export default function JobCard({ job }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this page!",
          text: "I found this page interesting. Have a look!",
          url: window.location.href,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      console.warn("Web Share API is not supported");
    }
  };

  return (
    <div className="bg-white p-2 md:p-4 rounded-md shadow-md flex flex-col  md:flex-row md:justify-between md:gap-3 hover:bg-slate-100 border border-gray-200">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm md:text-lg font-medium">{job.company}</h3>
            <h2 className="text-lg md:text-2xl font-bold text-gray-900">
              {job.title}
            </h2>
          </div>
          {/* {newPost && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">New post</span>} */}
        </div>
        <div
          className="flex items-center flex-shrink-0 flex-wrap
         text-sm md:text-md text-gray-500 gap-4 md:gap-4"
        >
          <span className="flex items-center">
            <FaLocationDot className="inline" />
            &nbsp;{job.location}
          </span>
          <span className="flex items-center">
            <MdHomeWork className="inline" />
            &nbsp;
            {job.workMode == "Work from Office"
              ? "WFO"
              : job.workMode == "Work from Home"
              ? "WFH"
              : job.workMode}
          </span>
          <span className="flex items-center">
            <IoTimeSharp className="inline" />
            &nbsp;{job.jobType}
          </span>
          <span className="flex items-center">
            <PiMoneyWavyFill className="inline" />
            &nbsp;{job.salary}
          </span>
          <span className="flex items-center">
            <FaUserGraduate className="inline" />
            &nbsp;{job.jobLevel}
          </span>
        </div>
        <div className="flex flex-row items-center mt-2 gap-2">
          {job?.tags?.map((tag, index) => (
            <div
              className="rounded-2xl text-white bg-purple-400 px-2 py-1 text-sm"
              key={index}
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between flex-row md:flex-col pt-3 pb-2 md:p-0">
        <button onClick={handleShare} className="flex justify-end">
          <FaShareAlt />
        </button>
        <Link
          href={`/job/${job?.slug}`}
          className="bg-blue-500 rounded-sm px-3 py-1 border-2 border-blue-500 w-[120px] text-white hover:bg-gray-200 hover:border-2 hover:text-blue-500"
        >
          Apply Now
        </Link>
        {/* <div onClick={() => navigate()} className="bg-blue-500 rounded-sm px-3 border-2 border-blue-500 w-[120px] text-white hover:bg-gray-200 hover:border-2 hover:text-blue-500">Apply Now</div> */}
      </div>

      {/* <p className="text-gray-600 text-sm">{job.jobDescription}</p> */}
    </div>
  );
}
