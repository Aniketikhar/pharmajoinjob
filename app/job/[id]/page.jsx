import FullJob from "@/Components/FullJob";
import JobCard from "@/Components/Jobcard";
import React from "react";

const page = ({ params }) => {
    let job ={
        company: "Notion",
        role: "Junior UI Designer",
        location: "Madrid",
        type: "Full time",
        salary: "$30-32k",
        time: "1 day ago",
        description:
          "Molilt in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt euismod culpa.",
      }
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-3 my-3 md:my-8 ">
        <div className="bg-slate-400 w-[20%] hidden lg:block">
          leftsidebar component
        </div>
        <div className="bg-green-300 w-full md:w-[73%] lg:w-[53%]">
          <FullJob {...job} />

        </div>
        <div className="bg-red-300 w-full md:w-[27%]">
          right sidebar component
        </div>
      </div>
    </div>
  );
};

export default page;
