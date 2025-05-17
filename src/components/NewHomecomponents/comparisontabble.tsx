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
        <h2 className="font-robotoSerif font-semibold text-24 lg:font-bold text-primary xl:text-[48px] mt-3 lg:text-[40px]">
          We Don’t Just Compete – We Lead
        </h2>
        <p className="font-roboto lg:font-semibold text-18 font-bold lg:text-32 text-primary my-3 lg:mb-7">Top Picks for Your Home</p>

       <div className="grid grid-cols-3">
       {/* Header Row */}
       <div className="bg-white h-[60px] lg:h-[70px] border-b"></div>
       <div className="bg-[#F1B42F42] h-[60px] lg:h-[70px] flex justify-center items-center font-bold font-roboto text-16 xl:text-[29px] text-primary border-b">
       Blinds and Curtains
      </div>
      <div className="bg-white h-[60px] lg:h-[70px] flex justify-center items-center font-bold font-roboto text-16 xl:text-[29px] text-primary border-b">
      Others
      </div>

      {/* Left Column - Features */}
      <FeaturesColumn features={features} featureMobile={mobilefeatures} popupData={popupData} />

       {/* Middle Column - Blinds */}
        <div className="bg-[#F1B42F42] divide-y divide-gray-200 text-primary">
        {blindsData.map((item, index) => (
        <div
      key={index}
      className="h-[60px] lg:h-[70px] w-full p-2 flex justify-center items-center font-roboto font-normal text-12 sm:text-18 xl:text-[29px]"
    >
      {item === "BiSolidCheckCircle" ? (
        <BiSolidCheckCircle className="text-green-600 w-6 h-6 lg:w-9 lg:h-9 mx-auto" />
      ) : (
        item
      )}
    </div>
  ))}
      </div>

      {/* Right Column - Others */}
      <div className="bg-white divide-y divide-gray-200 text-primary">
      {othersData.map((item, index) => (
      <div
        key={index}
        className="h-[60px] lg:h-[70px] w-full font-roboto flex justify-center items-center font-normal text-12 sm:text-18 xl:text-[29px] p-2"
      >
        {item === "IoIosCloseCircle" ? (
            <IoIosCloseCircle className="text-red-600 w-6 h-6 lg:w-9 lg:h-9 mx-auto" />
          ) : (
            item
          )
        }
      </div>
    ))}
      </div>
      </div>

     {/* button */}

        <Link href="/request-appointment" className="bg-secondary text-black font-semibold py-2 px-4 lg:px-6 rounded-xl text-primary font-roboto text-20 xl:text-24 block mx-auto w-fit relative bottom-7 lg:bottom-7">
          Book A Free Visit
        </Link>
    

      </section>
      </Container>
    );
  }

