import FullJob from "@/Components/FullJob";
import Sidebar from "@/Components/Sidebar";
import WrapPopUp from "@/Components/WrapPopUp";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params; // Destructure the `id` from params
  let job = null;

  try {
    // Fetch the job details from the API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/job?id=${id}`,
      {
        cache: "no-store", // Avoid caching to ensure fresh data
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }

    const data = await response.json();
    job = data.job;
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
      <WrapPopUp />
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row gap-3 my-3 md:my-8">
          {/* Left Sidebar */}
          <div className=" w-[17%] hidden lg:block">left sidebar component</div>

          {/* Job Details */}
          <div className=" w-full md:w-[77%] lg:w-[57%]">
            <FullJob job={job} />
          </div>

          {/* Right Sidebar */}
          <div className=" w-full md:w-[27%]">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
