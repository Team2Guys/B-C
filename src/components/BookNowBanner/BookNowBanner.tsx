import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import React from 'react';
import bgBanner from '../../../public/assets/images/commercial-electric-blinds-hero-1_1.png';

const BookNowBanner = () => {
  return (
    <div
      className="w-full mt-8 flex items-center relative"
      style={{
        backgroundImage: `url(${bgBanner.src})`,
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '380px',
      }}
    >
      <div className="absolute w-full h-full bg-light opacity-60"></div>
      <Container className="z-0">
        <p className="lg:text-4xl text-2xl font-medium mx-auto w-fit text-center">
          Need some more information or to{' '}
          <span className="font-black">Arrange an Appointment?</span>
          <br />
          Send us an email or call us on: 04 252 2025
        </p>
        <div className="mt-6 text-center">
          <Link href="/" className="px-4 py-3 bg-white rounded-md">
            Booking Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BookNowBanner;
