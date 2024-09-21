'use client';
import TopHero from 'components/ui/top-hero';
import React, { useState } from 'react';
import bgBreadcrum from '../../../../public/assets/images/Breadcrum/blog.jpg';
import { useParams } from 'next/navigation';
import { blogData, generateSlug } from 'data/data';
import OurBlog from 'components/Blogs/our-blog';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import { BlogInfo } from 'types/interfaces';
import { fetchBlogs } from 'config/fetch';
import PageSkelton from 'components/Skeleton/PageSkelton';

const BlogbyCategory = () => {
  const { name } = useParams();
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

  const filteredBlogs = blogs.filter(
    (blog) => generateSlug(blog.category) === name,
  );

  const blogsPerPage = 9;
  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <>
      <TopHero title={name} image={bgBreadcrum} />
      <OurBlog id={'#top'} Blogdata={currentBlogs} />
      <div className="flex justify-center mt-8 space-x-2">
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
    </>
  );
};

export default BlogbyCategory;
