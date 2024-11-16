'use client';

import React from 'react';
import {
  footerLinks,
  footerInfo,
  generateSlug,
  blindMegaMenuItems,
  shutterMegaMenuItems,
  curtainMegaMenuItems,
  commercialMegaMenuItems,
  phoneNumberInfo,
  WhatsAppInfo,
  EmailInfo,
} from 'data/data';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
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
import FooterItem from 'components/FooterItem';
import { updateProductTitle } from 'components/ui/menu-card';

const Footer: React.FC = () => {
  const { data: products } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { data: categories, error: categoriesError } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: subcategories, error: subcategoriesError } = useQuery<
    ICategory[]
  >({
    queryKey: ['subcategories'],
    queryFn: fetchSubCategories,
  });

  if (categoriesError || subcategoriesError) {
    return (
      <div>
        Error: {categoriesError?.message || subcategoriesError?.message}
      </div>
    );
  }
  const filterArray = ['shutters', 'White', 'Off White', 'Black', 'Dark Woods', 'Light Woods', 'Bold Colours', 'Grey'];

  return (
    <footer>
      <div className="bg-primary text-white py-10">
        <div className="max-w-screen-2xl mx-auto px-2">
          <div className="lg:flex border-b-2 px-2">
            <div className="mb-4 md:col-span-1 lg:w-2/12">
              <Link href={'/'}>
                <Image
                  src={'/assets/images/whitelogo.png'}
                  className="w-auto h-auto lg:w-24 lg:h-20"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </Link>
              <p className="text-sm text-white text-wrap">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:justify-items-center py-5 lg:w-5/6 space-y-0">
              {categories
                ?.filter((category) => category.title !== 'Commercial')
                .sort((a, b) => {
                  const order = ['Blinds', 'Curtains', 'Shutters'];
                  return order.indexOf(a.title) - order.indexOf(b.title);
                })
                .map((category) => (
                  <div className='pl-2' key={category.id}>
                    <h3 className="font-extrabold text-16 mb-2 border-b-4 lg:border-0 w-fit">
                      {category.title}
                    </h3>
                    <ul className="space-y-2 mt-4">
                      {subcategories
                        ?.filter(
                          (subcategory) =>
                            subcategory.CategoryId === category.id,
                        )
                        .map((subcategory) => {
                          const filteredCategory = categories?.find(
                            (cat) => cat.id === subcategory.CategoryId,
                          );
                          return (
                            <li key={subcategory.id}>
                              {filteredCategory?.title.toLowerCase() === 'shutters' ? (
                                <>

                                  {filterArray.some(substring => subcategory.title.includes(substring)) ? '' : (<Link
                                    className="text-sm font-medium"
                                    href={`/shutters-range/${generateSlug(subcategory.title)}`}
                                  >
                                    {subcategory.title}
                                  </Link>)}

                                </>
                              ) : (
                                <Link
                                  className="text-sm font-medium"
                                  href={`/${filteredCategory?.title.toLowerCase()}/${generateSlug(subcategory.title)}`}
                                >
                                  {subcategory.title}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      {products
                        ?.filter(
                          (product) => product.CategoryId === category.id,
                        )
                        .slice(0, category.id === 2 ? 5 : 6)
                        .map((product) => {
                          const filteredCategory = categories?.find(
                            (cat) => cat.id === product.CategoryId,
                          );
                          //@ts-expect-error
                          const parent = generateSlug(filteredCategory?.title);
                          return (
                            <li key={product.id}>
                              <Link
                                className="text-14 font-medium"
                                href={`/${parent === 'shutters' ? `${parent}-range` : parent}/${generateSlug(product.title)}`}
                              >
                                {updateProductTitle(product.title)}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                ))}

              <div className='flex flex-col gap-4 col-span-2 pl-2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
                  {footerLinks.map((category, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-16 mb-2 border-b-4 lg:border-0 w-fit">
                        {category.title}
                      </h3>
                      <ul className="space-y-3 mt-4 text-sm">
                        {category.links.map((link, index) => (
                          <li key={index}>
                            <Link className="text-14 font-medium" href={link.href}>
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
                      <li className='flex gap-2'>
                        <p className="text-12 font-normal">Email:</p>
                        <Link href={`mailto:${EmailInfo.email}`} target='_blank' className="text-12 font-normal text-nowrap">
                          {EmailInfo.email}
                        </Link>
                      </li>
                      <li className='flex gap-2'>
                        <p className="text-12 font-normal w-fit">Phone Number:</p>
                        <Link href={`tel:${phoneNumberInfo.number.replaceAll(' ', '')}`} target='_blank' className="text-12 font-normal text-nowrap">
                          {phoneNumberInfo.number}
                        </Link>
                      </li>
                      <li className='flex gap-2'>
                        <p className="text-12 font-normal w-fit">WhatsApp:</p>
                        <Link href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`} target='_blank' className="text-12 font-normal w-full text-nowrap">
                          {WhatsAppInfo.number}
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          className="text-12 font-normal w-full"
                          href={
                            'https://www.google.com/maps/place/Two+Guys+-+Blinds+%26+Curtains+Dubai/@25.1177196,55.2331055,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f698d0b075de1:0x223e3563a8be56be!8m2!3d25.1177148!4d55.2356858!16s%2Fg%2F11bbt9c0yz?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD'
                          }
                        >
                          Unit 43 22nd St – Al Quoz Industrial Area 4 – Dubai UAE
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className='overflow-hidden grow'
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14450.034204416814!2d55.2256!3d25.1275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f698d0b075de1%3A0x223e3563a8be56be!2sTwo%20Guys%20-%20Blinds%20%26%20Curtains%20Dubai!5e0!3m2!1sen!2sus!4v1727335871755!5m2!1sen!2sus"
                    
                    className='w-full h-full min-h-60'
                    // style={{ position: 'relative', left: '-52px' }}
                    loading="lazy"
                  ></iframe>
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
