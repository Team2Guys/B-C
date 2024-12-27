import { ICategory } from "types/types";
import Blog from "./Blog";
import { headers } from "next/headers";
import { fetchBlogs, fetchCategories } from "config/fetch";
import { blogLinks } from "data/header_links";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  const { name } = params;
  const matchingLink = blogLinks.find((link) =>
      link.href === name);
  const categories = await fetchCategories();


  const filterCategory = categories.find((category) => category.title === matchingLink?.label);
  const headersList = headers();
  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  let Category = filterCategory as ICategory;

  let ImageUrl =
    Category?.posterImage.imageUrl ||
    'blindsandcurtains';
  let alt =
    Category?.posterImage.altText ||
    'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title =
    Category?.Meta_Title ||
    'blindsandcurtains';
  let description =
    Category?.Meta_description ||
    'Welcome to blindsandcurtains';
  let url = `${fullUrl}blog/${name}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: NewImage,
    },
    alternates: {
      canonical:
        Category?.Canonical_Tag || url,
    },
  };
}
const BlogDetail = async () => {
  const [ categories , blogs] = await Promise.all([
    fetchCategories(),
    fetchBlogs()
  ]);
  return (
    <Blog categories={categories} blogs={blogs} />
  );
};

export default BlogDetail;
