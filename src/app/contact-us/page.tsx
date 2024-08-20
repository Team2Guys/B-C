'use client';
import TopHero from 'components/ui/top-hero';
import { relativeProducts } from 'data/data';
import second from '../../../public/assets/images/product-guarantees/large.png';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { IoLocationSharp } from 'react-icons/io5';

import Image from 'next/image';

const ProductUs: React.FC = () => {
  return (
    <>
      <TopHero title="CONTACT US" image={second} />
      <Container>
        <div className="text-center">
          <h5 className="py-12 text-base font-bold">CONTACT US</h5>
          <h2 className="lg:text-4xl text-2xl font-bold">Tell us More</h2>
          <p className="lg:text-xl lg:pt-4 lg:px-12">
            Get some rough window measurements and call us with how many windows
            you have and we will be happy to give you an approximate quote over
            the phone. Alternatively, you can contact us using the contact form
            below.
          </p>
        </div>
        <div className="flex gap-5 bg-primary p-12">
          <div className="lg:w-1/2">
            <div className="text-left">
              <p>CONTACT US</p>
              <h2 className="lg:text-4xl text-2xl font-bold">Tell us More</h2>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                high-level overviews. Iterative approaches to corporate strategy
                foster
              </p>
            </div>
            <div>
              <p>Contact Info :</p>
              <div className="flex gap-2">
                <IoLocationSharp />
                <p>
                  Blinds & Curtains Dubai
                  <br />
                  Unit 43 22nd St – Al Quoz
                  <br />
                  Industrial Area 4 – Dubai – Dubai, UAE
                </p>
              </div>
              <div className="flex gap-2">
                <IoLocationSharp />
                <a
                  href="tel:+04042522025"
                  className="text-blue-600 hover:underline"
                >
                  04 252 2025
                </a>
              </div>
              <div className="flex gap-2">
                <IoLocationSharp />
                <a
                  href="mailto:info@blindsandcurtains.ae"
                  className="text-blue-600 hover:underline"
                >
                  info@blindsandcurtains.ae
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Input your full name here"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                placeholder="Input your email address here"
                id="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Input your message here"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-10">
        <RelatedProducts products={relativeProducts} />
      </Container>
    </>
  );
};

export default ProductUs;
