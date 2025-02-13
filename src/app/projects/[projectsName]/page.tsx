import { blogPostUrl } from 'data/urls';
import { permanentRedirect} from 'next/navigation';
import React from 'react'
type Props = {
  params: Promise<{ projectsName: string[] }>
}


const ProjectName = async  ({ params }: Props) => {
  const slug = (await params).projectsName;
    const matchingUrl = blogPostUrl.find((item) => item.url === `/${slug}`);
    if (matchingUrl) {
      permanentRedirect(matchingUrl.redirectUrl);
    }
  return (
    <div>ProdectNamePage</div>
  )
}

export default ProjectName