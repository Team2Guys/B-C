import React from 'react'
import { GuaranteeVisitData } from 'data/data'
import Link from 'next/link';
const GuaranteeVisit = () => {
    return (
        <div>
          <h2 className="font-extrabold text-lg xs:text-2xl lg:text-4xl tracking-wider text-center">
          Window Solutions at Your Fingertips!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:gap-5 2xl:gap-7 mx-2">
            {GuaranteeVisitData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center border outline-none bg-primary text-white space-y-4 p-7 mx-1 xl:mx-4 mt-6 lg:mt-10"
              >
                <h2 className="font-bold xs:text-20 md:text-18 2xl:text-19 text-center">{item.heading}</h2>
                <p className='text-12 md:text-14 2xl:text-16'>{item.description}</p>
                <Link href={item.href} target='blank' className='text-black px-3 py-2 sm:px-4 sm:py-3 bg-white text-12 sm:text-14 font-semibold'>{item.button}</Link>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default GuaranteeVisit;