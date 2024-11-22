'use client';
import React, { useState, useRef } from 'react';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Blog/blogbackground.png';
import OurBlog from 'components/Blogs/our-blog';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import { FaArrowRightLong } from 'react-icons/fa6';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { useQuery } from '@tanstack/react-query';
import { BlogInfo } from 'types/interfaces';
import { fetchBlogs } from 'config/fetch';
import { usePathname } from 'next/navigation';

const Blog: React.FC = () => {
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const popularPostRef = useRef<HTMLDivElement>(null);

  const { data: blogs = [], isLoading, error } = useQuery<BlogInfo[]>({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  if (error) {
    return <PageSkelton />;
  }
  if (isLoading) {
    return <PageSkelton />;
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm) ||
    blog.content.toLowerCase().includes(searchTerm)
  );

  const blogsPerPage = 9;
  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    popularPostRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      popularPostRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      popularPostRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Header />
      <TopHero title="Blogs" image={bgBreadcrum} pagename={pathName} />


      <div className=' lg:max-w-[90%] 2xl:max-w-screen-2xl mx-auto px-2  overflow-hidden mt-10'>
      <form className="relative w-max border border-secondary rounded-xl" onSubmit={(e)=>e.preventDefault()}>
        <input type="search" className="peer cursor-pointer relative z-10 h-9 w-9 rounded-xl  bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:pl-12 focus:pr-4"
         placeholder='Search Here...'
         value={searchTerm}
         onChange={handleSearch}
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-12 w-12  border-transparent stroke-gray-500 px-3 peer-focus:border-secondary peer-focus:stroke-secondary" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>
      </div>

      <div ref={popularPostRef}>
        <OurBlog Blogdata={currentBlogs || []} />
      </div>

      {totalBlogs > blogsPerPage && (
        <div className="flex justify-center mt-8 space-x-2 ">
          <button
            className={`px-3 py-2 rounded-full ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <FaArrowRightLong style={{ transform: 'rotate(180deg)' }} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`px-6 py-4 rounded-md ${currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-transparent'}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </div>
          ))}

          <button
            className={`px-3 py-2 rounded-full ${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <FaArrowRightLong />
          </button>
        </div>
      )}

      <div className="mt-28" />
      <Footer />
    </>
  );
};

export default Blog;
