'use client';
import { Button } from 'components/ui/button';
import { generateSlug } from 'data/data';
import { useRouter } from 'next/navigation';
import React from 'react';

interface VideoAutomationProps {
  className?: string; // className is optional
}
const VideoAutomation: React.FC<VideoAutomationProps> = ({ className }) => {
  const router = useRouter();
  const handleNavigation = (event: any, path: string) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank');
    } else {
      router.push(path);
    }
  };
  return (
    <div
      className={`relative w-full h-auto md:h-[397px] px-1 overflow-hidden mt-10 ${className}`}
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
      <div className="relative z-10 w-full py-3 bg-white/80 my-10 max-w-screen-md mx-auto rounded-3xl">
        <div className="py-2 px-4 text-center">
          <p className="lg:text-[48px] text-25 font-bold">Smart & Motorised</p>
          <p className="lg:text-25 text-18 font-extralight ">
            Move your blinds & curtains to your schedule
          </p>
          <p className="md:mt-4 font-normal lg:text-base text-14 ">
            With smart home automation, you can set schedules, control them with
            your phone, or even use your voice. It’s easy, convenient, and lets
            you manage your blinds and curtains from anywhere.
          </p>
          <div className="flex justify-center items-center  gap-2 md:gap-9 mt-4">
            <Button
              // onClick={(event) => handleNavigation(event, `${generateSlug('Motorised Blinds')} `)}
              onClick={()=>router.push("/automated-blinds")}
              variant={'default'}
              className="py-4 px-2 md:py-7 text-12 text-white"
            >
              Automated Blinds
            </Button>
            <Button
              // onClick={(event) =>handleNavigation(event, `${generateSlug('motorised-curtains')}`)}
              onClick={()=>router.push("/automated-curtains")}

              variant={'outline'}
              className="py-4 px-2 md:py-7"
            >
              Automated Curtains
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAutomation;

