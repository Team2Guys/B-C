'use client';

import React from 'react';
import { footerLinks, footerInfo } from 'data/data';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { IoLogoPinterest } from 'react-icons/io5';

import { AiOutlineInstagram } from 'react-icons/ai';

import { CiFacebook } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-primary text-white py-10">
        <div className="max-w-screen-2xl mx-auto  px-2">
          <div className="lg:flex border-b-2">
            <div className="mb-4 md:col-span-1 lg:w-2/12">
              <Link href={'/'}>
                <Image
                  src={'/assets/images/whitelogo.png'}
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
                  <CiFacebook className="w-7 h-7" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.pinterest.com/blindsandcurtainsdubai/'}
                >
                  <IoLogoPinterest className="w-7 h-7 rounded-full" />
                </Link>
                <Link href={''}>
                  <TiSocialLinkedinCircular className="w-8 h-8 rounded-full" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/blindsandcurtainsdubai/'}
                >
                  <AiOutlineInstagram className="w-7 h-7" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:justify-items-end py-5  lg:w-5/6">
              {footerLinks.map((category) => (
                <div key={category.title} className="md:col-span-1 lg:pl-8 ">
                  <h3 className="font-bold mb-2">{category.title}</h3>
                  <ul className="space-y-4 mt-4 text-sm">
                    {category.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4  text-center bg-white">
        <p className="text-sm text-muted-foreground">{footerInfo}</p>
      </div>
    </footer>
  );
};

export default Footer;
