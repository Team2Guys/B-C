'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';
import { UpdateShutterTitle } from './menu-card';
import { ICategory } from 'types/types';
import { TopHeroLink } from 'data/data';
import { Skeleton } from 'antd';

interface TopHeroProps {
  title: string | any;
  image: StaticImageData;
  category?: ICategory | undefined;
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
  const [pageName, setPageName] = useState<string[]>([]);
  const [categoryArray, setCategoryArray] = useState<ICategory>();

  const pathname = title.replace('-', ' ');
  console.log(category)
  useEffect(() => {
    if (pagename) {

      const newPageName = pagename
        .split('/')
        .filter((segment: string) => segment !== '')
        .map((segment: string) => segment.replaceAll('-', ' '));

      setPageName(newPageName);
    }
  }, [pagename]);

  useEffect(() => {
    if (category) {
      setCategoryArray(category)
    }
  }, [category])
  return (
    <div
      className="relative text-center text-black custom-breadcrum h-80 flex items-center justify-center bg-cover bg-center"
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
      <div className="relative z-20 py-14 md:py-24">
        <h1 className="text-2xl xs:text-5xl md:text-6xl lg:text-7xl font-black mt-5 uppercase">
          {UpdateShutterTitle(pathname)}
        </h1>
        <div className="flex justify-center items-center gap-4 mt-2 text-14 sm:text-base">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold capitalize"
          >
            <FaHome size={20} />{' '}
            {home ? home.charAt(0).toUpperCase() + home?.slice(1) : 'Home'}
          </Link>
          {
            categoryArray ? (
              <>
                <FaAngleRight size={20} />
                <Link
                  href={
                    (() => {
                      const matchedLink = TopHeroLink.find(
                        (heroLink) =>
                          heroLink.matchingTitle.toLowerCase() === categoryArray.title.toLowerCase()
                      );
                      return matchedLink ? `/${matchedLink.title}` : "#";
                    })()
                  }
                  className="font-bold capitalize"
                >
                  {categoryArray.title}
                </Link>
                <FaAngleRight size={20} />
                <p className="font-bold capitalize">{pathname || title}</p>
              </>
            ) : pageName ? (
              pageName.map((item, index) => {
                const matchedLink = TopHeroLink.find(
                  (heroLink) =>
                    heroLink.matchingTitle.toLowerCase() === item.toLowerCase()
                );

                return (
                  <React.Fragment key={index}>
                    <FaAngleRight size={20} />
                    <Link
                      href={matchedLink ? `/${matchedLink.title}` : "#"}
                      className="font-bold capitalize"
                    >
                      {item}
                    </Link>
                  </React.Fragment>
                );
              })
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

export default TopHero;
