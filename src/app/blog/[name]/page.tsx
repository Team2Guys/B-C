'use client';

import TopHero from 'components/ui/top-hero';
import React, { Fragment, useRef, useState } from 'react';
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

const BlogbyCategory: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginationBlogsRef = useRef<HTMLDivElement>(null);

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

  let filteredBlogs: BlogInfo[];
  if (name === 'latest-articles') {
    filteredBlogs = blogs
      .slice()
      .sort((a, b) => {
        const aDate = a.updatedAt || a.createdAt;
        const bDate = b.updatedAt || b.createdAt;
        return new Date(bDate).getTime() - new Date(aDate).getTime();
      })
      .slice(0, 3);
  } else if (name === 'popular-post') {
    filteredBlogs = blogs;
  } else {
    filteredBlogs = blogs.filter(
      (blog) => generateSlug(blog.category) === name,
    );
  }

  const blogsPerPage = 6;
  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginationBlogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      paginationBlogsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      paginationBlogsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Fragment>
      <div ref={paginationBlogsRef}>
        <TopHero title={name} image={bgBreadcrum} />
        <OurBlog Blogdata={currentBlogs} />
      </div>
      {totalBlogs > blogsPerPage && (
        <div className="flex justify-center mt-8 space-x-2">
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
    </Fragment>
  );
};

export default BlogbyCategory;
