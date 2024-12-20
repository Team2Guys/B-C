'use client';

import { useQuery } from '@tanstack/react-query';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts } from 'config/fetch';
import { usePathname } from 'next/navigation';
import { IProduct } from 'types/types';

const CommercialPage = () => {
  const path = usePathname();
  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filtereProdcts =["Hotels & Restaurants"]

  console.log(path,"pathpath")
  const filteredProduct = products?.find(
    (prod) => filtereProdcts.includes(prod.title)
  );
  if (prodLoading) {
    return <PageSkelton />;
  }
  return (
    <>
      <ProductDetailPage
        title={`${filteredProduct?.title}`}
        allprod={products}
      />
    </>
  );
};

export default CommercialPage;
