import React, { useRef, useState, useEffect } from "react";

const JobDescription = ({ descriptionHTML }) => {
  const descriptionRef = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (descriptionRef.current) {
      // Truncate description initially
      descriptionRef.current.innerHTML = truncateHTML(descriptionHTML, 50);
    }
  }, [descriptionHTML]);

  const toggleDescription = () => {
    if (descriptionRef.current) {
      if (showFullDescription) {
        // Show truncated content
        descriptionRef.current.innerHTML = truncateHTML(descriptionHTML, 50);
      } else {
        // Show full content
        descriptionRef.current.innerHTML = descriptionHTML;
      }
      setShowFullDescription((prev) => !prev);
    }
  };

  const truncateHTML = (html, wordLimit) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.innerText || div.textContent;
    const words = text.split(" ");
    if (words?.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return html;
  };

  return (
    <div>
      <h2 className="bg-slate-100 text-xl p-1">Job Description</h2>
      <p id="jd" ref={descriptionRef} className="text-gray-600"></p>
      {descriptionHTML.split(" ")?.length > 200 && (
        <button
          onClick={toggleDescription}
          className="text-blue-500 underline mt-2"
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default JobDescription;
