'use client';
import Link from 'next/link';
import React from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';
import { RobotoTitle } from 'typo/font';
interface TopHeroProps {
  title: string | any;
}

const ProjectTopHero: React.FC<TopHeroProps> = ({ title }) => {
  const pathname = title.replace('-', ' ');

  return (
    <div
      className={`relative      
      flex text-center justify-center bg-no-repeat w-full h-[150px] sm:h-[230px] border-b border-[#BDC9BD] `}
    >
      <div className={`relative`}>
        <div className="relative z-20 py-6 sm:py-14 md:py-24">
          <h1
            className={`"text-xl xs:text-3xl md:text-[72px] font-black mt-5 uppercase  ${RobotoTitle.className}`}
          >
            {pathname}
          </h1>
          <div className="flex justify-center items-center px-2 gap-1 xs:gap-2 sm:gap-4 text-14 sm:text-base flex-wrap mt-8 w-fit m-auto">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold capitalize"
            >
              <FaHome size={20} />
              Home
            </Link>{' '}
            <FaAngleRight size={20} />
            <div className="flex items-center gap-2 font-bold capitalize">
              {pathname}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTopHero;
