'use client';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import { generateSlug } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BlogProps } from 'types/interfaces';

const OurBlog: React.FC<BlogProps> = ({
  className,
  title,
  Blogdata,
  id,
  isFirstItemLarge = false, // Default to false
  buttonView = false, // Default to false
}) => {
  const route = useRouter();
  return (
    <Container className="mt-10">
      {buttonView ? (
        <div className="flex justify-between items-center">
          <p className="text-20 sm:text-[48px] font-bold capitalize">{title}</p>
          <Button
            onClick={() =>
              route.push(`/blog/${generateSlug(title ? title : '')}`)
            }
            className="sm:py-6 sm:px-10"
            variant={'secondary'}
          >
            View All
          </Button>
        </div>
      ) : null}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5 "
        id={id}
      >
        {Blogdata.map((blog, index) => (
          <div
            className={`rounded-lg space-y-4 mt-5 ${className} ${
              isFirstItemLarge && index === 0
                ? 'md:col-span-3 flex flex-col md:flex-row gap-5'
                : ''
            }`}
            key={index}
          >
            <div
              className={` ${
                isFirstItemLarge && index === 0 ? 'w-full lg:w-6/12' : ''
              }`}
            >
              <Image
                className={`rounded-3xl md:h-[353.9px] w-full ${className} ${
                  isFirstItemLarge && index === 0
                    ? 'md:h-[448.28px] w-full'
                    : ''
                }`}
                width={500}
                height={500}
                src={blog.image}
                alt="blog"
              />
            </div>
            <div
              className={`pt-1 space-y-2 ${
                isFirstItemLarge && index === 0 ? 'w-full lg:w-6/12' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-14 font-bold text-[#333333]">
                  {blog.category}
                </span>
                <span className="text-12 font-medium text-[#999999]">
                  12 September 2024
                </span>
              </div>
              <h3
                className={` font-bold ${
                  isFirstItemLarge && index === 0 ? 'text-[32px]' : 'text-24'
                }`}
              >
                {blog.title}
              </h3>
              {isFirstItemLarge ? (
                <p>
                  {blog.description.length > 600
                    ? `${blog.description.slice(0, 600)}...`
                    : blog.description}
                </p>
              ) : (
                <p>
                  {blog.description.length > 160
                    ? `${blog.description.slice(0, 160)}...`
                    : blog.description}
                </p>
              )}

              <div className="pt-5">
                <Link
                  href={`/blog/blog-detail/${generateSlug(blog.title)}`}
                  className={`text-primary text-18  py-3  ${
                    isFirstItemLarge && index === 0
                      ? 'border border-primary rounded-md bg-white px-3 py-1'
                      : 'underline font-bold'
                  }`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurBlog;
