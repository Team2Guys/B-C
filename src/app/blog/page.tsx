'use client';
import React, { useState } from 'react';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/d.jpg';
import OurBlog from 'components/Blogs/our-blog';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import OurClient from 'components/Our-Client/OurClient';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { useQuery } from '@tanstack/react-query';
import { BlogInfo } from 'types/interfaces';
import { fetchBlogs } from 'config/fetch';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

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

  const blogsPerPage = 6;
  const totalBlogs = blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const latestBlogs = blogs && blogs.slice(0, 4);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <>
      <Header />
      <TopHero title="Blogs" image={bgBreadcrum} />
      <OurBlog
        title="Latest Articles"
        Blogdata={latestBlogs || []}
        isFirstItemLarge
        buttonView
      />
      <OurBlog
        id={'#top'}
        title="Popular Post"
        Blogdata={currentBlogs || []}
        buttonView
      />
      <div className="flex justify-center mt-8 space-x-2">
        <button
          className={`px-3 py-2 rounded-full ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaArrowRightLong style={{ transform: 'rotate(180deg)' }} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            href={'#top'}
            key={index}
            className={`px-6 py-4 rounded-md ${currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-transparent'}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Link>
        ))}

        <button
          className={`px-3 py-2 rounded-full ${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <FaArrowRightLong />
        </button>
      </div>

      <OurClient />
      <Footer />
    </>
  );
};

export default Blog;
