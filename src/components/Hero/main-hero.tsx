"use client";
import Container from "components/Res-usable/Container/Container";
import React from "react";
import Link from "next/link";

const MainHero = () => {
 
  return (
    <div className="relative w-full h-[480px] md:h-[70vh] overflow-hidden">
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
        <div className="flex flex-col justify-center items-center sm:items-start h-full max-w-72 md:max-w-2xl space-y-2 md:space-y-5">
          <h1 className="text-2xl md:text-5xl font-bold font-robotoSerif">
            Blinds and Curtains
          </h1>
          <p className="text-19 md:text-2xl  font-roboto text-primary-foreground text-center sm:text-start">
            Fully Guaranteed For Your Peace Of Mind
          </p>
          <Link href="/request-appointment" className="bg-secondary text-primary font-semibold text-xl py-2 md:py-3 px-2 sm:px-6 rounded-xl w-fit">
            Book A Free Visit
          </Link>
        </div>
      </Container>

    </div>
  );
};

export default MainHero;