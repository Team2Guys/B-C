import React from 'react';
import Image from 'next/image';
import { EsProduct, EstimatorProps } from 'types/interfaces';

const EstimatorProduct: React.FC<EstimatorProps> = ({ selectProduct, setActiveProduct, activeProduct }) => {

  const handleProductSelect = (product: EsProduct) => {
    setActiveProduct(product);
  };

  return (
    <div className="container px-0 border rounded-xl bg-white p-2">
      <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-5 sm:justify-items-center sm:gap-4 p-3">
        {selectProduct && selectProduct.map((product: EsProduct, index: number) => (
          <div
            key={index}
            onClick={() => handleProductSelect(product)}
            className={`cursor-pointer mt-2 sm:mt-0 ${activeProduct?.id === product.id ? 'font-semibold' : ''
              }`}
          >
            <div>
              <Image
                className={`w-32 h-32 rounded-2xl md:w-16 md:h-16 xl:h-20 xl:w-20 sm:rounded-xl mx-auto border-4 ${activeProduct?.id === product.id ? 'border-secondary' : 'border-white'
                  }`}
                width={300}
                height={300}
                src={product.posterImage?.imageUrl}
                alt={product.title || 'Product Image'}
              />
            </div>
            <div
              className={`mt-2 text-center text-14 xl:text-16 px-1 ${activeProduct?.id === product.id ? 'border-b-2 border-secondary w-fit mx-auto' : ''
                }`}
            >
              {product.title.split(' ').map((word: string, index: number) => (
                <p key={index}>{word}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstimatorProduct;
