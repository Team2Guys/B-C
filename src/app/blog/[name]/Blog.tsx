'use client';
import BlogMain from 'components/Blogs/blog-main';
import OurBlog from 'components/Blogs/our-blog';
import Container from 'components/Res-usable/Container/Container';
import PageSkelton from 'components/Skeleton/PageSkelton';
import Comments from 'components/comments/Comments';
import TopHero from 'components/ui/top-hero';
import { formatDateMonth } from 'config';
import { generateSlug } from 'data/data';
import { blogCategoryUrl } from 'data/urls';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BlogInfo } from 'types/interfaces';
import bgBreadcrum from '../../../../public/assets/images/Blog/blogbackground.png';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import { ICategory } from 'types/types';
import NotFound from 'app/not-found';
// import { blogLinks } from 'data/header_links';
// import NotFound from 'app/not-found';

const Blog = ({
  blogs,
  categories,
}: {
  blogs: BlogInfo[];
  categories: ICategory[];
}) => {
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

  const category = categories?.find(
    (category) => category.title === catgoryPage?.name,
  );

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

  // const matchingLink = blogLinks.find((link) => link.href === name);
  // if (!matchingLink) {
  //   return <NotFound />;
  // }

  return (
    <>
      {!catgoryPageSkeleton ? (
        <PageSkelton />
      ) : catgoryPage ? (
        <>
          <TopHero
            title={catgoryPage?.name || 'blogs'}
            image={`${category?.bannerImage?.imageUrl || bgBreadcrum.src}`}
            pagename={pathName}
          />
          <div className="my-5">
            <BlogMain blogs={filterCategoryPosts || []} />{' '}
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
              className="w-full rounded-md h-full sm:h-[416px] xl:h-[467px] 2xl:sm:h-[526px] object-contain xl:object-cover "
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
            <div className='flex flex-wrap justify-between items-center'>
            <h3 className="text-18 xs:text-28 md:text-[48px] font-semibold">
              Related Articles
            </h3>
            <Link className="text-14 font-semibold rounded-full py-2 px-4 text-white bg-primary xs:text-16 sm:text-18"
             href={`/blog/${blog?.category.toLowerCase()}`}>See All</Link>
            </div>
            
            <OurBlog Blogdata={relatedPosts || []} />
          </div>
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Blog;
