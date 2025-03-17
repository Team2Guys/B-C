"use client";
import Container from "components/Res-usable/Container/Container";
import { Button } from "components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { BlindsTabsProps } from "types/types";

const BlindsTabs: React.FC<BlindsTabsProps> = ({ blindsData, tabCategories }) => {
  const [activeTab, setActiveTab] = useState<string>("type");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredBlinds =
    activeTab === "type"
      ? blindsData
      : blindsData.filter((blind) => blind.category === activeTab);

  const totalPages = Math.min(2, Math.ceil(filteredBlinds.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlinds = filteredBlinds.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto lg:mb-10 pt-6 pb-5 sm:pb-10 bg-white">
          {/* Tabs */}
          <div className="flex justify-center items-center space-x-4 mb-6 px-2">
            {tabCategories.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  setCurrentPage(1); 
                }}
                className={`px-2 sm:px-4 py-2 text-12 md:text-17 font-semibold rounded-md transition-all ${
                  activeTab === tab.value ? "bg-primary text-white" : "border border-white-1/2 shadow-md hover:bg-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Blind Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mt-12">
            {paginatedBlinds.map((blind) => (
              <div key={blind.id}>
              <div  className="relative">
                <Image src={blind.image} alt={blind.name} height={500} width={500} className="w-full h-[348px] object-cover" />
                <div className="flex justify-center items-center">
                  <div className="absolute bottom-8">
                    <Link
                      href="/request-appointment/"
                      className="px-7 py-3 bg-black font-semibold font-proxima border border-white shadow-md text-white rounded-full lg:text-sm xl:text-20"
                    >
                      REQUEST A QUOTE
                    </Link>
                  </div>
                  </div>
                </div>

                <div className="py-4 text-start space-y-2">
                <Link href={`${blind.href}`}>
               <h3 className="text-lg font-black lg:text-24 font-serif">{blind.name}</h3>
              </Link>
              <p className="text-sm lg:text-16 font-normal text-gray-500">
              {["Roller Blinds", "Wooden Blinds", "Roman Blinds", "Day/Night Blinds", "Triple Pinch Pleat Curtains", "Double Pinch Pleat Curtains", "Pencil Pleat Curtains", "Ripplefold/Wave Curtains"].includes(blind.name)
               ? "Remote control options available"
               : "Custom options available"}
               </p>
               </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex md:justify-center items-center mt-10 lg:space-x-3 overflow-hidden justify-center">
              <Button
                variant="secondary"
                className="w-14 sm:w-[55px] h-8 sm:h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaArrowLeft size={16} />
              </Button>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  className={`w-10 sm:w-[55px] h-8 sm:h-[55px] text-16 ${
                    currentPage === index + 1
                      ? "bg-secondary text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                variant="secondary"
                className="w-14 sm:w-[55px] h-8 sm:h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <FaArrowRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BlindsTabs;
   