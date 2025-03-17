"use client";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { FeaturesCarouselProps } from "types/types";

const FeaturesCarousel: React.FC<FeaturesCarouselProps> = ({
  title,
  subtitle,
  features,
  defaultVisibleItems = 4,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(defaultVisibleItems);

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width <=640) {
      
        setVisibleItems(1);
      } else if (width < 768) {
      
        setVisibleItems(2);
      } else if (width <1440) {
     
        setVisibleItems(3);
      } else {
      
        setVisibleItems(defaultVisibleItems);
      }
    };

    updateVisibleItems();

    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [defaultVisibleItems]);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 1 >= features.length - visibleItems + 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? features.length - visibleItems : prev - 1
    );
  };

  return (
    
    <div className="bg-secondary py-10 px-4 text-white text-center">
     
      {title && (
        <h2 className="text-xl lg:text-[32px] font-semibold font-proxima uppercase">
          {title}
        </h2>
      )}
      {subtitle && (
        <h1 className="text-3xl lg:text-[35px] font-black font-serif mt-5">
          {subtitle} <span className="text-white">& Benefits</span>
        </h1>
      )}
    
      <div className="relative flex items-center justify-center mt-9">
        <button onClick={handlePrev} className="absolute left-0 2xl:left-24 xxll:left-96">
          <IoMdArrowDropleft size={45} className="text-white" />
        </button>
        <Container>
        <div className="flex lg:gap-4 xl:gap-4 overflow-hidden w-full p">
          {features
            .slice(startIndex, startIndex + visibleItems)
            .map((feature, index) => (
              <div
                key={index}
                className="w-full border border-white/50 rounded-lg p-3 sm:p-5 flex flex-col justify-center items-center sm:items-start sm:justify-start mx-8 lg:mx-0"
              >
                <div className="flex justify-center items-center sm:items-start sm:text-start gap-2 sm:gap-4  text-4xl">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    height={600}
                    width={600}
                    className="w-8 h-8 xl:h-10 xl:w-10 object-contain"
                  />
                  <h3 className="text-lg lg:text-26 font-normal font-serif">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm mt-5 text-white/80 font-normal font-proxima text-center sm:text-start">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
        </Container>
        <button onClick={handleNext} className="absolute right-0 2xl:right-24 xxl:right-96">
          <IoMdArrowDropright size={45} className="text-white" />
        </button>
      </div>
     
    </div>
   
  );
};

export default FeaturesCarousel;
