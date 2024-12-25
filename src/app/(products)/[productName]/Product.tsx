'use client';
import React, { useEffect, useState } from 'react';
import Info from 'components/Product/Info';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { categoriesContent, generateSlug, HiddenProducts_list } from 'data/data';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import { usePathname, useRouter } from 'next/navigation';
import AllProducts from 'components/Product/All-Products/Products';
import NotFound from 'app/not-found';
import { ICategory, IProduct } from 'types/types';
import VideoBanner from 'components/video-banner/video-banner';
import { blogPostUrl } from 'data/urls';
import { links } from 'data/header_links';

const Product = ({productName , products , categories , subCategories}: {productName: string, products: IProduct[] , categories: ICategory[] , subCategories: ICategory[]}) => {
  const router = useRouter();
  const matchingLink = links.find((link) =>
    productName?.includes(link.href.replace(/^\//, '')),
  );
  const [selectedPage, setSelectedPage] = useState<{
    heading: string;
    paragraph: string;
    subheading1: string;
    subheading2: string;
    subheadingContent: {
      content: string;
    }[];
  } | null>(null);
  const pathname = usePathname();
  const title = matchingLink ? matchingLink.label : productName;
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isNotFound, setIsNotFound] = useState(false);

  const productNameString = Array.isArray(productName)
    ? productName[0]
    : productName;

useEffect(() => {
  const matchingUrl = blogPostUrl.find((item) => item.url === pathname);
  if (matchingUrl) {
    router.push(matchingUrl.redirectUrl);
  }
},[pathname]);

  
  useEffect(() => {
    if (products && categories && productNameString) {
      const matchingLink = links.find((link) =>
        productNameString.includes(link.href.replace(/^\//, '')),
      );
  
      const selectedProductName = matchingLink ? matchingLink.label : '';
  
      const filterCat = categories?.find(
        (cat) => cat.title.toLowerCase() === selectedProductName.toLowerCase(),
      );
  
      if (filterCat) {
        const filteredProducts =
          products.filter((product) => product.CategoryId === filterCat.id) ||
          [];
  
        const filteredSubCategories =
          subCategories?.filter(
            (subCat) => subCat.CategoryId === filterCat.id,
          ) || [];
  
        const filteredItems = [...filteredProducts, ...filteredSubCategories];
        setFilteredProducts(filteredItems);
        if (filteredItems.length > 0) {
          setIsNotFound(false);
          return;
        }
      }
      setIsNotFound(true);
    }
  }, [products, categories, subCategories, productNameString]);
  
  useEffect(() => {
    const selectedPage = categoriesContent.find(
      (page) => page.slug === generateSlug(pathname),
    );
    if (selectedPage) {
      setSelectedPage(selectedPage.content);
    }
  }, [pathname]);

   if (isNotFound ) {
      return <NotFound />;
    }

  return (
    <>
      <VideoBanner
        title={`${title}`}
        selectedPage={selectedPage}
        showButton={true}
      />
      <Info selectedPage={selectedPage} />
      <AllProducts products={filteredProducts.filter((prod)=>!HiddenProducts_list.includes(prod.title))} categoryType={`${title}`} />
      <Container className="mt-20 mb-20">
        <RelatedProducts products={filteredProducts || []} limit={4} />
      </Container>
      <BookNowBanner className="mt-20" />
      <VideoAutomation className=" mt-20" />
      <Support />
    </>
  );
};

export default Product;
