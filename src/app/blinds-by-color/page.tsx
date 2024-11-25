'use client'
import { useQuery } from '@tanstack/react-query'
import FeatureProduct from 'components/feture-product/feature-product'
import RelatedProducts from 'components/Related-products/RelatedProducts'
import GalleryCard from 'components/Res-usable/Cards/GalleryCard'
import Container from 'components/Res-usable/Container/Container'
import Support from 'components/Res-usable/support/support'
import VideoAutomation from 'components/video-Automation/video-Automation'
import VideoBanner from 'components/video-banner/video-banner'
import { fetchCategories, fetchProducts } from 'config/fetch'
import { categoriesContent, generateSlug } from 'data/data'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ICategory, IProduct } from 'types/types'

const BlindsByColorPage = () => {
    const [selectedPage, setSelectedPage] = useState<{
        heading: string;
        paragraph: string;
        subheading1: string;
        subheading2: string;
        subheadingContent: {
          content: string;
        }[];
      } | null>(null);
      const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const pathname = usePathname()
    const title = generateSlug(pathname).replaceAll('-',' ');
    const {
        data: products,
        error: productError,
        isLoading: productLoading,
      } = useQuery<IProduct[]>({
        queryKey: ['products'],
        queryFn: fetchProducts,
      });
      const {
        data: categoriesList = [],
        error,
        isLoading,
      } = useQuery<ICategory[], Error>({
        queryKey: ['category'],
        queryFn: fetchCategories,
      });
      const displayedProducts = products?.slice(0, 6);
    useEffect(() => {
        const selectedPage = categoriesContent.find(
          (page) => page.slug === generateSlug(pathname),
        );
        if (selectedPage) {
          setSelectedPage(selectedPage.content);
        }
      }, [pathname]);
  return (
    <>
    <VideoBanner title={`${title}`} selectedPage={selectedPage} showButton={false} colorSlider={true} />
    <Container className="my-5">
        <div className='text-center'><h2 className='text-5xl'>Blind By Color</h2></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
        {displayedProducts?.map((item) => {
          const filteredCategory = categoriesList.find(
            (cat) => cat.id === item?.CategoryId,
          );
          return (
            <GalleryCard
              card={item}
              key={item.id}
              relativeProducts={true}
              parent={filteredCategory?.title.toLowerCase()}
            />
          );
        })}
        </div>
        <div className='text-center'>
            <button className='bg-secondary px-6 py-2 text-lg rounded-md text-white'>Show More</button>
        </div>
    </Container>
    <Container className="my-20">
        <RelatedProducts products={products || []} limit={4} />
      </Container>
      <VideoAutomation />
      <Support />
    </>
  )
}

export default BlindsByColorPage