import { generateSlug } from 'data/data';
import { ChangedProductUrl_handler, predefinedPaths } from 'data/urls';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface ProductCardDataProps {
  products: any[];
  categoryType?: string;
  isSizeSmall?: boolean;
  renderDescription?: (title: string) => string;
}

const ProductCard: React.FC<ProductCardDataProps> = ({
  products,
  isSizeSmall,
  renderDescription,
}) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const getTrimmedTitle = (title: string) => {
    return title.replace(/^Made to measure\s+/i, '');
  };


  const getPath = (product: any, parent: string) => {
    const slug = ChangedProductUrl_handler(product.title);
    const basePath =product.href && parent? `${window.origin}/${product.href}`: `/${slug}`;

    const path = predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'? basePath : `/${parent?.toLowerCase() === 'shutters' ? `${parent.toLowerCase()}-range`
          : parent?.toLowerCase()
        }${['dimout-roller-blinds', 'sunscreen-roller-blinds', 'blackout-roller-blinds'].includes(slug)
          ? '/roller-blinds'
          : ''
        }/${slug}`);
    return path+"/";
  };


  const handleEnableScroll = () => {
    setScrollEnabled(true);
  };
  const handledisableScroll = () => {
    setScrollEnabled(false);
  };


  return (
    <div
      className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ${isSizeSmall && 'xl:grid-cols-4'} gap-5 p-1 md:p-0 mt-5`}
    >
      {products &&
        products.map((product: any) => {

          const trimmedProductTitle = getTrimmedTitle(product.title);
          const parent = generateSlug(product.category?.title);

          return (
            <div
              className="border group rounded-xl border-white hover:border-primary p-3 space-y-3 text-center pb-10"
              key={product.id}
            >
              <Image
                className={`w-full ${isSizeSmall ? 'lg:h-[264px] sm:h-[264px] md:h-[280px] h-[240px]' : 'lg:h-[364px] sm:h-[264px] md:h-[280px] h-[240px]'} rounded-xl`}
                width={600}
                height={600}
                src={product?.posterImage?.imageUrl}
                alt="img"
              />
              <div className="text-center space-y-3">
                <h4 className="text-17 font-semibold">{trimmedProductTitle}</h4>
                <p
                  className={`text-15 font-light md:w-[80%] mx-auto max-h-16 ${scrollEnabled ? 'custom-scrollbar' : 'overflow-hidden'
                    }`}
                  dangerouslySetInnerHTML={{
                    __html: renderDescription
                      ? renderDescription(product.title)
                      : product.short_description || product.description,
                  }}
                  onClick={handleEnableScroll}
                  onMouseLeave={handledisableScroll}
                ></p>
              </div>
              <div className="pt-5">
                <Link
                  href={getPath(product, parent)}
                  className="bg-secondary hover:bg-primary text-white group-hover:text-white py-3 px-5 rounded-md"
                >
                  View More
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
