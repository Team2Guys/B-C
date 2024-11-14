import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import React from 'react';
import bgBanner from '../../../public/assets/images/commercial-electric-blinds-hero-1_1.png';
interface BookNowBannerProps {
  className?: string; // className is optional
}
const BookNowBanner: React.FC<BookNowBannerProps> = ({ className }) => {
  return (
    <div
      className={`w-full md:mt-8 flex items-center relative ${className}`}
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
        {/* <p className="text-16 sm:text-2xl md:text-3xl lg:text-4xl font-medium mx-auto w-fit text-center">
          Need some more information or to{' '}
          <span className="font-black">Arrange an Appointment?</span>
          <br />
          Send us an email or call us on: 04 252 2025
        </p> */}
        <p className="text-16 sm:text-2xl md:text-3xl lg:text-4xl font-medium mx-auto w-full lg:w-3/4 text-center">Contact us today for a free consultation and discover the best custom-made blinds for your space</p>
        <div className="mt-6 text-center">
          <Link href="/request-appointment" className="px-4 py-3 bg-white rounded-md">
            Book A Free Home Design Visit
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BookNowBanner;
