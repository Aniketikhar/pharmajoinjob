import FullJob from "@/Components/FullJob";
import React from "react";

const page = async ({ params }) => {
  const { id } = params; // Destructure the `id` from params
  let job = null;

  try {
    // Fetch the job details from the API
    const response = await fetch(`http://localhost:3000/api/job?id=${id}`, {
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
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-3 my-3 md:my-8">
        {/* Left Sidebar */}
        <div className="bg-slate-400 w-[20%] hidden lg:block">
          left sidebar component
        </div>

        {/* Job Details */}
        <div className="bg-green-300 w-full md:w-[73%] lg:w-[53%]">
          <FullJob job={job} />
        </div>

        {/* Right Sidebar */}
        <div className="bg-red-300 w-full md:w-[27%]">
          right sidebar component
        </div>
      </div>
    </div>
  );
};

export default page;
