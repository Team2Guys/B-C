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

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const popularPostRef = useRef<HTMLDivElement>(null);

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

  const blogsPerPage = 9;
  const totalBlogs = blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const latestBlogs = blogs
    ? blogs
        .slice()
        .sort((a, b) => {
          const aDate = a.updatedAt || a.createdAt;
          const bDate = b.updatedAt || b.createdAt;
          return new Date(bDate).getTime() - new Date(aDate).getTime();
        })
        .slice(0, 4)
    : [];

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
      <TopHero title="Blogs" image={bgBreadcrum} />
      <div ref={popularPostRef}>
        <OurBlog Blogdata={currentBlogs || []} />
      </div>
      {totalBlogs > blogsPerPage ? (
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
      ) : null}
      <div className="mt-28" />
      <Footer />
    </>
  );
};

export default Blog;
