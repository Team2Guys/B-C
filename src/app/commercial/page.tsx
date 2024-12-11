'use client';

import whyUsImg from '../../../public/assets/images/Rectangle811da.png';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
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
import ProductCard from 'components/ui/Product-Card';
import {
  commercialPagesItems,
  generateSlug,
  officeBlindsItems,
} from 'data/data';
import VideoBanner from 'components/video-banner/video-banner';

const CommercialPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [mixProdCategeries, setmixProdCategeries] = useState<any[]>([]);

  const { data: products,  isLoading:prodloading, } = useQuery<any[]>({
     queryKey: ['products'], 
    queryFn: fetchProducts,
  
  });

  const { data: categories,  isLoading: categoryLoading} = useQuery<ICategory[]>({ queryKey: ['categories'], queryFn: fetchCategories });

  const { data: subCategories, } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  useEffect(() => {
    if (products && subCategories) {

      const matchingSubCategoryTitles = subCategories.filter((subCategory) => commercialPagesItems.some((prod: string) => prod === generateSlug(subCategory.title)));

      const filtered = products.filter((product) => commercialPagesItems.some((prod: string) => prod === generateSlug(product.title)));

      setFilteredProducts(filtered);
      let arry = [...filtered, ...matchingSubCategoryTitles]
      setmixProdCategeries(arry);
    }
  }, [products, subCategories]);

  if (prodloading || categoryLoading) {
    return <div></div>;
  }
  

  return (
    <div>
      {/* title="" image={bgBreadcrum} /> */}
      <VideoBanner title={`Commercial`} />
      <Container className=" pt-10 md:pt-20 pb-14 flex justify-between gap-10 items-center flex-col md:flex-row px-4">
        <div className="w-full md:w-1/2">
          <h3 className="font-bold text-xl xs:text-2xl tracking-wider">
            Office Blinds & Curtains:
            <br />
            <span className="font-medium">Why Us in Dubai, UAE?</span>
          </h3>
          <p className="text-14 xs:text-18 md:leading-8 mt-4 text-lightdark">
            Without any doubt, Blinds & Curtains Dubai believe in delivering
            above your expectations. With clients stretching from royalty to
            some of the top schools and companies in Dubai, you can be
            confident.
          </p>

          <ul className="text-14 xs:text-18 md:leading-8 text-lightdark list-disc list-inside ps-2">
            {officeBlindsItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="h-fit flex justify-center md:justify-start mt-8">
            <Link
              href="/request-appointment"
              className="px-8 py-4 bg-borderclr rounded-md text-white hover:bg-hoverborderclr "
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={whyUsImg}
            alt="why-us img"
            className="me-auto md:me-0 ms-auto"
          />
        </div>
      </Container>
      <div className="w-full border-t-[1px] border-borderclr"></div>
      <Container className="text-center py-10">
        <h2 className="text-16 xs:text-3xl sm:text-4xl font-semibold md:font-normal">
          OFFICE BLINDS & CURTAINS
        </h2>
        <p className="mt-3 text-14 md:leading-7">
          See our comprehensive Blinds range
          <br />
          Find the perfect made-to-measure blinds within our exclusive range.
          There are many shades and stunning patterns to select from
        </p>
        <ProductCard products={mixProdCategeries || []} />
      </Container>
      <BookNowBanner />
      <Container className="text-center py-10">
        <h2 className="text-16 xs:text-3xl sm:text-4xl font-semibold md:font-normal">
          COMMERCIAL OFFICE BLINDS STYLES
        </h2>
        <p className="mt-3 text-14 md:leading-7">
          See our comprehensive Blinds range
          <br />
          Find the perfect made-to-measure blinds within our exclusive range.
          There are many shades and stunning patterns to select from
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 md:px-0">
          {filteredProducts &&
            filteredProducts.map((product: IProduct) => {
              const category = categories?.find(
                (cat) => cat.id === product.CategoryId,
              );
              console.log(category, 'categor');
              if (!category) return null;
              const parent = generateSlug(category.title);
              return (
                <GalleryCard
                  card={product}
                  key={product.id}
                  relativeProducts={true}
                  parent={parent}
                />
              );
            })}
        </div>
  
      </Container>
      <Container >
        <RelatedProducts products={filteredProducts || []} limit={4} />
      </Container>
    </div>
  );
};

export default CommercialPage;