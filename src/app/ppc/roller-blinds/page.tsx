import { Metadata } from "next";
import Custom_Roller from "./Custom_Roller";

export const metadata:Metadata  = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RollerMain= () => {
  return (
 <Custom_Roller/>
  );
};

export default RollerMain;