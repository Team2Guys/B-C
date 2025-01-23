import { Montserrat, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
export const MontserratFont = Montserrat({
  weight: '400',
  subsets: ['latin-ext'],
});
export const RobotoFont = Roboto({
  weight: '400',
  subsets: ['latin-ext'],
});
export const projectMainFont = Montserrat({
  weight: '300',
  subsets: ['latin-ext'],
});

export const RobotoTitle = Montserrat({
  weight: '700',
  subsets: ['latin-ext'],
});

export const gothamlight = localFont({
  src: [
    {
      path: '../../public/fonts/Gotham-Light.otf',
      style: 'normal',
      weight:'300'
    },

  ],
  variable: '--gothamlight',
});
export const gothamGothamBold = localFont({
  src: [
    {
      path: '../../public/fonts/GothamBold.ttf',
      style: 'normal',
      weight:'800'
    },

  ],
  variable: '--gothambold',
});