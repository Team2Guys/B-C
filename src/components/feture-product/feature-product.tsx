import React, { useEffect, useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import FeatureCard from 'components/ui/feature-card';
import axios from 'axios';
import { Allproduct } from 'types/interfaces';
import { generateSlug } from 'data/data';
import { useRouter } from 'next/navigation';

interface Category {
  id: number;
  title: string;
  posterImage: {
    imageUrl: string;
    public_id: string;
  };
  CategoryId: number;
}

const FeatureProduct: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null); // Initial category set to null
  const [visibleCount, setVisibleCount] = useState<number>(9); // Initial count of visible products
  const [Allproducts, setProducts] = useState<Allproduct[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Allproduct | null>(
    null,
  );
  const [productDetail, setProductDetail] = useState<Allproduct | null>(null);
  const router = useRouter();

  console.log(Allproducts, 'Allproducts');
  console.log(categories, 'categories');

  const productHandler = async () => {
    setProductsLoading(true);
    try {
      const categoryRequest = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/get-all-subCategories`,
      );
      const productRequest = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/GetAllProducts`,
      );

      const [categoryResponse, productResponse] = await Promise.all([
        categoryRequest,
        productRequest,
      ]);

      setProducts(productResponse.data || []);
      setCategories(categoryResponse.data || []);

      // Fetch product detail if needed
      if (selectedProduct) {
        const detailRequest = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${selectedProduct.id}`,
        );
        setProductDetail(detailRequest.data || null);
      }

      // Set the default active category to "All" or the first category
      setActiveCategory(null); // You can change this to the id of the first category if needed
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setProductsLoading(false);
    }
  };
  const handleProductClick = (product: Allproduct) => {
    const slug = generateSlug(product.title);
    router.push(`/product/${slug}`);
  };

  useEffect(() => {
    productHandler();
  }, []);

  // Filter products based on the active category
  const filteredProducts =
    activeCategory === null
      ? Allproducts
      : Allproducts.filter((product) => product.CategoryId === activeCategory);

  // Products to display, sliced by visible count
  const visibleProducts = (filteredProducts || []).slice(0, visibleCount);

  // Handle "View More" button click
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Show 6 more products on each click
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
          <Button
            variant={'feature'}
            className={` h-[52.03px] ${
              activeCategory === null ? 'bg-secondary text-white' : 'text-black'
            }`}
            onClick={() => {
              setActiveCategory(null);
              setVisibleCount(6);
            }}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={'feature'}
              className={` h-[52.03px] ${
                activeCategory === category.CategoryId
                  ? 'bg-secondary text-white'
                  : 'text-black'
              }`}
              onClick={() => {
                setActiveCategory(category.CategoryId);
                setVisibleCount(6);
              }}
            >
              {category.title}
            </Button>
          ))}
        </div>

        <div className="mt-5">
          <FeatureCard
            products={visibleProducts}
            onProductClick={handleProductClick}
          />
        </div>

        {/* View More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <Button
              className="w-[163px] h-[55px]"
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
