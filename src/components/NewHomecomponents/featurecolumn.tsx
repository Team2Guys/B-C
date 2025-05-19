"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";

interface FeatureItem {
  key: string;
  title: string;
}

interface FeaturesColumnProps {
  features: FeatureItem[];
  featureMobile: FeatureItem[];
  popupData: Record<string, string>;
}

export default function FeaturesColumn({
  features,
  featureMobile,
  popupData,
}: FeaturesColumnProps) {
  const [activePopupKey, setActivePopupKey] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Initial check
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const currentFeatures = isMobile ? featureMobile : features;

  return (
    <div className="bg-white divide-y divide-gray-200 text-primary">
      {currentFeatures.map((feature) => (
        <div
          key={feature.key}
          className="relative h-[60px] lg:h-[70px] w-full p-2 flex justify-between md:justify-start md:items-center font-roboto md:font-normal text-12 sm:text-16 xl:text-20 text-start text-nowrap font-medium"
        >
        <span dangerouslySetInnerHTML={{ __html: feature.title }} />

          <div className="relative ml-1 md:ml-2">
            <BsExclamationCircle
              className="w-[14px] h-[14px] sm:w-4 sm:h-4 lg:w-[22px] lg:h-[22px] cursor-pointer transition"
              onClick={(e) => {
                e.stopPropagation();
                setActivePopupKey((prev) =>
                  prev === feature.key ? null : feature.key
                );
              }}
            />
            {activePopupKey === feature.key && (
              <div className="absolute bottom-full left-[600%] md:left-[900%] lg:left-[1100%] mx-auto -translate-x-1/2 mb-2 z-50 bg-white text-black text-14 lg:text-16 xl:text-22 font-roboto font-normal px-3 py-2 lg:p-5 rounded w-[200px] md:w-[300px] lg:w-[600px] shadow-lg">
                <p className="text-start text-wrap w-[90%] lg:w-[97%]">{popupData[feature.key]}</p>
                <button
                  onClick={() => setActivePopupKey(null)}
                  className="absolute top-1 right-1 text-yellow-400 leading-none p-0"
                  aria-label="Close popup"
                >
                  <IoIosCloseCircle className="w-5 h-5 lg:w-7 lg:h-7" />
                </button> 
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
