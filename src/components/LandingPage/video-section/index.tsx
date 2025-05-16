import React from "react";
import { VideoPageProps } from "types/types";

const VideoSection : React.FC<VideoPageProps>  = ({ videoSrc, title, subtitle, description, width,height }) => {
  return (
    <div className={`relative w-full ${height || "h-[300px] sm:h-[681px]"} overflow-hidden`}>
      <video
        className="absolute inset-0 object-cover w-full h-full"
        preload="metadata"

        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        poster="/assets/VideoPoster.png"
      />
        <div className='relative z-10 flex items-center h-full'>
        <div className={`bg-black/35 ${width || "w-[300px] sm:w-[579px] 2xl:w-[635px]"} rounded-e-2xl py-2 md:py-5`}
            >
              <div className="py-2 md:py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
                <h3 className="lg:text-[35px] text-22 font-black md:drop-shadow-lg">
                  {title}
                </h3>
                <h1 className=" text-14 sm:text-16 font-bold capitalize tracking-widest">
                  {subtitle}
                </h1>
                <p className="mt-2 sm:mt-4 font-normal text-12 lg:text-16 sm:text-14 w-[96%] uppercase">
                  {description}
                </p>

              </div>
            </div>
        </div>
      </div>
  );
};

export default VideoSection;