import type { Metadata } from 'next';
import PathnameWrapper from 'components/Pathcomponent/PathnameWrapper';
import localFont from 'next/font/local';
import 'app/globals.css';
import { Providers } from './Providers';

const gotham = localFont({
  src: [
    {
      path: '../../public/fonts/Gotham-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gotham-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gotham-UltraItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gotham-XLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham-XLightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/GothamBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/GothamBook.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamBookItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/GothamLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamLightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/GothamMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamMediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/GothamMedium_1.ttf',
      weight: '500',
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
        <body className={`${gotham.className} bg-lightgrey`}>
          <PathnameWrapper> {children}</PathnameWrapper>
        </body>
      </html>
    </Providers>
  );
}
