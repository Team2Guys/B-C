"use client";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CommonSectionProps } from "types/types";

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

    <div className="w-full bg-white py-10 mt-3 sm:mt-10 xl:mt-14">
    <Container>
      <div className="flex flex-col md:flex-row gap-8 px-1">
        <div className="flex-1">
          <Image height={500} width={500} src={image} alt={heading} className="w-full h-[380px] xl:h-[346px] rounded-md" />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl xl:text-[36px] font-black font-serif leading-8 sm:leading-10">{heading}</h2>
          <p className="lg:text-20 font-normal font-proxima">{description}</p>
          <div className="flex gap-4 mt-4">
            <Link href="https://www.google.com/maps/place/Blinds+And+Curtains+Dubai/@25.117715,55.235686,4118m/data=!3m1!1e3!4m6!3m5!1s0x3e5f698d0b075de1:0x223e3563a8be56be!8m2!3d25.1177148!4d55.2356858!16s%2Fg%2F11bbt9c0yz?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D" target="blank" className="bg-black text-white py-3 px-3 xs:px-6 rounded hover:bg-primary flex justify-center items-center text-center ">
              {button1Text}
            </Link>
            <Link className='w-fit sm:gap-1 sm:text-17 sm:w-fit flex justify-center items-center text-white  bg-green-500 py-3 px-4 rounded-sm font-medium hover:bg-primary' href="https://wa.me/+971544945339" target='_blank'>
            <FaWhatsapp size={20} />
            {button2Text}</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-2">
      <div className="px-4 shadow-lg border border-gray-200 p-4 rounded-md">
      <h3 className="mb-2 text-xl font-black font-serif">{secondaryHeading}</h3>
      <p className="mb-2 lg:text-20 font-proxima font-normal">{para}</p>
      <ul className="space-y-2 xl:pt-6"> 
    {bulletPoints.map((point, index) => (
      <li key={index} className="flex items-start gap-2">
        <div className="h-6 w-6">
        <RiVerifiedBadgeFill className="text-secondary h-6 w-6"/></div>
        <span>{point}</span>
      </li>
    ))}
  </ul></div>
  <div className="px-4 shadow-lg border border-gray-200 p-4 rounded-md">
  <h3 className="text-xl font-black font-serif mb-2">{subheading}</h3>
  <p className="mb-2 lg:text-20 font-proxima font-normal">{para1}</p>
  <ul className="space-y-2"> 
    {bulletPoints1.map((point, index) => (
      <li key={index} className="flex items-start gap-2">
        <div className="w-6 h-6">
       <RiVerifiedBadgeFill size={18} className="text-secondary w-6 h-6"/></div>
        <span>{point}</span>
      </li>
    ))}
  </ul>
</div>
</div>
</Container>

</div>
  );
};

export default CustomSection;
