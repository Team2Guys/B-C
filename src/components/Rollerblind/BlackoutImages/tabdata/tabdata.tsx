"use client";
// import { Image } from "antd";
import React, { useState } from "react";
import "../../../../style/gallery.css";
import Image from "next/image";
import SelectedImage from "./SelectedImage";

// interface ListItemInfo {
//   className?: string;
//   imageurl: string;
//   text: string;
// }

interface TabDataProps {
  label: React.ReactNode;
  Text: string;
  GallaryData: any[];
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

  const openModal = (imageurl: string) => {
    setSelectedImage(imageurl);
  };


  const closeModal = () => {
    setSelectedImage(null);
  };
  


  const splitIntoColumns = (images: any[], numColumns: number): any[][] => {
    const columns: any[][] = Array.from({ length: numColumns }, () => []);
    images?.forEach((image, index) => {
      columns[index % numColumns].push(image);
    });
    return columns;
  };

  const columns = splitIntoColumns(GallaryData[0].images, 3);

  const totalGroups = columns.length;

  console.log(totalGroups, "totalGroups")



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
      <div className="row">
        {columns.map((column, arrayIndex) => (
          <div className="Gallery_column" key={arrayIndex}>

            {column.slice(0, visibleGroups).map((image, index) => {
              return (
                <div key={index} className="image-container cursor-pointer bg-black">
                  <Image                    key={index}
                    src={image.imageurl}
                    alt={`Image ${index}`}
                    style={{ width: '100%', height: 'auto' }}
                    width={500}
                    height={500}
                    loading='eager'
                    className="object-cover"
                    onClick={() => openModal(image.imageurl)} 
                  />
                </div>
              ) 
            })}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        {visibleGroups <= totalGroups ? (
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
      <SelectedImage selectedImage={selectedImage} closeModal={closeModal} />
          )}

          </>
);
};

export default TabData;
