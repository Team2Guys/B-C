"use client";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface PageData {
  heading: string;
  description: string;
  image: string;
  button1Text: string;
  button2Text: string;
  subheading: string;
  secondaryHeading: string;
  bulletPoints: string[];
  bulletPoints1: string[];
  para: string;
  para1: string;
}

interface CommonSectionProps {
  data: PageData;
}

const CustomSection: React.FC<CommonSectionProps> = ({ data }) => {
  const {
    heading,
    description,
    image,
    button1Text,
    button2Text,
    secondaryHeading,
    subheading,
    bulletPoints,
    bulletPoints1,
    para,
    para1,
  } = data;

  return (
  
    <div className="w-full bg-white py-10">
    <Container>
      {/* Top Section with Image + Text */}
      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="flex-1">
          <Image height={500} width={500} src={image} alt={heading} className="w-full h-[346px] rounded-md" />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl xl:text-[36px] font-black font-juana">{heading}</h2>
          <p className="lg:text-20 font-normal font-proxima">{description}</p>
          <div className="flex gap-4 mt-4">
            <Link href="/" className="bg-black text-white py-2 px-4 rounded hover:bg-primary">
              {button1Text}
            </Link>
            <Link className='w-full sm:gap-1 text-sm sm:text-17 sm:w-fit flex justify-center items-center text-white  bg-green-500 py-3 px-4 rounded-sm font-medium hover:bg-primary' href="https://wa.me/+971544945339" target='_blank'>
            <FaWhatsapp size={20} />
            {button2Text}</Link>
          </div>
        </div>
      </div>

      {/* Bottom Section with Bullets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-2">
      <div className="px-4 shadow-lg border border-gray-200 p-4 rounded-md">
      <h3 className="text-xl font-semibold mb-2">{secondaryHeading}</h3>
      <p className="mb-2 lg:text-20 font-proxima font-normal">{para}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
      {bulletPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    </div>

     <div className="px-4 shadow-lg border border-gray-200 p-4 rounded-md">
     <h3 className="text-xl font-semibold mb-2">{subheading}</h3>
     <p className="mb-2 lg:text-20 font-proxima font-normal">{para1}</p>
     <ul className="list-disc list-inside text-gray-700 space-y-1">
      {bulletPoints1.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
</div>

</Container>

</div>
  );
};

export default CustomSection;
