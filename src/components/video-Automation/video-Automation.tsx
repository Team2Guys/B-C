'use client';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React from 'react';

interface VideoAutomationProps {
  className?: string; // className is optional
}
const VideoAutomation: React.FC<VideoAutomationProps> = ({ className }) => {
  // const router = useRouter();
  // const handleNavigation = (event: any, path: string) => {
  //   if (event.ctrlKey || event.metaKey) {
  //     window.open(path, '_blank');
  //   } else {
  //     router.push(path);
  //   }
  // };
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
          <p className="lg:text-[48px] text-22 font-bold">Smart & Motorised</p>
          <p className="lg:text-25 text-16 font-extralight ">
            Move your blinds & curtains to your schedule
          </p>
          <p className="md:mt-4 font-normal lg:text-base text-12 ">
            With smart home automation, you can set schedules, control them with
            your phone, or even use your voice. It’s easy, convenient, and lets
            you manage your blinds and curtains from anywhere.
          </p>
          <div className="flex justify-center items-center  gap-2 md:gap-9 mt-4">
            <Link  href={'/automated-blinds'} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-12 sm:text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-primary hover:bg-primary/90 h-10 py-4 px-2 md:py-7 text-white"  >
              Automated Blinds
            </Link>
            <Link  href={'/automated-curtains'}  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-12 sm:text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border border-black hover:bg-white hover:text-black h-10 py-4 px-2 md:py-7">           
              Automated Curtains
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAutomation;

