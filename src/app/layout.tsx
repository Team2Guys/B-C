import React from 'react';
import type { Metadata } from 'next';
import PathnameWrapper from 'components/Pathcomponent/PathnameWrapper';
import localFont from 'next/font/local';
import 'app/globals.css';
import { Providers } from './Providers';
import { ToastContainer } from 'react-toastify';
import WhatsIcon from 'components/Icons/Whatsapp';
import Callbutton from 'components/Res-usable/callbutton/callbutton';

const gotham = localFont({
  src: [
    {
      path: '../../public/fonts/Gotham-Book.otf',
      style: 'normal',
    },

  ],
  variable: '--font-gotham',
});

export const metadata: Metadata = {
  title: 'Blinds and Curtains',
  description: 'Welcome To Blinds and Curtains !',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={` ${gotham.className} bg-lightgrey`}>
          <PathnameWrapper>
            {children}
            <Callbutton/>
            <WhatsIcon />
            <ToastContainer autoClose={3000} />
          </PathnameWrapper>
        </body>
      </html>
    </Providers>
  );
}
