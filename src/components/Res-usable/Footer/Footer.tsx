'use client';

import React from 'react';
import {
  footerLinks,
  footerInfo,
  generateSlug,
  phoneNumberInfo,
  WhatsAppInfo,
  EmailInfo,
  footerData,
} from 'data/data';
import { IoLogoPinterest } from 'react-icons/io5';
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

  // const filterArray = [
  //   'shutters',
  //   'White',
  //   'Off White',
  //   'Black',
  //   'Dark Woods',
  //   'Light Woods',
  //   'Bold Colours',
  //   'Grey',
  // ];
  const generatePath = (product: IProduct, parent: string) => {
    const slug = ChangedProductUrl_handler(product.title);
    const basePath = product.href
      ? `${window.origin}/${product.href}`
      : `/${slug}`;

    return (
      predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${parent === 'shutters' ? `${parent}-range` : parent}${
            [
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
  return (
    <footer>
      <div className="bg-primary text-white py-10">
        <div className="max-w-screen-2xl mx-auto px-2">
          <div className="lg:flex border-b-2 px-2 xl:gap-7 2xl:gap-8">
            <div className="mb-4 md:col-span-1 lg:w-2/12 flex flex-col items-center sm:items-start">
              <Link href={'/'}>
                <Image
                  src={'/assets/images/whitelogo.png'}
                  className="w-auto h-auto lg:w-24 lg:h-20 "
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </Link>
              <p className="text-sm text-white text-center sm:text-start">
              The most trusted window treatment company in Dubai with a decade of experience and 100s of positive reviews.
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <Link
                  target="_blank"
                  href={'https://www.facebook.com/blindsandcurtainsdubai'}
                >
                  <CiFacebook className="w-9 h-9" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.pinterest.com/blindsandcurtainsdubai/'}
                >
                  <IoLogoPinterest className="w-9 h-9 rounded-full" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/blindsandcurtainsdubai/'}
                >
                  <AiOutlineInstagram className="w-9 h-9" />
                </Link>
              </div>
            </div>

            <div className=" py-5 w-full lg:w-5/6 space-y-0">
              <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-12 lg:justify-items-center">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 col-span-12 md:col-span-7 w-full">
                  {isLoading || isError ? (
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 col-span-12 md:col-span-7 w-full gap-5">
                      {Array.from({ length: 27 }).map((_, index) => (
                        <Skeleton
                          key={index}
                          className="w-1/2 h-6 bg-white/25"
                        />
                      ))}
                    </div>
                  ) : (
                    footerData.map((category) => (
                      <div className="pl-2" key={category.title}>
                        <h3 className="font-extrabold text-16 mb-2 border-b-4 lg:border-0 w-fit">
                          {category.title}
                        </h3>
                        <ul className="space-y-2 mt-4">
                          {category.items.map((item) => {
                            const matchingSubcategory = subcategories?.find(
                              (subcategory) =>
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
                              <React.Fragment key={item}>
                                {matchingSubcategory && (
                                  <li>
                                    <Link
                                      className="text-sm font-medium"
                                      href={`/${category.title.toLowerCase()}/${ChangedProductUrl(
                                        matchingSubcategory.title,
                                      )}`}
                                    >
                                      {matchingSubcategory.title}
                                    </Link>
                                  </li>
                                )}

                                {matchingProduct && (
                                  <li>
                                    <Link
                                      className="text-sm font-medium"
                                      href={generatePath(
                                        matchingProduct,
                                        generateSlug(category.title),
                                      )}
                                    >
                                      {/* {updateProductTitle(
                                        matchingProduct.title,
                                      )}{' '} */}
                                      {matchingProduct.title}
                                    </Link>
                                  </li>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </ul>
                      </div>
                    ))
                  )}
                </div>

                <div className="flex flex-col gap-4 pl-2 col-span-12 md:col-span-5 mt-5 md:mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    {footerLinks.map((category, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-16 mb-2 border-b-4 lg:border-0 w-fit">
                          {category.title}
                        </h3>
                        <ul className="space-y-3 mt-4 text-sm">
                          {category.links.map((link, index) => (
                            <li key={index}>
                              <Link
                                className="text-sm font-medium"
                                href={link.href}
                              >
                                {link.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div>
                      <h3 className="font-bold mb-2 border-b-4 lg:border-0 w-fit text-16">
                        Blinds & Curtains Dubai
                      </h3>
                      <ul className="space-y-4 mt-4 text-sm lg:w-[100%]">
                        <li className="flex gap-2 flex-wrap">
                          <p className="text-sm font-medium">Email:</p>
                          <Link
                            href={`mailto:${EmailInfo.email}`}
                            target="_blank"
                            className="text-sm font-medium text-nowrap"
                          >
                            {EmailInfo.email}
                          </Link>
                        </li>
                        <li className="flex gap-2 flex-wrap">
                          <p className="text-sm font-medium w-fit">
                            Phone Number:
                          </p>
                          <Link
                            href={`tel:${phoneNumberInfo.number.replaceAll(' ', '')}`}
                            target="_blank"
                            className="text-sm font-medium text-nowrap"
                          >
                            {phoneNumberInfo.number}
                          </Link>
                        </li>
                        <li className="flex gap-2 flex-wrap">
                          <p className="text-sm font-medium ">WhatsApp:</p>
                          <Link
                            href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`}
                            target="_blank"
                            className="text-sm font-medium"
                          >
                            {WhatsAppInfo.number}
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="text-sm font-medium w-full"
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
                  </div>
                  <div className="overflow-hidden grow">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14450.034204416814!2d55.2256!3d25.1275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f698d0b075de1%3A0x223e3563a8be56be!2sTwo%20Guys%20-%20Blinds%20%26%20Curtains%20Dubai!5e0!3m2!1sen!2sus!4v1727335871755!5m2!1sen!2sus"
                      className="w-full h-full min-h-30"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#F6EFE9]-300 py-4 text-center bg-[#F6EFE9]">
        <p className="text-14 font-gotham-400">{footerInfo}</p>
      </div>
    </footer>
  );
};

export default Footer;
