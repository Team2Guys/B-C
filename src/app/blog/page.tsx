import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Blog/blogbackground.png';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { BlogInfo } from 'types/interfaces';
import BlogMain from 'components/Blogs/blog-main';
import { Suspense } from 'react';
import PopularBlog from 'components/Blogs/popular-blog';
import { Metadata } from 'next';
import { fetchBlogs } from 'config/fetch';

export const metadata: Metadata = {
  title: 'Blinds And Curtains Dubai | Blog',
  description:
    'Read our blog for the latest updates on trends and new products. Get to know the best product for your home or business. For more information, give us a call.',
  openGraph: {
    title: 'Blinds And Curtains Dubai | Blog',
    description:
      'Read our blog for the latest updates on trends and new products. Get to know the best product for your home or business. For more information, give us a call.',

    url: 'https://b-c-eight.vercel.app/blog',
    images: [
      {
        url: 'https://b-c-eight.vercel.app/blindsandcurtains.jpg',
        alt: 'blindsandcurtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://b-c-eight.vercel.app/blog',
  },
};

const Blog = async () => {
  const blogs = await fetchBlogs();
  const filteredBlog: BlogInfo[] = blogs?.filter((blog: BlogInfo) => blog.isPublished)?.sort((a: BlogInfo, b: BlogInfo) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  return (
    <>
      <Header />
      <TopHero title="Blogs" image={bgBreadcrum.src} pagename="blog" />

      <div className="mt-5">
        <Suspense fallback={<PageSkelton />}>
          <BlogMain blogs={filteredBlog} />
          <div className="mt-10">
            {filteredBlog?.length >= 3 && <PopularBlog blogs={blogs || []} />}
          </div>
        </Suspense>
      </div>
      <div className="mt-0 sm:mt-16 lg:mt-20" />
      <Footer />
    </>
  );
};

export default Blog;
