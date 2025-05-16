'use client';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import { formatDateMonth } from 'config';
import { generateSlug } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BlogProps } from 'types/interfaces';

const OurBlog = ({
  className,
  title,
  Blogdata,
  id,
  buttonView = false,
}: BlogProps) => {
  const route = useRouter();
  return (
    <Container className=" overflow-hidden">
      {buttonView ? (
        <div className="flex justify-between items-center">
          <p className="text-20 sm:text-[48px] font-bold capitalize">{title}</p>
          <Button
            onClick={() =>
              route.push(`/blog/${generateSlug(title ? title : '')}/`)
            }
            className="sm:py-6 sm:px-10"
            variant={'secondary'}
          >
            View All
          </Button>
        </div>
      ) : null}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 sm:mt-10 gap-5 "
        id={id}
      >
        {Blogdata.map((blog, index) => {
          return (
            <div
              className={`rounded-lg space-y-4 mt-3 flex flex-col justify-between ${className} `}
              key={index}
              onClick={() => {
                route.push(`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}/`);
              }}
            >
              <div className={``}>
                <Image
                  className={`rounded-3xl md:h-[353.9px] w-full ${className} cursor-pointer`}
                  width={700}
                  height={700}
                  src={blog.posterImage?.imageUrl}
                  alt="blog"
                />
                <div className="flex items-center gap-4  pt-5">
                  <span className="text-12 font-medium text-[#999999]">
                    {formatDateMonth(blog.createdAt)}
                  </span>
                </div>
                <h3
                  className="text-20 font-bold cursor-pointer text-center sm:text-start"
                  onClick={() => {
                    route.push(`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}/`);
                  }}
                >
                  {blog.title}
                </h3>
                <p className="">
                  {blog.Meta_description}
                </p>
              </div>
              <Link
                href={`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}/`}
                className={`text-primary text-18 underline font-bold text-center sm:text-start w-fit`}
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default OurBlog;
