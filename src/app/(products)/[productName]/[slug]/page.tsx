import { blogPostUrl } from 'data/urls';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

 type meta_props = {
   params: Promise<{ slug: string }>;
 };


const Page = async ({ params }: meta_props) => {
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