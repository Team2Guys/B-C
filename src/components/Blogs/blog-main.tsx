'use client';
import Container from 'components/Res-usable/Container/Container';
import React, { useEffect, useRef, useState } from 'react';
import BlogList from './blog-list';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { BlogInfo } from 'types/interfaces';
import BlogSkeleton from 'components/Skeleton/blog-skeleton';

const BlogMain = ({ blogs }: { blogs: BlogInfo[] }) => {
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogInfo[]>([]);
  const popularPostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setFilteredBlogs(blogs);
      setIsLoading(false);
    }, 500);
  }, [blogs]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  useEffect(() => {
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchTerm, blogs]);

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
      {isLoading ? (
        <BlogSkeleton />
      ) : (
        <>
          <Container className="flex px-2 max-sm:flex-wrap max-sm:flex-col-reverse">
            {filteredBlogs.length === 0 ? (
              <p className="w-3/4 mt-5">No Blog Found</p>
            ) : (
              <div ref={popularPostRef} className="w-full sm:w-3/4">
                <BlogList blogs={currentBlogs} />
              </div>
            )}

            <div className="w-full sm:w-1/4 px-2 mt-4 sm:mt-14 flex flex-col gap-4 items-center">
              <form
                className="relative w-full rounded-xl px-2 sm:px-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="search"
                  className="peer cursor-pointer h-9 w-full rounded-xl border-secondary border sm:border-transparent text-black bg-transparent text-13 sm:text-16 pl-6 sm:pl-10 outline-none focus:cursor-text placeholder:text-black"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-7 sm:h-10 w-7 sm:w-10 border-transparent stroke-black px-2 sm:px-3 peer-focus:border-secondary peer-focus:stroke-secondary"
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

              <div className="mt-4 w-full bg-[#FFFFFF30] p-2">
                {subcategories.map((subcategory) => (
                  <Link
                    href={`/blog/${subcategory.toLowerCase()}`}
                    key={subcategory}
                    className={`cursor-pointer block py-2 px-4 text-12 sm:text-16 rounded-md mb-2 ${
                      pathName === `/blog/${subcategory.toLowerCase()}`
                        ? 'bg-[#9FAC9B] text-white'
                        : 'bg-transparent'
                    }`}
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
          {totalBlogs > blogsPerPage && (
            <div className="flex justify-center mt-8 space-x-2">
              {/* Previous Button */}
              <button
                className={`px-3 py-2 rounded-md border ${
                  currentPage === 1
                    ? 'border-gray-300 text-gray-400 hidden'
                    : 'text-black hover:bg-secondary hover:text-white'
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
                      : 'bg-transparent text-black hover:bg-secondary hover:text-white'
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </div>
              ))}

              {/* Next Button */}
              <button
                className={`px-3 py-2 rounded-md border ${
                  currentPage === totalPages
                    ? 'border-gray-300 text-gray-400 hidden'
                    : 'text-black bg-transparent hover:bg-secondary hover:text-white'
                }`}
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <FaArrowRightLong />
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BlogMain;
