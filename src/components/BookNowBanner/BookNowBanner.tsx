'use client'
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import bgBanner from '../../../public/assets/images/commercial-electric-blinds-hero-1_1.png';
import { usePathname } from 'next/navigation';
import { BooKNowbannerContent } from 'data/data';
interface BookNowBannerProps {
  className?: string;
  parent?: string;
}
const BookNowBanner: React.FC<BookNowBannerProps> = ({ className, parent }) => {
  const pathname = usePathname();
  const [content, setContent] = useState<string | null>(null);
  useEffect(() => {
    if (pathname) {
      const filteredContent = BooKNowbannerContent.find((content) => content.url === pathname);
      if (filteredContent) {
        setContent(filteredContent.content);
      }
    }
  }, [pathname])
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
        <p
          className="text-16 sm:text-2xl md:text-3xl lg:text-4xl font-medium mx-auto w-full lg:w-3/4 text-center"
        >
          {content ? (
            <span dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <>
              Contact us today for a free consultation and discover the best custom-made{' '}
              {parent || 'blinds'} for your space
            </>
          )}
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/request-appointment"
            className="px-4 py-3 bg-white rounded-md uppercase text-14 xs:text-base"
          >
            Book A Free Home Design Visit
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BookNowBanner;
