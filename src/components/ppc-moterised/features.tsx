"use client";
import Container from "components/Res-usable/Container/Container";
import { useState, useEffect } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesCarouselProps {
  title: string;
  subtitle: string;
  features: Feature[];
  defaultVisibleItems?: number;
}

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
        <h1 className="text-3xl lg:text-[48px] font-black font-juana mt-5">
          {subtitle} <span className="text-white/80">Benefits</span>
        </h1>
      )}
    
      <div className="relative flex items-center justify-center mt-9">
        <button onClick={handlePrev} className="absolute left-0">
          <IoMdArrowDropleft size={45} className="text-white" />
        </button>
        <Container>
        <div className="flex lg:gap-4 xl:gap-4 overflow-hidden w-full p">
          {features
            .slice(startIndex, startIndex + visibleItems)
            .map((feature, index) => (
              <div
                key={index}
                className="lg:h-[190px] xl:h-[171px] border border-white/50 rounded-lg p-5 flex flex-col justify-start items-start mx-8 lg:mx-0"
              >
                <div className="flex text-start gap-2  text-4xl">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 object-contain"
                  />
                  <h3 className="text-lg lg:text-26 font-normal font-juana">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm mt-5 text-white/80 font-normal font-proxima text-start">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
        </Container>
        <button onClick={handleNext} className="absolute right-0">
          <IoMdArrowDropright size={45} className="text-white" />
        </button>
      </div>
     
    </div>
   
  );
};

export default FeaturesCarousel;
