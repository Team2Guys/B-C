"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "components/Res-usable/Container/Container";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

// Data for Features
const features = [
  { icon: "/assets/images/ppc-blinds/rangeicon.png", title: "Lorem Ipsum", text: "is simply dummy text of the printing and typesetting" },
  { icon: "/assets/images/ppc-blinds/rangeicon.png", title: "Lorem Ipsum", text: "is simply dummy text of the printing and typesetting" },
  { icon: "/assets/images/ppc-blinds/rangeicon.png", title: "Lorem Ipsum", text: "is simply dummy text of the printing and typesetting" },
  { icon: "/assets/images/ppc-blinds/rangeicon.png", title: "Lorem Ipsum", text: "is simply dummy text of the printing and typesetting" },
];

const ExploreBlindsCurtains = () => {
  return (
    <section className="bg-[#F5F5F5] py-12 px-6">
      <Container>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image */}
        <div className="w-full">
          <Image 
            src="/assets/images/ppc-blinds/blindrange.png" 
            alt="Blinds and Curtains" 
            width={600} 
            height={400} 
            className="bg-contain h-[348px] lg:h-[709px] w-full"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-[80%] lg:space-y-9">
          <h2 className="text-2xl md:text-3xl xl:text-36 font-black font-juana">
            Explore Our Range Of Blinds And Curtains
          </h2>
          <p className="mt-3 lg:text-20 font-normal font-proxima">
            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown is simply dummy 
            text of the printing and typesetting industry.
          </p>

          {/* View More Button */}
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-black lg:text-20 font-bold mt-4"
          >
            View More <IoArrowForwardOutline size={18} />
          </Link>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={40} 
                  height={40} 
                />
                <div>
                  <h3 className="text-lg  lg:text-29 font-normal">{feature.title}</h3>
                  <p className="text-sm lg:text-20 font-normal">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 xl:mt-14 flex gap-4">
            <Link href="/request-appointment/" className="bg-black text-white px-5 py-3 rounded-md text-12 sm:text-17">
              BOOK AN APPOINTMENT
            </Link>
            <Link href="https://wa.me/+971544945339" className="flex text-12 sm:text-17 items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-md">
              <FaWhatsapp size={18} />
              WHATSAPP
            </Link>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default ExploreBlindsCurtains;
