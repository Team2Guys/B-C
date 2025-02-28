"use client";
import Container from "components/Res-usable/Container/Container";
import Link from "next/link";
import { useState } from "react";
import { BlindsTabsProps } from "types/types";

const BlindsTabs: React.FC<BlindsTabsProps> = ({ blindsData, tabCategories }) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredBlinds =
    activeTab === "all"
      ? blindsData.slice(0, 8)
      : blindsData.filter((blind) => blind.category === activeTab);

  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto lg:mb-10 pt-6 pb-10 bg-white">
          {/* Tabs */}
          <div className="flex justify-center items-center space-x-4 mb-6 px-2">
            {tabCategories.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-2 sm:px-4 py-2 text-12 md:text-17 font-semibold rounded-md transition-all ${
                  activeTab === tab.value ? "bg-primary text-white" : "border border-white-1/2 shadow-md hover:bg-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mt-12">
            {filteredBlinds.map((blind) => (
              <div key={blind.id} className="relative overflow-hidden">
                <img src={blind.image} alt={blind.name} className="relative w-full h-[348px] object-cover" />
                <div className="flex justify-center items-center">
                  <div className="absolute bottom-28 lg:bottom-32">
                    <Link
                      href="/request-appointment/"
                      className="px-7 py-3 bg-black font-semibold font-proxima border border-white shadow-md text-white rounded-full xl:text-20"
                    >
                      REQUEST A QUOTE
                    </Link>
                  </div>
                </div>

                <div className="py-4 text-start space-y-2">
                  <h3 className="text-lg font-black lg:text-24 font-juana">{blind.name}</h3>
                  <p className="text-sm lg:text-16 font-normal text-gray-500">Remote control options available</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlindsTabs;
