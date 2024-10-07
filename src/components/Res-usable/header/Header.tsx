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
  fetchCategories,
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
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const path = usePathname();
  const handleLinkClick = () => {
    setDrawerOpen(false);
    setSelectedLabel(undefined);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const {
    data: products,
    error: productsError,
    isLoading: isLoadingProducts,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const {
    data: subCategories,
    error: subCateERROR,
    isLoading: isLoadingSubCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['fetchSubCategories'],
    queryFn: fetchSubCategories,
  });

  if (categoriesError instanceof Error)
    return <div>Error: {categoriesError.message}</div>;
  if (productsError instanceof Error)
    return <div>Error: {productsError.message}</div>;

  const filteredProducts = selectedCategoryId
    ? products?.filter((product) => product.CategoryId === selectedCategoryId)
    : products;

  return (
    <>
      <div className="w-full bg-secondary">
        <Container className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center md:justify-between items-center ">
          <p className="text-white py-2 text-12 2xl:text-15 font-medium lg:tracking-[0.4px] xl:tracking-[1.8px] 2xl:tracking-[2px] leading-relaxed 2xl:leading-loose">
            We can visit you, take measurements, help select fabrics & install
            in 1-2 days. Call Dubai{' '}
            <Link
              className="underline font-medium"
              target="_blank"
              href={'tel:04 252 2025'}
            >
              04 252 2025
            </Link>{' '}
            now or email us on{' '}
            <Link
              className="underline font-medium"
              target="_blank"
              href={'mailto:connect@twoguys.ae'}
            >
              connect@twoguys.ae
            </Link>
          </p>
          <SocialLink />
        </Container>
      </div>

      <nav className="bg-lightgrey shadow-lg sticky -top-1 z-50">
        <Container className="flex w-full items-center justify-between px-2 ">
          <Link href={'/'} className="w-3/12 lg:w-1/12">
            <Image width={150} height={150} src={logo} alt="Logo" />
          </Link>
          <div className="w-3/12 lg:w-8/12">
            <div className="hidden lg:flex justify-evenly items-center text-12 xl:text-16 whitespace-nowrap lg:-space-x-8 xl:-space-x-3">
              <Link
                className={`px-3 py-2 rounded-md text-12 xl:text-15 ${
                  path === '/'
                    ? 'font-bold text-black-500 link-active'
                    : 'link-underline'
                }`}
                href={'/'}
              >
                Home
              </Link>
              {links.map((link, index) => {
                let filteredSubCategories =
                  subCategories?.filter(
                    (subcategory) => subcategory.CategoryId === link.id,
                  ) || [];

                let filteredProducts =
                  products?.filter(
                    (product) => product.CategoryId === link.id,
                  ) || [];

                let combinedSliderData: any[] = [];

                if (link.id === 2) {
                  const actualProducts = filteredProducts.filter((product) =>
                    blindMegaMenuItems.some(
                      (menuItem) =>
                        menuItem.productName === generateSlug(product.title),
                    ),
                  );

                  console.log(actualProducts);
                  combinedSliderData = [
                    ...filteredSubCategories,
                    ...actualProducts,
                  ];
                }
                if (link.id === 9) {
                  const actualProducts = filteredProducts.filter((product) =>
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
                  const actualProducts = filteredProducts.filter((product) =>
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
                    products?.filter((product) =>
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
                        ? 'font-bold text-black-500 link-active'
                        : 'link-underline'
                    }
                  />
                ) : (
                  <Link
                    key={index}
                    className={`px-3 py-2 rounded-md text-12 xl:text-15 ${
                      isBlogActive || isActive
                        ? 'font-bold text-black-500 link-active'
                        : 'link-underline'
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



          <Link
            className="py-2 px-2 xl:px-5 rounded-md text-10 xl:text-16 whitespace-nowrap bg-primary text-black"
            href="/appointment"
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
              <div className="flex flex-col">
                <Link
                  className={`px-3 py-2 rounded-md text-14 hover:text-black font-medium ${
                    path === '/' ? 'font-bold text-black-500' : ''
                  }`}
                  onClick={handleCloseDrawer}
                  href="/"
                >
                  Home
                </Link>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    className={`px-3 py-2 rounded-md text-14 hover:text-black font-medium ${
                      link.href && path?.includes(generateSlug(link.label))
                        ? 'font-bold text-black-500'
                        : ''
                    }`}
                    onClick={handleCloseDrawer}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Sheet>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
