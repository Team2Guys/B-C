'use client';
import { useQuery } from '@tanstack/react-query';
import BlogMain from 'components/Blogs/blog-main';
import OurBlog from 'components/Blogs/our-blog';
import Container from 'components/Res-usable/Container/Container';
import PageSkelton from 'components/Skeleton/PageSkelton';
import Comments from 'components/comments/Comments';
import TopHero from 'components/ui/top-hero';
import { formatDateMonth } from 'config';
import { fetchBlogs } from 'config/fetch';
import { generateSlug } from 'data/data';
import { blogCategoryUrl } from 'data/urls';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BlogInfo } from 'types/interfaces';
import bgBreadcrum from '../../../../public/assets/images/Blog/blogbackground.png';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

const BlogDetail = () => {
  const { name } = useParams();
  const pathName = usePathname();
  const [catgoryPage, setCatgoryPage] = useState<{
    url: string;
    name: string;
  } | null>(null);
  const [catgoryPageSkeleton, setCatgoryPageSkeleton] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogInfo[]>([]);
  const [filterCategoryPosts, setfilterCategoryPosts] = useState<BlogInfo[]>(
    [],
  );

  const { data: blogs, isLoading } = useQuery<BlogInfo[]>({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });
  const blog: BlogInfo | undefined = blogs?.find(
    (blog) => generateSlug(blog.title) === name,
  );

  useEffect(() => {
    if (blog && blogs) {
      const filterRelatedPosts = blogs
        .filter(
          (blogItem: BlogInfo) =>
            blogItem.category === blog.category &&
            generateSlug(blogItem.title) !== generateSlug(blog.title),
        )
        .slice(0, 3);

      setRelatedPosts(filterRelatedPosts);
    }
  }, [blog, blogs]);

  useEffect(() => {
    // Initial state setup
    setCatgoryPageSkeleton(false);
    const matches = blogCategoryUrl.find(
      (category) => category.url === pathName,
    );
    if (matches) {
      setCatgoryPage(matches);
    } else {
      setCatgoryPage(null);
    }
    setCatgoryPageSkeleton(true);
  }, [pathName]);

  useEffect(() => {
    if (catgoryPage && blogs) {
      const filterCategoryBlogPosts = blogs?.filter(
        (blogItem: BlogInfo) => blogItem.category === catgoryPage.name,
      );
      setfilterCategoryPosts(filterCategoryBlogPosts || []);
    }
  }, [blogs, catgoryPage]);

  return (
    <>
      {isLoading || !catgoryPageSkeleton ? (
        <PageSkelton />
      ) : catgoryPage ? (
        <>
          <TopHero
            title={catgoryPage?.name || 'blogs'}
            //@ts-expect-error
            image={`${blog?.bannerImage?.imageUrl || bgBreadcrum.src}`}
            pagename={pathName}
          />
          <div className="my-5">
            <BlogMain blogs={filterCategoryPosts || []} />{' '}
          </div>
        </>
      ) : blog ? (
        <Container className="mt-10 space-y-4 lg:space-y-8 mb-10 md:mb-20">
          <div className="flex justify-start items-center px-2 gap-1 xs:gap-2 sm:gap-4 mt-2 text-14 sm:text-base">
            <Link
              href="/"
              className="flex items-center gap-2 text-14 xs:text-16 font-bold capitalize"
            >
              Home
            </Link>
            <FaAngleRight size={20} />
            <Link
              href={`/blog`}
              className="flex items-center gap-2 text-14 xs:text-16 font-bold capitalize"
            >
              Blog
            </Link>
            <FaAngleRight size={20} />
            <Link
              href={`/blog/${blog?.category.toLowerCase()}`}
              className="flex items-center gap-2 text-14 xs:text-16 font-bold capitalize"
            >
              {blog?.category}
            </Link>
            <FaAngleRight size={20} />
            <h2 className="flex items-center gap-2 text-14 xs:text-16 font-bold capitalize">
              {blog?.title}
            </h2>
          </div>
          <div className="text-28 sm:text-[36px] md:text-[48px] font-bold">
            <h1>{blog?.title}</h1>
          </div>
          <div className="flex gap-8">
            <p className="text-12 2xl:text-14 font-medium text-[#999999]">
              {formatDateMonth(blog?.createdAt)}
            </p>
          </div>
          <div className="md:h-[650px] object-cover">
            <Image
              className="w-full h-full pb-5 rounded-md md:h-[650px] object-cover"
              width={1000}
              height={608}
              src={blog?.posterImage?.imageUrl}
              alt="Blog Image"
            />
          </div>
          <div className="w-full overflow-hidden text-start">
            <span dangerouslySetInnerHTML={{ __html: blog?.content || '' }} />
          </div>
          <Comments data={blog} />

          <div className="mt-10">
            <h3 className="text-28 md:text-[48px] font-semibold">
              Related Articles
            </h3>
            <OurBlog Blogdata={relatedPosts || []} />
          </div>
        </Container>
      ) : (
        <p>Blog not found.</p>
      )}
    </>
  );
};

export default BlogDetail;
