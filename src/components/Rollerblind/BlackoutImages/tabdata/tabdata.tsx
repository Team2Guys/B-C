"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from "react-icons/fa6";

interface ListItemInfo {
  className?: string;
  imageurl: string;
  text: string;
}

interface TabDataProps {
  label: React.ReactNode;
  Text: string;
  GallaryData: {
    info: ListItemInfo[];
  }[];
}

const TabData: React.FC<TabDataProps> = ({ GallaryData, label, Text }) => {
  const [visibleItem, setVisibleItem] = useState<{ arrayIndex: number; itemIndex: number } | null>(null);
  const [visibleGroups, setVisibleGroups] = useState(3); // Show 3 groups initially
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleTextVisibility = (arrayIndex: number, itemIndex: number) => {
    if (visibleItem?.arrayIndex === arrayIndex && visibleItem?.itemIndex === itemIndex) {
      setVisibleItem(null);
    } else {
      setVisibleItem({ arrayIndex, itemIndex });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setVisibleItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to handle "View More"
  const handleViewMore = () => {
    setVisibleGroups((prev) => prev + 3); // Show 3 more groups
  };

  // Function to handle "View Less"
  const handleViewLess = () => {
    setVisibleGroups(3); // Reset to only 3 groups
  };

  const totalGroups = GallaryData.length;

  return (
    <>
      <div className="py-5 space-y-5">
        <div className="text-center">
          <p className="text-20 md:text-[36px] font-serif">{label}</p>
          <div className="max-w-screen-md mx-auto">
            <p className="text-12 lg:text-15 font-normal mt-2">{Text}</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid (Keeping Groups) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
        {GallaryData.slice(0, visibleGroups).map((array, arrayIndex) => (
          <div key={arrayIndex} className="space-y-2">
            {array.info.map((item, itemIndex) => {
              const isVisible =
                visibleItem?.arrayIndex === arrayIndex && visibleItem?.itemIndex === itemIndex;

              return (
                <div
                  key={itemIndex}
                  className={`w-full ${item.className} bg-cover bg-no-repeat flex flex-col justify-between rounded-md`}
                  style={{ backgroundImage: `url(${item.imageurl})` }}
                >
                  <div />
                  {isVisible && (
                    <div className="bg-white p-2 mx-4 text-center text-15 font-light">
                      {item.text}
                    </div>
                  )}

                  <div className="flex justify-end p-4 cursor-pointer">
                    <div
                      className="h-6 w-6 rounded-full bg-white flex justify-center items-center hover:bg-primary"
                      onClick={() => toggleTextVisibility(arrayIndex, itemIndex)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* View More / View Less Buttons */}
      <div className="flex justify-center items-center mt-5">
        {visibleGroups < totalGroups ? (
          <button
            className="bg-secondary text-white px-4 py-2 text-15 font-bold hover:bg-opacity-90 transition-all"
            onClick={handleViewMore}
          >
            View More
          </button>
        ) : (
          <button
            className="bg-gray-600 text-white px-4 py-2 text-15 font-bold !border-black hover:bg-primary transition-all"
            onClick={handleViewLess}
          >
            View Less
          </button>
        )}
      </div>
    </>
  );
};

export default TabData;
