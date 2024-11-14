import React from 'react';
import Container from '../Container/Container';
import { supportItems } from 'data/data';
import { FaStar } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="mt-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-10 gap-5 justify-items-center px-2">
      {supportItems.map((item, index) => (
        <div key={index} className="group">
          <div
            className={`w-full h-full rounded-tl-3xl py-4 rounded-br-3xl xs:py-5 md:py-10 space-y-3 md:space-y-5 flex flex-col justify-center bg-transparent items-center px-2 md:px-5 duration-700 ${index === 0 ? 'bg-white' : 'group-hover:bg-white'}`}
          >
            <div className={` shadow-md rounded-full flex justify-center items-center h-12 w-12 text-secondary group-hover:bg-secondary group-hover:text-white duration-700 ${index === 0 ? 'bg-secondary text-white' : 'bg-white'}`}>
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
