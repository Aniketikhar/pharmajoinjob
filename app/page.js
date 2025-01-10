import Hero from "@/Components/Hero";
import JobsSection from "@/Components/JobsSection";

export default async function Home() {
  let jobs = [];
  const response = await fetch("http://localhost:3000/api/job");
  const data = await response.json();
  jobs = data.jobs;
  

  return (
    <>
      <Hero />
      <JobsSection jobs={jobs} />
    </>
  );
}
