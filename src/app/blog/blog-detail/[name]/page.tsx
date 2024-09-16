import OurBlog from 'components/Blogs/our-blog';
import Container from 'components/Res-usable/Container/Container';
import { blogData, blogPara } from 'data/data';
import Image from 'next/image';
import React from 'react';

const BlogDetail = () => {
  const latestArticles = blogData.slice(0, 3);

  return (
    <Container className="mt-10 space-y-4 lg:space-y-8">
      <div className="flex gap-8">
        <p className="text-12 2xl:text-14 font-bold">Bilnds</p>
        <p className="text-12 2xl:text-14 font-medium text-[#999999]">
          12 September 2024
        </p>
      </div>
      <div className="text-28 sm:text-[36px] md:text-[48xp] font-bold max-w-screen-md">
        <h1>Lorem Ipsum is simply dummy text of the printing the?</h1>
      </div>
      <Image
        className="w-full h-full md:h-[608px] rounded-xl"
        width={1000}
        height={700}
        src={'/assets/images/Blog/blog.jpg'}
        alt="blog-Image"
      />

      {blogPara &&
        blogPara.map((array, index) => (
          <React.Fragment key={index}>
            <p>{array.para}</p>
          </React.Fragment>
        ))}

      <div className=" border-s-8 border-secondary px-2">
        <i className="text-18 md:text-24 text-[#666666]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has.
        </i>
        <p className="font-medium text-14 md:text-16">– Pedro Domingos</p>
      </div>
      {blogPara &&
        blogPara.map((array, index) => (
          <React.Fragment key={index}>
            <p>{array.para}</p>
          </React.Fragment>
        ))}
      <div className="flex justify-center">
        <Image
          className="w-full h-full md:h-[312px] md:w-[787px] rounded-xl"
          width={1000}
          height={700}
          src={'/assets/images/Blog/blog.jpg'}
          alt="blog-Image"
        />
      </div>
      {blogPara &&
        blogPara.map((array, index) => (
          <React.Fragment key={index}>
            <p>{array.para}</p>
          </React.Fragment>
        ))}
        
      <OurBlog id={"#top"} title="Popular Post" Blogdata={latestArticles} buttonView />

    </Container>
  );
};

export default BlogDetail;
