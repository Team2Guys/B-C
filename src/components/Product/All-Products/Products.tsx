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

      const offset = 200; // Adjust this value as needed
      const top =
        productContainerRef.current.getBoundingClientRect().top +
        window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const getVisiblePages = (currentPage: number, totalPages: number) => {
    const visiblePages: (number | string)[] = [];
  
    if (totalPages <= 4) {
      // Show all pages if total pages are 4 or fewer
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      visiblePages.push(1); // Always show the first page
  
      if (currentPage > 3) {
        visiblePages.push('...'); // Add dots if skipping pages
      }
  
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
  
      for (let i = start; i <= end; i++) {
        visiblePages.push(i);
      }
  
      if (currentPage < totalPages - 2) {
        visiblePages.push('...'); // Add dots if skipping pages
      }
  
      visiblePages.push(totalPages); // Always show the last page
    }
  
    return visiblePages;
  };
  

  const visiblePages = getVisiblePages(currentPage, totalPages);

  useEffect(() => {
    const mainCategory = categorydata.find(
      (category) =>
        category.category.toLowerCase() === categoryType.toLowerCase(),
    );

    if (mainCategory) {
      const categoryContent = mainCategory.types.find(
        (type) => type.type.toLowerCase() === activeCategory.toLowerCase(),
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
        <div className="flex lg:gap-10 gap-1 md:gap-3 md:justify-center whitespace-nowrap overflow-x-auto ">
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
          <p className="text-14 md:text-15 font-normal md:w-[65%] mx-auto" dangerouslySetInnerHTML={{ __html: content.subtitle}}></p>
        </div>
        {/* categorydata */}
        <div ref={productContainerRef} className="my-2" />
        <div className="" id="productContainer">
          <ProductCard products={visibleProducts} isSizeSmall={true} />
        </div>

        {totalPages > 1 && (
           <div className="flex md:justify-center items-center mt-10 lg:space-x-3 overflow-hidden">
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
                 className={`w-10 sm:w-[55px] h-8 sm:h-[55px] text-16 ${
                   currentPage === page
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
