import Hero from "@/Components/Hero";
import { fetchAllJobs } from "@/Utils/utils";

export default async function Home() {
  let jobs = await fetchAllJobs();

  return (
    <>
        <Hero jobs={jobs} />
    </>
  );
}
