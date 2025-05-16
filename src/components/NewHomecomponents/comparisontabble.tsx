"use client"
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { BiSolidCheckCircle } from "react-icons/bi";
import Container from "components/Res-usable/Container/Container";
import { GoQuestion } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import { popupData } from "data/Homedata/tabdata";

const features = [
  { title: "Installation", key: "installation" },
  { title: "Fabrics & Styles", key: "fabrics" },
  { title: "Production", key: "production" },
  { title: "Warranty", key: "warranty" },
  { title: "Quality Assurance", key: "quality" },
  { title: "Service Time", key: "service" },
  { title: "Pricing", key: "pricing" },
  { title: "Uninstall/Re-install", key: "install" },
];


const blindsData = [
  "Just 1 - 2 Days",
  "Over 3,000+",
  "In-House Manufacturing",
  "5+ Years",
  "BiSolidCheckCircle",
  "7 x 24h",
  <Image
    key="blinds-image"
    src="/assets/Home/2D.webp"
    alt="Blinds Pricing"
    width={1000}
    height={1000}
    className="h-[11px] w-6 lg:h-6 lg:w-10 mx-auto"
  />,
  "Within 2 Years",
];

const othersData = [
  "4 - 5 Days",
  "Limited selection",
  "Mostly Outsourced",
  "12-months",
  "IoIosCloseCircle",
  "6 x 8h",
  <Image
    key="others-image"
    src="/assets/Home/4D.webp"
    alt="Others Pricing"
    width={2000}
    height={2000}
    className="mx-auto w-10 lg:h-12 lg:w-16"
  />,
  "IoIosCloseCircle",
];

export default function ComparisonTable() {
  const [activePopupKey, setActivePopupKey] = useState<string | null>(null);
  return (
    <Container>
      <section className="py-2 lg:py-12 text-center">
        <h2 className="font-robotoSerif font-semibold text-24 lg:font-bold text-primary xl:text-[48px] mt-3 mb-6 xl:my-7 lg:text-[40px]">
          See How We Are Different
        </h2>

       <div className="grid grid-cols-3 border-b border-gray-200">
      {/* Header Row */}
      <div className="bg-white h-[60px] lg:h-[70px] border-b"></div>
      <div className="bg-yellow-50 h-[60px] lg:h-[70px] flex justify-center items-center font-bold font-roboto text-18 xl:text-[29px] text-primary border-b">
      Blinds and Curtains
    </div>
    <div className="bg-white h-[60px] lg:h-[70px] flex justify-center items-center font-bold font-roboto text-18 xl:text-[29px] text-primary border-b">
    Others
    </div>
    

  {/* Left Column - Features */}
<div className="bg-white divide-y divide-gray-200 text-primary">
  {features.map((feature) => (
    <div
      key={feature.key}
      className="relative h-[60px] lg:h-[70px] w-full p-2 flex justify-center items-center font-roboto font-normal text-14 sm:text-18 xl:text-[29px]"
    >
      <span>{feature.title}</span>

      <div className="relative ml-2">
        <GoQuestion
          className="w-4 h-4 lg:w-7 lg:h-7 cursor-pointer text-yellow-500 hover:text-yellow-600 transition"
          onClick={(e) => {
            e.stopPropagation();
            setActivePopupKey((prev) => (prev === feature.key ? null : feature.key));
          }}
        />

        {activePopupKey === feature.key && (
          <div className="absolute bottom-full left-[400%] md:left-1/2 mx-auto -translate-x-1/2 mb-2 z-50 bg-yellow-50 text-black text-14 lg:text-18 font-roboto font-normal px-4 py-2 rounded w-[200px]  md:w-[300px] shadow-lg">
            <p className="text-start ">{popupData[feature.key]}</p>
            <button
              onClick={() => setActivePopupKey(null)}
              className="absolute top-1 right-1 text-yellow-400 leading-none p-0"
              aria-label="Close popup"
            >
              <IoIosCloseCircle className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  ))}
</div>
  {/* Middle Column - Blinds */}
  <div className="bg-yellow-50 divide-y divide-gray-200 text-primary">
    {blindsData.map((item, index) => (
      <div
        key={index}
        className="h-[60px] lg:h-[70px] w-full p-2 flex justify-center items-center font-roboto font-normal text-14 sm:text-18 xl:text-[29px]"
      >
        {typeof item === "string" ? (
          item === "BiSolidCheckCircle" ? (
            <BiSolidCheckCircle className="text-yellow-400 w-6 h-6 lg:w-9 lg:h-9 mx-auto" />
          ) : (
            item
          )
        ) : (
          item
        )}
      </div>
    ))}
  </div>

  {/* Right Column - Others */}
  <div className="bg-white divide-y divide-gray-200 text-primary">
    {othersData.map((item, index) => (
      <div
        key={index}
        className="h-[60px] lg:h-[70px] w-full font-roboto flex justify-center items-center font-normal text-14 sm:text-18 xl:text-[29px] p-2"
      >
        {typeof item === "string" ? (
          item === "IoIosCloseCircle" ? (
            <IoIosCloseCircle className="text-yellow-400 w-6 h-6 lg:w-9 lg:h-9 mx-auto" />
          ) : (
            item
          )
        ) : (
          item
        )}
      </div>
    ))}
    </div>
    </div>
    {/* button */}
      <div className="py-5 px-3 lg:mt-7">
        <Link href="/request-appointment" className="bg-secondary text-black font-semibold py-2 px-4 rounded-xl text-primary font-roboto text-20 xl:text-[24px]">
          Book A Free Visit
        </Link>
      </div>
      </section>
    </Container>
  );
}

