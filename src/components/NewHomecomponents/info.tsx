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
      <div className="text-center text-primary font-bold font-robotoSerif text-[24px] lg:text-[40px] my-5 sm:my-7">
        Trusted by 10,000+ Happy Customers
      </div>

      {/* Desktop Tabs */}
      <div className="hidden sm:flex justify-between text-center border-b-4 border-primary">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-black flex sm:block items-center gap-3 py-2 md:py-6 
    whitespace-nowrap w-full px-4 text-17 sm:justify-center text-center mx-auto
    focus:outline-none font-semibold transition duration-300 z-10 border-b-4 
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
              className="w-10 h-10 lg:w-16 lg:h-16 sm:mx-auto"
            />
            <p className="text-[18px] lg:text-[24px] text-primary text-wrap 2xl:px-16 lg:px-6 :px-0">{tab.title}</p>
          </button>

        ))}
      </div>

      {/* Desktop Content */}
      <div className="hidden sm:grid md:grid-cols-2 gap-6 lg:gap-16 items-center md:p-8 p-2">
        <div className="relative">
          <Image
            src={tabData[activeTab].image}
            alt={tabData[activeTab].heading}
            width={600}
            height={400}
            className="w-full h-[343px] lg:h-[454px] object-cover"
          />
          <div className="absolute bottom-[50px] lg:bottom-20 -right-[50px] lg:-right-24 w-[197px] h-[95px] bg-primary flex flex-col items-center justify-center rounded -rotate-90">
            <span className="text-white font-semibold text-[24px]">20 Years</span>
            <span className="text-white text-[14px] font-medium mt-2">Making Blinds & Curtains</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start space-y-5 lg:space-y-12">
          <h3 className="font-robotoSerif font-semibold text-[24px] lg:text-[40px] text-primary">{tabData[activeTab].heading}</h3>
          <p className="text-[18px] lg:text-[20px] text-primary text-justify">{tabData[activeTab].description}</p>
          <Link href={tabData[activeTab].href} className="bg-secondary text-primary font-semibold text-[20px] lg:text-[24px] px-6 py-2 rounded-xl shadow hover:bg-primary-dark transition">
            {tabData[activeTab].buttonText}
          </Link>
        </div>
      </div>

      {/* Mobile View: Image on top, accordion-style buttons */}
      <div className="sm:hidden">
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
              className="w-full flex items-center gap-3 px-4 py-3 text-left"
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
      </div>
    </Container>

  );
}
