import React from 'react';
import { playIcon } from '../utilities/constants';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute top-0 left-0 text-white">
      {/* Full gradient overlay */}
      <div className="absolute bottom-[130px] left-0 w-full h-full bg-gradient-to-t from-black via-black/20 to-transparent
 z-10"></div>

      {/* Text content layered above gradient */}
      <div className="relative z-20 px-6 md:px-24 pt-[50%] md:pt-[16%]">
        <h1 className="text-2xl md:text-4xl font-bold ">{title}</h1>
        <p className="hidden md:inline-block w-1/3 text-lg py-3">{overview}</p>
        <div className="flex gap-4">
          <button className="flex items-center mt-2 md:mt-0 text-xl py-1 md:py-2 px-3 md:px-6 bg-white rounded-lg text-black hover:bg-opacity-80">
            <img className="w-6 h-6 mr-2" src={playIcon} alt="Play icon" />
            Play
          </button>

          <button className="hidden md:inline-block  text-xl py-2 px-6 bg-gray-500 bg-opacity-50 rounded-lg text-white hover:bg-opacity-80">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
