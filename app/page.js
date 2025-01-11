import Hero from "@/Components/Hero";
import JobsSection from "@/Components/JobsSection";
import { fetchAllJobs } from "@/Utils/utils";

export default async function Home() {
  let jobs = await fetchAllJobs();


  return (
    <>
      <Hero />
      <JobsSection jobs={jobs} />
    </>
  );
}
