import React from "react";

const TechStack = () => {
  return (
    <div className="container mt-30">
      <div className="text-8xl text-center font-bold text-white">
        <h2>Tech Stack</h2>
      </div>

      <div className="grid grid-cols-6 mt-30 ml-20">
        <div className=" h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out ">
          <img
            className="w-full max-h-full object-contain rounded-xl"
            src="Html.png"
            alt=""
          />
        </div>
        <div className=" h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out ">
          <img src="css.png" alt="" />
        </div>
        <div className=" h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="js.png" alt="" />
        </div>
        <div className=" h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="java.png" alt="" />
        </div>
        <div className=" h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="expresspng.png" alt="" />
        </div>
        <div className=" h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="mongo.png" alt="" />
        </div>
        <div className=" mt-20  h-40flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="react.png" alt="" />
        </div>
        <div className=" mt-20  h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="boot.png" alt="" />
        </div>
        <div className=" mt-20  h-40 flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="nodejs.png" alt="" />
        </div>
        <div className=" mt-20  flex items-center justify-center w-[180px]   hover:scale-105 transition-transform duration-300 ease-in-out h-40">
          <img src="sql.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
