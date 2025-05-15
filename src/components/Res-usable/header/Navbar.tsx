'use client';
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import logo from '../../../../public/assets/images/logomain.webp';
import Sheet from 'components/ui/Drawer';
import SocialLink from '../social-link/social-link';
import {
  generateSlug,
} from 'data/data';
import { usePathname } from 'next/navigation';
import { links } from 'data/header_links';
import menuIcon from '../../../../public/assets/images/icon/menu.png';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined,
  );

  const path = usePathname();
  const handleLinkClick = () => {
    setDrawerOpen(false);
    setSelectedLabel(undefined);
  };
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };




  return (
    <>
      {
        path === '/ppc/motorised-blinds/' || path === '/ppc/motorised-curtains/' || path === '/ppc/roller-blinds/' || path === '/ppc/made-to-measure-blinds/' || path === '/ppc/made-to-measure-curtains/' ? "" :


          <div className="w-full bg-secondary">
            <Container className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center md:justify-between items-center min-h-12 pb-0">
              <div></div>
              <p className="text-white py-2 text-10 sm:text-12 2xl:text-15 font-medium tracking-[2px] leading-relaxed 2xl:leading-loose text-center md:text-start max-sm:font-semibold">
                We can visit you, take measurements, help select fabrics & install
                in 2-3 days.
              </p>
              <div className="hidden md:block">
                <SocialLink />
              </div>
            </Container>
          </div>
      }

      <nav className="sticky -top-1 z-50 py-2 sm:py-0">

        {/* mobile container */}
        <Container className="sm:hidden mb-2 pb-4 pt-2 text-center w-full flex flex-wrap justify-between border-b border-[#0006]">
          <Link
            className="py-3 px-2 xs:px-3 font-roboto rounded-md text-11 xsm:text-12 xs:text-15 whitespace-nowrap bg-primary text-black"
            href="/request-appointment/"
            onClick={handleLinkClick}
          >
            BOOK A FREE APPOINTMENT
          </Link>
          <Link
            className={`text-11 xsm:text-12 xs:text-15 py-3 px-2 xs:px-3 uppercase rounded-md text-black sm:hidden ${path === '/estimator'
              ? 'bg-secondary text-white'
              : 'bg-primary text-black'
              }`}
            href='/estimator/'
          >Estimator</Link>
        </Container>



        <Container className="flex w-full justify-between h-12 sm:h-24 px-2 items-center gap-1 md:gap-3 lg:gap-0 overflow-hidden ">
          <div className='flex items-center'>
            <div>
              <Link href={'/'} className="w-5/12 xs:w-7/12 lg:w-1/12 ">
                <Image
                  width={600}
                  height={600}
                  loading='lazy'
                  src={logo}
                  alt="Logo"
                  className="w-28 xs:w-32 h-full"
                />
              </Link>

            </div>
            <div>language container</div>
          </div>

          <div className=" hidden lg:flex gap-[48px] ">
            <div className="hidden lg:flex justify-evenly items-start lg:text-10 font-roboto font-medium  gap-[24px] text-primary text-18 ">
              {links.map((link, index) => {

                return (
                  <Link
                    key={index}
                    href={link.href || ''}
                    className="px-1 lg:text-10 text-12 xl:text-15 h-full flex items-center justify-center transition-all duration-200"

                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div>
              <Link
                className="py-2 px-2 xl:px-5 font-roboto font-bold hidden sm:block rounded-md text-[22px] whitespace-nowrap border border-secondary text-secondary"
                href="/request-appointment/"
                onClick={handleLinkClick}
              >
                Book  A Free Visit
              </Link>
            </div>

          </div>



          <div className="flex  lg:hidden">
            <Sheet
              drawerName={<Image src={menuIcon} alt='menu icon' width={50} height={50} className='min-w-9 w-9 h-9' />}
              open={drawerOpen}
              setOpen={setDrawerOpen}
              selectedLabel={selectedLabel}
              mobileBgColor="#E6E4E5"
              className="custom-moblie-sheet"
            >
              <div className="flex flex-col gap-2">
                {links.map((link, index) => {

                  const isBlogActive = link.href === '/blog' && path.startsWith('/blog');
                  const isActive = path?.includes(generateSlug(link.label));

                  return (
                    <Link
                      key={index}
                      className={`text-16 border-b text-black border-[#0000002a] pb-[6px] hover:text-black ${isBlogActive || isActive ? 'font-bold' : 'font-normal'
                        } ${link.label === 'Estimator' ? 'hidden sm:block' : ''}`}
                      onClick={handleCloseDrawer}
                      href={`${link.href}/`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

              </div>
            </Sheet>
          </div>





        </Container>
      </nav>
    </>
  );
};

export default Navbar;