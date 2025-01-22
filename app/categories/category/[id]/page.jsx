import JobsSection from "@/Components/JobsSection";
import SocialMediaBar from "@/Components/SocialMediaBar";
import WrapPopUp from "@/Components/WrapPopUp";
import { fetchCategoryById } from "@/Utils/utils";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params; 
  let { category } = await fetchCategoryById(id);

  return {
    title: category?.name,
    description: category?.description,
    openGraph: {
      title: category?.name,
      description: category?.description,
    },
    twitter: {
      card: "summary_large_image",
      title: category?.name,
      description: category?.description,
    },
  };

}

const page = async ({ params }) => {
  const { id } = await params;
  let data = await fetchCategoryById(id);

  // Handle case where job data is not available
  if (!data?.jobs) {
    return (
      <div className="container mx-auto min-h-screen">
        <h1 className="text-center text-2xl text-red-600">Job not found</h1>
      </div>
    );
  }
  return (
    <>
    
    <WrapPopUp />
    <SocialMediaBar />
      <JobsSection jobs={data?.jobs} />
      <SocialMediaBar />
    </>
  );
};

export default page;
