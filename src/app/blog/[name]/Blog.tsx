'use client';
import BlogMain from 'components/Blogs/blog-main';
import OurBlog from 'components/Blogs/our-blog';
import Container from 'components/Res-usable/Container/Container';
import Comments from 'components/comments/Comments';
import TopHero from 'components/ui/top-hero';
import { formatDateMonth } from 'config';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BlogInfo } from 'types/interfaces';
import bgBreadcrum from '../../../../public/assets/images/Blog/blogbackground.png';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import { ICategory } from 'types/types';
import NotFound from 'app/not-found';
import HTMLReactParser from "html-react-parser";


const Blog = ({
  category,
  filterCategoryBlogPosts,
  blog,
  filterRelatedPosts
}: {
  category?: ICategory;
  filterCategoryBlogPosts?: BlogInfo[];
  blog?: BlogInfo;
  filterRelatedPosts?: BlogInfo[];
}) => {
  const pathName = usePathname();
  console.log(filterRelatedPosts, "filterRelatedPosts")
  return (
    <>
      {category ? (
        <>
          <TopHero
            title={category?.title || 'blogs'}
            image={`${category?.bannerImage?.imageUrl || bgBreadcrum.src}`}
            pagename={pathName}
          />
          <div className="my-5">
            <BlogMain blogs={filterCategoryBlogPosts || []} />{' '}
          </div>
        </>
      ) : blog ? (
        <Container className="mt-10 space-y-4 lg:space-y-8 mb-10 md:mb-10">
          <div className="flex justify-center sm:justify-start items-center px-2 gap-1 xs:gap-2 sm:gap-4 mt-2 text-14 sm:text-base flex-wrap ">
            <Link
              href="/"
              className="flex items-center gap-2 text-12 xs:text-14 font-bold capitalize"
            >
              Home
            </Link>
            <FaAngleRight size={20} />
            <Link
              href={`/blog`}
              className="flex items-center gap-2 text-12 xs:text-14 font-bold capitalize"
            >
              Blog
            </Link>
            <FaAngleRight size={20} />
            <Link
              href={`/blog/${blog?.category.toLowerCase()}`}
              className="flex items-center gap-2 text-12 xs:text-14 font-bold capitalize"
            >
              {blog?.category}
            </Link>
            <FaAngleRight size={20} />
            <h2 className="flex items-center gap-2 text-12 xs:text-14 font-bold capitalize max-sm:text-center">
              {blog?.title}
            </h2>

          </div>
          <div className="text-24 sm:text-[36px] md:text-[48px] font-bold text-center">
            <h1>{blog?.title}</h1>
          </div>
          <div className="flex gap-8">
            <p className="text-12 2xl:text-14 font-medium text-[#999999]">
              {formatDateMonth(blog?.createdAt)}
            </p>
          </div>
          <div className="">
            <Image
              className="w-full rounded-md h-[270px] sm:h-[416px] xl:h-[467px] 2xl:sm:h-[526px]  xl:object-cover "
              width={1000}
              height={608}
              src={blog?.posterImage?.imageUrl}
              alt="Blog Image"
            />
          </div>
          
          <div className="w-[90%] m-auto overflow-hidden text-start mt-5">
            <div className='blog-content mt-8'>{HTMLReactParser(blog?.content || '')}</div>
            {/* <span className='blog-content'dangerouslySetInnerHTML={{ __html: blog?.content }}>
              {HTMLReactParser(blog?.content || '')}
              
              </span> */}
          <Comments data={blog} />
          </div>

          <div className="mt-10">
            <div className='flex flex-wrap justify-between items-center'>
              <h3 className="text-18 xs:text-28 md:text-[48px] font-semibold">
                Related Articles
              </h3>
              <Link className="text-14 font-semibold rounded-full py-2 px-4 text-white bg-primary xs:text-16 sm:text-18"
                href={`/blog/${blog?.category.toLowerCase()}`}>See All</Link>
            </div>

            {filterRelatedPosts && filterRelatedPosts?.length >= 2 && <OurBlog Blogdata={filterRelatedPosts
              .slice(0, 3)
              || []} />}
          </div>
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Blog;
