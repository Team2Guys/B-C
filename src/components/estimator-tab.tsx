import Image from 'next/image';
import { useState } from 'react';
import { ICategory, IProduct } from 'types/types';

interface EstimatorTabsProps {
  categories: ICategory[];
  productsByCategory: { [key: string]: IProduct[] };
  setActiveProduct: any;
  activeProduct: any;
}

const EstimatorTabs: React.FC<EstimatorTabsProps> = ({
  categories,
  productsByCategory,
  setActiveProduct,
  activeProduct,
}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const filteredCategories = categories
    .filter((category) => category.title !== 'Commercial')
    .sort((a, b) => {
      const order = ['Blinds', 'Curtains', 'Shutters'];
      return order.indexOf(a.title) - order.indexOf(b.title);
    });

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index);
    // setActiveProduct(null);
  };

  const handleProductSelect = (product: IProduct) => {
    setActiveProduct(product);
  };

  const currentCategoryProducts =
    productsByCategory[filteredCategories[selectedCategoryIndex]?.id] || [];

  return (
    <div className="container mx-auto px-2 md:p-4">
      <div className="flex bg-[#f6efe9] shadow-md justify-between text-[20px]">
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategorySelect(index)}
            className={`relative cursor-pointer p-2 md:px-10 text-center ${
              selectedCategoryIndex === index
                ? 'font-semibold text-gray-800'
                : 'text-gray-500'
            }`}
          >
            {category.title}
            {selectedCategoryIndex === index && (
              <span className="absolute left-1/2 transform  top-14 w-0 h-0 border-l-[1rem] border-r-[1rem] border-b-[1rem] border-transparent border-b-white"></span>
            )}
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 max-h-96 overflow-y-auto bg-white  estimator-scrollbar  border-8 border-white `}
        style={{ maxHeight: '24rem' }}
      >
        {currentCategoryProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => handleProductSelect(product)}
            className={`p-4 cursor-pointer  ${
              activeProduct?.id === product.id ? 'font-semibold' : ''
            }`}
          >
            <div className="h-32 bg-gray-200">
              <Image
                src={product.posterImage?.imageUrl}
                alt={product.title}
                className="object-cover w-full h-32 " 
                width={100}
                height={50}
              />
            </div>
            <p
              className={`mt-2 text-center text-14 md:text-base ${
                activeProduct?.id === product.id ? '' : ''
              }`}
            >
              {product.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstimatorTabs;
