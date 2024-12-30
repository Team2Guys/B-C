import React from 'react';

interface SkeletonGridProps {
  itemsPerPage: number;
  columns?: number;
  className?: string;
}

const ImageCardLoading: React.FC<SkeletonGridProps> = ({
  itemsPerPage,
  columns = 4,
  className = '',
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-6 ${className}`}
    >
      {Array.from({ length: itemsPerPage }).map((_, index) => (
        <div
          key={index}
          className="relative rounded-lg transition-shadow duration-300 group space-y-2 animate-pulse"
        >
          <div className="bg-gray-300 h-64 md:h-72 w-full rounded-xl"></div>
          <div className="bg-gray-300 h-6 w-3/4 mx-auto rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardLoading;
