'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Modal } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts } from 'config/fetch';
import { ICategory, IProduct } from 'types/types';
import estimateIMG from '../../../public/assets/images/getestimate.png';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import { Button } from 'components/ui/button';
import {estimator_data } from 'data/data';
// import EstimatorSkeleton from 'components/Skeleton/estimator-skeleton';
import { useRouter } from 'next/navigation';
import Input from 'components/Common/regularInputs';
// import EstimatorTabs from 'components/estimator-tab';
import EstimatorProduct from 'components/estimator-product/estimator-product';
import Container from 'components/Res-usable/Container/Container';
import { PiGreaterThan } from "react-icons/pi";
import UnitSelector from './UnitSelector';
// import { EsProduct } from 'types/interfaces';

const Estimator: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string>("cm");
  const [modalVisible, setModalVisible] = useState(false);
  const [width, setWidth] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const route = useRouter();

  const {
    data: categories,
    // error: categoriesError,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
 console.log(categories,"categories")
  const {
    data: products,
    // error: productsError,
    // isLoading: isLoadingProducts,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  // useEffect(() => {
  //   if (categories && products) {
  //     const firstCategory = categories.find((category) =>
  //       category.title.toLowerCase().includes('blinds'),
  //     );
  //     console.log(firstCategory, 'firstCategory');
  //     if (firstCategory) {
  //       const productsInFirstCategory = products.filter(
  //         (product) => product.CategoryId === firstCategory.id,
  //       );

  //       console.log(productsInFirstCategory[0], 'productsInFirstCategory');
  //       if (productsInFirstCategory.length > 0) {
  //         setActiveProduct(productsInFirstCategory[0]);
  //         setSelectedProduct(activeProduct);
  //       }
  //     }
  //   }
  // }, [categories, products]);

  useEffect(() => {
    if (estimator_data && estimator_data.length > 0) {
      const firstProduct: any = estimator_data[0];
      setActiveProduct(firstProduct); 
      setSelectedProduct(firstProduct);
    }
  }, []);
  

  useEffect(() => {
    calculatePrice(width, height);
    setSelectedProduct(activeProduct);
    console.log(activeProduct, 'imageUrl');
  }, [activeProduct]);

  // if (categoriesError instanceof Error) return <EstimatorSkeleton />;
  // if (productsError instanceof Error) return <EstimatorSkeleton />;

  // const categoryIds = new Set<number>([
  //   ...(categories?.map((category) => category.id) || []),
  //   ...(products?.map((product) => product.CategoryId) || []),
  // ]);

  // const productsByCategory = Array.from(categoryIds).reduce(
  //   (acc, categoryId) => {
  //     acc[categoryId] =
  //       products?.filter((product) => product.CategoryId === categoryId) || [];
  //     return acc;
  //   },
  //   {} as Record<number, IProduct[]>,
  // );

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 || isNaN(value)) {
      setWidth(isNaN(value) ? '' : value);
      calculatePrice(isNaN(value) ? '' : value, height);
    }
  };
  
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 || isNaN(value)) {
      setHeight(isNaN(value) ? '' : value);
      calculatePrice(width, isNaN(value) ? '' : value);
    }
  };

  const calculatePrice = (width: number | '', height: number | '') => {
    if (width && height && activeProduct) {
      let convertedWidth = width;
      let convertedHeight = height;
  
      if (selectedUnit === 'mm') {
        convertedWidth = width / 10;
        convertedHeight = height / 10;
      } else if (selectedUnit === 'inches') {
        convertedWidth = width * 2.54;
        convertedHeight = height * 2.54;
      }
      const areaInSquareCm = convertedWidth * convertedHeight;
      const pricePerUnit = activeProduct.price || 0;
      const price = (areaInSquareCm / 10000) * pricePerUnit;
      setCalculatedPrice(price);
    } else {
      setCalculatedPrice(0);
    }
  };
  
  
  useEffect(() => {
    calculatePrice(width, height);
  }, [width, height, activeProduct, selectedUnit]);


  const showModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const getPlaceholder = (dimension: string) => {
    const unitPlaceholders: Record<string, string> = {
      mm: `Enter ${dimension} (mm)`,
      cm: `Enter ${dimension} (cm)`,
      inches: `Enter ${dimension} (inches)`,
    };
    return unitPlaceholders[selectedUnit] || `Enter ${dimension}`;
  };
  
 useEffect(() => {
  setSelectedProduct(activeProduct);
 }, [activeProduct])
 

  return (
    <>
      {/* {false
      // isLoadingProducts || selectedProduct === null 
      ? 
      <EstimatorSkeleton />
       : ( */}
        <Container className='md:mt-10 '>
          <div className="grid grid-cols-12 md:gap-10 xl:gap-14 2xl:md:h-[677px] space-y-4 md:space-y-0 md:px-2 xl:px-0">
            <div className="col-span-12 md:col-span-6 mt-2 sm:mt-0">
              <Image
                src={selectedProduct?.posterImage?.imageUrl || selectedProduct?.posterImage[0].imageUrl}
                width={1000}
                height={1000}
                alt={selectedProduct?.title || 'Blinds'}
                className="object-cover lg:w-full w-full h-[250px] md:h-[677px] 2xl:md:h-[700px] rounded-3xl"
              />
            </div>

            <div className="flex flex-col space-y-3 col-span-12 md:col-span-6 px-2 md:px-0">
              <h2 className="lg:text-[30px] lg:font-black text-2xl font-bold capitalize">
               Select Product
              </h2>
              <EstimatorProduct selectProduct={estimator_data} 
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              />
              {/* <EstimatorTabs
                categories={categories || []}
                productsByCategory={productsByCategory}
                activeProduct={activeProduct}
                setActiveProduct={setActiveProduct}
              /> */}

              <h2 className="lg:text-[30px] lg:font-black text-2xl font-bold capitalize">Enter Your Size </h2>
              <div className=" cursor-pointer text-[#0078D7] w-fit"onClick={showModal}>
                  <span className="text-[#0078D7] text-sm flex items-center gap-2">Measuring Guide <PiGreaterThan className='text-[#0078D7]' /> </span>
                </div>
                <div className='space-y-2 sm:space-y-0'>
                <UnitSelector selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className='grid grid-cols-2 max-sm:w-full gap-2'>
                      <div className="w-full sm:w-fit">
                        <Input
                          type="number"
                          id="width"
                          className="w-full h-11 rounded-lg md:w-24 2xl:w-full 2xl:h-12 sm:h-9 text-[7px] 2xl:text-sm 2xl:placeholder:text-[10px] placeholder:text-[7px] px-1 2xl:px-2"
                          placeholder={getPlaceholder("Width")}
                          value={width || ''}
                          onChange={handleWidthChange}
                        />
                      </div>
                      <div className="w-full sm:w-fit">
                        <Input
                          type="number"
                          id="height"
                          className="w-full h-11 rounded-lg md:w-24 2xl:w-full 2xl:h-12 sm:h-9 text-[7px] 2xl:text-sm 2xl:placeholder:text-[10px] placeholder:text-[7px] px-1 2xl:px-2"
                          placeholder={getPlaceholder("Height")}
                          value={height || ''}
                          onChange={handleHeightChange}
                        />
                      </div>
                      </div>

                        <div className='flex gap-2 items-center'>
                          <p className='text-14'>Estimated Price:</p>
                          <div className='flex justify-center items-center bg-[#D9D9D9] rounded-full h-[70px] w-[70px] '>
                          {activeProduct && (
                            <div className="text-14 font-black text-wrap text-center">
                            AED {calculatedPrice ? calculatedPrice.toFixed(2) : activeProduct.price}
                            </div>
                          )}
                          </div>
                        </div>
                    </div>
                </div>
                  <p className="lg:text-[15px] ">
                  The displayed price is for indication purposes only. <br />
                  Final price may vary according to your actual requirements. <br />
                  All blinds & shutters are charged at a minimum of 1.5m2
                  </p>

              <Button
                onClick={() => {
                  route.push('/request-appointment');
                }}
                className="bg-secondary text-white text-lg md:text-2xl font-bold py-7 px-4 rounded-lg w-full"
              >
                Book Now
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
              />
            </Modal>
          </div>
          <div className="py-10 2xl:max-w-screen-2xl mx-auto px-2 lg:pl-10 ">
            <RelatedProducts products={products || []} limit={4} />
          </div>
          <BookNowBanner />
          <VideoAutomation />
          <Support />
        </Container>
{/* 
      )}
       */}
    </>
  );
};

export default Estimator;
