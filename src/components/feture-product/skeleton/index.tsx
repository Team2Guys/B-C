import React from 'react'
import Container from 'components/Res-usable/Container/Container';

const Featureskeleton = () => {
  return (
    <div>
    <Container className="py-12">
      <div className="flex justify-center flex-col items-center">
        <div className='w-1/2 lg:w-7/12 bg-gray-300 h-10 rounded-lg'></div>
        <div className='w-1/2 md:w-5/12 bg-gray-300 mt-3 h-5 md:h-8 '></div>
        <div className=' hidden md:block'>
        <div className="grid grid-cols-5 mt-3 lg:gap-20">
         {[...Array(5)].map((_, index) => (
        <div key={index} className="h-10 w-16 bg-gray-300"></div>
          ))}

        </div></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-screen-2xl mx-auto px-2 mt-4">
        {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-gray-300 rounded-lg h-72 w-full"></div>
          ))}
            </div>
        </div>
    </Container>
  </div>
    );
};

export default Featureskeleton ;