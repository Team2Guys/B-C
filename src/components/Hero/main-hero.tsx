"use client";
import Container from "components/Res-usable/Container/Container";
import React from "react";
import Link from "next/link";

const MainHero = () => {
 
  return (
    <div className="relative w-full h-[280px] md:h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://bncvidoes.s3.eu-north-1.amazonaws.com/mainblinds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container className="relative h-full flex flex-col justify-between text-primary-foreground">
        <div className="flex flex-col items-start h-full max-w-72 md:max-w-2xl space-y-2 md:space-y-5 justify-center">
          <h1 className="text-2xl md:text-5xl font-extrabold font-robotoSerif">
            Blinds and Curtains
          </h1>
          <p className="text-19 md:text-2xl  font-roboto md:font-medium text-primary-foreground text-start">
            Your Space, Our Modern Window Solution.
          </p>
          <Link href="/request-appointment/" className="bg-secondary text-primary font-semibold text-xl py-2 md:py-3 px-2 sm:px-6 rounded-md w-fit">
            Book A Free Visit
          </Link>
        </div>
      </Container>

    </div>
  );
};

export default MainHero;