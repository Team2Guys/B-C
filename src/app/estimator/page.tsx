'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Select } from 'antd';
import Accordion from 'components/Res-usable/Accordion/Accordion';
import EstimatorSlider from 'components/slider/EstimatorSlider/EstimatorSlider';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts } from 'config/fetch';
import { ICategory, IProduct } from 'types/types';
import cardImg from '../../../public/assets/images/product/blinds.jpg';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import { Button } from 'components/ui/button';
import { estimateSldie, optionDetail } from 'data/data';
import EstimatorSkeleton from 'components/Skeleton/estimator-skeleton';

const Estimator: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first accordion by default
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const getShortDescription = (description: string) => {
    return description.split(' ').slice(0, 38).join(' ') + '...';
  };

  const description = selectedProduct?.description || '';
  const isLongDescription = description.split(' ').length > 38;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const {
    data: products,
    error: productsError,
    isLoading: isLoadingProducts,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (categories && products) {
      // Find the first category (blinds or similar)
      const firstCategory = categories.find((category) =>
        category.title.toLowerCase().includes('blinds'),
      );

      if (firstCategory) {
        const productsInFirstCategory = products.filter(
          (product) => product.CategoryId === firstCategory.id,
        );

        // Set the first product of the category as selected
        if (productsInFirstCategory.length > 0) {
          setSelectedProduct(productsInFirstCategory[0]);
        }
      }
    }
  }, [categories, products]);

  if (categoriesError instanceof Error)
    return <div>Error: {categoriesError.message}</div>;
  if (productsError instanceof Error)
    return <div>Error: {productsError.message}</div>;

  const categoryIds = new Set<number>([
    ...(categories?.map((category) => category.id) || []),
    ...(products?.map((product) => product.CategoryId) || []),
  ]);

  const productsByCategory = Array.from(categoryIds).reduce(
    (acc, categoryId) => {
      acc[categoryId] =
        products?.filter((product) => product.CategoryId === categoryId) || [];
      return acc;
    },
    {} as Record<number, IProduct[]>,
  );

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleProductSelect = (product: IProduct) => {
    setSelectedProduct(product);
  };

  return (
    <>
      {isLoadingProducts ? (
        <EstimatorSkeleton />
      ) : (
        <div className="mt-10 lg:max-w-[95%] 2xl:max-w-[90%]">
          <div className="flex flex-wrap md:flex-nowrap gap-10">
            <div className="w-full md:w-7/12">
              <Image
                src={selectedProduct?.posterImage?.imageUrl}
                width={1000}
                height={1000}
                alt={selectedProduct?.title || 'Blinds'}
                className="object-cover lg:w-full w-full h-full md:h-[772px] rounded-r-3xl"
              />
            </div>

            <div className="flex flex-col space-y-5 w-full md:w-5/12 px-2 md:px-0">
              <h2 className="lg:text-[39px] lg:font-black text-2xl font-bold capitalize">
                Get Estimate
              </h2>

              <div className='pt-5'>
                <Select
                  defaultValue="Select Sizes"
                  onChange={handleChange}
                  className="w-[256px] h-[52px] detail-otion font-bold"
                  options={optionDetail}
                />
              </div>

              <div className="">
                {categories && (
                  <div>
                    {categories
                      ?.filter((category) => category.title !== 'Commercial')
                      .map((category, index) => (
                        <Accordion
                          key={index}
                          title={category.title}
                          isOpen={openIndex === index}
                          onClick={() => handleAccordionClick(index)}
                        >
                          <EstimatorSlider
                            sliderItems={productsByCategory[category.id] || []}
                            buttonClass="rounded-full h-6 w-6 ml-2 bg-primary text-center shadow bg-white hover:bg-primary hover:text-white"
                            breakpoints={estimateSldie}
                            onProductSelect={handleProductSelect}
                            selectedProductId={selectedProduct?.id} // Pass selected product ID
                          />
                        </Accordion>
                      ))}
                  </div>
                )}
              </div>

              <p className="lg:text-[35px] text-2xl font-bold">
                AED {selectedProduct?.price}
              </p>
              <p className="lg:text-[15px] text-md">
                {isDescriptionExpanded
                  ? description
                  : getShortDescription(description)}
                {isLongDescription && (
                  <span
                    className="cursor-pointer font-semibold "
                    onClick={handleToggleDescription}
                  >
                    {isDescriptionExpanded ? ' See Less' : ' Read More'}
                  </span>
                )}
              </p>

              <Button className="bg-secondary text-white text-2xl font-bold py-7 px-4 rounded-lg">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}

      <Container className="py-10">
        <RelatedProducts products={products || []} />
      </Container>
      <BookNowBanner />
      <VideoAutomation />
      <Support />
    </>
  );
};

export default Estimator;
