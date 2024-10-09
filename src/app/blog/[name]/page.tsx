'use client';
import { useQuery } from '@tanstack/react-query';
import OurBlog from 'components/Blogs/our-blog';
import Container from 'components/Res-usable/Container/Container';
import PageSkelton from 'components/Skeleton/PageSkelton';
import Comments from 'components/comments/Comments';
import { formatDateMonth } from 'config';
import { fetchBlogs } from 'config/fetch';
import { blogData, generateSlug } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { BlogInfo } from 'types/interfaces';

const BlogDetail = () => {
  const latestArticles = blogData.slice(0, 3);
  const { name } = useParams();
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery<BlogInfo[]>({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  if (error || isLoading) {
    return <PageSkelton />;
  }

  const blog = blogs?.find((blog) => generateSlug(blog.title) === name);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <Container className="mt-10 space-y-4 lg:space-y-8">
      <div className="text-28 sm:text-[36px] md:text-[48px] font-bold">
        <h1>{blog.title}</h1>
      </div>
      <div className="flex gap-8">
        <p className="text-12 2xl:text-14 font-medium text-[#999999]">
          {formatDateMonth(blog.createdAt)}
        </p>
      </div>
      <Image
        className="w-full h-full md:h-[608px] rounded-xl"
        width={1000}
        height={700}
        // src={'/assets/images/Blog/blog.jpg'}
        //@ts-expect-error
        src={blog.posterImage?.imageUrl}
        alt="Blog Image"
      />
      <span dangerouslySetInnerHTML={{ __html: blog.content }} />

      {/* <OurBlog id={"#top"} title="Popular Post" Blogdata={latestArticles} buttonView /> */}
      <Comments />
    </Container>
  );
};

export default BlogDetail;
