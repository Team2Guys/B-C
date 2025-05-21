'use client';
import { usePathname } from 'next/navigation';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { ReactNode } from 'react';
import CallUS from 'components/CallUs/CallUS';

const PathnameWrapper = ({ children }: { children: ReactNode }) => {
  const isNotFoundPage = useSelector((state: RootState) => state.pageState.isNotFoundPage);
  const pathname = usePathname();
  const withoutHeaderPages = ['/blog'];

  const splited_urls = pathname.split('/');

  return (
    <>
      {withoutHeaderPages.includes(pathname) || splited_urls.includes('dashboard') ? null : <Header />}
      {children}
      {withoutHeaderPages.includes(pathname) || splited_urls.includes('dashboard') ? null : (
        <>
          {splited_urls.includes('blog') || splited_urls.includes('product-guarantees') || isNotFoundPage || splited_urls.includes('request-appointment') ? null : (
            <>
              {/* <Guarrenty /> */}
              {/* {!hiddenTestimonialPages.includes(pathname) && <Testimonial />} */}
              <CallUS />
            </>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default PathnameWrapper;
