"use client"
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
interface ThumbnailProps {
  images?: { imageUrl: string }[];
}
const Thumbnail = ({ images }: ThumbnailProps) => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const [activeIndex, setActiveIndex] = useState(0)
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);
  useEffect(() => {
    setNav1(slider1.current ?? undefined);
    setNav2(slider2.current ?? undefined);
  }, []);

  const mainSettings = {
    slidesToShow: 1,
    arrows: false,
    asNavFor: nav2 ?? undefined,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  const thumbSettings = {
    slidesToShow: 4,
    asNavFor: nav1 ?? undefined,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
  };
 
  return (
      <>
      <div>
      <Slider {...mainSettings} ref={slider1} className="overflow-hidden outline-0">
        {images && images.map((img, index) => (
            <div key={index} className="focus:outline-none">
              <Image
                src={img.imageUrl}
                alt={`Main ${index}`}
                width={800}
                height={600}
                className="w-full h-[340px] md:h-[450px] xl:h-[563px] object-cover"
              />
            </div>
        ))}
      </Slider>
      <div>
        <Slider {...thumbSettings} ref={slider2}>
          {images && images.map((img, index) => (
              <div key={index}  className={`focus:outline-none border-2 w-full ${ index === activeIndex ? "border-secondary" : "border-transparent"}`}>
              <Image src={img.imageUrl} width={200} height={200} className="w-full h-20 sm:h-28 lg:h-32 xl:h-40 object-cover outline-0 " alt={`Thumb ${index}`} />
              </div>
          ))}
        </Slider>
      </div>
      </div>
      </>
  )
}

export default Thumbnail