import React from 'react';
import ThumbImage from '../ThumbImage/ThumbImage';
interface detailprops {
  title: string;
  description: string;
  products: any;
}

const DetailProduct: React.FC<detailprops> = ({
  products,
  title,
  description,
}) => {
  const modifiedProducts = {
    ...products,
    imageUrls: products?.imageUrls,
  };
  return (
    <>
      <div className="text-center max-w-screen-lg mx-auto space-y-3 mt-10 px-4">
        <h2 className="text-[#231F20] text-24 text-center  sm:text-32 lg:text-[41px] font-medium">{title}</h2>
        <p className="text-12 md:text-14 lg:text-16 leading-6 md:leading-8" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <div className="flex flex-wrap max-sm:flex-nowrap md:px-4 max-sm:overflow-x-auto w-full justify-between">
        <ThumbImage card={modifiedProducts} />
      </div>
    </>
  );
};
export default DetailProduct;
