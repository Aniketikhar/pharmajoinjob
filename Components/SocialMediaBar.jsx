import React, { memo } from "react";

const SocialMediaBar = memo(() => {
  return (
    <div className="container mx-auto flex flex-col gap-4 p-6">
      {/* WhatsApp Group */}
      <div className="flex justify-between items-center p-1 bg-blue-50 border-2 border-green-500 rounded-lg animate-pulse-border">
        <span className="font-medium text-green-600">WhatsApp Group</span>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Join Now
        </button>
      </div>
      {/* Telegram Group */}
      <div className=" flex justify-between items-center p-1 bg-blue-50 border-2 border-blue-700 rounded-lg animate-pulse-border">
        <span className="font-medium text-blue-700">Telegram Group</span>
        <button className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800">
          Join Now
        </button>
      </div>
    </div>
  );
});

export default SocialMediaBar;
