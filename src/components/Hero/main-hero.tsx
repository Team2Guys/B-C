"use client";
import Container from "components/Res-usable/Container/Container";
import CustomModal from "components/ui/Modal";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import StarRatingBar from "./StarRatingBar";
import Link from "next/link";
import { ratings } from "data/new-data";

const MainHero = () => {
  const [open, setOpen] = useState(false);
  const trustIndexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && trustIndexRef.current) {
      // Clear previous content
      trustIndexRef.current.innerHTML = '';

      // Inject the Trustindex script
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?050056e461bc440ede568cd2d0b';
      script.async = true;
      trustIndexRef.current.appendChild(script);
    }
  }, [open]);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/video/mainblinds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container className="relative h-full flex flex-col justify-between text-primary-foreground">
        <div className="flex flex-col justify-center h-full max-w-72 md:max-w-2xl">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 font-robotoSerif">
            Blinds and Curtains
          </h1>
          <p className="text-19 md:text-2xl mb-6 font-roboto text-primary-foreground">
            Fully Guaranteed For Your Peace Of Mind
          </p>
          <Link href="/request-appointment" className="bg-secondary text-primary font-semibold text-2xl py-3 px-6 rounded-md w-fit">
            Book A Free Visit
          </Link>
        </div>
      </Container>
      <div
        className="fixed bottom-64 right-0 flex items-center bg-primary p-2 md:p-4 flex-col justify-center z-50 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col justify-center items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <MdOutlineStarPurple500
              key={star}
              className="text-[#FFD800] text-lg md:text-27"
            />
          ))}
        </div>
        <span className="text-base md:text-[22px] font-bold text-primary-foreground">
          4.9
        </span>
      </div>
         <CustomModal open={open} onClose={() => setOpen(false)} title={<>
         <div className="flex justify-between items-center flex-col space-y-2">
          <p className="font-bold font-robotoSerif text-xl">Let customers speak for us</p>
          <div className="flex  justify-center items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <MdOutlineStarPurple500 key={star} className="text-[#FFD800] text-30" />
            ))}
          </div>
          <p className="font-roboto text-primary">Based on 800 reviews</p>
         </div>
         </>}>
           <div className="space-y-3 mt-5">
            <div className="mt-2 max-w-64 md:max-w-md mx-auto">
            {ratings.map((r) => (
              <StarRatingBar key={r.rating} rating={r.rating} percentage={r.percent} />
            ))}
           </div>
           <Link target="_blank" href="https://www.google.com/maps/place/Blinds+And+Curtains+Dubai/@25.1177148,55.2356858,984m/data=!3m1!1e3!4m8!3m7!1s0x3e5f698d0b075de1:0x223e3563a8be56be!8m2!3d25.1177148!4d55.2356858!9m1!1b1!16s%2Fg%2F11bbt9c0yz?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" className="bg-secondary text-primary font-semibold text-xl py-2 px-6 rounded-md w-fit block text-center mx-auto mt-8">Leave A Google Review</Link>

           <hr/>
           </div>
        <div ref={trustIndexRef} className="w-full h-[350px] lg:h-[500px] overflow-y-scroll p-6" />
      </CustomModal>
    </div>
  );
};

export default MainHero;