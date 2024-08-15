'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Container from 'components/Res-usable/Container/Container';
import logo from '../../../../public/assets/images/logomain.png';
import Image from 'next/image';

function Header() {
  return (
    <>
      <div className="w-full bg-primary">
        <Container>
          <p className="text-black text-center py-2 text-12  font-semibold md:tracking-[4.6px] md:leading-loose">
            We can visit you, take measurements, help select fabrics & install
            in 1-2 days. Call Dubai{' '}
            <Link className="underline font-semibold" href={'tel:04 252 2025'}>
              04 252 2025
            </Link>{' '}
            now or email us on{' '}
            <Link
              className="underline font-semibold"
              href={'mailto:connect@twoguys.ae'}
            >
              connect@twoguys.ae
            </Link>
          </p>
        </Container>
      </div>
      <nav className="bg-lightgrey shadow-md">
        <Container className="flex items-center justify-evenly  gap-10">
          <div>
            <Image width={150} height={150} src={logo} alt="Logo" />
          </div>
          <div className="flex space-x-5 text-16">
            <Link
              className=" px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className=" px-3 py-2 rounded-md text-sm font-medium"
              href="/blinds"
            >
              Blinds
            </Link>
            <Link
              className="  px-3 py-2 rounded-md text-sm font-medium"
              href="/curtains"
            >
              Curtains
            </Link>
            <Link
              className="  px-3 py-2 rounded-md text-sm font-medium"
              href="/shutters"
            >
              Shutters
            </Link>
            <Link
              className="  px-3 py-2 rounded-md text-sm font-medium"
              href="/commercial"
            >
              Commercial
            </Link>
            <Link
              className="  px-3 py-2 rounded-md text-sm font-medium"
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="  px-3 py-2 rounded-md text-sm font-medium"
              href="/estimator"
            >
              Estimator
            </Link>
            <Link
              className="  px-3 py-2 rounded-md text-sm font-medium"
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className="  px-3 py-2 rounded-md text-sm font-medium"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
          <Link
            className="  px-3 py-2 rounded-md text-sm font-medium bg-primary-foreground"
            href="/free-consultation"
          >
            Free Consultation
          </Link>
        </Container>
      </nav>
    </>
  );
}

export default Header;