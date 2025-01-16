'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IProduct } from 'types/types';
import { ChangedProductUrl_handler, predefinedPaths } from 'data/urls';
import RelatedProductSkeleton from 'components/Skeleton/Related-product';
interface GalleryProps {
  card?: IProduct;
  relativeProducts?: boolean;
  parent?: string;
  detailHide?: boolean;
  product_Images?: any;
  imagesOnly?: boolean;
  isLoading?: boolean;
}

const GalleryCard: React.FC<GalleryProps> = ({
  card,
  relativeProducts,
  detailHide,
  parent,
  product_Images,
  imagesOnly,
  isLoading
}) => {
  const getPath = (arr: IProduct) => {
    const slug = ChangedProductUrl_handler(arr.title);
    const basePath =
      arr.href && parent ? `${window.origin}/${arr.href}` : `/${slug}`;

    const path =
      predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${
            parent?.toLowerCase() === 'shutters'
              ? `${parent.toLowerCase()}-range`
              : parent?.toLowerCase()
          }${
            [
              'dimout-roller-blinds',
              'sunscreen-roller-blinds',
              'blackout-roller-blinds',
            ].includes(slug)
              ? '/roller-blinds'
              : ''
          }/${slug}`);
    return path;
  };

  if (imagesOnly) {
    return (
      <div className="relative rounded-lg transition-shadow duration-300 group">
        <Image
          src={
            product_Images
              ? product_Images.Imagesurl
              : card?.posterImage?.imageUrl || '/default-image.jpg'
          }
          alt={card?.title || 'Image'}
          height={800}
          width={800}
          className="rounded-xl h-56 xs:h-80 w-[100%] sm:object-cover"
        />
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <RelatedProductSkeleton />
      ) : (
    <div className="relative rounded-lg transition-shadow duration-300 group">
      <Image
        src={
          product_Images
            ? product_Images.Imagesurl
            : card?.posterImage?.imageUrl || '/default-image.jpg'
        }
        alt={card?.title || 'Image'}
        height={800}
        width={800}
        className="rounded-xl h-56 xs:h-80 w-[100%] object-fill"
      />
      <div
        className={`absolute bottom-0 rounded-b-xl px-2 w-full h-12 flex items-center ${
          detailHide ? 'block' : ''
        } ${
          relativeProducts ? 'justify-between' : 'justify-center'
        } justify-center rounded-se-sm bg-secondary md:opacity-1 group-hover:opacity-100 transition-opacity duration-300`}
      >
        {card && (
          <>
            <Link href={getPath(card)}>
              <span
                className={`text-black text-start  cursor-pointer ${
                  relativeProducts
                    ? 'text-12 font-light'
                    : 'text-sm font-medium'
                }`}
              >
                {card.title}
              </span>
            </Link>
            <Link
              href={getPath(card)}
              className={`border border-primary text-black cursor-pointer rounded-md px-1 lg:px-2 py-1 hover:bg-primary hover:text-black text-12 lg:text-14 text-nowrap ${
                relativeProducts ? 'block' : 'block'
              }`}
            >
              View More
            </Link>
          </>
        )}
      </div>
    </div> 
  )}
  </>
  );
};

export default GalleryCard;
