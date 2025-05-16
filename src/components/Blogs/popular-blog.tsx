'use client';
import Container from 'components/Res-usable/Container/Container';
import { BlogInfo } from 'types/interfaces';
import { useRouter } from 'next/navigation';
import { generateSlug } from 'data/data';
import Link from 'next/link';
import { formatDateMonth } from 'config';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function SampleNextArrow({ onClick }: { onClick: () => void }) {
  return (
    <div
      className=" absolute !-top-[3px] sm:!-top-[9px] !right-3 cursor-pointer before:hidden"
      onClick={onClick}
    >
      <FaChevronRight className="text-black text-sm sm:text-xl" />
    </div>
  );
}

function SamplePrevArrow({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="absolute !-top-[3px] sm:!-top-[9px] left-auto !right-8 cursor-pointer before:hidden"
      onClick={onClick}
    >
      <FaChevronLeft className="text-black text-sm sm:text-xl" />
    </div>
  );
}

const PopularBlog = ({ blogs }: { blogs: BlogInfo[] }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogInfo[]>([]);
  const route = useRouter();
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

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
        <div className="relative">
          <div ref={prevRef}>
            <SamplePrevArrow onClick={() => prevRef.current?.click()} />
          </div>
          <div ref={nextRef}>
            <SampleNextArrow onClick={() => nextRef.current?.click()} />
          </div>
        </div>
      </div>
      <div className="slider-container relative">
        {isLoading || blogs.length === 0 ? (
          <div className="max-sm:overflow-y-scroll sm:overflow-visible">
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
          <>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              speed={1000}
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== 'boolean') {
                  if (swiper.params.navigation) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }
              }}
              breakpoints={{
                300: { slidesPerView: 1, },
                352: { slidesPerView: 1.5, },
                768: { slidesPerView: 3, },
                880: { slidesPerView: 2.8, },
                1024: { slidesPerView: 3, },
              }}
            >
              {filteredBlogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Link
                    className="rounded-lg mt-5 px-4 flex flex-col justify-between w-full"
                    href={`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}/`}
                  >
                    <div>
                      <Image
                        className="rounded-md sm:rounded-3xl h-[140px] sm:h-[353.9px] w-full cursor-pointer"
                        width={700}
                        height={700}
                        src={blog.posterImage?.imageUrl}
                        alt="blog"
                      />
                      <span className="text-12 font-medium text-[#999999]">
                        {formatDateMonth(blog.createdAt)}
                      </span>
                      <h3
                        className="text-12 md:text-16 lg:text-18 xl:text-20 font-bold cursor-pointer text-start h-14 xs:h-16 sm:h-12 md:h-20 lg:h-24 xl:h-24 2xl:h-16"
                        onClick={() => {
                          route.push(
                            `/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}`,
                          );
                        }}
                      >
                        {blog.title?.slice(0, 70) + '..'}
                      </h3>
                    </div>
                    <p className="text-10 md:text-14 xl:text-16 md:hidden">
                      {blog.Meta_description?.slice(0, 60) + '..'}
                    </p>
                    <p className="text-10 md:text-14 xl:text-16 hidden md:block lg:hidden">
                      {blog.Meta_description?.slice(0, 45) + '..'}
                    </p>
                    <p className="text-10 md:text-14 xl:text-16 hidden lg:block 2xl:hidden">
                      {blog.Meta_description?.slice(0, 55) + '..'}
                    </p>
                    <p className="text-10 md:text-14 xl:text-16 hidden 2xl:block">
                      {blog.Meta_description?.slice(0, 90) + '..'}
                    </p>
                    <div className="">
                      <Link
                        href={`/blog/${blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title)}/`}
                        className="text-primary text-12 sm:text-18 underline font-bold text-center sm:text-start">
                        Read More
                      </Link>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </Container>
  );
};

export default PopularBlog;
