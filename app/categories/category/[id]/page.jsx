import JobsSection from "@/Components/JobsSection";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  console.log("id", id);
  let job = null;

  try {
    // Fetch the job details from the API
    const response = await fetch(`http://localhost:3000/api/category?id=${id}`, {
      cache: "no-store", // Avoid caching to ensure fresh data
    });

    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }

    const data = await response.json();
    job = data.job;
    console.log("job", job);
  } catch (error) {
    console.error("Error fetching job:", error.message);
  }

  // Handle case where job data is not available
  if (!job) {
    return (
      <div className="container mx-auto">
        <h1 className="text-center text-2xl text-red-600">Job not found</h1>
      </div>
    );
  }
  return (
    <>
      <JobsSection jobs={job} />
    </>
  );
};

export default page;
