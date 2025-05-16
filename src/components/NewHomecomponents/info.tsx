"use client";
import Container from "components/Res-usable/Container/Container";
import { useState } from "react";
import Image from "next/image";
import { tabData } from "data/Homedata/tabdata";
import Link from "next/link";

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container className="bg-white ">
      <div className="flex justify-center items-center font-bold font-robotoSerif  text-[24px] lg:text-[40px] my-5 sm:my-7 text-center text-primary">
        Trusted by 10,000+ Happy Customers
      </div>
      <div className="flex justify-between  text-center overflow-x-scroll md:overflow-hidden ">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`text-black py-2 md:py-6 whitespace-nowrap w-full px-4 text-17 hover:text-black focus:outline-none transition duration-300  z-10 ${
              activeTab === index
                ? "border-b-4 border-secondary text-black font-bold"
                : "border-b-4 border-transparent hover:border-secondary font-black"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <Image
              src={tab.icon}
              alt={`${tab.title} icon`}
              width={40}
              height={40}
              className="mb-2 h-10 w-10 lg:w-16 lg:h-16 mx-auto"
            />
            <span className="md:font-medium  font-normal lg:font-roboto text-[18px] lg:text-[24px] text-primary" dangerouslySetInnerHTML={{__html: tab.title}} />
          </button>
        ))}
      </div>
      <hr className=" relative bottom-1 border-b-2 border-primary" />
      {/* Active Tab Content */}
      <div className="md:p-8 p-2 grid md:grid-cols-2 gap-6 lg:gap-16 items-center">
        <div className="relative">
        <Image
         src={tabData[activeTab].image}
        alt={tabData[activeTab].heading}
        width={600}
        height={400}
        className="w-full h-[343px] lg:h-[454px] object-cover"
  />

  <div className="absolute bottom-[50px] lg:bottom-20 -right-[50px] lg:-right-24 w-[197px] h-[95px] bg-primary flex flex-col items-center justify-center rounded -rotate-90">
    <span className="text-white font-semibold font-roboto text-[24px] whitespace-nowrap">
      20 Years
        </span>
        <span className="text-white text-[14px] font-medium font-roboto whitespace-nowrap mt-2">
      Making Blinds & Curtains
         </span>
         </div>
        </div>
        
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-3 sm:space-y-5 lg:space-y-12">
          <h3 className="font-robotoSerif font-semibold text-[24px] lg:text-[40px] text-primary text-center sm:text-start">{tabData[activeTab].heading}</h3>
          <p className="text-[18px] font-normal lg:text-[20px] font-roboto lg:font-medium text-primary text-justify">{tabData[activeTab].description}</p>
          <Link href={tabData[activeTab].href} className="bg-secondary text-primary font-roboto text-[20px] lg:text-[24px] font-semibold px-6 py-2 rounded-xl shadow hover:bg-primary-dark transition">
            {tabData[activeTab].buttonText}
          </Link>
        </div>
      </div>
    </Container>
  );
}
