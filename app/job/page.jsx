import JobsSection from "@/Components/JobsSection";
import SocialMediaBar from "@/Components/SocialMediaBar";
import WrapPopUp from "@/Components/WrapPopUp";
import React from "react";

const page = async ({ searchParams }) => {
  const findby = searchParams.findby;
  let jobs = null;
  try {
    // Fetch the job details from the API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/job?findby=${findby}`,
      {
        cache: "no-store", // Avoid caching to ensure fresh data
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }

    const data = await response.json();
    jobs = data.jobs;
  } catch (error) {
    console.error("Error fetching job:", error.message);
  }

  // Handle case where job data is not available
  if (!jobs) {
    return (
      <div className="container mx-auto">
        <h1 className="text-center text-2xl text-red-600">Job not found</h1>
      </div>
    );
  }

  return (
    <>
      <WrapPopUp />
      <SocialMediaBar />
      <JobsSection jobs={jobs} />
    </>
  );
};

export default page;
