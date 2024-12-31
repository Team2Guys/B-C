'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';
import { UpdateShutterTitle } from './menu-card';
import { colorData, TopHeroLink } from 'data/data';
import { usePathname } from 'next/navigation';
import { BreakCrum_conent_pages } from 'data/data';
import { blogCategoryUrl } from 'data/urls';

interface TopHeroProps {
  title: string | any;
  image: any;
  home?: string;
  pagename?: string;
  pageTitle?: string;
}

const TopHero: React.FC<TopHeroProps> = ({
  title,
  image,
  home,
  pagename,
  pageTitle,
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
      console.log(newPageName, 'pageName');
    }
  }, [pagename]);

  const result = BreakCrum_conent_pages.find((value: any) =>
    value.url.toLowerCase().includes(page.toLowerCase()),
  );

  console.log(image);

  return (
    <div
      className="relative      
      flex items-center text-center justify-center bg-no-repeat w-full  border-black xs:h-[280px]  md:h-[280px] lg:h-[400px] 2xl:h-[500px] bg-center bg-cover xl:bg-custom-size"
      style={{
        backgroundImage: `url(${image})`,
        backgroundOrigin: 'content-box',
      }}
    >
      <div className="absolute inset-0 bg-lightgrey opacity-30 z-10"></div>
      <div className="relative z-20 py-6 sm:py-14 md:py-24">
        <h1 className="text-xl xs:text-3xl md:text-4xl lg:text-5xl font-black mt-5 uppercase">
          {result
            ? result.content
            : UpdateShutterTitle(pageTitle ? pageTitle : pathname)}
        </h1>
        <div className="flex justify-center items-center px-2 gap-1 xs:gap-2 sm:gap-4 mt-2 text-14 sm:text-base flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold capitalize"
          >
            <FaHome size={20} />
            {home ? home.charAt(0).toUpperCase() + home.slice(1) : 'Home'}
          </Link>
          {pageName
            ? pageName.map((item, index) => {
                const matchedLink = TopHeroLink.find(
                  (heroLink) =>
                    heroLink.matchingTitle.toLowerCase() === item.toLowerCase(),
                );
                const matchingPageTitle = TopHeroLink.find(
                  (itemTitle) =>
                    itemTitle.title.toLowerCase() === item.toLowerCase(),
                );
                const matchingColorData = colorData.find(
                  (item) => item.url === page,
                );
                let linkHref = '';
                let linkText = item;
                if (matchedLink) {
                  linkHref = `/${
                    item !== 'blog' &&
                    pageName.length > 1 &&
                    blogCategoryUrl.some(
                      (item) =>
                        item.name.toLowerCase() ===
                        pageName.at(1)?.toLowerCase(),
                    )
                      ? `blog/${pageName.at(1)?.toLowerCase()}`
                      : matchedLink?.title || ''
                  }`;
                } else if (matchingPageTitle) {
                  linkHref = `/${matchingPageTitle.title.replaceAll(' ', '-')}`;
                  linkText = matchingPageTitle.title;
                } else if (index === pageName.length - 2) {
                  linkHref = `/${
                    pageName.at(0)?.toLowerCase() === 'blinds'
                      ? 'blinds'
                      : pageName.at(0)?.toLowerCase() === 'curtains'
                        ? 'curtains'
                        : pageName.at(0)?.toLowerCase() === 'shutters'
                          ? 'shutters'
                          : pageName.at(0)?.toLowerCase() === 'commercial'
                            ? 'commercial'
                            : pageName.at(0)?.toLowerCase() === 'blog'
                              ? 'blog'
                              : ''
                  }${item === 'commercial' ? '' : `/${item.replaceAll(' ', '-')}`}`;
                } else if (matchingColorData) {
                  return (
                    <>
                    <FaAngleRight size={20} />
                      <Link
                        href="/shutters-range"
                        className="font-bold capitalize"
                      >
                        Shutters Range
                      </Link>
                      <FaAngleRight size={20} />
                      <h2 className="font-bold capitalize">{item}</h2>
                    </>
                  );
                } else {
                  linkText =
                    item === 'request appointment' ? 'Book Appointment' : item;
                }
                return (
                  <React.Fragment key={index}>
                    <FaAngleRight size={20} />
                    {linkHref ? (
                      <Link href={linkHref} className="font-bold capitalize">
                        {linkText}
                      </Link>
                    ) : (
                      <h2 className="font-bold capitalize">{linkText}</h2>
                    )}
                  </React.Fragment>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default TopHero;
