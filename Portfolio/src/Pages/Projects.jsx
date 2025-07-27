import React from "react";

const Projects = () => {
  return (
    <div className="container mt-10 text-white">
      <div>
        <h2 className="text-8xl text-center font-bold">My Projects</h2>
      </div>

      <div className="grid grid-cols-3 gap-2.5x ml-[4.5rem] mt-30 items-center">
        <div className="p-4 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div>
       <div className="p-4 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div>
       <div className="p-4 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div>
       <div className="p-4 mt-30 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Projects;
