import Breadcrumb from 'components/Res-usable/breadcrumb'
import Container from 'components/Res-usable/Container/Container';
import React from 'react'
import { IProduct } from 'types/types';
import Thumbnail from './thumbnail';
import Detail from './detail';
import QualitySection from './quality-section';
import VideoGuide from './video-guilde';
import Testimonial from './testimonial';
import Faqs from 'components/product-category/Faqs';
import Information from './information';

interface IProductDetail {
  title: string;
  filterProduct: IProduct | any;
}
const ProductDetail = ({ title, filterProduct  }: IProductDetail) => {
  return (
    <div>
    <Breadcrumb slug={filterProduct.category.breakcrum} title={title}/>
    <Container className='grid grid-cols-12 mt-10 gap-4 xl:gap-8 max-sm:px-0'>
      <div className='col-span-12 md:col-span-6 xl:col-span-5 px-2'>
      <Thumbnail images={filterProduct.imageUrls}/>
      </div>
        <div className='col-span-12 md:col-span-6 xl:col-span-7'>
          <Detail data={filterProduct}/>
      </div>
    </Container>
    <QualitySection/>
    <VideoGuide/>
    <Testimonial/>
    <Faqs Data={filterProduct} />
    <Information privacySectoin={filterProduct.privacySectoin} privarcyImage={filterProduct?.privarcyImage?.imageUrl}/>
    </div>
  )
}

export default ProductDetail