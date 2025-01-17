"use client";
import { useEffect, useRef } from "react";
import { FaLocationDot, FaUserGraduate } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { PiMoneyWavyFill } from "react-icons/pi";

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
        {job.newPost && (
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">
            New post
          </span>
        )}
      </div>

      <div className="flex items-center text-sm text-gray-500 gap-4">
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

      <p id="jd" ref={descriptionRef} className="text-gray-600 text-md"></p>
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
          <li>Fill in the application form with all the necessary details.</li>
          <li>Submit all relevant documents, if required.</li>
          <li>Make sure that all the details entered are correct.</li>
          <li>Submit the application form & wait for the companys revert.</li>
        </ul>
      </div>
      <div className="flex flex-row items-center mt-2 gap-2">
          {job?.tags?.map((tag, index) => (
            <div
              className="rounded-2xl text-white bg-purple-400 px-2 py-1 text-sm"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
    </div>
  );
}
