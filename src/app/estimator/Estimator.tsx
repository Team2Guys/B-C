'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Modal } from 'antd';
import estimateIMG from '../../../public/assets/images/getestimate_new.jpg';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import { Button } from 'components/ui/button';
import { useRouter } from 'next/navigation';
import Input from 'components/Common/regularInputs';
import Container from 'components/Res-usable/Container/Container';
import { PiGreaterThan } from 'react-icons/pi';
import UnitSelector from '../../components/estimator-product/UnitSelector';
import EstimatorProduct from 'components/estimator-product/estimator-product';
import {EstimatorProductTypes } from 'types/interfaces';
import showToast from 'components/Toaster/Toaster';

const EstimatorPage = ({ sortedProducts }: { sortedProducts: EstimatorProductTypes[]}) => {
  const [selectedProduct, setSelectedProduct] = useState<EstimatorProductTypes | null>(null);
  const [activeProduct, setActiveProduct] = useState<EstimatorProductTypes | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string>('cm');
  const [modalVisible, setModalVisible] = useState(false);
  const [width, setWidth] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const route = useRouter();
const [productError, setproductError] = useState<string>("")
console.log(productError,"product error")
  useEffect(() => {
    calculatePrice(width, height);
    setSelectedProduct(activeProduct);
  }, [activeProduct]);

  // eslint-disable-next-line no-undef
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

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
  const checkForToast = () => {
    if (Number(width) > 0 && Number(height) > 0 && !activeProduct) {
      if (!toastTimeout.current) {
        toastTimeout.current = setTimeout(() => {
          setproductError("Please select a product");  // Set the error message
          showToast('error', 'Please select a product');
          
          // setTimeout(() => {
          //   setproductError("");  // Clear the error message after 1 second
          // }, 1000);
          
          toastTimeout.current = null;
        }, 1000);
      }
    } else if (toastTimeout.current) {
      clearTimeout(toastTimeout.current);
      toastTimeout.current = null;
    }
  };
  

  const calculatePrice = (width: number | '', height: number | '') => {


    if (activeProduct?.title === 'Sheer Curtains' || activeProduct?.title === 'Blackout Curtains') {
      if (width && activeProduct) {
        let calculatedPrice = width;
        switch (selectedUnit) {
          case 'cm':
            calculatedPrice = calculatedPrice / 100;
            break;
          case 'mm':
            calculatedPrice = calculatedPrice / 1000;
            break;
          case 'inches':
            calculatedPrice = calculatedPrice / 39.37;
            break;
          default:
            break;
        }
        const pricePerUnit = activeProduct.price || 0;
        const price = calculatedPrice * pricePerUnit;

        setCalculatedPrice(price);
      }
      else {

        setCalculatedPrice(0);
      }
    } else {
      if (width && height && activeProduct) {
        let calculatedPrice = width * height;
        if (selectedUnit === 'cm') {
          calculatedPrice = calculatedPrice / 10000;
        } else if (selectedUnit === 'mm') {
          calculatedPrice = calculatedPrice / 1000000;
        } else if (selectedUnit === 'inches') {
          calculatedPrice = calculatedPrice / 1550;
        }
        const pricePerUnit = activeProduct.price || 0;
        const price = calculatedPrice * pricePerUnit;

        setCalculatedPrice(price);
      }
      else {
        if (width && height && !activeProduct) {
          checkForToast();
        }
        setCalculatedPrice(0);
      }
    }

  };

  useEffect(() => {
    calculatePrice(width, height);
  }, [width, height, activeProduct, selectedUnit]);

  const showModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const getPlaceholder = (dimension: string) => {
    const unitPlaceholders: Record<string, string> = {
      mm: `Enter ${dimension} (mm)`,
      cm: `Enter ${dimension} (cm)`,
      inches: `Enter ${dimension} (inches)`,
    };
    return unitPlaceholders[selectedUnit] || `Enter ${dimension}`;
  };



  return (
    <>
      <Container className="md:mt-10">
        <div className="grid grid-cols-12 md:gap-10 xl:gap-14 2xl:md:h-[677px] space-y-4 md:space-y-0 md:px-2 xl:px-0">
          <div className="col-span-12 md:col-span-6 mt-2 sm:mt-0">
            <Image
              src={selectedProduct?.posterImage?.imageUrl || sortedProducts[0].posterImage.imageUrl}
              width={1000}
              height={1000}
              alt={selectedProduct?.title || 'Product Image'}
              className="object-cover lg:w-full w-full h-[250px] md:h-[677px] 2xl:md:h-[700px] rounded-3xl"
            />
          </div>

          <div className="flex flex-col space-y-3 col-span-12 md:col-span-6 px-2 md:px-0">
            <h1 className="lg:text-[30px] lg:font-black text-2xl font-bold capitalize">
              Select Product
            </h1>

            <EstimatorProduct
              selectProduct={sortedProducts}
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
            />

            <h2 className="lg:text-[30px] lg:font-black text-2xl font-bold capitalize">
              Enter Your Size
            </h2>
            <div
              className="cursor-pointer text-[#0078D7] w-fit"
              onClick={showModal}
            >
              <span className="text-[#0078D7] text-sm flex items-center gap-2">
                Measuring Guide <PiGreaterThan className="text-[#0078D7]" />
              </span>
            </div>
            <div className="space-y-2 sm:space-y-0">
              <UnitSelector
                selectedUnit={selectedUnit}
                setSelectedUnit={setSelectedUnit}
              />
              <div className="flex flex-wrap gap-4 items-center">
                <div className="grid grid-cols-2 max-sm:w-full gap-2">
                  <div className="w-full sm:w-fit">
                    <Input
                      type="number"
                      id="width"
                      className="w-full h-11 rounded-lg md:w-24 2xl:w-full 2xl:h-12 sm:h-9 text-[7px] 2xl:text-sm 2xl:placeholder:text-[10px] placeholder:text-[7px] px-1 2xl:px-2"
                      placeholder={getPlaceholder('Width')}
                      value={width || ''}
                      onChange={handleWidthChange}
                    />
                  </div>
                  <div className="w-full sm:w-fit">
                    <Input
                      type="number"
                      id="height"
                      className="w-full h-11 rounded-lg md:w-24 2xl:w-full 2xl:h-12 sm:h-9 text-[7px] 2xl:text-sm 2xl:placeholder:text-[10px] placeholder:text-[7px] px-1 2xl:px-2"
                      placeholder={getPlaceholder('Height')}
                      value={height || ''}
                      onChange={handleHeightChange}
                    />
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <p className="text-14">Estimated Price:</p>
                  <div className="flex justify-center items-center bg-[#D9D9D9] rounded-full h-[70px] w-[70px]">
                    <div className="text-14 font-black text-wrap text-center">
                      AED {activeProduct ? (calculatedPrice ? calculatedPrice.toFixed(2) : '0') : '0'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 lg:text-[15px]">
              <li>The displayed price is for indication purposes only.</li>
              <li>Final price may vary according to your actual requirements.</li>
              <li>All blinds & shutters are charged at a minimum of 1.5m².</li>
            </ul>

{/* 
        {productError ? <p className='mt-0 p-0 text-15' style={{marginTop: "0px", marginBottom: "0px"}}>{productError}</p> : null} */}

            <Button
              variant={'default'}
              onClick={() => route.push('/request-appointment')}
              className="w-full mt-4 h-12 bg-secondary hover:bg-primary text-white font-semibold !text-18"
            >
              Book Now
            </Button>
          </div>
        </div>
        <Modal
          title="How to Measure"
          open={modalVisible}
          onCancel={handleCloseModal}
          footer={null}
        >
          <Image
            src={estimateIMG}
            alt="Measuring Guide"
            width={1000}
            height={1000}
          />
        </Modal>
      </Container>
      <VideoAutomation />
      <BookNowBanner />
      <Support />
    </>
  );
};

export default EstimatorPage;
