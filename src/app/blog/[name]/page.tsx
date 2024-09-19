
"use client"
import TopHero from 'components/ui/top-hero';
import React, { useState } from 'react';
import bgBreadcrum from '../../../../public/assets/images/Blog/blogbackground.png';
import { useParams } from 'next/navigation';
import { blogData } from 'data/data';
import OurBlog from 'components/Blogs/our-blog';
import { FaArrowRightLong } from 'react-icons/fa6';

const BlogbyCategory = () => {
    const params = useParams()
    const {name}=params;
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;
    const totalPages = Math.ceil(blogData.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () =>
      currentPage < totalPages && setCurrentPage(currentPage + 1);
  return (
    <>
    <TopHero title={name} image={bgBreadcrum} />
    <OurBlog  Blogdata={currentBlogs} />
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`px-6 py-4 rounded-md cursor-pointer ${currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-transparent'}`}
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
    </>
  );
};

export default BlogbyCategory;
