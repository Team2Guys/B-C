import React, { useEffect, useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import FeatureCard from 'components/ui/feature-card';
import { featureProducts, generateSlug } from 'data/data';
import axios from 'axios';
import PRODUCTS_TYPES from 'types/interfaces';

const FeatureProduct: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<PRODUCTS_TYPES[]>([]);
  const [category, setCategories] = useState<any[]>([]);
  const [productDetail, setProductDetail] = useState<PRODUCTS_TYPES | null>(
    null,
  );

  console.log(category, 'categorycategorycategory');
  console.log(products, 'productsproductsproductsproducts');

  const productHandler = async () => {
    try {
      setProductsLoading(true);
      const categoryRequest = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/categories/get-all-subCategories`,
      );
      const productRequest = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllproducts`,
      );
      const [categoryResponse, productResponse] = await Promise.all([
        categoryRequest,
        productRequest,
      ]);

      setProducts(productResponse.data.products);
      setCategories(categoryResponse.data);

      const parsedProduct = categoryResponse.data._id;
      if (parsedProduct && productResponse.data.products.length > 0) {
        const foundProduct = productResponse.data.products.find(
          (item: any) => generateSlug(item.name) === parsedProduct,
        );

        if (foundProduct) {
          setProductDetail(foundProduct);
        }
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setProductsLoading(false);
    }
  };
  useEffect(() => {
    productHandler();
  }, []);

  const filteredProducts =
    activeCategory === 'All'
      ? featureProducts
      : featureProducts.filter(
          (product) => product.category === activeCategory,
        );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <Container className="mt-20">
      <div className="text-center">
        <h1 className="text-26 md:text-32 font-bold">Our Featured Products</h1>
        <p className="text-16 font-normal text-primary">Expert In Designing</p>
        <hr className="border-2 border-primary w-28 mx-auto" />
      </div>

      <div className="mt-10">
        <div className="flex lg:gap-10 gap-3 justify-center whitespace-nowrap overflow-x-auto">
          {category.map((category) => (
            <Button
              key={category}
              variant={'feature'}
              className={`w-[87.62px] h-[52.03px]
                ${activeCategory === category ? 'bg-secondary text-white' : 'text-black'}
              `}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(6);
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-5">
          <FeatureCard products={visibleProducts} />
        </div>
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <Button
              className="w-[163px] h-[55px] "
              onClick={handleViewMore}
              variant={'secondary'}
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default FeatureProduct;
