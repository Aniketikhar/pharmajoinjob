"use client"

import { useState } from "react";
import FollowUs from "./FollowUs";
import { toast, ToastContainer } from "react-toastify";

function Sidebar() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const addSubscription = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add subscription');
      }
  
      const data = await response.json();
      if (data.success) {
        console.log('Subscription added successfully:', data.subscription);
        toast.success("Thanks for subscription");
        setEmail('');
        setLoading(false);
        return data.subscription;
      } else {
        console.error(data.msg);
        setLoading(false);
        return null;
      }
    } catch (error) {
      console.error('Error adding subscription:', error.message);
    }
  };
  return (
    <div className="space-y-6">
      {/* Email Subscription */}
      <ToastContainer />
      <div className="bg-white p-4 rounded-sm shadow-md border border-gray-200">
        <h3 className="text-lg font-medium mb-3">Email me for jobs</h3>
        <p className="text-sm text-gray-600 mb-3">
        Passionate developer ready to deliver impactful solutions and innovate.
        </p>
        <form onSubmit={addSubscription}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-3 outline-none"
          />
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            { loading ? "loading..." : "Subscribe" }
          </button>
        </form>
      </div>
      <FollowUs />

      {/*
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg font-medium mb-3">Get noticed faster</h3>
        <p className="text-sm text-gray-600 mb-3">
          Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure
          quis cupidatat in.
        </p>
        <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
          Upload your resume
        </button>
      </div> */}
    </div>
  );
}

export default Sidebar;
