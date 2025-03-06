"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { WhyChooseUsProps } from "types/interfaces";
import React from "react";

const actionLinks = [
  {
    href: "https://www.google.com/maps/place/Blinds+And+Curtains+Dubai/@25.117715,55.235686,4118m/data=!3m1!1e3!4m6!3m5!1s0x3e5f698d0b075de1:0x223e3563a8be56be!8m2!3d25.1177148!4d55.2356858!16s%2Fg%2F11bbt9c0yz?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D",
    text: "GET DIRECTION",
    icon: <FaMapMarkerAlt />,
    bgColor: "bg-black hover:bg-primary",
  },
  {
    href: "tel:+971544945339",
    text: "+971544945339",
    icon: <IoCallOutline size={20} />,
    bgColor: "bg-primary",
  },
  {
    href: "https://wa.me/+971544945339",
    text: "WHATSAPP",
    icon: <FaWhatsapp size={20} />,
    bgColor: "bg-green-500 hover:bg-primary",
  },
];

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ paragraph, features, backgroundImage }) => {
  return (
    <section className="relative bg-cover bg-center text-white py-16 px-6">
      <div className="absolute inset-0">
        <Image 
          src={backgroundImage} 
          alt="Background"
          fill 
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60"></div>

      <Container>
        <motion.div 
          className="relative z-10 mx-auto text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl xl:text-[40px] font-juana font-black"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
           Why Choose Us?
          </motion.h2>
          <motion.p 
            className="mt-4 text-sm md:text-base xl:text-20 text-white"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {paragraph}
          </motion.p>

          <motion.div 
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className={`flex flex-col items-center text-center px-4 sm:border-white sm:border-r ${ (index + 1) % 5 === 0 ? "border-r-0" : "" }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Image 
                  src={feature.image} 
                  height={56} 
                  width={56} 
                  alt="image" 
                  className="w-14 h-14 object-contain"
                />
                <p className="text-sm lg:text-20 font-bold leading-7 mt-2">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 md:mt-14 flex flex-col sm:justify-center sm:items-center sm:flex-row sm:items-center gap-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {actionLinks.map((link, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              >
                <Link 
                  href={link.href} target="blank"
                  className={`flex items-center justify-center gap-2 ${link.bgColor} text-white px-6 py-3 rounded-lg`}
                >
                  {link.icon}
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
