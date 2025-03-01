"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Container from "components/Res-usable/Container/Container";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useEffect, useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

// Array of blinds
const blindsData = [
  { title: "Roman Blinds", description: "Remote control options available Remote control options.", icon: "/assets/images/ppc-blinds/lore.png"},
  { title: "Roman Blinds", description: "Remote control options available Remote control options.", icon: "/assets/images/ppc-blinds/lore.png" },
  { title: "Roman Blinds", description: "Remote control options available Remote control options.", icon: "/assets/images/ppc-blinds/lore.png"},
  { title: "Roman Blinds", description: "Remote control options available Remote control options.", icon: "/assets/images/ppc-blinds/lore.png"},
  { title: "Roman Blinds", description: "Remote control options available Remote control options.", icon: "/assets/images/ppc-blinds/lore.png"},
];

const BlindsCarousel: React.FC = () => {
    const swiperRef = useRef<any>(null);
  
    useEffect(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.update();
      }
    }, []);
  
    return (
      <section className="relative">
        <Container>
          {/* Custom Navigation Buttons */}
          <button
            className="absolute left-0 top-10 text-black"
          >
         <IoMdArrowDropleft className="w-10 h-10" />
          </button>
  
          <button
            className="absolute right-0 top-10 text-black"
            id="nextBtn"
          >
            <IoMdArrowDropright className="w-10 h-10" />
          </button>
  
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            className="relative"
          >
            {blindsData.map((blind, index) => (
              <SwiperSlide
                key={index}
                className={`flex flex-col items-center p-3 px-6 lg:border-black lg:border-r ${
                  (index + 1) % 5 === 0 ? "lg:border-r-0" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <Image src={blind.icon} alt="Blinds Icon" width={40} height={40} />
                  <div>
                    <h3 className="text-lg font-semibold">{blind.title}</h3>
                    <p className="text-sm text-gray-600">{blind.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    );
  };
  
  export default BlindsCarousel;