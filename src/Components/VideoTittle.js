import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="z-[-1] relative w-screen h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gradient-to-r from-black to-transparent flex flex-col justify-end px-6 md:px-12 lg:px-24 py-4 md:py-6">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">{title}</h1>
      <p className="hidden md:block text-lg text-white text-justify md:w-1/2 lg:w-1/3 mb-4">{overview}</p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4">
        <button className="bg-white text-black p-2 md:p-4 px-6 md:px-8 text-lg md:text-2xl font-semibold rounded-lg hover:bg-opacity-80 transition duration-300">
          ▶ Play
        </button>
        <button className="bg-white text-black p-2 md:p-4 px-6 md:px-8 text-lg md:text-xl font-semibold rounded-lg hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

