'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateMonth } from 'config';
import { BlogInfo } from 'types/interfaces';
import { generateSlug } from 'data/data';
interface IBlogsList {
  blogs: BlogInfo[];
}
interface IBlogCard {
  blog: BlogInfo;
}

const BlogCard = ({ blog }: IBlogCard) => {
  const { title, content, posterImage, createdAt } = blog;
  const filteredContent = content.replace(/<[^>]*>?/gm, '').slice(0, 310);

  return (
    <div className="flex gap-4 p-4 border-b border-gray-300">
      <div className="w-1/3">
        <Image
          src={posterImage?.imageUrl}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg object-cover w-full h-[200px]"
        />
      </div>

      <div className="w-2/3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Blinds</span>
          <span className="text-sm text-gray-500">
            {formatDateMonth(createdAt)}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 hover:underline">
          <Link href={`/blog/${title}`}>{title}</Link>
        </h3>
        <div className="text-sm text-gray-600 mt-2">
          {filteredContent}...
          <Link
            href={`/blog/${generateSlug(title)}`}
            className={`text-primary ml-2   font-bold text-center sm:text-start`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogList = ({ blogs }: IBlogsList) => {
  console.log('============== ');
  console;
  return (
    <div className="flex flex-col gap-4">
      {blogs.map((blog: BlogInfo) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
