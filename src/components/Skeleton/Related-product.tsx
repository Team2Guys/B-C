import React from 'react'

const RelatedProductSkeleton = () => {
  return (
     <div className="relative rounded-lg transition-shadow duration-300 group animate-pulse">
          <div className="rounded-xl h-56 xs:h-80 w-full bg-gray-300"></div>
          <div className="absolute bottom-0 rounded-b-xl px-2 w-full h-16 flex items-center justify-between bg-gray-400">
            <div className="flex flex-col space-y-2 w-full">
              <div className="h-4 bg-gray-300 rounded-md w-3/4 mx-2"></div>
              <div className="h-6 bg-gray-300 rounded-md w-1/4 mx-2"></div>
            </div>
          </div>
        </div>
        )};
export default RelatedProductSkeleton