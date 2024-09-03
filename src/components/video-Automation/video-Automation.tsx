'use client';
import { Button } from 'components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

interface VideoAutomationProps {
  className?: string; // className is optional
}
const VideoAutomation: React.FC<VideoAutomationProps> = ({ className }) => {
  const router = useRouter();
  return (
    <div
      className={`relative w-full h-auto md:h-[397px] overflow-hidden mt-10 ${className}`}
    >
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/assets/video/Agsons.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
      <div className="relative z-10 w-full py-3 bg-white/80 my-10 max-w-screen-md mx-auto rounded-2xl">
        <div className="py-2 px-4 text-center">
          <p className="lg:text-[48px] text-25 font-bold">Automation</p>
          <p className="lg:text-25 text-18 font-extralight ">
            Smart home & office automation.
          </p>
          <p className="mt-4 font-normal lg:text-base text-14 ">
            Controlling the natural mild or even the temperature within a room
            maybe computerized through the usage of blinds and curtains. When
            you’ve chosen the style of blinds and material that you want, we
            prepare a control solution to fit your needs.
          </p>
          <div className="flex justify-center items-center  gap-2 md:gap-9 mt-4">
            <Button
              onClick={() => router.push('/motorised-blinds')}
              variant={'default'}
              className="py-4 px-2 md:py-7"
            >
              Motorised Blinds
            </Button>
            <Button variant={'outline'} className="py-4 px-2 md:py-7">
              Motorised Curtains
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAutomation;
