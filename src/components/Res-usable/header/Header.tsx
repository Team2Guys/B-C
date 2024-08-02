'use client';
import React, { useState } from 'react';
import { menuItem } from 'data/data';
import Link from 'next/link';
import CustomArrows from 'components/slider/Slider';
import Container from 'components/Res-usable/Container/Container';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [Header, setHeader] = useState<string | null>();

  const showMenuHandler = (HeaderMenuName: string) => {
    setHeader(HeaderMenuName);
  };

  return (
    <>
      <div className="w-full bg-primary">
        <Container>
          <p className="text-black text-center py-2 text-12  font-medium tracking-[2.9px] leading-loose">
            We can visit you, take measurements, help select fabrics & install
            in 1-2 days. Call Dubai 04 252 2025 now or email us on
            connect@twoguys.ae
          </p>
        </Container>
      </div>
      <nav className="bg-white shadow-md">
        <Container>
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
              </div>
              <div className="block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/blinds"
                  >
                    Blinds
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/curtains"
                  >
                    Curtains
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/shutters"
                  >
                    Shutters
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/commercial"
                  >
                    Commercial
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/gallery"
                  >
                    Gallery
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/estimator"
                  >
                    Estimator
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/about-us"
                  >
                    About Us
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"'
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                  <Link
                    className='className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium'
                    href="/free-consultation"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Header;
