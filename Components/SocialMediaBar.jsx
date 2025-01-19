import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { memo } from "react";

const SocialMediaBar = memo(() => {
  return (
    <div className="container mx-auto flex flex-col gap-4 p-6">
      {/* WhatsApp Group */}
      <div className="flex justify-between items-center p-1 bg-blue-50 border-2 border-green-500 rounded-lg animate-blink-green">
        <div className="font-medium flex flex-row gap-3 text-green-600">
          {" "}
          <Image
            src={assets.whatsapp}
            priority={true}
            width={25}
            alt="pharmajoin"
          />{" "}
          <span> WhatsApp Group</span>
        </div>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Join Now
        </button>
      </div>
      {/* Telegram Group */}
      <div className="flex justify-between items-center p-1 bg-blue-50 border-2 border-blue-700 rounded-lg animate-blink-blue">
        <div className="font-medium flex flex-row gap-3 text-blue-700">
          <Image
            src={assets.telegram}
            priority={true}
            width={25}
            alt="pharmajoin"
          />
          <span> Telegram Group</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800">
          Join Now
        </button>
      </div>
    </div>
  );
});

export default SocialMediaBar;
