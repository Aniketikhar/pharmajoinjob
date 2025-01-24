"use client";

import Loading from "@/Components/Loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch jobs function
  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch("/api/job");
    const data = await response.json();
    setJobs(data.jobs);
    setLoading(false);
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    const response = await fetch(
      `https://pharmajoin.in/api/job?id=${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    if (data.success) {
      toast.success("Job deleted successfully");
      fetchJobs(); // Refetch categories after deletion
    } else {
      toast.error("Failed to delete Job");
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="font-bold text-xl ">Job List</h2>
      <div className="flex flex-col mt-4 gap-4">
        {loading ? (
          <Loading />
        ) : (
          jobs?.map((job, index) => (
            <div
              key={index}
              className="p-4 rounded-md border bg-slate-100 flex justify-between items-center"
            >
              <div>
                <Link href={`/job/${job?.slug}`} className="hover:underline cursor-pointer font-semibold text-lg">{job.title}</Link>
                <div className="text-gray-500">
                  <span>{job.location}</span>&nbsp;&nbsp;
                  <span>
                    posted on{" "}
                    {new Date(job.postDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (
                      confirm("Are you sure you want to delete this category?")
                    ) {
                      deleteJob(job._id);
                    }
                  }}
                  className="bg-red-500 text-white p-2 rounded-md ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default page;
