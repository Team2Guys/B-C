import ProjectsTags from 'components/ProjectTags/ProjectsTags'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
   title: 'Projects',
   description: 'Projects description',
   openGraph: {
     title: 'Projects',
     description: 'Projects description',
     url: 'fullUrl',
     images: [
       {
         url: 'imageUrl',
         alt: 'altText',
       },
     ],
   },
   alternates: {
     canonical: 'projects',
   },
 }

const ProjectPage = () => {
  return (
    <>
     <ProjectsTags />
    </>
  )
}

export default ProjectPage