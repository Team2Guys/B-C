"use client";
import { Image } from "antd";
import React, { useState } from "react";

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
  const [visibleGroups, setVisibleGroups] = useState(3); 
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleViewMore = () => {
    setVisibleGroups((prev) => prev + 3); 
  };

  const handleViewLess = () => {
    setVisibleGroups(3); 
  };

  const totalGroups = GallaryData.length;

  const openModal = (imageurl: string) => {
    setSelectedImage(imageurl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="py-5 space-y-5">
        <div className="text-center">
          <p className="sm:text-20 md:text-[24px] lg:text-[36px] font-serif">{label}</p>
          <div className="max-w-screen-md mx-auto">
            <p className="text-12 lg:text-15 font-normal mt-2">{Text}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
        {GallaryData.slice(0, visibleGroups).map((array, arrayIndex) => (
          <div key={arrayIndex} className="space-y-2">
            {array.info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`w-full ${item.className} relative bg-cover bg-no-repeat flex flex-col justify-between items-center rounded-md group`}
                style={{ backgroundImage: `url(${item.imageurl})` }}
                onClick={() => openModal(item.imageurl)} 
              >
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <div className="bg-white p-2 mx-4 text-center text-15 font-light">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        {visibleGroups < totalGroups ? (
          <button
            className="bg-secondary text-white px-4 py-3 text-15 font-bold hover:bg-primary transition-all rounded-sm"
            onClick={handleViewMore}
          >
            View More
          </button>
        ) : (
          <button
            className="bg-secondary text-white px-4 py-3 text-15 font-bold hover:bg-primary rounded-sm transition-all"
            onClick={handleViewLess}
          >
            View Less
          </button>
        )}
      </div>
      { selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <Image
            src={selectedImage}
            alt="Zoomed"
            className="max-w-[90vh] max-h-[90vh] object-contain"
            preview={{ visible: true, onVisibleChange: (visible) => !visible && closeModal() }}/>
            </div>
            </div>
          )}
          </>
);
};

export default TabData;
