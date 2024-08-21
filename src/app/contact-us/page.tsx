'use client';
import React from 'react';
import TopHero from 'components/ui/top-hero';
import { relativeProducts } from 'data/data';
import second from '../../../public/assets/images/contact-us/contactUs.webp';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { MdEmail } from 'react-icons/md';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import Link from 'next/link';
import { Button } from 'components/ui/button';

const ProductUs: React.FC = () => {
  return (
    <>
      <TopHero title="CONTACT US" image={second} />
      <Container>
        <section className="text-center mb-12">
          <h5 className="xs:py-12 py-5 text-base font-bold">CONTACT US</h5>
          <h2 className="lg:text-5xl text-2xl font-bold">Tell us More</h2>
          <p className="lg:text-xl lg:pt-4 lg:px-12">
            Get some rough window measurements and call us on{' '}
            <Link
              target="_blank"
              href={'tel:+04042522025'}
              className="hover:underline"
            >
              04 252 2025
            </Link>{' '}
            with how many windows you have and we will be happy to give you an
            approximate quote over the phone. Alternatively, you can contact us
            using the contact form below.
          </p>
        </section>

        <section className="flex flex-col lg:flex-row gap-5 lg:gap-12 bg-primary p-6 lg:p-12 lg:mt-20 mt-12 rounded-lg overflow-hidden">
          <div className="lg:w-1/2 w-full text-white ">
            <div className="lg:pl-12 ">
              <p className="lg:text-xl font-bold">Contact Info :</p>
              <h2 className="text-left lg:text-5xl text-2xl font-bold lg:mt-8 mt-4">
                Tell us More
              </h2>
              <p className="lg:mt-8 mt-4 font-light">
                Leverage agile frameworks to provide a robust <br /> synopsis
                for high level overviews. Iterative <br /> approaches to
                corporate strategy foster
              </p>
            </div>
            <div className="lg:mt-8 mt-4 lg:pl-12">
              <p className="lg:text-xl font-bold">Contact Info :</p>
              <div className="flex flex-col gap-4 lg:mt-6 mt-4">
                <div className="flex gap-3 items-start">
                  <IoLocationSharp className="text-white w-6 h-6" />
                  <p>
                    Blinds & Curtains Dubai
                    <br />
                    Unit 43 22nd St – Al Quoz
                    <br />
                    Industrial Area 4 – Dubai – Dubai, UAE
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <IoCall className="text-white w-6 h-6" />
                  <Link
                    target="_blank"
                    href={'tel:+04042522025'}
                    className="hover:underline"
                  >
                    04 252 2025
                  </Link>
                </div>
                <div className="flex gap-3 items-start">
                  <MdEmail className="text-white w-6 h-6" />
                  <Link
                    target="_blank"
                    href="mailto:info@blindsandcurtains.ae"
                    className="hover:underline"
                  >
                    info@blindsandcurtains.ae
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:mt-8 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7371250646106!2d55.2043024!3d25.110758399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b431460c8a5%3A0x29921603a3ff4e37!2sCustom%20Blinds%20And%20Curtains%20Dubai!5e0!3m2!1sen!2s!4v1724146508721!5m2!1sen!2s"
                width="100%"
                height="300"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div className="lg:w-1/2 bg-white lg:p-8 p-4 flex flex-col rounded-lg">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black "
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Input your full name here"
                id="name"
                className="mt-4 p-3 border border-gray-300 rounded-md w-full bg-[#F7F6FE]"
              />
            </div>
            <div className="lg:mt-6 mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Input your email address here"
                id="email"
                className="mt-4 p-3 border border-gray-300 rounded-md w-full bg-[#F7F6FE]"
              />
            </div>
            <div className="lg:mt-6 mt-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={15}
                placeholder="Input your message here"
                className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm bg-[#F7F6FE] focus:ring-opacity-50 p-3"
              />
            </div>
            <div className="mt-4 text-end">
              <Button className="bg-secondary text-white text-sm font-medium py-6 px-8 rounded-lg">
                Send Message
              </Button>
            </div>
          </div>
        </section>
      </Container>
      <Container className="py-10">
        <RelatedProducts products={relativeProducts} />
      </Container>
    </>
  );
};

export default ProductUs;
