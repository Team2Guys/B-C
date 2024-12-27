'use client';
import React, { useState, useEffect, useRef } from 'react';
import TopHero from 'components/ui/top-hero';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import Support from 'components/Res-usable/support/support';
import VideoAutomation from 'components/video-Automation/video-Automation';
import { Button } from 'components/ui/button';
import { useQuery } from '@tanstack/react-query';

import {
  generateSlug,
  initialSize,
  sizePresets as initialSizePresets,
} from 'data/data';
import backbanner from '../../../../public/assets/images/aric-blands/aric-header.png';
import { Allproduct } from 'types/interfaces';
import { fetchProducts } from 'config/fetch';
import { IProduct } from 'types/types';
import { Image } from 'antd';
import ProductSkeleton from 'components/Skeleton/ProductSkeleton';
import { IoSearch } from 'react-icons/io5';
import { getCategoryFromUrl } from 'config';
import { usePathname, useRouter } from 'next/navigation';

interface TsizePresets {
  width: number;
  height: number;
}

const Detailpage = ({ params }: { params: Allproduct }) => {
  const ProductName = getCategoryFromUrl(params.name);
  const pathName = usePathname();
  const [selectedSize, setSelectedSize] = useState<TsizePresets>(initialSize);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [detail, setdetail] = useState<IProduct[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  const route = useRouter();

  const handleSizeChange = (width: number, height: number) => {
    setSelectedSize({ width, height });
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

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find(
        (p) =>
          generateSlug(p.title).toLowerCase() === ProductName.toLowerCase(),
      );
      if (product) {
        setdetail([product]);
      }
    }
  }, [products, ProductName]);

  if (isLoading)
    return (
      <Container>
        <ProductSkeleton />
      </Container>
    );

  if (error instanceof Error) return <div>Error: {error.message}</div>;
  return (
    <>
      <TopHero title={ProductName} image={backbanner.src} pagename={pathName} />
      {detail &&
        detail.map((array, index) => (
          <>
            <Container className="max-w-screen-2xl mx-auto mt-10" key={index}>
              <div className="flex flex-col items-center md:flex-row md:items-center lg:space-y-4 space-y-5 md:space-y-0 md:space-x-12 lg:p-6 rounded-lg">
                <div className="flex-shrink-0 lg:w-1/2">
                  <div className="flex items-center justify-center rounded-3xl overflow-hidden ">
                    <Image
                      src={array.posterImage.imageUrl}
                      width={'100%'}
                      height={562}
                      alt="Blinds"
                      className="object-cover  rounded-3xl"
                      preview={{
                        mask: (
                          <div>
                            <IoSearch
                              style={{ color: 'white', fontSize: '30px' }}
                            />
                          </div>
                        ),
                      }}
                    />
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
                      <span className="text-black font-bold text-24 pb-2">
                        ×
                      </span>
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
                        {initialSizePresets.map(
                          (preset: TsizePresets, index: number) => (
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
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end lg:pt-10">
                    <p className="lg:text-5xl text-2xl font-bold">
                      AED {array.price}
                    </p>
                    <p className="text-sm text-gray-500">(for 3 months)</p>
                  </div>

                  <p className="lg:text-lg text-md text-gray-500 lg:pt-10">
                    {array.description}
                  </p>

                  <Button
                    onClick={() => {
                      route.push('/request-appointment');
                    }}
                    className="bg-secondary  text-white text-2xl font-bold py-7 px-4 rounded-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Container>
          </>
        ))}

      <Container className="py-10">
        <RelatedProducts products={products || []} limit={4} />
      </Container>
      <BookNowBanner />
      <VideoAutomation />
      <Support />
    </>
  );
};

export default Detailpage;
