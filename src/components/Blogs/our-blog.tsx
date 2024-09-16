import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import Image from 'next/image';
import React from 'react';
import { BlogProps } from 'types/interfaces';

const OurBlog: React.FC<BlogProps> = ({
  className,
  title,
  Blogdata,
  id,
  isFirstItemLarge = false, // Default to false
}) => {
  
  return (
    <Container className="mt-10">
      <div className="flex justify-between items-center">
        <p className="text-20 sm:text-[48px] font-bold capitalize">{title}</p>
        <Button className="sm:py-6 sm:px-10" variant={'secondary'}>
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5" id={id}>
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
              <h3 className="text-24 font-bold">{blog.title}</h3>
              <p>{blog.description.length > 200 ? `${blog.description.slice(0, 200)}...` : blog.description}</p>
              <button className={`text-primary text-18   ${
                isFirstItemLarge && index === 0 ? 'border border-primary rounded-md bg-white px-3 py-1' : 'underline font-bold'
              }`}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurBlog;
