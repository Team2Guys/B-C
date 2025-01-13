import { blogPostUrl } from 'data/urls';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
import { Props } from 'react-select';

const Page = async ({ params }: Props) => {
   const slug = (await params).slug;
   if (slug === 'product-guarantees') {
      return redirect('/product-guarantees');
   }
   const matchingUrl = blogPostUrl.find((item) => item.url === `/${slug}`);
   if (matchingUrl) {
      redirect(matchingUrl.redirectUrl);
   } else {
      return notFound();
   }
   return (
      <div>Page</div>
   )
}

export default Page