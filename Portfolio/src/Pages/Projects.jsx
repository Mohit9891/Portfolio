import React from "react";

const Projects = () => {
  return (
    <div className="container mt-10 text-white">
      <div>
        <h2 className="text-8xl text-center font-bold">My Projects</h2>
      </div>

      <div className="grid grid-cols-3 gap-2.5x ml-[4.5rem] mt-30 items-center">
        <div className="p-1 h-[480px] w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            className="w-full rounded-xl object-contain"
            src="hotels.jpg"
            alt=""
          />
          <h2 className="text-3xl font-bold p-2">Stayease</h2>
          <p className="p-2">
            Stayease is a modern, full-stack Airbnb-inspired web app that lets
            users explore, book, and host stays with ease. Featuring sleek UI,
            responsive design, and seamless navigation, it brings the travel
            experience to your fingertips.
          </p>
        </div>
        <div className="p-1 h-[480px] w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            className="w-full rounded-xl object-contain"
            src="stocks.webp"
            alt=""
          />
          <h2 className="text-3xl font-bold p-2">TradeSwift</h2>
          <p className="p-2">
            Tradeswift is a modern, full-stack Zerodha-inspired web app that
            lets users analyze, trade, and track stocks with ease. Featuring
            sleek UI, responsive design, and seamless navigation, it brings the
            trading experience to your fingertips.
          </p>
        </div>
        <div className="p-1 h-[480px] w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            className="w-full rounded-xl object-contain"
            src="blog.webp"
            alt=""
          />
          <h2 className="text-3xl font-bold p-2">Thoughts</h2>
          <p className="p-2">
            Thoughts is a modern, full-stack Medium-inspired blog app that lets
            users write, share, and explore ideas with ease. Featuring sleek UI,
            responsive design, and seamless navigation, it brings the writing
            experience to your fingertips.
          </p>
        </div>
        {/* <div className="p-4 mt-30 h-100 w-4/5 rounded-xl bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"></div> */}
      </div>
    </div>
  );
};

export default Projects;
