"use client"
import React from 'react';
import { ShopItems } from 'data/data';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Shop = () => {
  const pathname = usePathname()
  return (
    <div className=' my-3 sm:my-10 bg-white py-10'>
      <Container>
        <h2 className='text-xl sm:text-32 lg:text-[40px] font-black font-serif mb-6 text-center px-2 leading-normal'>
          A One-Stop Window Covering Shop
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-4 md:my-5 w-full">
          {ShopItems.map((item, index) => {
            const redirectUrls = item?.NewUrls?.find((value) => value?.url == pathname)
            const newurls = redirectUrls?.redirected || item.urls || ""
            return (
              <div key={index} className="relative w-full  h-[348px] rounded-t-lg overflow-hidden">
                <Link href={newurls} className="absolute bottom-0 left-0 bg-black hover:bg-primary text-white py-2 w-full text-center text-lg lg:text-[32px] font-proxima">
                <Image height={500} width={500} src={item.imgUrl} alt="img" className="w-full h-full object-cover" />
                  {item.text}
                </Link>
              </div>

            )


          })}
        </div>
      </Container>
    </div>
  );
};

export default Shop;
