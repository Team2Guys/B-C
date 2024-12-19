'use client';

import { useQuery } from '@tanstack/react-query';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts } from 'config/fetch';
import { generateSlug } from 'data/data';
import { usePathname } from 'next/navigation';
import { IProduct } from 'types/types';

const CommercialPage = () => {
  const path = usePathname();
  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  const filteredProduct = products?.find(
    (prod) => generateSlug(prod.title) === generateSlug(path),
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
