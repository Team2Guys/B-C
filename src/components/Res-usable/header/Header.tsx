'use client';
import React, { Fragment, useEffect, useState } from 'react';
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
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import {
  blindMegaMenuItems,
  commercialMegaMenuItems,
  curtainMegaMenuItems,
  generateSlug,
  shutterMegaMenuItems,
} from 'data/data';
import { usePathname } from 'next/navigation';
import { Collapse } from 'antd';
import { links } from 'data/header_links';
import downIcon from '../../../../public/assets/images/icon/Vector@2x.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined,
  );
  const [activeKey, setActiveKey] = useState<number | undefined>(
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

  const fetchAllData = async () => {
    const [products, subCategories] = await Promise.all([
      fetchProducts(),
      fetchSubCategories(),
    ]);
    return { products, subCategories };
  };

  const { data, isLoading } = useQuery({
    queryKey: ['fetchSubCategories', 'products'],
    queryFn: fetchAllData,
  });

  const products: IProduct[] = data?.products || [];
  const subCategories: ICategory[] = data?.subCategories || [];

  return (
    <>
      <div className="w-full bg-secondary">
        <Container className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center md:justify-between items-center min-h-12 pb-0">
          <div></div>
          <p className="text-white py-2 text-10 sm:text-12 2xl:text-15 font-medium tracking-[4px] leading-relaxed 2xl:leading-loose text-center md:text-start">
            We can visit you, take measurements, help select fabrics & install
            in 2-3 days.
          </p>
          <div className="hidden md:block">
            <SocialLink />
          </div>
        </Container>
      </div>

      <nav className="bg-lightgrey shadow-lg sticky -top-1 z-50 py-2 sm:py-0">
        <Container className="flex w-full justify-between h-12 sm:h-24 px-2 items-center gap-1 md:gap-3 lg:gap-0 overflow-hidden">
          <Link href={'/'} className="w-7/12 lg:w-1/12 ">
            <Image
              width={300}
              height={300}
              loading='lazy'
              src={logo}
              alt="Logo"
              className="w-32 h-full"
            />
          </Link>

          <div className="w-3/12 lg:w-9/12 mt-9">
            <div className="hidden lg:flex justify-evenly items-start lg:text-10 text-12 xl:text-16 whitespace-nowrap ">
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
                  const actualProducts = filteredProducts.filter(
                    (product: IProduct) =>
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
                  const actualProducts = filteredProducts.filter(
                    (product: IProduct) =>
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
                  const actualProducts = filteredProducts.filter(
                    (product: IProduct) =>
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
                if (link.id === 20) {
                  const actualProducts = commercialMegaMenuItems || [];
                  combinedSliderData = [
                    ...filteredSubCategories,
                    ...actualProducts,
                  ];
                }
                const isBlogPath = path.startsWith('/blog');
                const isBlogActive = link.href === '/blog' && isBlogPath;
                const isActive =
                  !isBlogPath && path?.includes(generateSlug(link.label));
                const isBalconyActive =
                  path?.includes('blinds-and-curtains') ||
                  path?.includes('blinds-curtains') ||
                  path?.includes('printed-blinds');
                const ismoterised =
                  path.startsWith('/automated-blinds') ||
                  path.startsWith('/automated-curtains');
                const ismoter =
                  path?.includes('automated-curtains') ||
                  path?.includes('automated-blinds');
                return combinedSliderData.length > 0 ? (
                  <Fragment key={index} >
                    <MegaMenu
                      onClick={handleCloseDrawer}
                      title={link.label || ''}
                      sliderData={combinedSliderData}
                      href={link.href}
                      className={
                        link.label === 'Commercial' && isBalconyActive
                          ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary mb-8 hover:mb-0 hover:bg-secondary hover:text-white hover:pb-9 hover:rounded-none'
                          : link.label === 'Motorised' && ismoterised
                            ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary mb-8 hover:mb-0 hover:bg-secondary hover:text-white hover:pb-9 hover:rounded-none'
                            : !isBalconyActive &&
                              !ismoter &&
                              (isBlogActive || isActive)
                              ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary mb-8 hover:mb-0 hover:bg-secondary hover:text-white hover:pb-9 hover:rounded-none'
                              : 'hover:bg-secondary hover:text-white pb-9 pt-1 px-2 2xl:px-4'
                      }
                      loading={isLoading}
                    />
                  </Fragment>
                ) : (
                  <Fragment key={index} >
                    <Link
                      className={`lg:text-10 text-12 xl:text-15 px-1 transition-all duration-200 ${link.label === 'Motorised' && ismoterised
                        ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary hover:bg-secondary hover:text-white hover:pb-10 hover:rounded-none'
                        : isBlogActive || isActive
                          ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary hover:bg-secondary hover:text-white hover:pb-10 hover:rounded-none'
                          : 'hover:bg-secondary hover:text-white pb-10 pt-1 px-2 2xl:px-4'
                        }`}
                      onClick={handleCloseDrawer}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="lg:w-2/12 flex justify-center items-center gap-4">
            <Link
              className="py-2 px-2 lg:px-4 xl:px-5 hidden sm:block rounded-md text-10 xl:text-12 2xl:text-15 whitespace-nowrap bg-primary text-black uppercase"
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
                mobileBgColor="#E6E4E5"
                className="custom-moblie-sheet"
              >
                <div className="flex flex-col gap-2">
                  <Collapse
                    bordered={false}
                    defaultActiveKey={activeKey}
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <Image src={downIcon} alt='up icon' width={8} height={8} className='transform rotate-180' />
                      ) : (
                        <Image src={downIcon} alt='down icon' width={8} height={8} />
                      )
                    }
                    className="custom-collapse bg-transparent border-0 flex flex-col gap-1"
                  >
                    {links.map((link, index) => {
                      let filteredSubCategories =
                        subCategories?.filter(
                          (subcategory: any) =>
                            subcategory.CategoryId === link.id,
                        ) || [];

                      let filteredProducts =
                        products?.filter(
                          (product: IProduct) => product.CategoryId === link.id,
                        ) || [];

                      let combinedSliderData: any[] = [];

                      if (link.id === 2) {
                        const actualProducts = filteredProducts.filter(
                          (product: IProduct) =>
                            blindMegaMenuItems.some(
                              (menuItem) =>
                                menuItem.productName ===
                                generateSlug(product.title),
                            ),
                        );

                        combinedSliderData = [
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }
                      if (link.id === 9) {
                        const actualProducts = filteredProducts.filter(
                          (product: IProduct) =>
                            shutterMegaMenuItems.some(
                              (menuItem) =>
                                menuItem.productName ===
                                generateSlug(product.title),
                            ),
                        );

                        combinedSliderData = [
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }
                      if (link.id === 5) {
                        const actualProducts = filteredProducts.filter(
                          (product: IProduct) =>
                            curtainMegaMenuItems.some(
                              (menuItem) =>
                                menuItem.productName ===
                                generateSlug(product.title),
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
                                menuItem.productName ===
                                generateSlug(product.title),
                            ),
                          ) || [];

                        combinedSliderData = [
                          // ...staticCommercialMegaMenuItems,
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }
                      if (link.id === 20) {
                        const actualProducts = commercialMegaMenuItems || [];
                        combinedSliderData = [
                          ...filteredSubCategories,
                          ...actualProducts,
                        ];
                      }

                      const isBlogPath = path.startsWith('/blog');
                      const isBlogActive = link.href === '/blog' && isBlogPath;
                      const isActive = !isBlogPath && path?.includes(generateSlug(link.label));
                      const isMotorised = path === '/automated-blinds' || path === '/automated-curtains';
                      const isBalconyActive =
                        path?.includes('blinds-and-curtains') ||
                        path?.includes('blinds-curtains') ||
                        path?.includes('printed-blinds');
                      const ismoterised =
                        path.startsWith('/automated-blinds') ||
                        path.startsWith('/automated-curtains');
                      const ismoter =
                        path?.includes('automated-curtains') ||
                        path?.includes('automated-blinds');
                      useEffect(() => {
                        if ((isActive || isBlogActive) && activeKey !== (isMotorised ? 3 : index)) {
                          setActiveKey(isMotorised ? 3 : index);
                        }
                      }, [isActive, isBlogActive, isMotorised, activeKey, index]);

                      return combinedSliderData.length > 0 ? (
                        <Panel
                          key={index}

                          header={
                            <Link
                              href={link.href}
                              onClick={handleCloseDrawer}
                              className={
                                link.label === 'Commercial' && isBalconyActive
                                  ? 'font-bold'
                                  : link.label === 'Motorised' && ismoterised
                                    ? 'font-bold'
                                    : !isBalconyActive &&
                                      !ismoter &&
                                      (isBlogActive || isActive)
                                      ? 'font-bold'
                                      : 'font-normal'
                              }
                            >
                              {link.label}
                            </Link>
                          }
                          className="custom-panel py-0"
                        >
                          <MegaMenu
                            onClick={handleCloseDrawer}
                            // key={index}
                            title={link.label || ''}
                            sliderData={combinedSliderData}
                            href={link.href}
                            className={
                              link.label === 'Commercial' && isBalconyActive
                                ? 'font-bold'
                                : link.label === 'Motorised' && ismoterised
                                  ? 'font-bold'
                                  : !isBalconyActive &&
                                    !ismoter &&
                                    (isBlogActive || isActive)
                                    ? 'font-bold'
                                    : 'font-normal'
                            }
                          />
                        </Panel>
                      ) : (
                        <Link
                          key={index}
                          className={`text-16 border-b text-black border-[#0000002a] pb-[6px] ${isBlogActive || isActive
                            ? 'font-bold'
                            : 'font-normal'
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
        <Container className="sm:hidden pb-1 pt-2 text-center">
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
