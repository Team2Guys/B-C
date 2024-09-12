'use client';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/large-ss.png';
import whyUsImg from '../../../public/assets/images/Rectangle811da.png';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import ProductCard from 'components/Res-usable/Cards/ProductCard';
import { galleryItems, productItems, relativeProducts } from 'data/data';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import Link from 'next/link';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'types/types';
import { fetchProducts } from 'config/fetch';
import FeatureProduct from 'components/feture-product/feature-product';
import { useState } from 'react';
import { Button } from 'components/ui/button';

interface ICategoryPage {
  title: string;
  relatedProducts: IProduct[];
}
const itemsPerPage = 9;
const CategoryPage = ({ title, relatedProducts }: ICategoryPage) => {
  console.log('=====+ + + +  relatedProducts + + + + +===========');
  console.log(relatedProducts);
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on the selected filter
  const filteredProducts = relatedProducts.filter((product) => {
    if (activeFilter === 'All') return true;
    return product.title === activeFilter;
  });

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil((filteredProducts?.length || 0) / itemsPerPage);

  return (
    <div>
      <TopHero title={`${title}`} image={bgBreadcrum} />

      {/* Alternating Related Products Section */}
      <Container className="pt-20 pb-14 flex flex-col gap-10 items-center">
        {relatedProducts?.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between`}
          >
            <Image
              src={product.posterImage.imageUrl}
              height={500}
              width={500}
              alt={product.title}
              // Ensure image takes full width and height is auto adjusted
            />

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="font-bold text-xl xs:text-2xl tracking-wider">
                {index === 0 && (
                  <div className="tracking-[.7rem]">
                    CHECK OUR OTHER RANGE OF ROLLER BLINDS
                  </div>
                )}
                <span className="font-medium tracking-widest">
                  {' '}
                  {product.title}
                </span>
              </h3>
              <p className="text-16 xs:text-18 leading-8 mt-4 text-lightdark">
                {product.description}
              </p>

              <div className="h-fit mt-8">
                <Link
                  href="/appointment"
                  className="px-8 py-4 bg-borderclr rounded-md text-white hover:bg-hoverborderclr"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Container>

      {/* Product Gallery Section */}

      {/* Book Now Banner Section */}

      {/* Featured Products Section */}
      <div>
        {/* Page Title */}
        <Container className="py-10 flex justify-between">
          <h1 className="text-4xl font-bold">{title}</h1>
          <span className="text-gray-400 text-11 xs:text-14">
            Showing {indexOfFirstItem + 1}–
            {Math.min(indexOfLastItem, filteredProducts?.length || 0)} of{' '}
            {filteredProducts?.length || 0} results
          </span>
        </Container>

        {/* Filter Section */}
        <Container className="text-center py-6">
          <div className="flex justify-center space-x-4">
            <Button
              variant={'feature'}
              className={` ${activeFilter == 'All' ? 'bg-[#cdb7aa] text-white hover:bg-[#e0c7b9] active:bg-[#e0c7b9]' : 'text-black hover:bg-[#e0c7b9]'} active:bg-[#e0c7b9]`}
              onClick={() => setActiveFilter('All')}
            >
              All
            </Button>
            {relatedProducts &&
              relatedProducts.map((category) => (
                <Button
                  key={category.id}
                  variant={'feature'}
                  className={` ${activeFilter === category.title ? 'bg-[#cdb7aa] text-white hover:bg-[#e0c7b9] active:bg-[#e0c7b9]' : 'text-black hover:bg-[#e0c7b9] active:bg-[#e0c7b9]'}`}
                  onClick={() => setActiveFilter(category.title)}
                >
                  {category.title}
                </Button>
              ))}
          </div>
        </Container>

        {/* Product Gallery */}
        <Container className="text-center py-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl">
            {activeFilter.toUpperCase()}
          </h2>
          <p className="mt-3 text-15 leading-7">
            See our comprehensive {activeFilter} range
            <br />
            Find the perfect made-to-measure blinds within our exclusive range.
            There are many shades and stunning patterns to select from
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts &&
              filteredProducts.map((product: IProduct) => (
                <GalleryCard
                  card={product}
                  key={product.id}
                  relativeProducts={false}
                />
              ))}
          </div>
          {/* <div className="h-fit mt-20 text-center">
            <button className="px-8 py-4 bg-borderclr rounded-md text-white hover:bg-hoverborderclr bg-[#cdb7aa]">
              View More
            </button>
          </div> */}
        </Container>
      </div>

      <BookNowBanner />

      {/* Related Products Section */}
      <Container className="py-10">
        <RelatedProducts products={products || []} />
      </Container>
    </div>
  );
};

export default CategoryPage;
