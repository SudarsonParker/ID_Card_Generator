import React from "react";

function InstagramHome() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-md border-b border-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">Instagram</div>
          <div className="flex space-x-4">
            <button className="text-xl">
              <i className="far fa-compass"></i>
            </button>
            <button className="text-xl">
              <i className="far fa-heart"></i>
            </button>
            <button className="text-xl">
              <i className="far fa-user"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Posts go here */}
          <div className="col-span-3 md:col-span-2">
            {/* Example post */}
            <div className="bg-white p-4 mb-4 shadow-md">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div className="font-semibold">Username</div>
              </div>
              <img
                src="https://via.placeholder.com/400x400"
                alt="Post"
                className="mt-2 rounded-lg"
              />
              <div className="mt-2">
                <button className="text-xl">
                  <i className="far fa-heart"></i>
                </button>
                <button className="text-xl ml-4">
                  <i className="far fa-comment"></i>
                </button>
              </div>
              <div className="mt-2">
                <span className="font-semibold">Username</span> Caption text
                goes here.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block col-span-1">
            {/* Suggestions, Stories, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramHome;
