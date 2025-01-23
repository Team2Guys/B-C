'use client'
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import bgBanner from '../../../public/assets/images/booknow.png';
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
      className={`w-full flex items-center relative ${className} bg-right bg-cover sm:bg-[left_center] h-[200px] xs:h-[380px]`}
      style={{
        backgroundImage: `url(${bgBanner.src})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute w-full h-[200px] xs:h-full bg-light opacity-60"></div>
      <Container className="z-0">
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
            className="px-4 py-3 bg-secondary hover:bg-primary text-white rounded-md uppercase text-14 xs:text-base"
          >
            Book A Free Home Design Visit
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BookNowBanner;
