import React from 'react';

interface BannerProps {
  className?: string;
  title: string;
}

const VideoBanner: React.FC<BannerProps> = ({ className,title }) => {
  return (
    <div className={`relative w-full h-[300px] sm:h-[681px] overflow-hidden ${className}`}>
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/assets/video/Agsons.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
      <div className="relative z-10 flex items-center h-full">
        <div className=" bg-black/35 w-[300px] sm:w-[479px] 2xl:w-[635px] rounded-e-2xl">
          <div className="py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
            <p className="lg:text-[43px] text-25 font-black drop-shadow-lg capitalize">{title}</p>
            <p className=" text-17 font-bold capitalize tracking-widest">
              made to measure {title}
            </p>
            <p className="mt-4 font-normal lg:text-16 text-14 w-[96%] uppercase">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
