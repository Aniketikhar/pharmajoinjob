import FullJob from "@/Components/FullJob";
import Sidebar from "@/Components/Sidebar";
import SocialMediaBar from "@/Components/SocialMediaBar";
import WrapPopUp from "@/Components/WrapPopUp";

// Server-side fetching function in the App Directory
const fetchJob = async (id) => {
  let job = null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/job?id=${id}`, {
      cache: "no-store", // Avoid caching to ensure fresh data
    });

    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }

    const data = await response.json();
    job = data.job;
  } catch (error) {
    console.error("Error fetching job:", error.message);
  }

  return job;
};

// Page Component
const Page = async ({ params }) => {
  const { id } = params; // Get the job id from URL
  const job = await fetchJob(id);

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
