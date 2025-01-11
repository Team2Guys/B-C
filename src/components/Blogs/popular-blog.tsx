'use client'
import Container from 'components/Res-usable/Container/Container'
import { BlogInfo } from 'types/interfaces'
import { useRouter } from 'next/navigation'
import { generateSlug } from 'data/data'
import Link from 'next/link'
import { formatDateMonth, removeImagesFromContent } from 'config'
import Image from 'next/image'
import Slider, { SliderSettings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-blog-arrow absolute !-top-[3px] sm:!-top-[18px] !right-3 cursor-pointer before:hidden`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight
        className="text-black text-sm sm:text-xl"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-blog-arrow !-top-[3px] sm:!-top-[18px] !left-auto right-9 cursor-pointer before:hidden`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft
        className="text-black text-sm sm:text-xl"
      />
    </div>
  );
}
const PopularBlog = ({ blogs }: { blogs: BlogInfo[] }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogInfo[]>([]);
  const route = useRouter();
  const settings: SliderSettings = {
    dots: false,
    centerPadding: '20px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

      useEffect(() => {
          setTimeout(() => {
              setFilteredBlogs(blogs);
              setIsLoading(false);
          }, 500);
      }, [blogs]);
        return (
        <Container className="mt-1 px-2">
          <div className="flex items-center gap-2 border-t border-gray-300 pt-6">
            <h3 className="text-10 sm:text-28 font-semibold">Popular Posts</h3>
            <span className="border-t border-gray-300 grow me-16 mt-1"></span>
          </div>
          <div className="slider-container">
            {isLoading || blogs.length === 0 ? (
              <div className="max-sm:overflow-y-scroll sm:overflow-visible ">
                <div className="flex gap-4 w-full overflow-x-scroll custom-scrollbar">
                {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="w-full sm:w-4/12 rounded-lg space-y-4 mt-5 px-4 flex-shrink-0 flex flex-col animate-pulse h-auto"
      >
        <div className="bg-gray-300 rounded-lg h-[300px] w-full"></div>
        <div className="bg-gray-300 rounded-lg h-8 w-full"></div>
        <div className="bg-gray-300 rounded-lg h-9 w-10/12"></div>
        <div className="bg-gray-300 rounded-lg h-8 w-3/6"></div>
      </div>
    ))}
  </div>
</div>
  
            ) : (
              <Slider {...settings}>
                {filteredBlogs.map((blog, index) => {
                  const filteredContent = removeImagesFromContent(blog.content);
                  return (
                    <div
                      className={`rounded-lg space-y-2 sm:space-y-4 mt-5 px-4 flex flex-col justify-between`}
                      key={index}
                      onClick={() => {
                        route.push(`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}`);
                      }}
                    >
                      <div className={``}>
                        <Image
                          className={`rounded-md sm:rounded-3xl h-[140px] sm:h-[353.9px] w-full cursor-pointer`}
                          width={700}
                          height={700}
                          src={blog.posterImage?.imageUrl}
                          alt="blog"
                        />
                        <div className="flex items-center gap-4 pt-2 sm:pt-5">
                          <span className="text-12 font-medium text-[#999999]">
                            {formatDateMonth(blog.createdAt)}
                          </span>
                        </div>
                        <h3
                          className="text-13 sm:text-20 font-bold cursor-pointer text-start"
                          onClick={() => {
                            route.push(`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}`);
                          }}
                        >
                          {blog.title}
                        </h3>

                        <p className=" text-10 sm:text-16">
                          {filteredContent.length > 160 ? (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: `${filteredContent.slice(0, 100)}...`,
                              }}
                            />
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{ __html: filteredContent }}
                            />
                          )}
                        </p>
                      </div>
                      <Link
                        href={`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}`}
                        className={`text-primary text-12 sm:text-18 underline font-bold text-center sm:text-start`}
                      >
                        Read More
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            )}
          </div>
      {/* <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5">
        {blogs.map((blog, index) => {
          const filteredContent = removeImagesFromContent(blog.content);
          return (
            <div
              className={`rounded-lg space-y-4 mt-5 flex flex-col justify-between`}
              key={index}
              onClick={() => {
                route.push(`/blog/${generateSlug(blog.title)}`);
              }}
            >
              <div className={``}>
                <Image
                  className={`rounded-3xl md:h-[353.9px] w-full cursor-pointer`}
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
                    route.push(`/blog/${generateSlug(blog.title)}`);
                  }}
                >
                  {blog.title}
                </h3>
                <p className="">
                  {filteredContent.length > 160 ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `${filteredContent.slice(0, 100)}...`,
                      }}
                    />
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{ __html: filteredContent }}
                    />
                  )}
                </p>
              </div>
              <Link
                href={`/blog/${generateSlug(blog.title)}`}
                className={`text-primary text-18 underline font-bold text-center sm:text-start`}
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div> */}
    </Container>
  )
}

export default PopularBlog