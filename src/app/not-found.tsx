"use client"

import Link from "next/link";
import gitImg from "../../public/assets/json/404.json";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import('components/Lottie/error-gif'), {
  ssr: false,
})


export default function NotFound() {

const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="flex flex-col items-center gap-4 relative">
        <Lottie data={gitImg} />
        <h2 className="text-2xl xsm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black -mt-10">
          There&apos;s <span className="uppercase">Nothing</span> here ...
        </h2>
        <p className="text-center px-2 xsm:px-0 text-10 xsm:text-12 sm:text-base md:text-lg lg:text-xl">
          ...maybe the page you are looking for is not found or never exited.
        </p>
        <div className="flex items-center gap-4 justify-center">
          <Link
            className="w-35 sm:w-40 h-10 sm:h-12 text-14 sm:text-base flex justify-center items-center rounded-full bg-primary text-white hover:bg-white border border-primary hover:text-primary transition"
            href="/"
          >
            Back to Home
          </Link>
          <Link
            className="w-35 sm:w-40 h-10 sm:h-12 text-14 flex justify-center items-center rounded-full bg-transparent text-primary hover:bg-primary border border-primary hover:border-primary hover:text-white transition"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}