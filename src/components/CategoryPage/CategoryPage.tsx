'use client';

import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/bg_subcategory.png';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import { useEffect, useState } from 'react';
import { Button } from 'components/ui/button';
import { usePathname } from 'next/navigation';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';

interface ICategoryPage {
  title: string;
  relatedProducts: IProduct[];
}

const itemsPerPage = 9;

const CategoryPage = ({ title, relatedProducts }: ICategoryPage) => {
  const pathname = usePathname();
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { data: subcategories } = useQuery<ICategory[]>({
    queryKey: ['subcategories'],
    queryFn: fetchSubCategories,
  });

  const { data: categories } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(relatedProducts);

  const filterProducts = () => {
    const filterSubCat = subcategories?.find(
      (subCat) => subCat.title === title,
    );
    const filterCat = categories?.find(
      (cat) => cat.id === filterSubCat?.CategoryId,
    );

    const filtered = products?.filter(
      (product) => product.CategoryId === filterCat?.id,
    );

    setFilteredProducts(filtered || []);
  };

  useEffect(() => {
    if (!relatedProducts || relatedProducts.length === 0) {
      filterProducts();
    } else {
      setFilteredProducts(relatedProducts);
    }
  }, [title, products, subcategories, categories]);

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProducts(relatedProducts);
    } else {
      setFilteredProducts(
        relatedProducts.filter((product) => product.title === filter),
      );
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil((filteredProducts?.length || 0) / itemsPerPage);

  return (
    <div>
      <TopHero title={title} image={bgBreadcrum} />
      <Container className="pt-20 pb-14 flex flex-col gap-10 items-center">
        {filteredProducts?.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between`}
          >
            <Image
              src={product.posterImage.imageUrl}
              height={500}
              width={500}
              alt={product.title}
            />

            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl xs:text-2xl tracking-wider space-y-3">
                  <div className="tracking-[.6rem] mb-2">
                    CHECK OUR OTHER RANGE OF {product.title}?
                  </div>

                  <span className="font-light tracking-[.2rem] ">
                    {product.title}
                  </span>
                </h3>
                <p className="text-16 xs:text-18 leading-8 mt-4 text-lightdark">
                  {product.description}
                </p>
              </div>

              <div className="">
                <Link
                  href={`/appointment`}
                  className="px-8 py-4 bg-borderclr rounded-md text-white hover:bg-hoverborderclr"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Container>
      <Container className="text-center py-6">
        <div className="flex justify-center space-x-4">
          <Button
            variant={'feature'}
            className={` ${activeFilter === 'All' ? 'bg-[#cdb7aa] text-white' : 'text-black hover:bg-[#e0c7b9] active:bg-[#e0c7b9]'}`}
            onClick={() => handleFilter('All')}
          >
            All
          </Button>

          {relatedProducts &&
            relatedProducts.map((product) => (
              <Button
                key={product.id}
                variant={'feature'}
                className={` ${activeFilter === product.title ? 'bg-[#cdb7aa] text-white' : 'text-black hover:bg-[#e0c7b9] active:bg-[#e0c7b9]'}`}
                onClick={() => handleFilter(product.title)}
              >
                {product.title}
              </Button>
            ))}
        </div>
      </Container>
      <Container className="text-center py-20">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl">
          {activeFilter.toUpperCase()}
        </h2>
        <p className="mt-3 text-15 leading-7">
          See our comprehensive {activeFilter} range. Find the perfect
          made-to-measure blinds within our exclusive range. Many shades and
          stunning patterns to select from.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentItems &&
            currentItems.map((product: IProduct) => (
              <GalleryCard
                card={product}
                key={product.id}
                relativeProducts={true}
                parent={`${pathname}`}
              />
            ))}
        </div>
      </Container>
      <BookNowBanner />
      <Container className="py-10">
        <RelatedProducts products={filteredProducts || []} limit={4} />
      </Container>
    </div>
  );
};

export default CategoryPage;
