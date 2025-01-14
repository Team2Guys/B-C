import { ICategory } from "types/types";
import Blog from "./Blog";
import { headers } from "next/headers";
import { fetchBlogs, fetchCategories } from "config/fetch";
import { blogLinks } from "data/header_links";
import { Metadata } from "next";
import { BlogInfo } from "types/interfaces";
import { generateSlug } from "data/data";
import { notFound } from "next/navigation";

const CategoryTitle = ["blinds", "curtains", "shutters"]

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const name = (await params).name;
  const matchingLink = blogLinks.find((link) => link.href === name);
  const [categories, blogs] = await Promise.all([fetchCategories(), fetchBlogs()]);

  const filterCategory:any = categories.find((category) => category.title === matchingLink?.label);
  
  const blog: BlogInfo | undefined = blogs?.find((blog) => {
    const filterTitle = blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title);
   return filterTitle === name && blog.isPublished;
  });


  const headersList = await headers();
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;
  if (!filterCategory && !blog) {
    notFound();
  }

  let Category: BlogInfo | ICategory = filterCategory ? filterCategory : blog || {} as any;

  let ImageUrl = Category?.posterImage.imageUrl || 'blindsandcurtains';
  let alt = Category?.posterImage.altText || 'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];

  let title = Category?.Meta_Title || 'blindsandcurtains';
  let description = Category?.Meta_description || 'Welcome to blindsandcurtains';
  let url = `${fullUrl}blog/${name}`;
let meta_object:Metadata = {
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



if(filterCategory && CategoryTitle.includes(filterCategory?.title?.toLowerCase())){
  console.log(filterCategory.title, "asdfsadf")
  meta_object ={...meta_object,   robots: {
    index: false,
    follow: false,
  },}
}


  return {...meta_object} 
}
const BlogDetail = async ({ params }: { params: Promise<{ name: string }> }) => {
  const [categories, blogs] = await Promise.all([
    fetchCategories(),
    fetchBlogs()
  ]);
  const name = (await params).name;
  const category = categories?.find(
    (category) => category.title.toLowerCase() === name,
  );

  const filterCategoryBlogPosts = blogs?.filter((blogItem: BlogInfo) => blogItem.category === category?.title && blogItem?.isPublished)

  const blog: BlogInfo | undefined = blogs?.find((blog) => {
    const filterTitle = blog.redirectionUrl ? blog.redirectionUrl : generateSlug(blog.title);
   return filterTitle === name && blog.isPublished;
  }
  );
  const filterRelatedPosts = blogs.filter((blogItem: BlogInfo) => (blogItem.category === blog?.category) &&
    generateSlug(blogItem.title) !== generateSlug(blog.title) && blogItem.isPublished)
  //  .slice(0, 3);
  return (
    <Blog category={category} filterCategoryBlogPosts={filterCategoryBlogPosts} blog={blog} filterRelatedPosts={filterRelatedPosts} />
  );
};

export default BlogDetail;
