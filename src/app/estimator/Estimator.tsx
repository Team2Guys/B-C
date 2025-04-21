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
                    <div className="text-14 font-black text-wrap text-center flex justify-center items-center gap-1">
                    <svg width="15" height="15" viewBox="0 0 531 462" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M48.4 1.10004C48.4 1.76669 49.6 3.76669 51.2 5.63336C55.4667 11.2334 62.5333 27.6334 64.9333 37.9001C69.0667 55.5001 69.7333 66.0334 69.7333 113.5V161.233H44.8C17.3333 161.233 14 160.433 4.53333 152.433L0 148.567L0.8 160.567C2 179.367 9.06667 193.5 21.3333 201.233C30.2667 206.967 34.9333 207.9 53.4667 207.9H69.7333V230.833V253.9L44.5333 253.633C17.0667 253.367 14.2667 252.7 4.53333 244.567L0.4 240.967V249.5C0.4 266.433 6.8 281.633 18 291.233C26.2667 298.167 32.9333 299.9 52.6667 299.9H69.7333V349.5C69.7333 403.633 68.6667 415.233 62.2667 434.433C58.5333 445.5 55.0667 451.9 49.8667 457.633L46.4 461.367L149.067 460.833C258.4 460.3 260 460.167 293.733 453.233C301.467 451.633 314.667 447.9 323.067 444.967C389.867 421.633 432.133 377.233 451.2 310.167L454.133 299.9H480.933C495.733 299.9 510 300.567 512.667 301.233C515.467 302.033 520.4 304.833 523.867 307.367L530 312.167L529.467 298.967C529.067 287.633 528.4 284.7 525.067 278.167C520.533 269.1 512.133 260.833 503.333 256.833C498 254.433 494.4 253.9 479.2 253.633L461.333 253.5L461.2 230.7L461.067 207.9H485.733C508.8 207.9 510.8 208.167 517.067 211.1C520.8 212.833 524.933 215.5 526.267 217.1C527.733 218.567 529.2 219.9 529.733 219.9C530.533 219.9 530.4 211.233 529.2 199.9C527.867 186.3 517.867 172.167 505.067 165.5C498.8 162.167 497.067 161.9 476.267 161.5L454 160.967L448.667 144.567C438.267 112.567 423.6 88.4334 401.067 65.7667C361.333 25.9001 309.067 5.50003 235.733 1.10004C210.4 -0.366638 48.4 -0.366638 48.4 1.10004ZM240 25.3667C300.4 32.0334 341.6 62.0334 362.133 113.9C366.533 125.1 375.067 154.967 375.067 159.367C375.067 160.967 358.533 161.233 257.067 161.233H139.067V92.5667V23.9001H183.067C207.333 23.9001 232.933 24.5667 240 25.3667ZM380.4 230.567C380.4 247.767 380 253.233 378.8 253.233C377.867 253.233 323.467 253.367 258 253.633L139.067 253.9V230.833V207.9H259.733H380.4V230.567ZM375.067 301.367C375.067 304.433 366.8 334.967 364.267 341.633C340.933 400.833 298.267 430.567 227.067 437.1C218.667 437.9 195.333 438.567 175.467 438.567H139.067V369.233V299.9H257.067C339.2 299.9 375.067 300.3 375.067 301.367Z" fill="black"/>
                  </svg>
 {activeProduct ? (calculatedPrice ? calculatedPrice.toFixed(2) : '0') : '0'}
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
