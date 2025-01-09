// components/Sidebar.js
export default function Sidebar() {
    return (
      <div className="space-y-6">
        {/* Email Subscription */}
        <div className="bg-white p-4 rounded-sm shadow-md border border-gray-200">
          <h3 className="text-lg font-medium mb-3">Email me for jobs</h3>
          <p className="text-sm text-gray-600 mb-3">
            Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea.
          </p>
          <form>
            <input
              type="email"
              placeholder="name@mail.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-3 outline-none"
            />
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Subscribe
            </button>
          </form>
        </div>
  
        {/* Upload Resume */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-medium mb-3">Get noticed faster</h3>
          <p className="text-sm text-gray-600 mb-3">
            Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure quis cupidatat in.
          </p>
          <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Upload your resume
          </button>
        </div>
      </div>
    );
  }
  