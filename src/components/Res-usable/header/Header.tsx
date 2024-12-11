'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import logo from '../../../../public/assets/images/logomain.png';
import MegaMenu from './MegaMenu';
import Sheet from 'components/ui/Drawer';
import { RiMenuFoldLine } from 'react-icons/ri';
import SocialLink from '../social-link/social-link';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import {
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import {
  blindMegaMenuItems,
  commercialMegaMenuItems,
  curtainMegaMenuItems,
  generateSlug,
  shutterMegaMenuItems,
} from 'data/data';
import { usePathname } from 'next/navigation';
import { Collapse } from 'antd';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

export const links = [
  { href: '/made-to-measure-blinds', label: 'Blinds', id: 2 },
  { href: '/made-to-measure-curtains', label: 'Curtains', id: 5 },
  { href: '/shutters-range', label: 'Shutters', id: 9 },
  { href: '/commercial', label: 'Commercial', id: 12 },
  { href: '/gallery', label: 'Gallery' },
  { href: '/estimator', label: 'Estimator' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined,
  );
  const path = usePathname();
  const { Panel } = Collapse;
  const handleLinkClick = () => {
    setDrawerOpen(false);
    setSelectedLabel(undefined);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };




  const {
    data: products,
    error: productsError,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const {
    data: subCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['fetchSubCategories'],
    queryFn: fetchSubCategories,
  });
  if (productsError instanceof Error)
    return <div>Error: {productsError.message}</div>;

  return (
    <>
      <div className="w-full bg-secondary">
        <Container className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center md:justify-between items-center min-h-12 pb-0">
          <p className="text-white py-2 text-10 sm:text-12 2xl:text-15 font-medium tracking-[4px] leading-relaxed 2xl:leading-loose text-center md:text-start">
            We can visit you, take measurements, help select fabrics & install
            in 2-3 days.
          </p>
          <div className='hidden md:block'>
            <SocialLink />
          </div>
        </Container>
      </div>

      <nav className="bg-lightgrey shadow-lg sticky -top-1 z-50 py-2 sm:py-0">
        <Container className="flex w-full justify-between h-12 sm:h-24 px-2 items-center gap-1 md:gap-3 lg:gap-0 overflow-hidden">
          <Link href={'/'} className="w-7/12 lg:w-1/12 ">
            <Image
              width={3500}
              height={2500}
              src={logo}
              alt="Logo"
              className="w-32 h-full"
            />
          </Link>

          <div className="w-3/12 lg:w-9/12 mt-9">
            <div className="hidden lg:flex justify-evenly items-start lg:text-10 text-12 xl:text-16 whitespace-nowrap ">
              <Link
                className={`lg:text-10 text-12 xl:text-15 px-1 transition-all duration-200 ${path === '/'
                  ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary hover:bg-secondary hover:text-white hover:pb-10 hover:rounded-none'
                  : 'hover:bg-secondary hover:text-white pb-10 pt-1 px-4'
                  }`}
                href={'/'}
              >
                Home
              </Link>
              {links.map((link, index) => {
                let filteredSubCategories =
                  subCategories?.filter(
                    (subcategory: any) => subcategory.CategoryId === link.id,
                  ) || [];

                let filteredProducts =
                  products?.filter(
                    (product : IProduct) => product.CategoryId === link.id,
                  ) || [];

                let combinedSliderData: any[] = [];

                if (link.id === 2) {
                  const actualProducts = filteredProducts.filter((product: IProduct) =>
                    blindMegaMenuItems.some(
                      (menuItem) =>
                        menuItem.productName === generateSlug(product.title),
                    ),
                  );

                  combinedSliderData = [
                    ...filteredSubCategories,
                    ...actualProducts,
                  ];
                }
                if (link.id === 9) {
                  const actualProducts = filteredProducts.filter((product: IProduct) =>
                    shutterMegaMenuItems.some(
                      (menuItem) =>
                        menuItem.productName === generateSlug(product.title),
                    ),
                  );

                  combinedSliderData = [
                    ...filteredSubCategories,
                    ...actualProducts,
                  ];
                }
                if (link.id === 5) {
                  const actualProducts = filteredProducts.filter((product: IProduct) =>
                    curtainMegaMenuItems.some(
                      (menuItem) =>
                        menuItem.productName === generateSlug(product.title),
                    ),
                  );

                  combinedSliderData = [
                    ...filteredSubCategories,
                    ...actualProducts,
                  ];
                }
                if (link.id === 12) {
                  const actualProducts =
                    products?.filter((product: IProduct) =>
                      commercialMegaMenuItems.some(
                        (menuItem) =>
                          menuItem.productName === generateSlug(product.title),
                      ),
                    ) || [];

                  combinedSliderData = [
                    // ...staticCommercialMegaMenuItems,
                    ...filteredSubCategories,
                    ...actualProducts,
                  ];
                }

                // const isActive =
                //   link.href && path?.includes(generateSlug(link.label));
                const isBlogPath = path.startsWith('/blog');

                const isBlogActive = link.href === '/blog' && isBlogPath;

                const isActive =
                  !isBlogPath && path?.includes(generateSlug(link.label));

                return combinedSliderData.length > 0 ? (
                  <MegaMenu

                    onClick={handleCloseDrawer}

                    key={link.id}
                    title={link.label || ''}
                    sliderData={combinedSliderData}
                    href={link.href}
                    className={
                      isBlogActive || isActive
                        ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary mb-8 hover:mb-0 hover:bg-secondary hover:text-white hover:pb-9 hover:rounded-none'
                        : 'hover:bg-secondary hover:text-white pb-9 pt-1 px-2 2xl:px-4'
                    }
                  />
                ) : (
                  <Link
                    key={index}
                    className={`lg:text-10 text-12 xl:text-15 px-1 transition-all duration-200 ${isBlogActive || isActive
                      ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary hover:bg-secondary hover:text-white hover:pb-10 hover:rounded-none'
                      : 'hover:bg-secondary hover:text-white pb-10 pt-1 px-2 2xl:px-4'
                      }`}
                    onClick={handleCloseDrawer}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:w-2/12 flex justify-center items-center gap-4">
            <Link
              className="py-2 px-2 lg:px-4 xl:px-5 hidden sm:block rounded-md text-10 xl:text-12 2xl:text-15 whitespace-nowrap bg-primary text-black"
              href="/request-appointment"
              onClick={handleLinkClick}
            >
              Book Free Appointment
            </Link>
            <div className="flex lg:hidden">
              <Sheet
                drawerName={<RiMenuFoldLine size={25} />}
                open={drawerOpen}
                setOpen={setDrawerOpen}
                selectedLabel={selectedLabel}
              >
                <div className="flex flex-col gap-2">
                  <Link
                    className={`py-0 text-14 hover:text-black border-b-2 border-white hover:border-b-secondary w-fit font-medium ${path === '/' ? 'border-b-secondary' : ''
                      }`}
                    onClick={handleCloseDrawer}
                    href="/"
                  >
                    Home
                  </Link>
                  <Collapse bordered={false} expandIcon={({ isActive }) => isActive ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />} className='custom-collapse border-0 bg-transparent flex flex-col gap-2'>
                    {links.map((link, index) => {
                      let filteredSubCategories =
                        subCategories?.filter(
                          (subcategory: any) => subcategory.CategoryId === link.id,
                        ) || [];

                      let filteredProducts =
                        products?.filter(
                          (product: IProduct) => product.CategoryId === link.id,
                        ) || [];

                      let combinedSliderData: any[] = [];

                      if (link.id === 2) {
                        const actualProducts = filteredProducts.filter((product: IProduct) =>
                          blindMegaMenuItems.some(
                            (menuItem) =>
                              menuItem.productName === generateSlug(product.title),
                          ),
                        );

                        combinedSliderData = [
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }
                      if (link.id === 9) {
                        const actualProducts = filteredProducts.filter((product: IProduct) =>
                          shutterMegaMenuItems.some(
                            (menuItem) =>
                              menuItem.productName === generateSlug(product.title),
                          ),
                        );

                        combinedSliderData = [
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }
                      if (link.id === 5) {
                        const actualProducts = filteredProducts.filter((product: IProduct) =>
                          curtainMegaMenuItems.some(
                            (menuItem) =>
                              menuItem.productName === generateSlug(product.title),
                          ),
                        );

                        combinedSliderData = [
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }
                      if (link.id === 12) {
                        const actualProducts =
                          products?.filter((product: IProduct) =>
                            commercialMegaMenuItems.some(
                              (menuItem) =>
                                menuItem.productName === generateSlug(product.title),
                            ),
                          ) || [];

                        combinedSliderData = [
                          // ...staticCommercialMegaMenuItems,
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }

                      // const isActive =
                      //   link.href && path?.includes(generateSlug(link.label));
                      const isBlogPath = path.startsWith('/blog');

                      const isBlogActive = link.href === '/blog' && isBlogPath;

                      const isActive =
                        !isBlogPath && path?.includes(generateSlug(link.label));

                      return combinedSliderData.length > 0 ? (
                        <Panel key={index} header={<Link href={link.href} onClick={handleCloseDrawer} className={`border-b-2 border-transparent hover:text-black ${isBlogActive || isActive
                          ? 'border-b-secondary'
                          : 'hover:border-b-secondary'}`}>{link.label}</Link>} className='custom-panel py-0'>
                          <MegaMenu
                            onClick={handleCloseDrawer}
                            key={link.id}
                            title={link.label || ''}
                            sliderData={combinedSliderData}
                            href={link.href}
                            className={
                              isBlogActive || isActive
                                ? 'border-b-secondary'
                                : 'hover:border-b-secondary'
                            }
                          />
                        </Panel>
                      ) : (
                        <Link
                          key={index}
                          className={`w-fit text-14 border-b-2 border-white hover:text-black font-medium ${isBlogActive || isActive
                            ? 'border-b-secondary'
                            : 'hover:border-b-secondary'
                            }`}
                          onClick={handleCloseDrawer}
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </Collapse>
                </div>
              </Sheet>
            </div>
          </div>
        </Container>
        <Container className='sm:hidden pb-1 pt-2 text-center'>
          <Link
            className="py-2 px-6 rounded-md text-14 whitespace-nowrap bg-primary text-black"
            href="/request-appointment"
            onClick={handleLinkClick}
          >
            Book Free Appointment
          </Link>
        </Container>
      </nav>
    </>
  );
};

export default Header;
