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
        <head>
          <GoogleTagManager gtmId="GTM-MNXTN5B" />
          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `
             type="c63663996fc2ec3877fa585a-text/javascript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNXTN5B'
            `,
            }}
          />

          <Script
            id="clarity-script"
            strategy="afterInteractive"
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

          <meta name="google-site-verification" content="kY94RrP8_rfkJPW-jgK6GaWAfX9BUykeQ5Q7WFxmGyY" />
          <meta name="p:domain_verify" content="58b7c4e018c53c00c2cd12f5f838b47a" />

          <Script
            id="meta-pixel"
            dangerouslySetInnerHTML={{
              __html: `
            type="c63663996fc2ec3877fa585a-text/javascript">
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


          

          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
               async src="https://www.googletagmanager.com/gtag/js?id=UA-133442332-1" type="c63663996fc2ec3877fa585a-text/javascript"></script>
<script type="c63663996fc2ec3877fa585a-text/javascript">
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());


gtag('config', 'UA-133442332-1');
              `,
            }}
          />



        </head>


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
