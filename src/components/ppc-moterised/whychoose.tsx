"use client";
import Container from "components/Res-usable/Container/Container";
import { chooseus, sectionContent } from "data/data";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion"; 

const actionLinks = [
  {
    href: "https://www.google.com/maps/place/Blinds+And+Curtains+Dubai/",
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

const WhyChooseUs = () => {
  return (
    <section className="relative bg-cover bg-center text-white py-16 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/assets/images/ppc-blinds/chooseus.png" 
          alt="Background"
          fill 
          className="object-contain"
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
            {sectionContent.heading}
          </motion.h2>
          <motion.p 
            className="mt-4 text-sm md:text-base xl:text-20 text-white"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {sectionContent.paragraph}
          </motion.p>

          <motion.div 
            className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {chooseus.map((feature, index) => (
              <motion.div 
                key={index} 
                className={`flex flex-col items-center text-center px-4 border-white border-r ${ (index + 1) % 5 === 0 ? "border-r-0" : "" }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Image 
                  src={feature.image} 
                  height={56} 
                  width={56} 
                  alt={feature.text} 
                  className="w-14 h-14 object-contain"
                />
                <p className="text-sm lg:text-20 font-bold leading-7 mt-2">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
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
                  href={link.href} 
                  className={`flex items-center gap-2 ${link.bgColor} text-white px-6 py-3 rounded-lg`}
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

