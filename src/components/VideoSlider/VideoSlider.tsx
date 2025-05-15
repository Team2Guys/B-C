'use client';

import Container from "components/Res-usable/Container/Container";
import { reelsData } from "data/SellerSlider";
import React, { useEffect, useState } from "react";

const slideInterval = 5000;

export default function VideoReelsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reelsData.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side Fixed Content */}
        <div className="md:w-2/3 bg-[#3E3F42] text-white rounded-3xl p-8 md:p-20 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
            Press Play on Style Quick reels. <br /> Big inspiration.
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            Step into real homes across the UAE and witness stunning before-and-after window makeovers. From motorised magic to elegant fabric falls, our reels show how we bring life to every window.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded px-5 py-3 w-max transition">
            Watch More Reels
          </button>
        </div>

        {/* Right Side Video Slider */}
        <div className="md:w-1/3 relative h-[60vh] md:h-[724px] overflow-visible rounded-ful max-w-full">
          {reelsData.map((reel, index) => {
            let classNames =
              "absolute top-0 left-0 rounded-xl bg-gray-500 overflow-hidden shadow-2xl transition-transform duration-1000 ease-in-out cursor-pointer flex flex-col";

            if (index === currentIndex) {
              // Active slide: use responsive widths/heights and positioning
              classNames +=
                " z-20 w-[70vw] max-w-[437px] h-[45vh] md:w-[437px] md:h-[524px] translate-x-0 translate-y-[10vh] md:translate-y-[90px] scale-105 opacity-100";
            } else if (index === (currentIndex + 1) % reelsData.length) {
              // Next slide: smaller and shifted right
              classNames +=
                " z-10 w-[40vw] max-w-[300px] h-[35vh] md:w-[300px] md:h-[405px] translate-x-[50vw] md:translate-x-[200px] translate-y-[20vh] md:translate-y-[140px] scale-90 opacity-80";
            } else if (index === (currentIndex - 1 + reelsData.length) % reelsData.length) {
              // Previous slide: moved up and hidden
              classNames +=
                " z-0 w-[40vw] max-w-[300px] h-[35vh] md:w-[300px] md:h-[405px] translate-x-0 translate-y-[-15vh] scale-90 opacity-0 pointer-events-none";
            } else {
              classNames += " opacity-0 pointer-events-none";
            }

            return (
              <div key={index} className={classNames}>
                {/* Video */}
                <video
                  src={reel.videoUrl}
                  className="w-full h-full object-cover rounded-t-xl overflow-hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Text Content */}
                <div className="px-4 py-3 text-white rounded-b-xl absolute bottom-0 w-full">
                  <p className="text-base md:text-lg font-medium mb-1">{reel.lineContent}</p>
                  <div className="flex flex-wrap gap-2 text-xs md:text-sm text-yellow-400">
                    {reel.hashtags.map((tag, i) => (
                      <span key={i} className="whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
