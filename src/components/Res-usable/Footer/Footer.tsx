'use client';

import React from 'react';
import { footerLinks, footerInfo, generateSlug } from 'data/data';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { IoLogoPinterest } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import { ICategory } from 'types/types';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchSubCategories } from 'config/fetch';

const Footer: React.FC = () => {
  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const {
    data: subcategories,
    error: subcategoriesError,
    isLoading: isLoadingSubcategories,
  } = useQuery<ICategory[]>({
    queryKey: ['subcategories'],
    queryFn: fetchSubCategories,
  });

  if (categoriesError || subcategoriesError) {
    return <div>Error: {categoriesError?.message || subcategoriesError?.message}</div>;
  }

  if (isLoadingCategories || isLoadingSubcategories) {
    return (
      <div>
        {/* Loading state content */}
      </div>
    );
  }

  return (
    <footer>
      <div className="bg-primary text-white py-10">
        <div className="max-w-screen-2xl mx-auto  px-2">
          <div className="lg:flex border-b-2">
            <div className="mb-4 md:col-span-1 lg:w-2/12">
              <Link href={'/'}>
                <Image
                  src={'/assets/images/whitelogo.png'}
                  className='w-auto h-auto'
                  alt=""
                  width={150}
                  height={150}
                />
              </Link>
              <p className="text-sm text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since.
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <Link
                  target="_blank"
                  href={'https://www.facebook.com/blindsandcurtainsdubai'}
                >
                  <CiFacebook className="w-10 h-10" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.pinterest.com/blindsandcurtainsdubai/'}
                >
                  <IoLogoPinterest className="w-10 h-10 rounded-full" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/blindsandcurtainsdubai/'}
                >
                  <AiOutlineInstagram className="w-10 h-10" />
                </Link>
              </div>
            </div>

            <div className="grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:justify-items-end py-5  lg:w-5/6">
            {categories
            ?.filter((category) => category.title !== 'Commercial') 
            .map((category) => (
              <div key={category.id}>
                <h3 className="font-bold text-16 mb-2">{category.title}</h3>
                <ul className="space-y-3 mt-4 text-sm">
                  {subcategories
                    ?.filter(
                      (subcategory) =>
                        subcategory.CategoryId === category.id &&
                        category.title !== 'Commercial'
                    )
                    .map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link className="text-16 font-medium" href={`/product/${generateSlug(subcategory.title)}`}>
                          {subcategory.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
              {footerLinks.map((category,index) => (
                <div key={index} className="md:col-span-1 lg:pl-8 mt-5 lg:mt-0 ">
                  <h3 className="font-bold text-16 mb-2 border-b-4 lg:border-0 w-fit">{category.title}</h3>
                  <ul className="space-y-3 mt-4 text-sm">
                    {category.links.map((link, index) => (
                      <li key={index}>
                        <Link className='text-16 font-medium' href={link.href}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
                <div className="md:col-span-1 lg:pl-8  mt-5 lg:mt-0">
                  <h3 className="font-bold mb-2 border-b-4 lg:border-0 w-fit">Blinds & Curtains Dubai</h3>
                  <ul className="space-y-4 mt-4 text-sm">
                  <li>
                    <Link className='text-16 font-normal -tracking-widest' href={"https://www.google.com/maps?ll=25.110758,55.204302&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=2995480907046932023"}>Unit 43 22nd St – Al Quoz Industrial Area 4 – Dubai  UAE</Link>
                  </li>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7371250646106!2d55.2043024!3d25.110758399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b431460c8a5%3A0x29921603a3ff4e37!2sCustom%20Blinds%20And%20Curtains%20Dubai!5e0!3m2!1sen!2s!4v1724146508721!5m2!1sen!2s"
                    width="100%"
                    height="200"
                    loading="lazy"
                    style={{ border: 0 }}
                    />
                  </ul>
                </div>
          
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#F6EFE9]-300 py-4  text-center bg-[#F6EFE9]">
        <p className="text-16 font-gotham-400 ">{footerInfo}</p>
      </div>
    </footer>
  );
};

export default Footer;
