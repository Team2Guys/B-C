import React, { useState } from 'react';
import { supportItems } from 'data/data';
import { FaStar } from 'react-icons/fa';

const Support = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-10 gap-5 justify-items-center px-2">
      {supportItems.map((item, index) => (
        <div
          key={index}
          className="group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`w-full h-full rounded-tl-3xl py-4 rounded-br-3xl xs:py-5 md:py-10 space-y-3 md:space-y-5 flex flex-col justify-center items-center px-2 md:px-5 duration-700
              ${hoveredIndex === null && index === 0 ? 'bg-white' : 'bg-transparent group-hover:bg-white'}
              ${hoveredIndex === index ? 'bg-white' : ''}
            `}
          >
            <div
              className={`shadow-md rounded-full flex justify-center items-center h-12 w-12 text-secondary duration-700
                ${hoveredIndex === null && index === 0 ? 'bg-secondary text-white' : 'bg-white group-hover:bg-secondary group-hover:text-white'}
                ${hoveredIndex === index ? 'bg-secondary text-white' : ''}
              `}
            >
              <FaStar size={25} />
            </div>
            <h2 className="font-bold xs:text-20 md:text-18 lg:text-center lg:text-16">{item.title}</h2>
            <p className="text-12 md:text-14 text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
