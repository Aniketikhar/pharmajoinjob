import Hero from "@/Components/Hero";
import { fetchAllJobs } from "@/Utils/utils";
import "./globals.css";
import WrapPopUp from "@/Components/WrapPopUp";

export default async function Home() {
  let jobs = await fetchAllJobs();

  
  

  return (
    <>
        <WrapPopUp />
        <Hero jobs={jobs} />
    </>
  );
}
