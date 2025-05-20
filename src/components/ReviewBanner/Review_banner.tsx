
import Container from "components/Res-usable/Container/Container";
import { ReviewBackground, ReviewBackgrounddashktop } from "components/svg/review-background";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function ReviewBanner() {

  
  return (
    <div className="pt-7 sm:pt-10">
      <Container className="grid grid-cols-1 md:flex flex-row">
      <div className="md:w-[40%] lg:w-[30%]  xl:w-[20%] pr-6 lg:pr-0 flex flex-col gap-3 sm:gap-6 items-start relative mt-2 md:border-r">
        <Image src={"/assets/images/logo-review.png"} className="relative top-0 left-0" width={100} height={40} alt="logo"/>
        <div className="space-y-3 text-center">
        <Image src={"/assets/images/googleReview/google.png"} width={235} height={34} alt="logo"/>
        <div className="flex  justify-start items-start">
          {[1, 2, 3, 4, 5].map((star) => (
            <MdOutlineStarPurple500 key={star} className="text-[#FFD800] text-36" />
          ))}
        </div>
        <p className="font-roboto text-20 font-normal md:text-xl text-start">Rating <span className="font-medium">4.9 | 760</span> reviews <br/> Window treatment store</p>
        </div>
      </div>
       <div className="text-start mt-5 md:mt-0 border-t md:border-t-0 pt-6 md:w-[60%] lg:w-[70%] xl:w-[80%] pl-6 lg:pl-20 lg:space-y-5">
        <p className="font-bold font-robotoSerif text-24 md:text-2xl text-primary ">Imran Ahmad</p>
        <p className="font-roboto text-16 font-normal text-lg md:text-xl text-primary ">Amazing experience from start to finish Ryan and Ben did a great job with installation leaving drive and garage clean</p>
        <Link target="_blank" href={"https://www.google.com/maps/place/Blinds+And+Curtains+Dubai/@25.1177148,55.2356858,984m/data=!3m1!1e3!4m8!3m7!1s0x3e5f698d0b075de1:0x223e3563a8be56be!8m2!3d25.1177148!4d55.2356858!9m1!1b1!16s%2Fg%2F11bbt9c0yz?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"} className="border border-secondary py-2 px-4 rounded-md font-roboto font-semibold text-16 block w-fit mt-3">Go to Google Reviews</Link>
      </div>
      </Container>
     <div className=" mt-5 md:mt-10 relative ">
  <ReviewBackground className="block md:hidden" />
  <ReviewBackgrounddashktop className="hidden md:block"/>
  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-robotoSerif text-center text-xs md:text-24 xl:text-32 font-semibold xl:font-bold text-primary-foreground md:w-full">
    Rated Excellent by Dubai Homeowners
  </p>    
</div>
    </div>
  );
}
