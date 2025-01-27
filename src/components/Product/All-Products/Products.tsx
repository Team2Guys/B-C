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
import { customSortingOrder } from 'data/urls';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IProduct } from 'types/types';

interface relativeProps {
  products: IProduct[];
  categoryType: string;
}

const AllProducts: React.FC<relativeProps> = ({ products, categoryType }) => {
  const [activeCategory, setActiveCategory] = useState<string>('By Style');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(8);
  const categories = ['By Style', 'By Room', 'dynamic'];
  const productContainerRef = useRef<HTMLDivElement | null>(null);
  const [content, setContent] = useState({ title: '', subtitle: '' });

  useEffect(() => {
    const updateProductsPerPage = () => {
      const width = window.innerWidth;
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
          (item) => item.productName === generateSlug(product.title)
        )
      ),
    [products, byRoomItems]
  );

  const byStyleItems = [...extendedByStyle, ...megaMenubyStyle].flat();

  const ByStyleItems = useMemo(
    () =>
      products.filter((product) =>
        byStyleItems.some(
          (item) => item.productName === generateSlug(product.title)
        )
      ),
    [products, byStyleItems]
  );

  const byDynamic = [...extendedDynamic, ...megaMenuDynamic].flat();
  
  const ByDynamicItems = useMemo(() => products.filter((product) =>
    byDynamic.some(
      (item) => item.productName === generateSlug(product.title)
    )
  ),
    [products, byDynamic]
  );

  const sortProducts = (products: IProduct[], sortingOrder: string[]) => {
    const sorted = products.filter((product) =>
      sortingOrder.includes(generateSlug(product.title))
    );
    const unsorted = products.filter(
      (product) => !sortingOrder.includes(generateSlug(product.title))
    );

    return [
      ...sorted.sort((a, b) => {
        const indexA = sortingOrder.indexOf(generateSlug(a.title));
        const indexB = sortingOrder.indexOf(generateSlug(b.title));
        return indexA - indexB;
      }),
      ...unsorted,
    ];
  };

  const filteredProducts: IProduct[] = useMemo(() => {
    switch (activeCategory) {
      case 'By Room': {
        const filtered = ByRoomItems;
        return sortProducts(filtered, customSortingOrder);
      }
      case 'By Style': {
        const filtered = ByStyleItems;
        return sortProducts(filtered, customSortingOrder);
      }
      case 'dynamic': {
        const filtered = ByDynamicItems;
        return sortProducts(filtered, customSortingOrder);
      }
      default:
        return products;
    }
  }, [
    activeCategory,
    products,
    ByRoomItems,
    ByStyleItems,
    ByDynamicItems,
  ]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / productsPerPage);
  }, [filteredProducts, productsPerPage]);

  const startIndex = useMemo(() => {
    return Math.max(0, (currentPage - 1) * productsPerPage);
  }, [currentPage, productsPerPage]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, startIndex, productsPerPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (productContainerRef.current) {
        productContainerRef.current.scrollIntoView({ behavior: 'smooth' });

        const offset = 200;
        const top =
          productContainerRef.current.getBoundingClientRect().top +
          window.scrollY -
          offset;

        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const getVisiblePages = (currentPage: number, totalPages: number) => {
    const visiblePages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      visiblePages.push(1);

      if (currentPage > 3) {
        visiblePages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        visiblePages.push(i);
      }

      if (currentPage < totalPages - 2) {
        visiblePages.push('...');
      }

      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);
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
        <div className="flex lg:gap-10 gap-1 md:gap-3 justify-center whitespace-nowrap overflow-x-auto ">
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
                    ? 'By Material'
                    : parent === 'curtains'
                      ? 'By Fabric Type'
                      : parent === 'shutters'
                        ? 'By Colour'
                        : 'By Design'
                  : category === 'By Style'
                    ? parent === 'blinds'
                      ? 'By Type'
                      : 'By Style'
                    : category}
              </Button>
            );
          })}
        </div>
        <hr className="h-2 mt-5 md:mt-8 border-black" />
        <div className="mt-10 text-center space-y-3">
          <h3 className="text-[#231F20] text-20 md:text-24 lg:text-[36px] font-semibold uppercase">
            {content.title}
          </h3>
          <p
            className="text-14 md:text-15 font-normal md:w-[65%] mx-auto"
            dangerouslySetInnerHTML={{ __html: content.subtitle }}
          ></p>
        </div>

        <div ref={productContainerRef} className="my-2" />
        <div className="" id="productContainer">
          <ProductCard products={visibleProducts} isSizeSmall={true} />
        </div>

        {totalPages > 1 && (
          <div className="flex md:justify-center items-center mt-10 lg:space-x-3 overflow-hidden justify-center">
            <Button
              variant={'secondary'}
              className=" w-14 sm:w-[55px] h-8 sm:h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowLeft size={16} />
            </Button>

            {visiblePages.map((page, index) =>
              typeof page === 'string' ? (
                <span
                  key={`dots-${index}`}
                  className="w-10 sm:w-[55px] h-8 sm:h-[55px] flex items-center justify-center text-16"
                >
                  ...
                </span>
              ) : (
                <Button
                  key={page}
                  className={`w-10 sm:w-[55px] h-8 sm:h-[55px] text-16 ${currentPage === page
                    ? 'bg-secondary text-white'
                    : 'bg-transparent text-black'
                    }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ),
            )}

            <Button
              variant={'secondary'}
              className="w-14 sm:w-[55px] h-8 sm:h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
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
