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
    <div className="flex gap-4 p-4 flex-col sm:flex-row border-b items-center border-gray-300">
        <Image
          src={posterImage?.imageUrl}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg object-cover w-full sm:w-[160px] h-52 sm:h-[160px]"
        />
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Blinds</span>
          <span className="text-sm text-gray-500">
            {formatDateMonth(createdAt)}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 hover:underline">
          <Link href={`/blog/${generateSlug(title)}`}>{title}</Link>
        </h3>
        <div className="text-14 sm:text-16 text-gray-600 mt-2">
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
