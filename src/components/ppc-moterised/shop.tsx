"use client"
import React from 'react';
import { ShopItems } from 'data/data';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';

const Shop = () => {
  const scrollToMain = () => {
    const formElement = document.getElementById("Main");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=' my-3 sm:my-10 bg-white py-10'>
      <Container>
      <h2 className='text-xl sm:text-32 lg:text-[40px] font-black font-serif mb-6 text-center px-2 leading-normal'>
      A One-Stop Window Covering Shop
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-4 md:my-5 w-full">
        {ShopItems.map((item, index) => (
          <div key={index}  className="relative w-full  h-[348px] rounded-t-lg overflow-hidden">
            <Image height={500} width={500} src={item.imgUrl} alt="img" className="w-full h-full object-cover" />
            <button className="absolute bottom-0 left-0 bg-black hover:bg-primary text-white py-2 w-full text-center text-lg lg:text-[32px] font-proxima" onClick={scrollToMain}>
              {item.text}
            </button>
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default Shop;
