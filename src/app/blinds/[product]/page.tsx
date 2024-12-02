'use client';
import { useQuery } from '@tanstack/react-query';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import Container from 'components/Res-usable/Container/Container';
import Support from 'components/Res-usable/support/support';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import VideoAutomation from 'components/video-Automation/video-Automation';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, urls } from 'data/urls';
import { useParams, usePathname } from 'next/navigation';
import { ICategory, ISUBCATEGORY, IProduct } from 'types/types';

const CommercialPage = () => {
  const { product } = useParams();
  const path = usePathname()

  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const Cateories = [2]


  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });



  const filteredSubCategory = subCategories?.find((sub) => {

    let title = ChangedProductUrl(product as string)
   let title_flag = title ===generateSlug(sub.title)
    return title_flag && (Cateories.some((item:number)=>item ==sub.CategoryId))
  });

  const filteredProduct = products?.find((prod) => generateSlug(prod.title) === (ChangedProductUrl(product as string)),
  );

  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }

console.log(filteredSubCategory,"descriptiondescription")
  return (
    <>
      {filteredSubCategory ? (
        <>
          <RoomProducts
            title={`${filteredSubCategory.title}`}
            description={`${filteredSubCategory.description}`}
            category={`${filteredSubCategory.category.title}`}
            relatedProducts={filteredSubCategory?.products || []}
          />
        </>
      ) : (
        <ProductDetailPage title={`${filteredProduct?.title}`} />
      )}
            {/* {filteredSubCategory  ? "": 
            <>
            <VideoAutomation />
            <Container>
              <Support/>
            </Container>
            </>
            } */}

    </>
  );
};

export default CommercialPage;
