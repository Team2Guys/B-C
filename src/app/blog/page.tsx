import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Blog/blogbackground.png';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { BlogInfo } from 'types/interfaces';
import BlogMain from 'components/Blogs/blog-main';
import axios, { AxiosResponse } from 'axios';
import { Suspense } from 'react';
import PopularBlog from 'components/Blogs/popular-blog';
import { headers } from 'next/headers';
import { Metadata } from 'next';

const fetchBlogs = async (): Promise<BlogInfo[]> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};


export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  let ImageUrl = 'blindsandcurtains';
  let alt = 'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title = 'blindsandcurtains';
  let description = 'Welcome to blindsandcurtains';
  let url = `${fullUrl}blog`;
  return {
    title: 'title',
    description: 'description',
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: NewImage,
    },
    alternates: {
      canonical: 'test',
    },
  };
}


const Blog = async () => {
  const blogs = await fetchBlogs();
  return (
    <>
      <Header />
      <TopHero title="Blogs" image={bgBreadcrum.src} pagename="blog" />

      <div className="mt-5">
        <Suspense fallback={<PageSkelton />}>
          <BlogMain blogs={blogs} />
          <div className="mt-10">
            <PopularBlog blogs={blogs} />
          </div>
        </Suspense>
      </div>
      <div className="mt-28" />
      <Footer />
    </>
  );
};

export default Blog;
