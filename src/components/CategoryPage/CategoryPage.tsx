'use client';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/bg_subcategory.jpeg';
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
import { ProductDiscription } from 'data/content';
import { items } from 'data/data';


interface ICategoryPage {
  title: string;
  relatedProducts: IProduct[];
}

const CategoryPage = ({ title, relatedProducts }: ICategoryPage) => {
  const pathname = usePathname();
  const [activeFilter, setActiveFilter] = useState<any>({title: 'All', short_description: "Our expert team will visit you, take measurements, and offer a no-obligation quote on the spot. You can even choose Motorised Blinds options for added convenience or finish your blinds with a sleek cassette box."});
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState<ICategory | undefined>();
  category
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

  const [filteredProducts, setFilteredProducts] =useState<IProduct[]>(relatedProducts);
  const [inner_filteredProducts, setinner_filteredProducts] =useState<IProduct[]>(relatedProducts);

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

  const handleFilter = (filter: any) => {
    setActiveFilter(filter);
    if (filter.title === 'All') {
      setinner_filteredProducts(relatedProducts);
    } else {
      setinner_filteredProducts((pre)=>relatedProducts.filter((product) =>{
  
        return product.title.toLowerCase().trim() ==filter?.title.toLowerCase().trim()}))

    }
  };
  const handleFilterDiscription = (product:IProduct) => {
    const filterDiscription = ProductDiscription.find((disc) => disc.id === product.id);
    if (filterDiscription){
      return filterDiscription?.CategoryPageDiscription;
    }
    else{
      return product.description;
    }
  }

  return (
    <div>
      <TopHero title={title} pagename={pathname} image={bgBreadcrum} />
      <Container className="pt-10 pb-14 flex flex-col gap-10 items-center">
        {filteredProducts?.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 justify-between mt-10 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between`}
          >
            <div className='w-full md:w-1/2'>
              <Image
                className='w-full h-full md:h-[600px]'
                src={product.posterImage.imageUrl}
                height={500}
                width={500}
                alt={product.title}
              />

            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-xl xs:text-2xl tracking-wider space-y-3">
                  <div className="tracking-[.6rem] mb-2">
                  Roller Blinds in Dubai, UAE                  </div>

                  <span className="font-light tracking-[.2rem] ">
                    {product.title}
                  </span>
                </h3>
                <p className="text-16 xs:text-18 leading-8 mt-4 text-lightdark">
                  {handleFilterDiscription(product)}
                  {/* {product.description} */}
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href={`/request-appointment`}
                  className="px-8 py-4 bg-borderclr rounded-md text-white hover:bg-hoverborderclr"
                >
                  Book An Appointment Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Container>

      <Container className="text-center py-6">
        <div className="flex justify-center space-x-4 whitespace-nowrap overflow-auto">
          <Button
            variant={'feature'}
            className={` ${activeFilter?.title === 'All' ? 'bg-secondary text-white' : 'text-black hover:bg-secondary active:bg-secondary'}`}
            onClick={() => handleFilter({title: 'All',short_description : "Our expert team will visit you, take measurements, and offer a no-obligation quote on the spot. You can even choose Motorised Blinds options for added convenience or finish your blinds with a sleek cassette box."})}
          >
            All
          </Button>

          {relatedProducts &&
            relatedProducts.map((product) => (
              <Button
                key={product.id}
                variant={'feature'}
                className={` ${activeFilter.title === product.title ? 'bg-secondary text-white' : 'text-black hover:bg-secondary active:bg-secondary'}`}
                onClick={() => handleFilter(product)}
              >
                {product.title}
              </Button>
            ))}
        </div>
      </Container>

      <Container className="text-center ">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl">
          {activeFilter.title.toUpperCase()}
        </h2>
        <p className="mt-3 text-15 leading-7 w-full md:w-3/4 mx-auto">
     {activeFilter?.short_description}
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {inner_filteredProducts &&
            inner_filteredProducts.map((product: IProduct) => (
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
