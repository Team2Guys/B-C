'use client';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import ProductCard from 'components/ui/Product-Card';
import { categorydata } from 'data/data';
import {
  extendedByRoom,
  extendedByStyle,
  extendedDynamic,
  generateSlug,
  megaMenubyRoom,
  megaMenubyStyle,
  megaMenuDynamic,
} from 'data/data';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IProduct } from 'types/types';

interface relativeProps {
  products: IProduct[];
  categoryType: string;
}

const AllProducts: React.FC<relativeProps> = ({ products, categoryType }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(8);
  const categories = ['All', 'By Style', 'By Room', 'dynamic'];
  const productContainerRef = useRef<HTMLDivElement | null>(null);
  const [content, setContent] = useState({ title: '', subtitle: '' });
  useEffect(() => {
    const width = window.innerWidth;
    const updateProductsPerPage = () => {
      if (width < 768) {
        setProductsPerPage(4);
      } else if (width <= 1024) {
        setProductsPerPage(6);
      } else {
        setProductsPerPage(8);
      }
    };

    updateProductsPerPage();

    window.addEventListener('resize', updateProductsPerPage);

    return () => {
      window.removeEventListener('resize', updateProductsPerPage);
    };
  }, []);
  const byRoomItems = [...extendedByRoom, ...megaMenubyRoom].flat();
  const ByRoomItems = useMemo(
    () =>
      products.filter((product) =>
        byRoomItems.some(
          (item) => item.productName === generateSlug(product.title),
        ),
      ),
    [products, byRoomItems],
  );

  const byStyleItems = [...extendedByStyle, ...megaMenubyStyle].flat();
  const ByStyleItems = useMemo(
    () =>
      products.filter((product) =>
        byStyleItems.some(
          (item) => item.productName === generateSlug(product.title),
        ),
      ),
    [products, byStyleItems],
  );

  const byDynamic = [...extendedDynamic, ...megaMenuDynamic].flat();
  const ByDynamicItems = useMemo(
    () =>
      products.filter((product) =>
        byDynamic.some(
          (item) => item.productName === generateSlug(product.title),
        ),
      ),
    [products, byDynamic],
  );

  const filteredProducts: IProduct[] = useMemo(() => {
    switch (activeCategory) {
      case 'All':
        return products;
      case 'By Room':
        return ByRoomItems;
      case 'By Style':
        return ByStyleItems;
      case 'dynamic':
        return ByDynamicItems;
      default:
        return products;
    }
  }, [
    activeCategory,
    ByRoomItems,
    ByStyleItems,
    ByStyleItems,
    ByDynamicItems,
    products,
  ]);
  // const finalFilteredProducts = activeCategory === 'By Type' ? ByTypeItems.reverse() : filteredProducts;
  console.log('================================================');
  console.log(filteredProducts);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (productContainerRef.current) {
      productContainerRef.current.scrollIntoView({ behavior: 'smooth' });

      // Calculate the position to scroll to (subtracting 100 pixels)
      const offset = 200; // Adjust this value as needed
      const top =
        productContainerRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const mainCategory = categorydata.find(
      (category) => category.category.toLowerCase() === categoryType.toLowerCase()
    );

    if (mainCategory) {
      const categoryContent = mainCategory.types.find(
        (type) => type.type.toLowerCase() === activeCategory.toLowerCase()
      );

      if (categoryContent) {
        setContent({
          title: categoryContent.title,
          subtitle: categoryContent.subtitle,
        });
      } else {
        setContent({ title: '', subtitle: '' });
      }
    } else {
      setContent({ title: '', subtitle: '' });
    }
  }, [activeCategory, categoryType]);



  return (
    <Container className="mt-10 md:mt-16">
      <div className="mt-10">
        <div className="flex lg:gap-10 gap-3 justify-center whitespace-nowrap overflow-x-auto ">
          {categories.map((category) => {
            const parent = generateSlug(categoryType);
            return (
              <Button
                key={category}
                className={`text-15 font-bold
                ${activeCategory === category ? 'bg-secondary text-white px-2 md:px-8 py-2 md:py-7' : 'text-black bg-transparent px-2 md:px-8 py-2 md:py-7'}`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category === 'dynamic'
                  ? parent === 'blinds'
                    ? 'By Function'
                    : parent === 'curtains'
                      ? 'By Fabrics'
                      : parent === 'shutters'
                        ? 'By Colour'
                        : 'By Design'
                  : category}
              </Button>
            );
          })}
        </div>
        <hr className="h-2 mt-5 md:mt-8 border-black" />
        <div className="mt-10 text-center space-y-3">
          <h1 className="text-[#231F20] text-20 md:text-24 lg:text-[36px] font-semibold uppercase">
            {content.title}
          </h1>
          <p className="text-14 md:text-15 font-normal md:w-[65%] mx-auto">
            {content.subtitle}
          </p>
        </div>
            {/* categorydata */}
        <div ref={productContainerRef} className="my-2" />
        <div className="" id="productContainer">
          <ProductCard products={visibleProducts} isSizeSmall={true} />
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 lg:space-x-3">
            <Button
              variant={'secondary'}
              className="w-[55px] h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowLeft size={16} />
            </Button>

            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                className={`w-[55px] h-[55px] text-16 ${currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-transparent text-black'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant={'secondary'}
              className="w-[55px] h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllProducts;
