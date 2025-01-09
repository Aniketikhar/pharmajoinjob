import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col  ">
      <div className="p-4 text-xl font-bold">Admin Panel</div>
      <ul className="mt-4 space-y-2">
        <Link
          href="/admin/CreateJob"
          className="block px-4 py-2 hover:bg-gray-300 rounded"
        >
          Create Job
        </Link>
        <Link
          href="/admin/JobList"
          className="block px-4 py-2 hover:bg-gray-300 rounded"
        >
          List Jobs
        </Link>
        <Link
          href="/admin/Subscriptions"
          className="block px-4 py-2 hover:bg-gray-300 rounded"
        >
          Suscription
        </Link>
       
      </ul>
    </div>
  );
};

export default Sidebar;
