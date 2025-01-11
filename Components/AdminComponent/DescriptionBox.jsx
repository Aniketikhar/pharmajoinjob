import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's CSS

const DescriptionBox = ({ setValue, register, fieldName, errors }) => {
  const quillRef = useRef(null); // Reference to the Quill editor container

  useEffect(() => {
    // Initialize Quill editor
    const quill = new Quill(quillRef.current, {
      theme: 'snow', // Theme options: 'snow', 'bubble'
      placeholder: 'Write your styled description here...',
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'], // Formatting options
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      },
    });

    // Listen for text change events
    quill.on('text-change', () => {
      let content = quill.root.innerHTML; // Get HTML content
      setValue(fieldName, content);
    });
  }, [setValue, fieldName]);

  useEffect(() => {
    register(fieldName, { required: 'Description is required' }); // Register the field with React Hook Form
  }, [register, fieldName]);

  return (
    <div>
     <div style={{ marginTop: '20px' }}>
      <label className='block text-sm font-medium mb-2 text-gray-700'>Description </label>
      <div
        ref={quillRef}
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          minHeight: '150px',
        }}
      ></div>
      {errors[fieldName] && (
        <p style={{ color: 'red' }}>{errors[fieldName].message}</p>
      )}
    </div>

      {/* Display the content */}
      {/* <div style={{ marginTop: '20px' }}>
        <strong>Preview:</strong>
        <div
          dangerouslySetInnerHTML={{ __html: editorContent }}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
          }}
        />
      </div> */}
    </div>
  );
};

export default DescriptionBox;
