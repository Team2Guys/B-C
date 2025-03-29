import React from 'react';

const EstimatorSkeleton = () => {
  return (
    <div className="md:mt-10 lg:max-w-[95%] xl:max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-7/12 animate-pulse">
          <div className="lg:w-full w-full h-full md:h-[762px] rounded-3xl  bg-gray-300 "></div>
        </div>
        <div className="flex flex-col space-y-5 w-full md:w-5/12 px-2 md:px-0  ">
          <h2 className="w-[256px] h-[52px] animate-pulse bg-gray-300"></h2>
          <div className="w-[256px] h-[52px] bg-gray-300 animate-pulse mt-10 rounded-md"></div>
          <div className="w-full h-[45px] bg-gray-300 animate-pulse mt-10"></div>
          <div className="w-full h-[180px] bg-gray-300 animate-pulse mt-2"></div>
          <div className="w-full h-[45px] bg-gray-300 animate-pulse mt-2"></div>
          <div className="w-full h-[45px] bg-gray-300 animate-pulse mt-2"></div>
          <div className="w-[100px] h-[52px] bg-gray-300 animate-pulse mt-10"></div>
          <div className="w-[100px] h-[32px] bg-gray-300 animate-pulse mt-10"></div>
          <div className="w-full h-[52px] bg-gray-300 animate-pulse mt-10 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default EstimatorSkeleton;
