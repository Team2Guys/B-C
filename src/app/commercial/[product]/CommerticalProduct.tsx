'use client';
import NotFound from 'app/not-found';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import CommercialByRoom from 'components/RoomProducts/commercial-by-room';
import SubCategoryPageSkeleton from 'components/Skeleton/SubCategoryPageSkeleton';
import { filterProd } from 'config/fetch';
import { BlindSchemaMap } from 'data/blinds-schema';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, urls } from 'data/urls';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';

const CommercialProduct = ({
  product,
  products,
  subCategories,
  
}: {
  product: string;
  products: IProduct[];
  subCategories: ICategory[];
}) => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [loading, setloading] = useState(false);
  const [filteredProduct, setfilteredProduct] = useState<
    IProduct | undefined
  >();
  const [filteredSubCategory, setfilteredSubCategory] = useState<ICategory | undefined >();
  const path = usePathname();
  const CategoryFiilterHandler = () => {
    try {
      setloading(true);
      const filteredSubCategory: ICategory | undefined = subCategories?.find((sub) =>generateSlug(sub.title) === ChangedProductUrl(product as string) && sub.category?.title?.toLowerCase()?.trim() =="commercial",
      );
      const filteredProduct = filterProd(products, product, [12]);
      

      setfilteredProduct(filteredProduct);
      setfilteredSubCategory(filteredSubCategory);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {

    CategoryFiilterHandler();
  }, [product]);

  useEffect(() => {
    if (path) {
      const matchingUrl = urls.find((url) => url.errorUrl === path);
      if (matchingUrl) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [path]);

  if (isNotFound || (!filteredProduct && !filteredSubCategory)) {
    return <NotFound />;
  }

    const productTitle = filteredProduct?.title || filteredSubCategory?.title || '';
    const matchedSchema = BlindSchemaMap[productTitle];
  return (
    <>
      {loading ? (
        <SubCategoryPageSkeleton />
      ) : filteredSubCategory ? (
        <>
          {matchedSchema && (
        <Script type="application/ld+json" id="blinds-json-ld">
          {JSON.stringify(matchedSchema)}
        </Script>
      )}
          <CommercialByRoom
            title={`${filteredSubCategory.title}`}
            description={`${filteredSubCategory.description}`}
            category={`${filteredSubCategory.category.title}`}
            relatedProducts={filteredSubCategory?.products || []}
            filteredSubCategory={filteredSubCategory}
            products={products}
          />
        </>
      ) : (
        <ProductDetailPage
          title={`${filteredProduct?.title}`}
          allprod={products}
          filterProduct={filteredProduct}
        />
      )}
    </>
  );
};

export default CommercialProduct;
