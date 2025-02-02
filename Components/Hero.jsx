"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Searchbar from "./Searchbar";
import JobsSection from "./JobsSection";
import { fetchAllJobs, fetchCategory } from "@/Utils/utils";
import { assets } from "@/Assets/assets";
import JobsByQualAndLoc from "./JobsByQualAndLoc";
import Link from "next/link";
import SocialMediaBar from "./SocialMediaBar";
import Jobpost from "./Jobpost";

// Separate component for background images to prevent unnecessary re-renders
const HeroBackground = ({ backgroundImages, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <div
      className="py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImages[currentSlide].src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 2s ease-in-out",
      }}
    >
      <div className="container mx-auto text-white">
        <h1 className="text-3xl pt-10 pb-5">
          Get a New Job with PharmaJoin Right Now!
        </h1>
        <p>
          A Pharma Join is a specialized platform designed to connect
          pharmaceutical professionals with job opportunities in the healthcare
          and life sciences sectors. It serves as a bridge between employers in
          the pharmaceutical industry and skilled candidates, streamlining the
          hiring process and enabling career growth.
        </p>
      </div>
      {children}
    </div>
  );
};

const Hero = () => {
  const [categories, setCategories] = useState([]);
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchAllJobs()
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchCategory()
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  // Memoized filtering function to prevent unnecessary recalculations
  const filterJobs = useCallback(
    (position, location) => {
      const lowerPosition = position.toLowerCase() || "";
      const lowerLocation = location.toLowerCase() || "";

      return jobs.filter((job) => {
        const matchesPosition =
          job.title?.toLowerCase().includes(lowerPosition) ||
          job.jobRole?.toLowerCase().includes(lowerPosition) ||
          job.company?.toLowerCase().includes(lowerPosition);

        const matchesLocation = job.location
          ?.toLowerCase()
          .includes(lowerLocation);

        return matchesPosition && matchesLocation;
      });
    },
    [jobs]
  );

  // Memoize filtered jobs to avoid unnecessary re-renders
  const filteredJobs = useMemo(
    () => filterJobs(position, location),
    [position, location, filterJobs]
  );

  return (
    <section id="hero" className="text-center md:text-left">
      {/* Isolated Background Component */}
      <HeroBackground
        backgroundImages={[
          assets.banner1,
          assets.banner2,
          assets.banner3,
          assets.banner4,
          assets.banner5,
          assets.banner6,
          assets.banner7,
        ]}
      >
        <div className="py-10 container mx-auto">
          <Searchbar
            filterJobs={filterJobs}
            position={position}
            setPosition={setPosition}
            location={location}
            setLocation={setLocation}
          />
        </div>

        <div className="container mx-auto pb-10 flex flex-wrap gap-2 md:gap-4 flex-shrink-0">
          {categories.map((category, index) => (
            <Link
              href={`/categories/category/${category._id}`}
              key={index}
              className="px-3 py-1 border-2 text-white border-gray-100 rounded-sm hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </HeroBackground>

      <SocialMediaBar />
      <JobsSection jobs={filteredJobs} />
      <SocialMediaBar />
      <JobsByQualAndLoc />
      <Jobpost />
      <SocialMediaBar />
    </section>
  );
};

export default Hero;
