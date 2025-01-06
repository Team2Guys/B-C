'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import Testimonial from 'components/slider/testimonial';
import OurClient from 'components/Our-Client/OurClient';

const PathnameWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const withoutHeaderPages = ['/blog',];

  const splited_urls = pathname.split('/');

  return (
    <>
      {withoutHeaderPages.includes(pathname) ||
      splited_urls.includes('dashboard') ? null : (
        <Header />
      )}
      {children}
      {withoutHeaderPages.includes(pathname) ||
      splited_urls.includes('dashboard') ? null : (
        <>
          {splited_urls.includes('blog') || splited_urls.includes('product-guarantees') ? null : (
            <>
            <Guarrenty />
            <Testimonial />
            <OurClient />
            </>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default PathnameWrapper;
