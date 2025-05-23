"use client"
import { IoIosCloseCircle } from "react-icons/io";
import { BiSolidCheckCircle } from "react-icons/bi";
import Container from "components/Res-usable/Container/Container";
import Link from "next/link";
import { blindsData, features, mobilefeatures, othersData, popupData } from "data/Homedata/tabdata";
import FeaturesColumn from "./featurecolumn";

export default function ComparisonTable() {
  return (
    <Container>
      <section className="py-2 text-center">
        <h2 className="font-robotoSerif font-semibold text-24 lg:font-bold text-primary xl:text-[48px] my-3 xl:mt-7 lg:text-[40px]">
          We Don’t Just Compete – We Lead
        </h2>
          {/* <p className="font-roboto font-normal lg:font-semibold text-16 md:text-20 text-[#3E3F42] my-3 lg:mb-7">Top Picks for Your Home</p> */}
       <div className="grid grid-cols-3">
       {/* Header Row */}
       <div className="h-[60px] lg:h-[70px]"></div>
       <div className="bg-[#3E3F421A] h-[60px] lg:h-[70px] flex justify-center items-center font-bold font-roboto text-16 xl:text-24 text-primary rounded-t-md md:rounded-t-2xl">
       Blinds and Curtains
      </div>
      <div className="bg-white h-[60px] lg:h-[70px] flex justify-center items-center font-bold font-roboto text-16 xl:text-24 text-primary">
      Others
      </div>

      {/* Left Column - Features */}
      <FeaturesColumn features={features} featureMobile={mobilefeatures} popupData={popupData} />
     <div className="bg-[#3E3F421A] divide-y divide-gray-200 text-primary rounded-b-md md:rounded-b-2xl">
    {blindsData.map((item, index) => {
     if (item === "") {
      return (
        <div
          key={index}
          className="hidden md:block lg:flex h-[60px] lg:h-[70px] w-full p-2 justify-center items-center font-roboto font-normal text-12 sm:text-16 xl:text-20"
        >
        </div>
      );
     }
     return (
      <div
        key={index}
        className="h-[60px] lg:h-[70px] w-full p-2 flex justify-center items-center font-roboto font-normal text-15 sm:text-16 xl:text-20"
      >
        {item === "BiSolidCheckCircle" ? (
          <BiSolidCheckCircle className="text-green-600 w-5 h-5 lg:w-7 lg:h-7 mx-auto" />
        ) : (
          item
        )}
      </div>
      );
   })}
  </div>
  
      {/* Right Column - Others */}
      <div className="bg-white divide-y divide-gray-200 text-primary">
      {othersData.map((item, index) => (
      <div
        key={index}
        className="h-[60px] lg:h-[70px] w-full font-roboto flex justify-center items-center font-normal text-15 sm:text-16 xl:text-20 p-2"
      >
        {item === "IoIosCloseCircle" ? (
            <IoIosCloseCircle className="text-red-600 w-5 h-5 lg:w-7 lg:h-7 mx-auto" />
          ) : (
            item
          )
        }
      </div>
    ))}
      </div>
      </div>     

     {/* button */}
        <Link href="/request-appointment" className="bg-secondary font-semibold py-3 px-4 md:px-12 lg:px-16 xl:px-[116px] rounded-md text-primary font-roboto text-16 mx-auto w-fit relative hidden md:block md:bottom-16 hover:opacity-65">
          Book A Free Visit                        
        </Link>
      </section> 
      <Link href="/request-appointment" className="bg-secondary text-center font-semibold py-2  w-fit max-sm:px-6 xs:w-1/2 rounded-md text-primary font-roboto text-lg mx-auto relative block md:hidden my-4 hover:opacity-65">
          Book A Free Visit                        
        </Link>
      </Container>
    ); 
  }

