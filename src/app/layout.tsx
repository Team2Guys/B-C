import React from 'react';
import type { Metadata } from 'next';
import PathnameWrapper from 'components/Pathcomponent/PathnameWrapper';
import localFont from 'next/font/local';
import 'app/globals.css';
import { Providers } from './Providers';
import { ToastContainer } from 'react-toastify';
import WhatsIcon from 'components/Icons/Whatsapp';
import Callbutton from 'components/Res-usable/callbutton/callbutton';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import Head from 'next/head';


const gotham = localFont({
  src: [
    {
      path: '../../public/fonts/Gotham-Book.otf',
      style: 'normal',
    },

  ],
  variable: '--font-gotham',
  display: 'swap',

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
        <Head>
          {/* Google Site Verification */}
          <meta name="google-site-verification" content="kY94RrP8_rfkJPW-jgK6GaWAfX9BUykeQ5Q7WFxmGyY" />

          {/* Pinterest Domain Verification */}
          <meta name="p:domain_verify" content="58b7c4e018c53c00c2cd12f5f838b47a" />


        </Head>
        <GoogleTagManager gtmId="GTM-MNXTN5B" />

        {/* Microsoft Clarity */}
        <Script

          id="clarity-script"
          strategy="lazyOnload"

          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "pwun6b0806");
            `,
          }}
        />
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1192436448480999');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Google Analytics Script */}
        <Script
          strategy="lazyOnload"

          src="https://www.googletagmanager.com/gtag/js?id=G-2W1CWBHDRB"
        />

        <Script id="google-analytics"
          strategy="lazyOnload"

        >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2W1CWBHDRB');
        `}
        </Script>


        <body className={` ${gotham.className} bg-lightgrey`}>


          <GoogleTagManager gtmId="GTM-MNXTN5B" />
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNXTN5B"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>


          <PathnameWrapper>
            {children}
            <Callbutton />
            <WhatsIcon />
            <ToastContainer autoClose={3000} />
          </PathnameWrapper>
        </body>
      </html>
    </Providers>
  );
}
