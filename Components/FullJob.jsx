"use client";
import { useEffect, useRef } from "react";
import { FaLocationDot, FaUserGraduate } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { PiMoneyWavyFill } from "react-icons/pi";
import JobDescription from "./JobDescription";
import { formatDate, isRecentPost } from "@/Utils/utils";

export default function FullJob({ job }) {
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      // Set the innerHTML directly
      descriptionRef.current.innerHTML = job.jobDescription;
    }
  }, [job.jobDescription]);
  return (
    <div className="bg-white p-4 shadow-md flex flex-col gap-3 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg text-gray-600 font-medium">{job.company}</h3>
          <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
        </div>
        {job.postDate && isRecentPost(job.postDate) && (
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">
            New Job
          </span>
        )}
      </div>

      <div className="flex flex-shrink-0 gap-4 md:gap-6 flex-wrap items-center text-sm text-gray-500 ">
        {job?.location && (
          <span className="flex items-center">
            <FaLocationDot className="inline" />
            &nbsp;{job?.location}
          </span>
        )}
        {job?.workMode && (
          <span className="flex items-center">
            <MdHomeWork className="inline" />
            &nbsp;
            {job.workMode == "Work from Office"
              ? "WFO"
              : job.workMode == "Work from Home"
              ? "WFH"
              : job.workMode}
          </span>
        )}
        {job?.jobType && (
          <span className="flex items-center">
            <IoTimeSharp className="inline" />
            &nbsp;{job?.jobType}
          </span>
        )}
        {job?.salary && (
          <span className="flex items-center">
            <PiMoneyWavyFill className="inline" />
            &nbsp;{job?.salary}
          </span>
        )}
        {job?.jobLevel && (
          <span className="flex items-center">
            <FaUserGraduate className="inline" />
            &nbsp;{job?.jobLevel}
          </span>
        )}
      </div>
      <span className="italic text-gray-500 text-sm">posted on {formatDate(job?.postDate)}</span>
      <div className="">
        <h2 className="bg-slate-100 text-xl p-1">Vacancy</h2>
        <p>{job?.jobRole}</p>
      </div>
      <h2 className="bg-slate-100 text-xl p-1">Job Description</h2>
      <p id="jd" ref={descriptionRef} className="text-gray-600"></p>
      {/* <div className="py-2">
        <JobDescription descriptionHTML={job?.jobDescription} />
      </div> */}
      <div>
        <h3 className="font-semibold text-md">
          How to Apply for {job.company}
        </h3>
        <p className="mb-3">
          To apply for this job, interested candidates must follow the procedure
          outlined below:
        </p>

        <p className="mb-3">
          Click on the “Apply here” button provided below. You will be
          redirected to the application page.
        </p>

        <ul className="list-decimal ps-2 md:ps-6">
          <li>
            <p>Fill in the application form with all the necessary details.</p>
          </li>
          <li>
            <p>Submit all relevant documents, if required.</p>
          </li>
          <li>
            <p>Make sure that all the details entered are correct.</p>
          </li>
          <li>
            <p>Submit the application form & wait for the companys revert.</p>
          </li>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th
                colSpan="2"
                className="border border-gray-300 bg-gray-100 text-center font-bold py-2"
              >
                GET JOB ALERTS FOR MORE THAN 500+ MNC'S PAN INDIA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Join Our WhatsApp Group
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-500 text-right">
                <a href="#" className="hover:underline">
                  JOIN NOW
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Join Our Telegram Channel
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-500 text-right">
                <a href="#" className="hover:underline">
                  JOIN NOW
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Apply Link</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-500 text-right">
                <a href={job?.applyLink} className="hover:underline">
                  Apply Now
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
  );
}
