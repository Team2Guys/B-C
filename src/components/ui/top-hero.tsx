'use client';
import  { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';
import { UpdateShutterTitle } from './menu-card';
import { colorData, TopHeroLink } from 'data/data';
import { usePathname } from 'next/navigation';
import { BreakCrum_conent_pages } from 'data/data';

interface TopHeroProps {
  title: string | any;
  image: StaticImageData;
  home?: string;
  pagename?: string;
  backgroundposition?: string;
  pageTitle?: string;
}

const TopHero: React.FC<TopHeroProps> = ({
  title,
  image,
  home,
  pagename,
  backgroundposition,
  pageTitle
}) => {
  const [pageName, setPageName] = useState<string[]>([]);
  const page = usePathname();

  const pathname = title.replace('-', ' ');

  useEffect(() => {
    if (pagename) {
      const newPageName = pagename
        .split('/')
        .filter((segment: string) => segment !== '')
        .map((segment: string) => segment.replaceAll('-', ' '));

      setPageName(newPageName);
    }
  }, [pagename]);

  const result = BreakCrum_conent_pages.find((value:any) =>
    value.url.toLowerCase().includes(page.toLowerCase())
  );

  return (
    <div
      className="relative text-center text-black custom-breadcrum h-80 flex items-center justify-center bg-contain md:bg-cover  bg-center"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-lightgrey opacity-30 z-10"></div>
      <div className="relative z-20 py-14 md:py-24">
        <h1 className="text-xl xs:text-3xl md:text-4xl lg:text-5xl font-black mt-5 uppercase">
          {result ? result.content : UpdateShutterTitle(pageTitle ? pageTitle : pathname)}
        </h1>
        <div className="flex justify-center items-center px-2 gap-1 xs:gap-2 sm:gap-4 mt-2 text-14 sm:text-base">
          <Link href="/" className="flex items-center gap-2 font-bold capitalize">
            <FaHome size={20} /> {home ? home.charAt(0).toUpperCase() + home.slice(1) : 'Home'}
          </Link>
          {pageName ? (
            pageName.map((item, index) => {
              const matchedLink = TopHeroLink.find(
                (heroLink) => heroLink.matchingTitle.toLowerCase() === item.toLowerCase()
              );
              const matchingPageTitle = TopHeroLink.find((itemTitle) => itemTitle.title.toLowerCase() === item.toLowerCase())
              const matchingColorData = colorData.find((item) => item.url === page);
              return (
                <React.Fragment key={index}>
                  <FaAngleRight size={20} />
                  {matchedLink ? (<Link
                    href={`/${matchedLink.title}`}
                    className="font-bold capitalize"
                  >
                    {item}
                  </Link>) : matchingPageTitle ? (<Link
                    href={`/${matchingPageTitle.title.replaceAll(' ', '-')}`}
                    className="font-bold capitalize"
                  >
                    {matchingPageTitle.title}
                  </Link>) :
                    index === (pageName.length - 2) ? (
                      <Link href={`/${pageName.at(0)?.toLowerCase() === 'blinds' ? 'blinds' : pageName.at(0)?.toLowerCase() === 'curtains' ? 'curtains' : pageName.at(0)?.toLowerCase() === 'shutters' ? 'shutters' : pageName.at(0)?.toLowerCase() === 'commercial' ? 'commercial' : ''}${item === "commercial" ? '' : `/${item.replaceAll(' ', '-')}`} `} className="font-bold capitalize">
                        {item}
                      </Link>
                    ) : matchingColorData ? (<>
                      <Link href='/shutters-range' className="font-bold capitalize" >Shutters Range</Link>
                      <FaAngleRight size={20} />
                      <h2 className="font-bold capitalize">{item}</h2>
                      </>
                    ) : (
                      <h2 className="font-bold capitalize">{item == 'request appointment' ? 'Book Appointment' : item}</h2>
                    )
                  }
                </React.Fragment>
              );
            })
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TopHero;
