'use client';
import { useQuery } from '@tanstack/react-query';
import Container from 'components/Res-usable/Container/Container';
import PageSkelton from 'components/Skeleton/PageSkelton';
import Comments from 'components/comments/Comments';
import { formatDateMonth } from 'config';
import { fetchBlogs } from 'config/fetch';
import { blogData, generateSlug } from 'data/data';
import Image from 'next/image';
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

  const blog: any = blogs?.find((blog) => generateSlug(blog.title) === name);

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
      <div className='w-full h-full md:h-[608px] rounded-2xl'>
        <Image
          className="w-full h-full md:h-[600px] rounded-2xl pb-5 object-cover"
          width={1000}
          height={608}
          src={blog.posterImage?.imageUrl}
          alt="Blog Image"
        />
      </div>
      <div className='w-full overflow-hidden'>
        <span dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
      <Comments data={blog} />
    </Container>
  );
};

export default BlogDetail;
