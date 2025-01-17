import React from "react";
import { assets } from "@/Assets/assets";

const ConsultationSection = () => {
  return (
    <div
      className="w-full h-[272px] flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${assets.consultbg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="text-center text-white z-10 bg-black bg-opacity-50 w-full py-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Schedule a Free Consultation</h1>
        <h2 className="text-lg md:text-xl mt-2">NOW</h2>
        <a
          href="/contact"
          className="inline-block mt-4 bg-blue-500 text-white font-medium px-6 py-2 rounded hover:bg-blue-700"
        >
          Arrange a Meeting
        </a>
        <p className="mt-4">
          Need help? <br />
          <a
            href="tel:+919767496322"
            className="text-white font-bold underline"
          >
            +919767496322
          </a>
          <br />
          <a
            href="mailto:Pharmajoin9@gmail.com"
            className="text-white font-bold underline"
          >
            Pharmajoin9@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ConsultationSection;
