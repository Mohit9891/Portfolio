import React from "react";

function Resume() {
  return (
    <div className="container mt-30 mb-10">
      <h2 className="text-8xl text-center text-white font-bold"> Resume</h2>
      <div className="grid grid-cols-3 gap-2.5x ml-[4.5rem] mt-30 items-center">
        <div className="p-4 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div>
        <div className="p-4 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div>
        <div className="p-4 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div>
        {/* <div className="p-4 mt-30 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div> */}
      </div>
    </div>
  );
}

export default Resume;
