'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';

interface TopHeroProps {
  title: string | any ;
  image: StaticImageData;
  category?: string;
  home?: string;
  pagename?: string;
  backgroundposition?: string;
}

const TopHero: React.FC<TopHeroProps> = ({
  title,
  image,
  category,
  home,
  pagename,
  backgroundposition,
}) => {
  const pathname = title.replace('-', ' ');
  return (
    <div
      className="relative text-center text-black custom-breadcrum h-72 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundPosition: backgroundposition
          ? backgroundposition
          : 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-lightgrey opacity-30 z-10"></div>
      <div className="relative z-20 py-24">
        <h1 className="text-2xl xs:text-5xl md:text-6xl lg:text-7xl font-black mt-5 uppercase">
          {pathname}
        </h1>
        <div className="flex justify-center items-center gap-4 mt-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold capitalize"
          >
            <FaHome size={20} />{' '}
            {home ? home.charAt(0).toUpperCase() + home?.slice(1) : 'Home'}
          </Link>
          <FaAngleRight size={20} />
          <p className="font-bold capitalize">{pathname ? pathname : title}</p>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
