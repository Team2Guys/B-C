'use client';
import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import logo from '../../../../public/assets/images/logomain.png';
import MegaMenu from './MegaMenu';
import Sheet from 'components/ui/Drawer';
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
import menuIcon from '../../../../public/assets/images/icon/menu.png';


interface CollapseItem {
  href: string;
  label: string;
  id: number | undefined;
  combinedSliderData?: any;
  isBlogPath: boolean,
  isBlogActive: boolean,
  isActive: boolean,
  isBalconyActive: boolean,
  ismoterised: boolean,
  isblindsmoter: boolean,
  iscurtainsmoter: boolean,
  ismoter: boolean,
}

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined,
  );
  const [collapseItems, setCollapseItems] = useState<CollapseItem[]>([])
  const [nonCollapseItems, setNonCollapseItems] = useState<CollapseItem[]>([])
  const [activeKey, setActiveKey] = useState<number | undefined>(
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

  const megamenuActiveHanlder = () => {
    links.map((link, index) => {
      const isBlogPath = path.startsWith('/blog');
      const isBlogActive = link.href === '/blog' && isBlogPath;
      const isActive = !isBlogPath && path?.includes(generateSlug(link.label));
      const isMotorised = path === '/automated-blinds' || path === '/automated-curtains';
      const isBalconyActive =
        path?.includes('blinds-and-curtains') ||
        path?.includes('blinds-curtains') ||
        path?.includes('printed-blinds');
      if (isActive || isBlogActive || isMotorised || isBalconyActive) {
        setActiveKey(isMotorised ? 3 : isBalconyActive ? 4 : index);
      }
    })
  }
  useEffect(() => {
    megamenuActiveHanlder()
  }, [path]);


  useEffect(() => {
    // Check if products and subCategories are available before processing
    if (products && subCategories) {
      const newCollapseItems: any[] = [];
      const newNonCollapseItems: any[] = [];

      links.forEach((link) => {
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
        const isblindsmoter =
          path?.includes('motorised-blinds');
        const iscurtainsmoter =
          path?.includes('motorised-curtains')
        const ismoter =
          path?.includes('automated-curtains') ||
          path?.includes('automated-blinds');

        // Add to collapseItems or nonCollapseItems based on the existence of combinedSliderData
        if (combinedSliderData.length > 0) {
          newCollapseItems.push({
            href: link.href,
            label: link.label,
            id: link.id,
            combinedSliderData: combinedSliderData,
            isBlogPath: isBlogPath,
            isBlogActive: isBlogActive,
            isActive: isActive,
            isBalconyActive: isBalconyActive,
            ismoterised: ismoterised,
            isblindsmoter: isblindsmoter,
            iscurtainsmoter: iscurtainsmoter,
            ismoter: ismoter
          });
        } else {
          newNonCollapseItems.push({
            href: link.href,
            label: link.label,
            id: link.id,
            isBlogPath: isBlogPath,
            isBlogActive: isBlogActive,
            isActive: isActive,
            isBalconyActive: isBalconyActive,
            ismoterised: ismoterised,
            isblindsmoter: isblindsmoter,
            iscurtainsmoter: iscurtainsmoter,
            ismoter: ismoter
          });
        }
      });

      setCollapseItems(newCollapseItems);
      setNonCollapseItems(newNonCollapseItems);
    }
  }, [subCategories]);
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

        <Container className="sm:hidden mb-2 pb-4 pt-2 text-center border-b border-[#0006]">
          <Link
            className="py-3 px-6 rounded-md text-14 xs:text-15 whitespace-nowrap bg-primary text-black"
            href="/request-appointment"
            onClick={handleLinkClick}
          >
            BOOK A FREE APPOINTMENT
          </Link>
        </Container>
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
                const isblindsmoter =
                  path?.includes('motorised-blinds');
                const iscurtainsmoter =
                  path?.includes('motorised-curtains')
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
                            : link.label === 'Blinds' && isblindsmoter
                              ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary mb-8 hover:mb-0 hover:bg-secondary hover:text-white hover:pb-9 hover:rounded-none'
                              : link.label === 'Curtains' && iscurtainsmoter
                                ? 'font-bold px-2 2xl:px-4 py-1 rounded-md text-white bg-secondary mb-8 hover:mb-0 hover:bg-secondary hover:text-white hover:pb-9 hover:rounded-none'
                                : !isBalconyActive &&
                                  !ismoterised &&
                                  !isblindsmoter &&
                                  !iscurtainsmoter &&
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
              className="py-2 px-2 lg:px-2 xl:px-5 hidden sm:block rounded-md text-10 xl:text-11 2xl:text-15 whitespace-nowrap bg-primary text-black uppercase"
              href="/request-appointment"
              onClick={handleLinkClick}
            >
              Book a free appointment
            </Link>
            <div className="flex lg:hidden">
              <Sheet
                drawerName={<Image src={menuIcon} alt='menu icon' width={75} height={75} className='min-w-10 w-9 h-9' />}
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
                    items={collapseItems.map((item, index) => ({
                      key: index,
                      label: (
                        <Link
                          href={item.href} // Use item instead of link
                          onClick={handleCloseDrawer}
                          className={
                            item.label === 'Commercial' && item.isBalconyActive
                              ? 'font-bold'
                              : item.label === 'Motorised' && item.ismoterised
                                ? 'font-bold'
                                : !item.isBalconyActive && !item.ismoter && (item.isBlogActive || item.isActive)
                                  ? 'font-bold'
                                  : 'font-normal'
                          }
                        >
                          {item.label}
                        </Link>
                      ),
                      children: (
                        <MegaMenu
                          onClick={handleCloseDrawer}
                          title={item.label || ''} // Use item.label
                          sliderData={item.combinedSliderData}
                          href={item.href} // Use item.href
                          className={
                            item.label === 'Commercial' && item.isBalconyActive
                              ? 'font-bold'
                              : item.label === 'Motorised' && item.ismoterised
                                ? 'font-bold'
                                : !item.isBalconyActive && !item.ismoter && (item.isBlogActive || item.isActive)
                                  ? 'font-bold'
                                  : 'font-normal'
                          }
                        />
                      ),
                    }))}
                  />
                  {nonCollapseItems.map((item, index) => (
                    <Link
                      key={index}
                      className={`text-16 border-b text-black border-[#0000002a] pb-[6px] ${item.isBlogActive || item.isActive
                        ? 'font-bold'
                        : 'font-normal'
                        }`}
                      onClick={handleCloseDrawer}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Sheet>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
