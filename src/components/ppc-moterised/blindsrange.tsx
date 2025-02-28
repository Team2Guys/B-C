"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "components/Res-usable/Container/Container";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import { ExploreBlindsCurtainsProps } from "types/types";

interface ExploreBlindsProps extends ExploreBlindsCurtainsProps {
  imageHeights?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  imageHeight?: string;
  hideViewMore?: boolean;
  hidefeatures?: boolean;
}

const ExploreBlinds: React.FC<ExploreBlindsProps> = ({
  data,
  reverse = false,
  imageHeight = "709px", // Default height
  hideViewMore = false, 
  hidefeatures= false,
}) => {
  return (
    <section className="py-12 px-6">
      <Container>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className={`w-full ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <Image 
              src={data.image}
              alt="Blinds and Curtains" 
              width={600} 
              height={400} 
              className={`bg-contain w-full h-[348px] lg:h-[${imageHeight}] xl:h-[${imageHeight}]`}
            />
          </div>

          {/* Content Section */}
          <div className={`xl:w-[80%] lg:space-y-9 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <h2 className="text-2xl md:text-3xl xl:text-36 font-black font-juana">
              {data.title}
            </h2>
            <p className="mt-3 lg:text-20 font-normal font-proxima">
              {data.description}
            </p>

            {/* Conditionally Hide View More Section */}
            {!hideViewMore && (
              <Link 
                href={data.viewlink}
                className="inline-flex items-center gap-2 text-black lg:text-20 font-bold mt-4"
              >
                View More <IoArrowForwardOutline size={18} />
              </Link>
            )}

            {/* Features Grid */}
            {!hidefeatures && (
            <div className="grid grid-cols-2 gap-6 mt-6">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={40} 
                    height={40} 
                  />
                  <div className="space-y-3">
                    <h3 className="text-lg xl:text-29 font-normal">{feature.title}</h3>
                    <p className="text-sm lg:text-base xl:text-20 font-normal">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
             )}

            {/* Buttons Section */}
            <div className="mt-6 xl:mt-14 flex gap-4">
              {data.buttonLinks.map((button, index) => (
                <Link 
                  key={index}
                  href={button.href}
                  className={`flex items-center text-center gap-2 text-12 sm:text-17 text-white px-3 xs:px-5 py-3 rounded-md ${
                    button.href.includes("wa.me") ? "bg-green-500 hover:bg-primary" : "bg-black hover:bg-primary"
                  }`}
                >
                  {button.href.includes("wa.me") ? <FaWhatsapp size={18} /> : null}
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExploreBlinds;
