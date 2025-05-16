"use client";

import Container from "components/Res-usable/Container/Container";
import { workingProcessData } from "data/SellerSlider";
import Image from "next/image";

export default function SimpleSteps() {
  return (
    <Container className="mt-5 md:mt-10">
      <div className="mx-auto px-4">
     <div className="py-7">
         <h2 className="sm:text-5xl text-2xl font-robotoSerif font-bold text-primary text-center">
          {workingProcessData.heading}
        </h2>
        <p className="sm:text-xl text-lg mt-3 sm:mt-6 mb-2 text-center font-roboto text-primary sm:w-1/2 mx-auto">
          {workingProcessData.subheading}
        </p>
     </div>

        <div className="flex sm:flex-row flex-col justify-center gap-8 items-center sm:bg-[#FFFFF0]">
          <div className="relative w-full h-[350px] md:h-[500px] sm:w-1/2">
            <video
              src={workingProcessData.videoUrl}
              className="w-full h-full object-cover "
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="w-full sm:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center font-robotoSerif">
              Just <span className="text-[#F1B42F]">4</span> Simple Steps
            </h3>
            <div>
              {workingProcessData.steps.map((step, idx) => (
                <div key={idx} className="flex items-baseline gap-4 mt-1">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="rounded-full font-roboto bg-[#F1B42F66] p-4 text-12 text-black font-semibold flex items-center justify-center shadow-md min-w-[65px] min-h-[65px]">
                      {step.step}
                    </div>
                    <Image
                      src={step.iconimage}
                      alt="Working Process"
                      width={100}
                      height={100}
                      className={`w-auto h-7 ${
                        idx === workingProcessData.steps.length - 1 ? "hidden" : ""
                      }`}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-semibold font-robotoSerif">{step.title}</p>
                    <p className="text-base text-primary font-roboto">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
    
  );
}
