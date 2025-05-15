'use client';

import React, { useEffect, useState } from 'react';
import {
  footerInfo,
  generateSlug,
  phoneNumberInfo,
  EmailInfo,
  footerData,
  WhatsAppInfo,
} from 'data/data';
import { IoLocationOutline, IoLogoPinterest } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import { ICategory, IProduct } from 'types/types';
import { useQuery } from '@tanstack/react-query';
import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import { ChangedProductUrl_handler, predefinedPaths, urls } from 'data/urls';
import { Skeleton } from 'components/ui/skeleton';
import { Collapse } from 'antd';
import downIcon from '../../../../public/assets/images/icon/Vector@2x.png';
import { SlCalender } from 'react-icons/sl';
import { TCategorySection } from 'types/footer';
import Container from '../Container/Container';
import { TfiEmail } from 'react-icons/tfi';
import { LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const fetchAllData = async () => {
    const [products, categories, subcategories] = await Promise.all([
      fetchProducts(),
      fetchCategories(),
      fetchSubCategories(),
    ]);
    return { products, categories, subcategories };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['allData'],
    queryFn: fetchAllData,
  });

  const products: IProduct[] = data?.products || [];
  const categories: ICategory[] = data?.categories || [];
  const subcategories = data?.subcategories || [];
  const [isMobile, setIsMobile] = useState(false);
  const generatePath = (product: IProduct, parent: string) => {
    const slug = ChangedProductUrl_handler(product.title);
    const basePath = product.href
      ? `${window.origin}/${product.href}`
      : `/${slug}`;

    return (
      predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${parent === 'shutters' ? `${parent}-range` : parent}${[
          'dimout-roller-blinds',
          'sunscreen-roller-blinds',
          'blackout-roller-blinds',
        ].includes(slug)
          ? '/roller-blinds'
          : ''
        }/${slug}`)
    );
  };
  const ChangedProductUrl = (title: string): string => {
    let products = urls.find((url: { productName: string; Url: string }) => {
      return url.productName === title;
    });

    return products ? products.Url : generateSlug(title);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <footer>
      <div className="bg-primary-foreground py-10">
        <Container>
          <div className="grid grid-cols-1 xs:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5">
            <div className="mb-4 flex flex-col items-center xs:items-start">
              <Link href='/' aria-label="logo"
              >
                <Image
                  src={'/assets/images/whitelogo.png'}
                  className="w-auto h-auto lg:w-36 lg:h-32 invert"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </Link>
              <p className="text-sm text-center xs:text-start max-w-56 text-primary">
                The most trusted window treatment company in Dubai with a decade of experience and 100s of positive reviews.
              </p>
              <h4 className='text-base mt-4 font-bold text-primary'>Follow Us</h4>
              <div className="flex items-center space-x-4 mt-4">
                <Link
                  target="_blank"
                  href={'https://www.facebook.com/blindsandcurtainsdubai'}
                  aria-label="facebook"

                >
                  <CiFacebook className="w-9 h-9 text-secondary" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.pinterest.com/blindsandcurtainsdubai/'}
                  aria-label="pinterest"

                >
                  <IoLogoPinterest className="w-9 h-9 rounded-full text-secondary" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/blindsandcurtainsdubai/'}
                  aria-label="instagram"

                >
                  <AiOutlineInstagram className="w-9 h-9 text-secondary" />
                </Link>
              </div>
            </div>
            {isLoading || isError ? (
              Array.from({ length: 27 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-1/2 h-6 bg-white/25"
                />
              ))) :


              (footerData.map((category: TCategorySection) => (
                <div className="2xl:pl-2" key={category.key}>
                  {
                    isMobile ? (
                      <Collapse
                        bordered={false}
                        expandIcon={({ isActive }) =>
                          isActive ? (
                            <Image
                              src={downIcon}
                              alt="up icon"
                              width={14}
                              height={14}
                              className="pt-1 transform rotate-180"
                            />
                          ) : (
                            <Image
                              src={downIcon}
                              alt="down icon"
                              width={14}
                              height={14}
                              className="pt-1"
                            />
                          )
                        }
                        className="custom-collapse bg-transparent border-0 flex flex-col gap-1"
                        items={[
                          {
                            key: category.key || category.title,
                            label: (
                              <span className="font-semibold text-18 text-primary">
                                {category.title}
                              </span>
                            ),
                            children: (
                              <ul className="space-y-2 my-4">
                                {category.title === 'Quick Links' ? (
                                  //@ts-ignore
                                  category.links?.map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        className="text-14 2xl:text-16 text-primary font-normal"
                                        href={link.href}
                                      >
                                        {link.text}
                                      </Link>
                                    </li>
                                  ))
                                ) : (
                                  //@ts-ignore
                                  category?.items?.map((item, index: number) => {
                                    const matchingSubcategory = subcategories?.find(
                                      (subcategory: ICategory) =>
                                        subcategory.title === item &&
                                        subcategory.CategoryId ===
                                        categories.find(
                                          (cat) =>
                                            generateSlug(cat.title) ===
                                            generateSlug(category.title),
                                        )?.id,
                                    );

                                    const matchingProduct = products?.find(
                                      (product) =>
                                        product.title === item &&
                                        product.CategoryId ===
                                        categories.find(
                                          (cat) => cat.title === category.title,
                                        )?.id,
                                    );

                                    return (
                                      <React.Fragment key={index}>
                                        {matchingSubcategory && (
                                          <li>
                                            <Link
                                              className="text-14 2xl:text-16 text-primary font-normal"
                                              href={`/${category.title
                                                .toLowerCase()
                                                .replace('shutters', 'shutters-range')}/${ChangedProductUrl(
                                                  matchingSubcategory.title,
                                                )}/`}
                                            >
                                              {matchingSubcategory.title}
                                            </Link>
                                          </li>
                                        )}

                                        {matchingProduct && (
                                          <li>
                                            <Link
                                              className=" text-14 2xl:text-16 text-primary font-normal"
                                              href={generatePath(
                                                matchingProduct,
                                                generateSlug(category.title),
                                              )}
                                            >
                                              {matchingProduct.title}
                                            </Link>
                                          </li>
                                        )}
                                      </React.Fragment>
                                    );
                                  })
                                )}
                              </ul>
                            ),
                            className: 'custom-panel pt-[6px]',
                          },
                        ]}



                      />
                    )
                      : (
                        <div>
                          <h3 className="font-extrabold text-16 mb-2 border-b-4 text-primary lg:border-0 w-fit">
                            {category.title}
                          </h3>
                          <ul className="space-y-2 mt-4 text-primary">

                            {
                              //@ts-ignore
                              category?.items?.map((item, index: number) => {
                                const matchingSubcategory = subcategories?.find(
                                  (subcategory: ICategory) =>
                                    subcategory.title === item &&
                                    subcategory.CategoryId ===
                                    categories.find(
                                      (cat) =>
                                        generateSlug(cat.title) ===
                                        generateSlug(category.title),
                                    )?.id,
                                );

                                const matchingProduct = products?.find(
                                  (product) =>
                                    product.title === item &&
                                    product.CategoryId ===
                                    categories.find(
                                      (cat) => cat.title === category.title,
                                    )?.id,
                                );


                                return (


                                  <React.Fragment key={index}>
                                    {matchingSubcategory && (
                                      <li>
                                        <Link
                                          className="text-12 2xl:text-14 font-medium"
                                          href={`/${category.title.toLowerCase().replace('shutters', 'shutters-range')}/${ChangedProductUrl(matchingSubcategory.title)}/`}

                                        >
                                          {matchingSubcategory.title}
                                        </Link>
                                      </li>
                                    )}

                                    {matchingProduct && (
                                      <li>
                                        <Link
                                          className="text-12 2xl:text-14 font-medium"
                                          href={generatePath(matchingProduct, generateSlug(category.title)) + "/"}
                                        >
                                          {matchingProduct.title}
                                        </Link>
                                      </li>
                                    )}
                                  </React.Fragment>
                                );
                              })}
                          </ul>
                        </div>
                      )}
                </div>
              ))
              )}

            <div className="flex flex-col gap-4 lg:pl-2 mt-0 sm::mt-4 lg:mt-0 col-auto md:col-span-3 lg:col-auto">

              <div className={`${isMobile ? 'flex flex-col gap-4' : 'pl-0 md:mx-auto flex flex-col md:flex-row lg:flex-col gap-4'}`}>
                <div>
                  {isMobile ? (
                    <span className="font-semibold text-16 text-primary">
                      Contact Us
                    </span>
                  ) : (
                    <h3 className="font-bold text-primary text-16 mb-2 border-b-4 lg:border-0 w-fit ">
                      Contact Us
                    </h3>
                  )}
                  <ul className="space-y-4 mt-4 text-sm lg:w-[100%] text-primary">
                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <TfiEmail size={18} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <Link
                        href={`mailto:${EmailInfo.email}`}
                        target="_blank"
                        className="text-12 2xl:text-sm font-medium text-wrap break-all"
                        aria-label='email'
                      >
                        {EmailInfo.email}
                      </Link>
                    </li>
                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <LuPhone size={18} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <Link
                        href={`tel:${phoneNumberInfo.number.replaceAll(' ', '')}`}
                        aria-label="Call Phone Number"
                        target="_blank"
                        className="text-12 2xl:text-sm font-medium text-nowrap"
                      >
                        {phoneNumberInfo.number}
                      </Link>
                    </li>
                    <li className="flex gap-1 flex-nowrap">
                      <span>
                        <FaWhatsapp size={18} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <Link
                        href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`}
                        target="_blank"
                        className="text-12 2xl:text-sm font-medium text-nowrap"
                      >
                        {WhatsAppInfo.number}
                      </Link>
                    </li>
                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <SlCalender size={17} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <p className='text-12 2xl:text-sm font-medium'>8.30am - 6.00pm 7 days a week</p>

                    </li>

                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <IoLocationOutline size={19} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <Link
                        target="_blank"
                        className="text-12 2xl:text-sm font-medium"
                        aria-label="Address"
                        href={
                          'https://www.google.com/maps/place/Two+Guys+-+Blinds+%26+Curtains+Dubai/@25.1177196,55.2331055,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f698d0b075de1:0x223e3563a8be56be!8m2!3d25.1177148!4d55.2356858!16s%2Fg%2F11bbt9c0yz?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD'
                        }
                      >
                        Unit 43 22nd St – Al Quoz Industrial Area 4 – Dubai
                        UAE
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='uppercase text-base font-bold text-primary'>We are in</h4>
                  <ul className='text-primary pt-2 grid grid-cols-2 gap-1 xl:gap-2 xl:px-6'>
                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <IoLocationOutline size={19} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <p
                        className="text-12 2xl:text-sm font-medium"
                      >Dubai
                      </p>
                    </li>
                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <IoLocationOutline size={19} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <p
                        className="text-12 2xl:text-sm font-medium"
                      >Abu Dhabi
                      </p>
                    </li>
                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <IoLocationOutline size={19} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <p
                        className="text-12 2xl:text-sm font-medium"
                      >Ajman
                      </p>
                    </li>
                    <li className="flex gap-2 flex-nowrap">
                      <span>
                        <IoLocationOutline size={19} className="text-secondary me-1 ms-[2px]" />
                      </span>
                      <p
                        className="text-12 2xl:text-sm font-medium"
                      >Sharjah
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-primary-300 py-4 text-center bg-primary">
        <p className="text-16 text-primary-foreground">{footerInfo}</p>
      </div>
    </footer>
  );
};

export default Footer;
