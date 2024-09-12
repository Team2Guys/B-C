import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import logo from '../../../../public/assets/images/logomain.png';
import MegaMenu from './MegaMenu';
import Sheet from 'components/ui/Drawer';
import { RiMenuFoldLine } from 'react-icons/ri';
import MenuCard from 'components/ui/menu-card';
import SocialLink from '../social-link/social-link';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import { Skeleton } from 'components/ui/skeleton';
import { generateSlug, MegaMenuItem } from 'data/data';
import { useRouter } from 'next/navigation';

const links = [
  { href: '/made-to-measure-blinds', label: 'Blinds', id: 2 },
  { href: '/shutters-range', label: 'Shutter', id: 9 },
  { href: '/made-to-measure-curtains', label: 'Curtains', id: 5 },
  { href: '/commercial', label: 'Commercial', id: 12 },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined,
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const route = useRouter();
  const handleLinkClick = () => {
    setDrawerOpen(false);
    setSelectedLabel(undefined);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
    setSecondDrawerOpen(true);
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
        <Container className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center md:justify-between items-center py-2">
          <p className="text-white py-2 text-12 2xl:text-15 font-medium lg:tracking-[0.4px] xl:tracking-[1.8px] 2xl:tracking-[2px] leading-relaxed 2xl:leading-loose">
            We can visit you, take measurements, help select fabrics & install
            in 1-2 days. Call Dubai{' '}
            <Link className="underline font-medium" href={'tel:04 252 2025'}>
              04 252 2025
            </Link>{' '}
            now or email us on{' '}
            <Link
              className="underline font-medium"
              href={'mailto:connect@twoguys.ae'}
            >
              connect@twoguys.ae
            </Link>
          </p>
          <SocialLink />
        </Container>
      </div>

      <nav className="bg-lightgrey shadow-lg sticky top-0 z-50">
        <Container className="flex w-full items-center justify-between px-2 py-2 md:px-0 md:py-2">
          <Link href={'/'} className="w-3/12 lg:w-1/12">
            <Image width={150} height={150} src={logo} alt="Logo" />
          </Link>
          <div className="w-3/12 lg:w-8/12">
            <div className="hidden lg:flex justify-evenly items-center text-12 xl:text-16 whitespace-nowrap lg:-space-x-8 xl:-space-x-3">
              <Link
                className={`px-3 py-2 rounded-md text-12 xl:text-15`}
                href={'/'}
              >
                Home
              </Link>
              {links.map((link, index) => {
                const filteredSubCategories =
                  subCategories?.filter(
                    (subcategory) => subcategory.CategoryId === link.id,
                  ) || [];
                const filteredProducts =
                  products?.filter(
                    (product) => product.CategoryId === link.id,
                  ) || [];

                const actualProducts = filteredProducts.filter((product) =>
                  MegaMenuItem.some(
                    (menuItem) =>
                      menuItem.productName === generateSlug(product.title),
                  ),
                );

                const combinedSliderData = [
                  ...filteredSubCategories,
                  ...filteredProducts,
                ];

                return combinedSliderData.length > 0 ? (
                  <MegaMenu
                    onClick={handleCloseDrawer}
                    key={link.id}
                    title={link.label || ''}
                    sliderData={combinedSliderData}
                    href={link.href}
                  />
                ) : (
                  <Link
                    key={index}
                    className="px-3 py-2 rounded-md text-12 xl:text-15"
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
            Free Consultation
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
                  className={`px-3 py-2 rounded-md text-14 hover:text-black font-medium `}
                  onClick={handleCloseDrawer}
                  href="/"
                >
                  Home
                </Link>
                <Sheet
                  open={secondDrawerOpen}
                  setOpen={setSecondDrawerOpen}
                  drawerName={
                    <div
                      className={`px-3 py-2 rounded-md text-14 hover:text-black font-medium cursor-pointer `}
                    >
                      Product
                    </div>
                  }
                >
                  <>
                    <div className="whitespace-nowrap flex flex-row overflow-x-auto">
                      {/* "All" category option */}
                      <div
                        className={`py-2 px-4 rounded cursor-pointer ${selectedCategoryId === null ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleCategoryClick(null)}
                      >
                        All
                      </div>
                      {categories &&
                        categories.map((category: ICategory, index: number) => (
                          <div
                            className={`py-2 px-4 rounded cursor-pointer ${selectedCategoryId === category.id ? 'bg-primary text-white' : ''}`}
                            key={index}
                            onClick={() => handleCategoryClick(category.id!)}
                          >
                            {category.title}
                          </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      {filteredProducts &&
                        filteredProducts.map((product: IProduct) => (
                          <MenuCard
                            key={product.id}
                            src={product.posterImage.imageUrl}
                            alt={product.title}
                            title={product.title}
                            onClick={() => {
                              const slug = generateSlug(product.title);
                              route.push(`/products/${slug}`);
                              setSecondDrawerOpen(false);
                              setDrawerOpen(false);
                            }}
                          />
                        ))}
                    </div>
                  </>
                </Sheet>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    className="px-3 py-2 rounded-md text-14 hover:text-black font-medium"
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
