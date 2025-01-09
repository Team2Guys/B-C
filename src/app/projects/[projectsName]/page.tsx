import { blogPostUrl } from 'data/urls';
import { redirect } from 'next/navigation';
import React from 'react'
import { Props } from 'react-select';

const ProjectName = async  ({ params }: Props) => {
  const slug = (await params).projectsName;
    const matchingUrl = blogPostUrl.find((item) => item.url === `/${slug}`);
    if (matchingUrl) {
      redirect(matchingUrl.redirectUrl);
    }
  return (
    <div>ProdectNamePage</div>
  )
}

export default ProjectName