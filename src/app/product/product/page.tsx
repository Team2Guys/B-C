'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TopHero from 'components/ui/top-hero';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import Support from 'components/Res-usable/support/support';
import VideoAutomation from 'components/video-Automation/video-Automation';
import { Button } from 'components/ui/button';
import { LiaSearchPlusSolid } from 'react-icons/lia';

import {
  initialSize,
  sizePresets as initialSizePresets,
  relativeProducts,
} from 'data/data';
import backbanner from '../../../../public/assets/images/aric-blands/aric-header.png';
import cardImg from '../../../../public/assets/images/aric-blands/aric-blands.png';
import { usePathname } from 'next/navigation';

interface TsizePresets {
  width: number;
  height: number;
}

const AricBlind: React.FC = () => {
  const pathName = usePathname();
  const [selectedSize, setSelectedSize] = useState<TsizePresets>(initialSize);
  const [sizePresets, setSizePresets] =
    useState<TsizePresets[]>(initialSizePresets);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSizeChange = (width: number, height: number) => {
    setSelectedSize({ width, height });
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <>
      <TopHero title="ARIC BLINDS" image={backbanner} pagename={pathName} />
      <Container className="max-w-screen-2xl mx-auto mt-10">
        <div className="flex flex-col items-center md:flex-row md:items-center lg:space-y-4 space-y-5 md:space-y-0 md:space-x-12 lg:p-6 rounded-lg">
          <div className="flex-shrink-0 lg:w-1/2">
            <div className="flex items-center justify-center rounded-3xl overflow-hidden relative">
              <Image
                src={cardImg}
                width={600}
                height={600}
                alt="Blinds"
                className="object-cover lg:w-[900px] w-full h-full lg:h-[562px]"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 cursor-pointer"
                onClick={togglePopup}
              >
                <span className="text-black text-7xl font-normal transform -scale-x-100">
                  <LiaSearchPlusSolid />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <h2 className="lg:text-4xl text-2xl font-bold">Sizes</h2>
            <div className="flex lg:flex-nowrap flex-wrap items-start gap-10">
              <div className="flex items-end space-x-2">
                <div className="flex flex-col items-start">
                  <span className="text-gray-700">Width</span>
                  <div className="flex mt-1 items-center border border-black rounded-md overflow-hidden bg-light">
                    <input
                      type="number"
                      value={selectedSize.width}
                      onChange={(e) =>
                        handleSizeChange(
                          Number(e.target.value),
                          selectedSize.height,
                        )
                      }
                      className="border-0 outline-none rounded p-4 text-center w-20 bg-light"
                    />
                    <span className="text-black bg-primary p-4 text-lg rounded-s-lg">
                      cm
                    </span>
                  </div>
                </div>
                <span className="text-black font-bold text-24 pb-2">×</span>
                <div className="flex flex-col items-start">
                  <span className="text-gray-700">Height</span>
                  <div className="flex items-center mt-1 border border-black rounded-md overflow-hidden bg-light">
                    <input
                      type="number"
                      value={selectedSize.height}
                      onChange={(e) =>
                        handleSizeChange(
                          selectedSize.width,
                          Number(e.target.value),
                        )
                      }
                      className="border-0 outline-none rounded p-4 text-center w-20 bg-light"
                    />
                    <span className="text-black bg-primary p-4 text-lg rounded-s-lg">
                      cm
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-gray-700">Presets</span>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {sizePresets.map((preset: TsizePresets, index: number) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleSizeChange(preset.width, preset.height)
                      }
                      className={`border text-12 rounded-none py-1 border-light px-2 text-center ${
                        selectedSize.width === preset.width &&
                        selectedSize.height === preset.height
                          ? 'bg-gray-300'
                          : 'bg-white'
                      }`}
                    >
                      {preset.width}×{preset.height}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-end lg:pt-10">
              <p className="lg:text-5xl text-2xl font-bold">AED 171/month</p>
              <p className="text-sm text-gray-500">(for 3 months)</p>
            </div>

            <p className="lg:text-lg text-md text-gray-500 lg:pt-10">
              *The displayed price is for the base offer; for upgraded options
              prices may vary (e.g., premium sheer, wavy curtains, automation).
              Book a visit to have your custom quotation!
            </p>

            <Button className="bg-secondary  text-white text-2xl font-bold py-7 px-4 rounded-lg">
            Book An Appointment Now
            </Button>
          </div>
        </div>
      </Container>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity duration-1000">
          <div
            ref={modalRef}
            className="relative rounded-lg transition-opacity duration-300"
          >
            <button
              className="absolute top-2 bg-white right-2 shadow-md px-2 rounded-full text-black text-xl"
              onClick={togglePopup}
            >
              &times;
            </button>
            <Image
              src={cardImg}
              alt="Popup Image"
              width={1500}
              height={1500}
              className="object-contain w-full h-full transition-opacity duration-1000"
            />
          </div>
        </div>
      )}

      {/* <Container className="py-10">
        <RelatedProducts products={relativeProducts || []} />
      </Container> */}
      <BookNowBanner />
      <VideoAutomation />
      <Support />
    </>
  );
};

export default AricBlind;
