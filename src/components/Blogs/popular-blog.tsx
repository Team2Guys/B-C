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

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-blog-arrow absolute !-top-[18px] !right-3 cursor-pointer before:hidden`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight
        size={20}
        className="text-black"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-blog-arrow !-top-[18px] !left-auto right-9 cursor-pointer before:hidden`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft
        size={20}
        className="text-black"
      />
    </div>
  );
}
const PopularBlog = ({ blogs }: { blogs: BlogInfo[] }) => {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <Container className="mt-1 px-2">
      <div className='flex items-center gap-2  border-t border-gray-300 pt-6'>
        <h3 className="text-28 font-semibold">Popular Posts</h3>
        <span className='border-t border-gray-300 grow me-16 mt-1'></span>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {blogs.map((blog, index) => {
            const filteredContent = removeImagesFromContent(blog.content);
            return (
              <div
                className={`rounded-lg space-y-4 mt-5 px-4 flex flex-col justify-between`}
                key={index}
                onClick={() => {
                  route.push(`/blog/${generateSlug(blog.title)}`);
                }}
              >
                <div className={``}>
                  <Image
                    className={`rounded-3xl h-[353.9px] w-full cursor-pointer`}
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
        </Slider>
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