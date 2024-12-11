import React from 'react';
const PageSkelton = ({ header }: { header?: boolean }) => {
  return (
    <div>
      <div
        className={`bg-gray-300 h-${header ? '96' : '52'} mt-10 w-full rounded-lg`}
      ></div>
      {!header && (
        <div className=" p-6 rounded-lg   mx-auto flex space-x-6 animate-pulse">
          <div className="bg-gray-300 h-96 w-1/2 rounded-lg"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-4">
              <div className="h-8 bg-gray-300 rounded w-1/3"></div>

              <div className="flex space-x-2">
                <div className="h-12 bg-gray-300 rounded w-24"></div>
                <div className="h-12 bg-gray-300 rounded w-24"></div>
              </div>

              <div className="flex space-x-2">
                <div className="h-8 bg-gray-300 rounded w-24"></div>
                <div className="h-8 bg-gray-300 rounded w-24"></div>
                <div className="h-8 bg-gray-300 rounded w-24"></div>
                <div className="h-8 bg-gray-300 rounded w-24"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-10 bg-gray-300 rounded w-24"></div>
              <div className="h-6 bg-gray-300 rounded w-32"></div>
            </div>

            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-12 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSkelton;
