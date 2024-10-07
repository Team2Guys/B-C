"use client";
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

interface ListItemInfo {
  className?: string;
  imageurl: string;
  text: string;
}

interface TabDataProps {
  label:React.ReactNode;
  Text: string;
  ListData: {
    info: ListItemInfo[];
  }[];
}

const TabData: React.FC<TabDataProps> = ({ ListData,label,Text }) => {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});

  const toggleTextVisibility = (arrayIndex: number, itemIndex: number) => {
    const key = `${arrayIndex}-${itemIndex}`; // Create a unique key for each array-item combination
    setVisibleItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the visibility for the specific key
    }));
  };

  return (
  <>
    <div className="py-5 space-y-5">

      <div className="text-center" >
      <p className="text-20 md:text-[36px] font-serif">{label}</p>
      <div className="max-w-screen-md mx-auto">
        <p className="text-12 lg:text-15 font-normal mt-2">{Text}</p>
      </div>
      </div>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-fit">
        {ListData.map((array, arrayIndex) => (
          <div key={arrayIndex} className="space-y-2">
            {array.info.map((item, itemIndex) => {
              const isVisible = visibleItems[`${arrayIndex}-${itemIndex}`]; // Check if the item should be visible

              return (
                <div
                  key={itemIndex}
                  className={`w-full ${item.className} bg-cover bg-no-repeat flex flex-col justify-between rounded-md `}
                  style={{ backgroundImage: `url(${item.imageurl})` }}
                >
                  <div />

                  {/* Conditionally render the text based on the clicked array-item */}
                  {isVisible && (
                    <div className="bg-white p-2 mx-4 text-center text-15 font-light">{item.text}</div>
                  )}

                  <div className="flex justify-end p-4 cursor-pointer ">
                    <div className='h-6 w-6 rounded-full bg-white flex justify-center items-center hover:bg-primary' onClick={() => toggleTextVisibility(arrayIndex, itemIndex)} ><FaPlus/></div>

                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabData;
