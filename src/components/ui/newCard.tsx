import { generateSlug } from 'data/data'
import { ChangedProductUrl_handler, predefinedPaths } from 'data/urls'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ Data }: { Data: any }) => {
  console.log(Data, 'DataData');
  const getPath = (product: any, parent: string) => {
    const slug = ChangedProductUrl_handler(product.title);
    const basePath = product.href && parent
      ? `${window.origin}/${product.href}`
      : `/${slug}`;

    const path = predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${parent?.toLowerCase() === 'shutters' ? `${parent.toLowerCase()}-range` : parent?.toLowerCase()}${
          ['dimout-roller-blinds', 'sunscreen-roller-blinds', 'blackout-roller-blinds'].includes(slug)
            ? '/roller-blinds'
            : ''
        }/${slug}`);

    return path + "/";
  };

  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4'>
      {Data.map((product: any, index: number) => {
        const parent = generateSlug(product.category?.title);

        return ( // <-- Missing this before
          <div key={index} className="px-2">
            <Link href={getPath(product, parent)} className='rounded-xl'>
              <div className="space-y-2 bg-primary-foreground rounded-xl">
                <div className="relative w-full h-[250px] md:h-[365px]">
                  <Image
                    src={product?.posterImage?.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="text-center space-y-1 px-4 pb-4">
                  <h3 className="font-black font-robotoSerif text-base md:text-2xl text-primary">{product.title}</h3>
                  <p className="text-primary text-sm md:text-lg font-roboto">
                    Water-resistant blinds, perfect for humid bathrooms
                  </p>
                  <Link
                    href={getPath(product, parent)}
                    className="text-primary bg-secondary text-sm md:text-xl font-roboto font-semibold rounded-md p-2 block w-fit mx-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
