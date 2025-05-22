import Breadcrumb from 'components/Res-usable/breadcrumb'
import Container from 'components/Res-usable/Container/Container';
import React, { useState } from 'react'
import { IProduct } from 'types/types';
import Thumbnail from './thumbnail';
import Detail from './detail';
import QualitySection from './quality-section';
import VideoGuide from './video-guilde';
import Testimonial from './testimonial';
import Faqs from 'components/product-category/Faqs';
import Information from './information';
import {tabDataDetail } from 'data/Homedata/tabdata';
import InfoTabs from 'components/NewHomecomponents/info';

interface IProductDetail {
  title: string;
  filterProduct: IProduct | any;
}
const ProductDetail = ({ title, filterProduct  }: IProductDetail) => {
   const [colorImage, setColorImage] = useState<string>('')
   console.log(filterProduct,"filterProduct")
   const isMotorisedCategory =
    title?.toLowerCase().includes('motorised blinds') || title?.toLowerCase().includes('motorised curtains');
  return (
    <div>
    <Breadcrumb slug={filterProduct.category.breakcrum} title={title}/>
    <Container className='grid grid-cols-12 mt-10 gap-4 xl:gap-8 max-sm:px-0'>
      <div className='col-span-12 md:col-span-6 xl:col-span-5 px-2'>
      <Thumbnail images={filterProduct.imageUrls} selectedColor={colorImage} setColorImage={setColorImage} title={filterProduct.title} videos={filterProduct.videos}
      videoThumbnail={filterProduct.imageUrls[0].imageUrl}
      />
      </div>
        <div className='col-span-12 md:col-span-6 xl:col-span-7'>
          <Detail data={filterProduct} setColorImage={setColorImage} selectedColor={colorImage}/>
      </div>
    </Container>
      
      <InfoTabs tabData={tabDataDetail} />

        <div className='grid grid-cols-12 w-full'>
        <div className={` col-span-12 ${isMotorisedCategory ? "order-2" : "order-1"}`}>
          <QualitySection/>
        </div>
        <div className={`col-span-12 ${isMotorisedCategory ? "order-1" : "order-2"}`}>
        <VideoGuide videos={isMotorisedCategory ? "" :filterProduct.videos } isMotorisedCategory={isMotorisedCategory}/>
          
        </div>
        </div>
    
    <Testimonial/>
    <Faqs Data={filterProduct} />
    <Information privacySectoin={filterProduct.privacySectoin} privarcyImage={filterProduct?.privarcyImage}/>
    </div>
  )
}

export default ProductDetail