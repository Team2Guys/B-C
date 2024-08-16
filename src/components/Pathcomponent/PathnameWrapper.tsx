'use client';
import { usePathname } from 'next/navigation';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import Testimonial from 'components/slider/testimonial';
import OurClient from 'components/Our-Client/OurClient';

const PathnameWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const withoutHeaderPages = [''];

  return (
    <>
      {withoutHeaderPages.includes(pathname) ||
      pathname.split('/').includes('dashboard') ? null : (
        <Header />
      )}
      {children}
      {withoutHeaderPages.includes(pathname) ||
      pathname.split('/').includes('dashboard') ? null : (
        <>
          <Guarrenty />
          <Testimonial />
          <OurClient />
          <Footer />
        </>
      )}
    </>
  );
};

export default PathnameWrapper;
