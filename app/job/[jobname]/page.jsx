import FullJob from "@/Components/FullJob";
import Sidebar from "@/Components/Sidebar";
import SocialMediaBar from "@/Components/SocialMediaBar";
import WrapPopUp from "@/Components/WrapPopUp";
import { notFound } from "next/navigation";

// Server-side fetching function in the App Directory
const fetchJob = async (jobname) => {
  let job = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/job?job=${jobname}`,
      {
        cache: "no-store", // Avoid caching to ensure fresh data
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }

    const data = await response.json();
    job = data?.job[0];
  } catch (error) {
    console.error("Error fetching job:", error.message);
  }

  return job;
};

export async function generateMetadata({ params }) {
  const { jobname } = await params;
  const job = await fetchJob(jobname);

  if (!job) {
    return {
      title: "Job Not Found",
      description: "The job you are looking for does not exist.",
    };
  }

  return {
    title: job?.title || "job page",
    description: job?.jobDescription,
    openGraph: {
      title: job.title,
      description: job?.jobDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: job.title,
      description: job?.jobDescription,
    },
  };
}

// Page Component
const Page = async ({ params }) => {
  const { jobname } = await params;
  const job = await fetchJob(jobname);

  if (!job) {
    notFound(); 
  }

  return (
    <>
      <WrapPopUp />
      <SocialMediaBar />
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row gap-3 my-3 md:my-8">
          {/* Left Sidebar */}
          <div className="w-[17%] hidden lg:block"></div>

          {/* Job Details */}
          <div className="w-full md:w-[77%] lg:w-[57%]">
            <FullJob job={job} />
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-[27%]">
            <Sidebar />
          </div>
        </div>
      </div>
      <SocialMediaBar />
    </>
  );
};

export default Page;
