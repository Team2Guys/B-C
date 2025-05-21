"use client"
import React, { useState } from "react";
import { HiMinusSmall } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { FAQ_DATA, TABS } from "data/Homedata/tabdata";

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
      <div className="">
    <div className="relative mb-3 overflow-x-auto scrollbar-hide font-roboto">
  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-primary z-0" />
  <div className="flex flex-nowrap justify-between relative z-10">
    {TABS.map((tab) => (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab);
          setOpenIndex(0);
        }}
        className={`relative group flex sm:block items-center gap-3 md:py-2 
          whitespace-nowrap w-full px-4 sm:justify-center text-center mx-auto
          focus:outline-none transition duration-300 text-primary`}
      >
        <span
          className={`transition-all duration-200 text-16 md:text-20 font-normal font-roboto ${
            activeTab === tab ? "font-bold" : "font-normal"
          }`}
          dangerouslySetInnerHTML={{ __html: tab }}
        />
        <span
          className={`absolute bottom-0 left-0 w-full h-[4px] transition-all duration-300 ${
            activeTab === tab
              ? "bg-secondary"
              : "bg-transparent group-hover:bg-secondary"
          }`}
        />
      </button>
    ))}
  </div>
    </div>
      <h2
        className="text-2xl font-bold lg:text-[38px] text-center my-5 sm:my-10 text-primary lg:leading-10 2xl:leading-normal font-robotoSerif"
        dangerouslySetInnerHTML={{ __html: activeTab }}
      />
      <div className="space-y-4">
        {FAQ_DATA[activeTab]?.map((faq, index) => (
    <div key={index} className="overflow-hidden border border-primary rounded-xl"> 
    <button
      onClick={() => toggleFaq(index)}
      className={`w-full flex justify-between px-4 py-3 text-left rounded-b-md transition-all duration-200 text-14 sm:text-20 font-roboto font-bold ${
        openIndex === index
          ? "text-white bg-primary hover:bg-primary/90"
          : "text-primary bg-[#F5F5F5] hover:bg-gray-50"
      }`}
    >
      <p className="w-[90%] sm:w-full">{faq.question}</p>
      {openIndex === index ? <HiMinusSmall /> : <FiPlus className="h-4 w-4" />}
    </button>
    {openIndex === index && (
      <div className="px-4 py-4 text-primary bg-white text-14 font-normal font-roboto sm:text-20">
        <p>{faq.answer}</p>
      </div>
    )}
  </div>
))}
      </div>
    </div>
  );
};


export default FaqTabs;

