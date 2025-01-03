
import { fetchBlogs } from 'config/fetch';
import Blog from './Blogs'
import { BlogInfo } from 'types/interfaces';

const Blogging = async() => {
let blog = await fetchBlogs()

const filteredBlog: BlogInfo[] =blog?.sort((a: BlogInfo, b: BlogInfo) =>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
 
  return (
 <Blog blogs ={filteredBlog}/>
  );
};

export default Blogging;
