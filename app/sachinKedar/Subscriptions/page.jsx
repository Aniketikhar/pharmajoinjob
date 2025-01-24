"use client";

import Loading from "@/Components/Loading";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch jobs function
  const fetchEmails = async () => {
    setLoading(true);
    const response = await fetch("/api/subscription");
    const data = await response.json();
    setEmails(data.subscriptions);
    setLoading(false);
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchEmails();
  }, []);

  const deleteEmail = async (id) => {
    const response = await fetch(
      `https://pharmajoin.in/api/subscription?id=${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    if (data.success) {
      toast.success("Email deleted successfully");
      fetchEmails();
    } else {
      toast.error("Failed to delete Job");
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="font-bold text-xl ">Subscribers List</h2>
      <div className="flex flex-col mt-4 gap-4">
        {loading ? (
          <Loading />
        ) : (
          emails?.map((email, index) => (
            <div
              key={index}
              className="p-4 rounded-md border bg-slate-100 flex justify-between items-center"
            >
              <div>
                <div className="font-semibold text-lg">{email.email}</div>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (
                      confirm("Are you sure you want to delete this Email?")
                    ) {
                      deleteEmail(email._id);
                    }
                  }}
                  className="bg-red-500 text-white p-2 rounded-md ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default page;
