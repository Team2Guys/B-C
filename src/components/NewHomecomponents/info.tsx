"use client";
import Container from "components/Res-usable/Container/Container";
import { useState } from "react";
import Image from "next/image";
import { tabData } from "data/Homedata/tabdata";
import Link from "next/link";

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container className="bg-white">
      <div className="text-start text-primary font-bold font-robotoSerif text-22 lg:text-[40px] my-5 sm:my-7">
        Trusted by 10,000+ Happy Customers
      </div>

      {/* Desktop Tabs */}
      <div className="flex justify-start items-start border-b-2 overflow-x-scroll md:overflow-hidden">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-primary flex flex-row items-center py-2 gap-1 md:gap-2
            whitespace-nowrap w-full px-4 text-17  mx-2
            focus:outline-none font-semibold transition duration-300 z-10 border-b-2 
            ${activeTab === index
                ? "border-secondary font-bold"
                : "border-transparent hover:border-secondary"
              }`}
          >
            <Image
              src={tab.icon}
              alt={`${tab.title} icon`}
              width={40}
              height={40}
              className="w-6 h-6 lg:h-10 lg:w-10 xl:w-12 xl:h-12 sm:mx-auto"
            />
            <p className="text-14 lg:text-15 xl:text-20 font-semibold font-roboto text-primary">{tab.title}</p>
          </button>

        ))}
      </div>

      {/* Desktop Content */}
         <div className="grid md:grid-cols-2 gap-6 lg:gap-16 items-center md:p-8 p-2">
           <div className="flex flex-col justify-center items-start space-y-5 lg:space-y-12">
          <h3 className="font-robotoSerif font-semibold text-20 lg:text-[40px] text-primary">{tabData[activeTab].heading}</h3>
          <p className="text-[16px] font-normal font-roboto lg:text-[20px] text-primary text-justify">{tabData[activeTab].description}</p>
          <Link href={tabData[activeTab].href} className=" border border-secondary text-primary font-semibold text-16 font-roboto lg:text-[24px] px-6 py-2 rounded-xl hover:bg-primary-dark transition">
            {tabData[activeTab].buttonText}
          </Link>
        </div>
        <div className="relative">
          <Image
            src={tabData[activeTab].image}
            alt={tabData[activeTab].heading}
            width={600}
            height={400}
            className="w-full h-[235px] lg:h-[454px] object-cover px-4"
          />
          <div className="absolute bottom-10 -left-10 md:bottom-20 lg:-left-[80px] w-[116px] h-[56px] md:h-[70px] md:w-[140px] lg:h-[100px] lg:w-[200px] bg-primary flex flex-col items-center justify-center -rotate-90">
            <span className="text-white font-semibold text-14 md:text-22 lg:text-[24px] font-robotoSerif">20 Years</span>
            <span className="text-white text-[8px] md:text-10 lg:text-[14px] font-medium md:mt-2 font-roboto">Making Blinds & Curtains</span>
          </div>
        </div>
        
      </div>

      {/* Mobile View: Image on top, accordion-style buttons */}
      {/* <div className="sm:hidden">
        <Image
          src={tabData[activeTab].image}
          alt="Mobile Top Image"
          width={600}
          height={300}
          className="w-full h-[250px] object-cover mb-4"
        />

        {tabData.map((tab, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => setActiveTab(index)}
              className="w-full flex items-center px-4 py-3 text-left"
            >
              <Image src={tab.icon} alt={tab.title} width={30} height={30} className="w-8 h-8" />
              <span className="text-primary font-medium text-[18px]">{tab.title}</span>
            </button>

            {activeTab === index && (
              <div className="px-4 pb-4 space-y-3">
                <h3 className="hidden sm:block text-primary font-semibold text-[20px]">
                  {tab.heading}
                </h3>            <p className="text-[16px] text-primary">{tab.description}</p>
                <Link
                  href={tab.href}
                  className="hidden sm:inline-block bg-secondary text-primary font-medium text-[18px] px-5 py-2 rounded-xl shadow hover:bg-primary-dark transition"
                >
                  {tab.buttonText}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div> */}
    </Container>

  );
}
