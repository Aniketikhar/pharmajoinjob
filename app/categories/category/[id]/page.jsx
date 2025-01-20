import JobsSection from "@/Components/JobsSection";
import SocialMediaBar from "@/Components/SocialMediaBar";
import WrapPopUp from "@/Components/WrapPopUp";
import { fetchCategoryById } from "@/Utils/utils";
import React from "react";

const page = async ({ params }) => {
  const { id } =await params;
  console.log("id", id);
  let job = await fetchCategoryById(id);

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
    <SocialMediaBar />
      <JobsSection jobs={job} />
      <SocialMediaBar />
    </>
  );
};

export default page;
