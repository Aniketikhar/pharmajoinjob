"use client";
import React, { useContext, useEffect, useState } from "react";
import JobCard from "./Jobcard";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const JobList = ({ jobs }) => {
  const [filterType, setFilterType] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // useEffect(() => {
  //   setFilteredJobs(jobs);
  // }, [jobs])


  useEffect(() => {
    setFilteredJobs(
      filterType
        ? jobs.filter(
            (job) => job.jobType == filterType || job.workMode == filterType
          )
        : jobs
    );
  }, [filterType, jobs]);

  // pagination code
  const itemsPerPage = 8; // Items per page
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  // Get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs?.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="md:col-span-3 space-y-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          {filteredJobs?.length} Jobs
        </h1>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-sm text-sm"
        >
          <option value="">Filter by</option>
          <option value="Full Time">Full time</option>
          <option value="Part Time">Part time</option>
          <option value="Work from Office">WFO</option>
          <option value="Work from Home">WFH</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 text-left md:gap-3">
        {currentItems?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      {/* rc-pagination component */}
      <div className="flex justify-center">
        <Pagination
          current={currentPage}
          total={filteredJobs?.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          style={{ marginTop: "20px" }}
        />
      </div>
    </div>
  );
};

export default JobList;
