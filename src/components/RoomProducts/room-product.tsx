'use client';
import BathroomCategory from 'components/BathroomCategory/BathroomCategory';
import Container from 'components/Res-usable/Container/Container';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';
import { useQuery } from '@tanstack/react-query';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import TopHero from 'components/ui/top-hero';
import { usePathname } from 'next/navigation';
import { subCategoryUrls, urls } from 'data/urls';
import NotFound from 'app/not-found';
import { generateSlug, subCategoryName } from 'data/data';

interface IFilteredSubCategory {
  bannerImage?: { imageUrl: string }
}
interface ICategoryPage {
  title: string;
  relatedProducts: IProduct[];
  description: string;
  category: string;
  filteredSubCategory?: IFilteredSubCategory;
}

const RoomProducts = ({
  title,
  relatedProducts,
  description,
  category,
  filteredSubCategory,
}: ICategoryPage) => {
  const pathname = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);
  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [updateSubCategoryName, setUpdateSubCategoryName] = useState<{
    url: string;
    name: string;
  }>();
  console.log(category, 'category');
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

  useEffect(() => {
    if (pathname) {
      const matchingUrl = urls.find((url) => url.errorUrl === pathname);
      console.log(pathname, 'pathnamepathname');
      if (matchingUrl) {
        console.log(matchingUrl, 'matchingUrl');
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
    if (title) {
      const matchingTitle = subCategoryName.find((cat) => cat.name === title);
      if (matchingTitle) {
        setCategoryName(matchingTitle.alterName);
      }
    }
  }, [pathname]);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(relatedProducts);
  const [productCategory, setProductCategory] = useState<string>('');

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

    // Determine category title (Blinds, Curtains, etc.)
    setProductCategory(filterCat?.title || '');

    setFilteredProducts(filtered || []);
  };

  useEffect(() => {
    if (!relatedProducts || relatedProducts.length === 0) {
      filterProducts();
    } else {
      if (title === 'Bedroom Blinds') {
        const updatedProducts = relatedProducts.map((product) => {
          const updateTitle = subCategoryUrls.find(
            (item) => item.url === generateSlug(product.title),
          );
          if (updateTitle) {
            setUpdateSubCategoryName(updateTitle);
            return { ...product, title: updateTitle.name };
          }
          return product;
        });
        setFilteredProducts(updatedProducts);
      } else {
        setFilteredProducts(relatedProducts);
      }
      const relatedCategory = categories?.find(
        (cat) => cat.id === relatedProducts[0]?.CategoryId,
      );
      setProductCategory(relatedCategory?.title || '');
    }
  }, [title, products, subcategories, categories]);

  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <>
      {/* <VideoBanner
        title={title}
        selectedPage={{
          heading: category,
          paragraph:description,
        }}
          
      /> */}
      <TopHero
        title={title}
        pageTitle={`Made to Measure ${title}`}
        image={`${filteredSubCategory?.bannerImage?.imageUrl || bgBreadcrum.src}`}
        pagename={pathname}
      />
      <Container className="my-12">
        <BathroomCategory
          categoryName={categoryName ? categoryName : title}
          description={description}
          filteredProducts={filteredProducts}
          isLoading={isLoading}
          categoryTitle={productCategory}
          subCategory={title}
          updateSubCategoryName={updateSubCategoryName}
        />
      </Container>

      <VideoAutomation />
      <Container>
        <Support />
      </Container>
    </>
  );
};

export default RoomProducts;
