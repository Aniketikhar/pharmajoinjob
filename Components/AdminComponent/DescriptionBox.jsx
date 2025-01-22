"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";

const DescriptionBox = ({ setValue, register, fieldName, errors }) => {
  const quillRef = useRef(null); // Reference to the Quill editor container
  const quillInstance = useRef(null); // Store the Quill instance

  useEffect(() => {
    let isMounted = true;

    // Dynamically import Quill to avoid SSR issues
    import("quill")
      .then((QuillModule) => {
        const Quill = QuillModule.default || QuillModule; // Ensure the correct import
        if (isMounted && quillRef.current) {
          quillInstance.current = new Quill(quillRef.current, {
            theme: "snow",
            placeholder: "Write your styled description here...",
            modules: {
              toolbar: [
                // Header dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],

                // Font style dropdown
                [{ font: [] }],

                // Text styling
                ["bold", "italic", "underline", "strike"],

                // Subscript and superscript
                [{ script: "sub" }, { script: "super" }],

                // Lists
                [{ list: "ordered" }, { list: "bullet" }],

                // Indentation
                [{ indent: "-1" }, { indent: "+1" }],

                // Alignment options
                [{ align: [] }],

                // Blockquote and code block
                ["blockquote", "code-block"],

                // Links, images, and videos
                ["link", "image", "video"],

                // Text color and background color
                [{ color: [] }, { background: [] }],

                // Clear formatting
                ["clean"],
              ],
            },
          });

          // Listen for text changes and update React Hook Form
          quillInstance.current.on("text-change", () => {
            const content = quillInstance.current.root.innerHTML; // Get HTML content
            setValue(fieldName, content); // Update field value
          });
        }
      })
      .catch((error) => {
        console.error("Error loading Quill:", error);
      });

    return () => {
      isMounted = false;
      if (quillInstance.current) {
        quillInstance.current = null; // Clean up the Quill instance
      }
    };
  }, [setValue, fieldName]);

  useEffect(() => {
    register(fieldName, { required: "Description is required" }); // Register the field with React Hook Form
  }, [register, fieldName]);

  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-700">
        Description
      </label>
      <div
        ref={quillRef}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          minHeight: "150px",
        }}
      ></div>
      {errors[fieldName] && (
        <p style={{ color: "red" }}>{errors[fieldName].message}</p>
      )}
    </div>
  );
};

// Disable SSR for this component
export default dynamic(() => Promise.resolve(DescriptionBox), { ssr: false });
