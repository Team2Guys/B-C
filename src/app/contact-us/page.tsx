import React from 'react';
import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/contact-us/contactUs.webp';
import Container from 'components/Res-usable/Container/Container';
import { MdEmail } from 'react-icons/md';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import Link from 'next/link';
import BookAppointment from 'components/Book-appointment/BookAppointment';
import { SlCalender } from "react-icons/sl";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blind And Curtains Dubai | Contact Us',
  description: 'Shop the best blinds and curtains in Dubai. Stylish, affordable, and perfect for your space. Call us now to upgrade your home or office today.',
  openGraph: {
    title: 'Blind And Curtains Dubai | Contact Us',
    description: 'Shop the best blinds and curtains in Dubai. Stylish, affordable, and perfect for your space. Call us now to upgrade your home or office today.',
    url: 'https://b-c-eight.vercel.app/blog',
    images: [
      {
        url: 'https://b-c-eight.vercel.app/blindsandcurtains.jpg',
        alt: 'Blind And Curtains Dubai | Contact Us',
      },
    ],
  },
  alternates: {
    canonical: 'https://b-c-eight.vercel.app/contact-us',
  },
};

const ProductUs: React.FC = () => {
  return (
    <>
      <TopHero title="CONTACT US" image={second.src} />
      <Container>
        <section className="text-center mb-12 max-w-screen-xl mx-auto">
          <h5 className="xs:py-12 py-5 text-[#666666] text-base font-bold">
            CONTACT US
          </h5>
          <h2 className="lg:text-5xl text-xl font-bold text-[#333333]">
            Tell us More
          </h2>
          <p className="text-14 lg:text-16 lg:pt-4 lg:px-12 text-[#666666]">
            Get some rough window measurements and call us on{' '}
            <Link
              target="_blank"
              href={'tel:+04042522025'}
              className="underline"
            >
              04 252 2025
            </Link>{' '}
            with how many windows you have and we will be happy to give you an
            approximate quote over the phone. Alternatively, you can contact us
            using the contact form below.
          </p>
        </section>

        <section className="flex flex-col lg:flex-row gap-5  justify-between bg-primary p-6 lg:p-12 lg:mt-20 mt-12 rounded-lg overflow-hidden">
          <div className="lg:w-1/2 w-full text-white ">
            <div className="lg:pl-12 ">
              <p className="md:text-xl font-bold">Contact Info :</p>
              <h2 className="text-left lg:text-4xl text-3xl font-bold lg:mt-5 mt-4">
                Tell Us More
              </h2>
              <p className="lg:mt-4 mt-4 font-light text-14 lg:text-16 md:text-18">
              The most trusted window treatment company in Dubai with a decade of experience and 100s of positive reviews.</p>
              <div className="block sm:hidden">
                <BookAppointment />
              </div>
            </div>
            <div className="lg:mt-5 mt-4 lg:pl-12">
              <p className="md:text-xl font-bold">Contact Info :</p>
              <div className="flex flex-col gap-4 lg:mt-6 mt-4">
                <div className="text-14 md:text-18 flex gap-3 items-start">
                  <IoLocationSharp className="text-white w-6 h-6" />
                  <p>
                    Unit 43 22nd St Al Quoz Industrial Area 4 – Dubai UAE
                  </p>
                </div>
                <div className="text-14 md:text-18 flex gap-3 items-start">
                  <IoCall className="text-white w-6 h-6" />
                  <Link
                    target="_blank"
                    href={'tel:+971544945339'}
                    className="hover:underline"
                  >
                    +971 54 494 5339
                  </Link>
                </div>
                <div className="text-14 md:text-18 flex gap-3 items-start">
                  <SlCalender className="text-white w-6 h-6" />
                    8.30am - 6.00pm 7 days a week</div>
                <div className=" text-14 flex gap-3 items-start md:text-18">
                  <MdEmail className="text-white w-6 h-6" />
                  <Link
                    target="_blank"
                    href="mailto:connect@twoguys.ae"
                    className="hover:underline"
                  >
                    connect@twoguys.ae
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:mt-5 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115601.00872970802!2d55.235686!3d25.117715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f698d0b075de1%3A0x223e3563a8be56be!2sBlinds%20And%20Curtains%20Dubai!5e0!3m2!1sen!2sus!4v1731328247874!5m2!1sen!2sus"
                width="100%"
                height="200"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>
          <BookAppointment className=" hidden sm:block" />

          {/* <form
            onSubmit={handelSubmit}
            className="lg:w-1/2 bg-white lg:p-8 p-4 flex flex-col rounded-lg"
          >
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
                value={formData.name}
                onChange={handleChange}
                // required
                placeholder="Enter Name here"
                id="name"
                className="mt-4 p-3 border border-gray-300 rounded-md w-full bg-[#F7F6FE]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
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
                value={formData.email}
                onChange={handleChange}
                // required
                placeholder="Enter Email here"
                id="email"
                className="mt-4 p-3 border border-gray-300 rounded-md w-full bg-[#F7F6FE]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
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
                value={formData.message}
                onChange={handleChange}
                // required
                rows={15}
                placeholder="Write your message here..."
                className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm bg-[#F7F6FE] focus:ring-opacity-50 p-3"
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>
            <div className="mt-4 text-end">
              <input
                type="submit"
                className="bg-secondary hover:bg-btnclr text-white text-16 font-medium py-4 px-14 sm:px-16 rounded-lg cursor-pointer"
                value="Send Message"
              />
            </div>
          </form> */}
        </section>
      </Container>
    </>
  );
};

export default ProductUs;
