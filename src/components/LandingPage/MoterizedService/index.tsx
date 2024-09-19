'use client'
import Image from 'next/image';
import { TabData } from 'data/data';
import { Button } from 'components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import React, { useState } from 'react';

const MoterizedService = () => {
    const [activeTab, setActiveTab] = useState(0);


  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-4 mx-auto bg-light mb-4 px-4 sm:px-6 lg:px-8 pt-3'>
        <h2 className='font-serif text-black text-center text-lg sm:text-2xl lg:text-4xl'>
          So, What do <span className='font-extrabold'>Moterization systems</span> Do For You
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-center items-center'>
          {TabData.map((arr, index) => (
            <div key={index} className='flex flex-col justify-center items-center space-y-2 sm:space-y-3 lg:space-y-4'>
                <button
            key={index}
            className={`px-4 py-2 text-lg ${
              activeTab === index ? 'text-blue-600 border-b-2 border-blue-600' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
              <Image src={arr.icon} width={50} height={50} alt="image" />
              <p className={index === TabData.length - 1 ? 'text-black' : 'text-primary'}>{arr.title}</p></button>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 justify-center items-center mx-auto lg:max-w-screen-lg px-4'>
          <div className='w-full h-full'>
            <video
              src="/assets/video/Agsons.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className='w-full h-full object-cover'
            />
          </div>

        <div className='flex flex-col justify-normal space-y-4 py-6'>
            <h2 className='font-serif font-extrabold text-lg sm:text-2xl lg:text-3xl'>With a control your Motors</h2>
            <p className='font-light text-sm sm:text-base lg:text-lg'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            </p>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 uppercase'>
              <Button variant={"black"}>Book An Appointment</Button>
              <Button variant={"Gray"}>Call Now</Button>
              <Button className='flex items-center justify-center' variant={"Green"}>
                <FaWhatsapp size={25} />
                <p>Whatsapp</p>
              </Button>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default MoterizedService;