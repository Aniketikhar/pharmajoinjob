import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const DescriptionBox = ({ setValue, register, fieldName, errors }) => {
  const quillRef = useRef(null); // Reference to the Quill editor container
  const [isClient, setIsClient] = useState(false); // Check if rendering on the client

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts
  }, []);

  useEffect(() => {
    let quillInstance;

    if (isClient) {
      // Dynamically import Quill to avoid SSR issues
      import('quill')
        .then((QuillModule) => {
          const Quill = QuillModule.default || QuillModule; // Ensure the default export is used
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

          quillInstance = quill;

          // Listen for text change events
          quill.on('text-change', () => {
            const content = quill.root.innerHTML; // Get HTML content
            setValue(fieldName, content);
          });
        })
        .catch((error) => {
          console.error('Error loading Quill:', error);
        });
    }

    return () => {
      // Clean up the Quill instance
      if (quillInstance) {
        quillInstance.off('text-change');
        quillInstance = null;
      }
    };
  }, [isClient, setValue, fieldName]);

  useEffect(() => {
    register(fieldName, { required: 'Description is required' }); // Register the field with React Hook Form
  }, [register, fieldName]);

  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <label className="block text-sm font-medium mb-2 text-gray-700">
          Description
        </label>
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
    </div>
  );
};

export default dynamic(() => Promise.resolve(DescriptionBox), { ssr: false });
