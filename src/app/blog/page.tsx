'use client';
import React, { useState, useRef } from 'react';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Blog/blogbackground.png';
// import OurBlog from 'components/Blogs/our-blog';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import { FaArrowRightLong } from 'react-icons/fa6';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { useQuery } from '@tanstack/react-query';
import { BlogInfo } from 'types/interfaces';
import { fetchBlogs } from 'config/fetch';
import { usePathname } from 'next/navigation';
import Container from 'components/Res-usable/Container/Container';
import BlogList from 'components/Blogs/blog-list';

const Blog: React.FC = () => {
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const popularPostRef = useRef<HTMLDivElement>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState('Blinds');

  const {
    data: blogs = [],
    isLoading,
    error,
  } = useQuery<BlogInfo[]>({
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

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.content.toLowerCase().includes(searchTerm),
  );

  const blogsPerPage = 5;
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

  const subcategories = ['Blinds', 'Curtains', 'Shutters'];

  return (
    <>
      <Header />
      <TopHero title="Blogs" image={bgBreadcrum} pagename={pathName} />
      <Container className="flex px-2">
        <div ref={popularPostRef} className="w-3/4">
          {/* <OurBlog Blogdata={currentBlogs || []} /> */}
          <BlogList blogs={currentBlogs} />
        </div>
        <div className="w-1/4 px-2   mt-14 flex flex-col gap-4 items-center">
          <form
            className="relative w-max border border-secondary rounded-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              className="peer cursor-pointer  h-9 sm:w-full rounded-xl  bg-transparent pl-12 outline-none   focus:cursor-text"
              placeholder="Search Here..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-12 w-12  border-transparent stroke-gray-500 px-3 peer-focus:border-secondary peer-focus:stroke-secondary"
              fill="none"
              viewBox="0 0 22 22"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>

          <div className="mt-4 w-full bg-[#FFFFFF26] p-2">
            {subcategories.map((subcategory) => (
              <div
                key={subcategory}
                className={`cursor-pointer py-2 px-4 rounded-md mb-2 ${
                  selectedSubcategory === subcategory
                    ? 'bg-[#9FAC9B] text-white'
                    : 'bg-transparent'
                }`}
                onClick={() => setSelectedSubcategory(subcategory)}
              >
                {subcategory}
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* {totalBlogs > blogsPerPage && (
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
      )} */}

      {totalBlogs > blogsPerPage && (
        <div className="flex justify-center mt-8 space-x-2">
          {/* Previous Button */}
          <button
            className={`px-3 py-2 rounded-full border ${
              currentPage === 1
                ? 'border-gray-300 text-gray-400 hidden'
                : ' text-black hover:bg-secondary hover:text-white'
            }`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <FaArrowRightLong style={{ transform: 'rotate(180deg)' }} />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                currentPage === index + 1
                  ? 'bg-secondary text-white'
                  : 'bg-gray-100 text-black hover:bg-secondary hover:text-white'
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </div>
          ))}

          {/* Next Button */}
          <button
            className={`px-3 py-2 rounded-full border ${
              currentPage === totalPages
                ? 'border-gray-300 text-gray-400 hidden'
                : ' text-black hover:bg-secondary hover:text-white'
            }`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <FaArrowRightLong />
          </button>
        </div>
      )}

      <div className="mt-28" />
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
