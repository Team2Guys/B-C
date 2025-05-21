"use client"
import React, { useState } from "react";
import { HiMinusSmall } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { FAQ_DATA, TABS } from "data/Homedata/tabdata";
import Image from "next/image";

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
      <div className="">
      <div className="flex flex-nowrap border-gray-300 mb-3 justify-between border-b-2 border-primary overflow-x-auto scrollbar-hide font-roboto text-16 lg:text-13 xl:text-20">
      {TABS.map((tab) => (
      <button
      key={tab}
      onClick={() => {
        setActiveTab(tab);
        setOpenIndex(0);
      }}
      className={`
              flex sm:block items-center gap-3 md:py-2 
              whitespace-nowrap w-full px-4 sm:justify-center text-center mx-auto
              focus:outline-none transition duration-300 z-50 border-b-2 text-primary text-16 md:text-20
              ${
                activeTab === tab
                  ? "border-secondary font-bold"
                  : "border-transparent hover:border-secondary font-normal"
              }`}
               dangerouslySetInnerHTML={{ __html: tab }}
          >
          
       </button>
       ))}
      </div>
      <div className="flex justify-center text-center sm:hidden">
      <Image height={1000} width={1000} src="/assets/Homenew/dots.webp" alt="" className="h-2 w-7 "/></div>
      <h2
        className="text-2xl font-bold lg:text-[38px] text-center my-5 sm:my-10 text-primary lg:leading-10 font-robotoSerif"
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

