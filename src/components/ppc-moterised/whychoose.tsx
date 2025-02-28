"use client";
import Container from "components/Res-usable/Container/Container";
import { chooseus, sectionContent } from "data/data";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

// Links Data
const actionLinks = [
  {
    href: "https://www.google.com/maps/place/Blinds+And+Curtains+Dubai/@25.11828,55.235537,1029m/data=!3m1!1e3!4m6!3m5!1s0x3e5f698d0b075de1:0x223e3563a8be56be!8m2!3d25.1177148!4d55.2356858!16s%2Fg%2F11bbt9c0yz?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D",
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
        <div className="relative z-10 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl xl:text-[40px] font-juana font-black">
            {sectionContent.heading}
          </h2>
          <p className="mt-4 text-sm md:text-base xl:text-20 text-white">
            {sectionContent.paragraph}
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6">
            {chooseus.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center px-4 
                border-white border-r ${ (index + 1) % 5 === 0 ? "border-r-0" : "" }`}
              >
                <Image 
                  src={feature.image} 
                  height={56} 
                  width={56} 
                  alt={feature.text} 
                  className="w-14 h-14 object-contain"
                />
                <p className="text-sm lg:text-20 font-bold leading-7 mt-2">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            {actionLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className={`flex items-center gap-2 ${link.bgColor} text-white px-6 py-3 rounded-lg`}
              >
                {link.icon}
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
