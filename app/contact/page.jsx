import contact from "@/Assets/contact.webp";

export const metadata = {
  title: "Contact Us | Pharma Join",
  description:
    "A Pharma Join is a specialized platform designed to connect pharmaceutical professionals with job opportunities in the healthcare and life sciences sectors. It serves as a bridge between employers in the pharmaceutical industry and skilled candidates, streamlining the hiring process and enabling career growth.",
};

const page = () => {
  return (
    <div className=" flex justify-center bg-gradient-to-br from-blue-200 to-blue-100">
      <div className="py-4 w-full md:w-[70%] my-5 bg-white flex justify-center items-center flex-col-reverse md:flex-row rounded-xl shadow-2xl">
        <div className="p-8 flex w-full  md:w-1/2 flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
          <form
            // onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-full py-3 px-6 hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="bg-blue-100 w-1/2">
          <img
            src={contact.src}
            alt="Contact Us"
            className=" bg-center bg-no-repeat bg-contain"
            
          />
        </div>
      </div>
    </div>
  );
};

export default page;
