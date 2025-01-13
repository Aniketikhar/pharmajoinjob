import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { PiMoneyWavyFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";

export default function JobCard({ job }) {
  return (
    <a
      href={`/job/${job?._id}`}
      className="bg-white p-2 md:p-4 rounded-md shadow-md flex flex-col md:gap-3 hover:bg-slate-100 border border-gray-200"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm md:text-lg font-medium">{job.company}</h3>
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">{job.title}</h2>
        </div>
        {/* {newPost && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">New post</span>} */}
      </div>

      <div className="flex items-center text-xs md:text-sm text-gray-500 gap-2 md:gap-4">
        <span className="flex items-center"><FaLocationDot className="inline" />&nbsp;{job.location}</span>
        <span className="flex items-center"><MdHomeWork className="inline" />&nbsp;{job.workMode == "Work from Office" ?"WFO": job.workMode == "Work from Home" ? "WFH" : job.workMode }</span>
        <span className="flex items-center"><IoTimeSharp className="inline" />&nbsp;{job.jobType}</span>
        <span className="flex items-center"><PiMoneyWavyFill className="inline" />&nbsp;{job.salary}</span>
        <span className="flex items-center"><FaUserGraduate className="inline" />&nbsp;{job.jobLevel}</span>
      </div>

      {/* <p className="text-gray-600 text-sm">{job.jobDescription}</p> */}
    </a>
  );
}
