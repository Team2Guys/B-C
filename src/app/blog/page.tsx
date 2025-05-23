import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Blog/blogbackground.png';
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

    url: 'https://blindsandcurtains.ae/blog/',
    images: [
      {
        url: bgBreadcrum.src,
        alt: 'blindsandcurtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/blog/',
  },
};


const Blog = async () => {
  const blogs = await fetchBlogs();
  const filteredBlog: BlogInfo[] = blogs?.filter((blog: BlogInfo) => blog.isPublished)?.sort((a: BlogInfo, b: BlogInfo) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <>
      <TopHero title="Blogs" image={bgBreadcrum.src} pagename="blog" />

      <div className="mt-5">
        <Suspense fallback={<PageSkelton />}>
          <BlogMain blogs={filteredBlog} />
          <div className="mt-10">
            {filteredBlog?.length >= 3 && <PopularBlog blogs={blogs || []} />}
          </div>
        </Suspense>
      </div>
      <div className="mt-0 sm:mt-16 lg:mt-20 max-sm:mb-10" />
    </>
  );
};

export default Blog;
