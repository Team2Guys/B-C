'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Select, Modal } from 'antd';
import Accordion from 'components/Res-usable/Accordion/Accordion';
import EstimatorSlider from 'components/slider/EstimatorSlider/EstimatorSlider';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts } from 'config/fetch';
import { ICategory, IProduct } from 'types/types';
import estimateIMG from '../../../public/assets/images/getestimate.png';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import { Button } from 'components/ui/button';
import { estimateSldie, generateSlug, optionDetail } from 'data/data';
import EstimatorSkeleton from 'components/Skeleton/estimator-skeleton';
import { useRouter } from 'next/navigation';
import Input from 'components/Common/regularInputs';
import EstimatorTabs from 'components/estimator-tab';

const Estimator: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [width, setWidth] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const route = useRouter();

  const description = selectedProduct?.description || '';

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
      const firstCategory = categories.find((category) =>
        category.title.toLowerCase().includes('blinds'),
      );

      if (firstCategory) {
        const productsInFirstCategory = products.filter(
          (product) => product.CategoryId === firstCategory.id,
        );

        if (productsInFirstCategory.length > 0) {
          setSelectedProduct(productsInFirstCategory[0]);
        }
      }
    }
  }, [categories, products]);


  useEffect(() => {
    calculatePrice(width, height);
    setSelectedProduct(activeProduct)
    console.log(activeProduct, "imageUrl")
  }, [activeProduct]);

  if (categoriesError instanceof Error) return <EstimatorSkeleton />;
  if (productsError instanceof Error) return <EstimatorSkeleton />;

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

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setWidth(isNaN(value) ? '' : value);
    calculatePrice(value, height);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setHeight(isNaN(value) ? '' : value);
    calculatePrice(width, value);
  };

  const calculatePrice = (width: number | '', height: number | '') => {
    if (width && height) {
      const item = categories?.find((p) => p.id === activeProduct?.CategoryId);
      let price = 0;
      if (!item) return null;
      if (generateSlug(item?.title) === 'curtains') {
        const step1 = Math.ceil((width * 2.3) / 280);
        let step2 = height + 25;
        step2 = step2 / 100;
        const step3 = step1 * step2;
        const fabricPrice = step3 * (activeProduct?.price || 0);
        const productionPrice = width * 3;

        price = productionPrice + fabricPrice;
      } else {
        const formula = width * height;
        price = (formula / 10000) * (activeProduct?.price || 0);
      }
      setCalculatedPrice(price);
    } else {
      setCalculatedPrice(null);
    }
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {isLoadingProducts ? (
        <EstimatorSkeleton />
      ) : (
        <div className="md:mt-10 lg:max-w-[95%] 2xl:max-w-[90%]">
          <div className="grid grid-cols-12 md:gap-10 space-y-5 md:space-y-0">
            <div className=" col-span-12 md:col-span-5 lg:col-span-7">
              <Image
                src={selectedProduct?.posterImage?.imageUrl}
                width={1000}
                height={1000}
                alt={selectedProduct?.title || 'Blinds'}
                className="object-cover lg:w-full w-full h-full md:h-[772px] rounded-r-3xl"
              />
            </div>

            <div className="flex flex-col space-y-5 col-span-12 md:col-span-7 lg:col-span-5 px-2 md:px-0">
              <h2 className="lg:text-[39px] lg:font-black text-2xl font-bold capitalize">
                Get Estimate
              </h2>

              <div className=" bg-gray-100 pb-6  rounded-lg shadow-md w-full">
                <p className="text-lg font-normal mb-2 p-3 rounded-t-md bg-[#f6efe9]">
                  Enter your Measurements
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 px-5">
                  <div>
                    <label
                      htmlFor="width"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Width (cm)
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Input
                        type="number"
                        id="height"
                        className="w-full border border-gray-300 rounded-sm"
                        placeholder="Example: 1.3"
                        value={width || ''}
                        onChange={handleWidthChange}
                      />
                      <span className="ml-2">cm</span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="height"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Height (cm)
                      <span className="text-red-500"> *</span>
                    </label>
                    <div className="relative flex items-center">
                      <Input
                        type="number"
                        id="weight"
                        className="w-full border border-gray-300 rounded-sm"
                        placeholder="Example: 1.3"
                        value={height || ''}
                        onChange={handleHeightChange}
                      />
                      <span className="ml-2">cm</span>
                    </div>
                  </div>
                </div>

                <p className="text-red-600 text-sm mb-4 px-5 font-semibold">
                  Note: Blinds with area less than 2 cm2 is considered 2 cm2
                </p>

                <div
                  className="flex items-center space-x-2 px-5 cursor-pointer"
                  onClick={showModal}
                >
                  <span className=" font-medium bg-black px-[0.30rem] text-sm text-white rounded-full">
                    ?
                  </span>
                  <p className="text-gray-600 text-sm">Measuring Guide</p>
                </div>
              </div>

              <EstimatorTabs
                categories={categories || []}
                productsByCategory={productsByCategory}
                activeProduct={activeProduct}
                setActiveProduct={setActiveProduct}
              />

              <p className="lg:text-[15px] px-4 md:px-0">
                *The displayed price is for the base offer; for upgraded options
                prices may vary visit to have your custom quotation!
              </p>
              {activeProduct && (
                <p className="lg:text-[35px] text-2xl font-bold text-center px-4 md:px-0">
                  AED{' '}
                  {calculatedPrice
                    ? calculatedPrice.toFixed(2)
                    : activeProduct.price}
                </p>
              )}

              <Button
                onClick={() => {
                  route.push('/request-appointment');
                }}
                className="bg-secondary text-white text-lg md:text-2xl font-bold py-7 px-4 rounded-lg w-full"
              >
                Book A Free Appointment
              </Button>
            </div>
          </div>
          <div className="estimator1">
            <Modal
              className="estimator"
              open={modalVisible}
              onCancel={handleCloseModal}
              footer={null}
              width="65rem"
              bodyStyle={{
                padding: 0,

                margin: 0,
                height: '35rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
              }}
              centered
            >
              <div
                style={{
                  position: 'relative',
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              ></div>
              <Image
                src={estimateIMG}
                alt="Detailed measuring guide for blinds"
                layout="fill"
                // objectFit="contain"
              />
            </Modal>
          </div>
          <Container className="py-10">
            <RelatedProducts products={products || []} limit={4} />
          </Container>
          <BookNowBanner />
          <VideoAutomation />
          <Support />
        </div>
      )}
    </>
  );
};

export default Estimator;
