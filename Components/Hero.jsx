"use client";
import React from "react";
import Searchbar from "./Searchbar";
import JobsSection from "./JobsSection";

const Hero = ({ jobs }) => {
  return (
    <>
      <section id="hero" className=" py-10 text-center md:text-left">
        <div className=" container mx-auto">
          <div>
            <h1 className="font-bold text-3xl pt-10 pb-5">
              Get a New Job with PharmaJoin Right Now!
            </h1>
            <p>
              A Pharma Join is a specialized platform designed to connect
              pharmaceutical professionals with job opportunities in the
              healthcare and life sciences sectors. It serves as a bridge
              between employers in the pharmaceutical industry and skilled
              candidates, streamlining the hiring process and enabling career
              growth.
            </p>
          </div>
          <div className="py-10">
            <Searchbar />
          </div>
        </div>
        <JobsSection jobs={jobs} />
      </section>
    </>
  );
};

export default Hero;
