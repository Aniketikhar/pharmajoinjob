
"use client"
import { fetchAllJobs } from "@/Utils/utils";
import React, { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetchAllJobs();
    console.log(response);
    setJobs(response);
    setFilteredJobs(response);
  }
    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        console.log("Filtered Jobs Updated:", filteredJobs);
      }, [filteredJobs]);


  const filterJobs = (position, location) => {
    console.log(position, location);
    const lowerPosition = position?.toLowerCase();
    const lowerLocation = location?.toLowerCase();

    const result = jobs?.filter(
      (job) =>
        job.title?.toLowerCase().includes(lowerPosition) &&
        job.location?.toLowerCase().includes(lowerLocation)
    );
    console.log(result);

    setFilteredJobs(result);
  };

  return (
    <JobContext.Provider value={{ jobs, filteredJobs, filterJobs }}>
      {children}
    </JobContext.Provider>
  );
};
