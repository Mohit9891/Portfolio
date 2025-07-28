import React from "react";

const Navbar = () => {
  return (
    <div className="px-6 mt-10 sm:px-6 md:px-8 lg:px-16 xl:px-32 flex justify-between items-center sticky text-white">
      <div>
        <a
          href="/home"
          className="text-8xl font-bold tracking-wider text-indigo-500"
        >
          M<span className="text-slate-100">.dev</span>
        </a>
      </div>
      <div className="gap-8 text-2xl flex mr-5">
        <a
          href=""
          className="hover:text-indigo-400 transition-colors duration-200"
        >
          About
        </a>
        <a
          href=""
          className="hover:text-indigo-400 transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href=""
          className="hover:text-indigo-400 transition-colors duration-200"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1Q9BPq5g4Hp_KVBmXn3wrrwtSfahtZNqd/view"
          className="hover:text-indigo-400 transition-colors duration-200"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
