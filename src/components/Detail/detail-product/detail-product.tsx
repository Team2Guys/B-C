import React from 'react';
import Container from 'components/Res-usable/Container/Container';
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
    imageUrls: products?.imageUrls?.slice(0, 4),
  };
  return (
    <Container className="mt-10">
      <div className="text-center max-w-screen-lg mx-auto space-y-3">
        <h2 className="text-[#231F20] text-24 text-center  sm:text-32 lg:text-[41px] font-medium">{title}</h2>
        <p className="text-12 md:text-14 lg:text-16 leading-6 md:leading-8" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mt-10 mt-4 lg:mb-10">
        <ThumbImage card={modifiedProducts} />
      </div>
    </Container>
  );
};

export default DetailProduct;
