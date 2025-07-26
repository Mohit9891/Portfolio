import React from "react";

const Home = () => {
  return (
    <div className=" mt-30 ml-8 Container ">
    
    <div className="grid grid-cols-2 justify-between">
        <div className="text-5xl w-full p-4 ml-20  ">
        Hi, I'm <span className="text-indigo-400 font-bold px-2">Mohit</span> —
        a passionate developer <br /> focused on building user-friendly <br />
         web apps and
        solving real-world problems through code.
      </div>

      <div className="w-6/10 ml-30  pl-3">
        <img className="rounded-full object-cover" src="/logo.jpg" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Home;
