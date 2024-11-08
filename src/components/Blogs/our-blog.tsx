'use client';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import {
  formatDate,
  formatDateMonth,
  formatDateTime,
  removeImagesFromContent,
} from 'config';
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
  isFirstItemLarge = false,
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
        {Blogdata.map((blog, index) => {
          const filteredContent = removeImagesFromContent(blog.content);
          return (
            <div
              className={`rounded-lg space-y-4 mt-5 ${className} ${
                isFirstItemLarge && index === 0
                  ? 'md:col-span-3 flex flex-col md:flex-row gap-5'
                  : ''
              }`}
              key={index}
            >
              <div
                className={`${
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
                  //@ts-expect-error
                  src={blog.posterImage?.imageUrl}
                  alt="blog"
                />
              </div>
              <div
                className={`pt-1${
                  isFirstItemLarge && index === 0 ? 'w-full lg:w-6/12' : ''
                }`}
              >
                <div className="flex items-center gap-4 ">
                  <span className="text-12 font-medium text-[#999999]">
                    {formatDateMonth(blog.createdAt)}
                  </span>
                </div>
                <h3 className="text-24 font-bold">{blog.title}</h3>
                <p className="mb-3">
                  {filteredContent.length > 160 ? (
                    isFirstItemLarge && index === 0 ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `${filteredContent.slice(0, 800)}...`,
                        }}
                      />
                    ) : (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `${filteredContent.slice(0, 160)}...`,
                        }}
                      />
                    )
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{ __html: filteredContent }}
                    />
                  )}
                </p>

                <Link
                  href={`/blog/${generateSlug(blog.title)}`}
                  className={`text-primary text-18   ${
                    isFirstItemLarge && index === 0
                      ? 'border border-primary rounded-md bg-white px-3 py-2 '
                      : 'underline font-bold'
                  }`}
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default OurBlog;
