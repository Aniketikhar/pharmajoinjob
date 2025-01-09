import React from "react";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-slate-50 container mx-auto py-10 text-center md:text-left"
    >
      <div>
        <h1 className="font-bold text-3xl pt-10 pb-5">
          Find Your New Job Today
        </h1>
        <p>
          Thousand Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, repellendus?
        </p>
      </div>
      <div className="py-10">
        <Searchbar />
      </div>
      
    </section>
  );
};

export default Hero;
