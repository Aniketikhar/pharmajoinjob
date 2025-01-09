
import Sidebar from "@/Components/Sidebar";
import JobList from "./JobList";

export default function Home() {
  const jobs = [
    {
      company: "Linear company",
      role: "Software Engineer",
      location: "Brussels",
      type: "Full time",
      salary: "$50-55k",
      time: "29 min ago",
      description:
        "Molilt in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt euismod culpa.",
      newPost: true,
    },
    {
      company: "Notion",
      role: "Junior UI Designer",
      location: "Madrid",
      type: "Full time",
      salary: "$30-32k",
      time: "1 day ago",
      description:
        "Molilt in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt euismod culpa.",
    },
    {
      company: "Spline studio",
      role: "Technical Support Engineer",
      location: "United States",
      type: "Full time",
      salary: "$50-52k",
      time: "1 day ago",
      description:
        "Molilt in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt euismod culpa.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Job Listings */}
        <JobList jobs={jobs} />

        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
