'use client';
import { usePathname } from 'next/navigation';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';

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
        <Footer />
      )}
    </>
  );
};

export default PathnameWrapper;
