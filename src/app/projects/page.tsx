import Projects from 'components/Projects/Projects';
import { Metadata } from 'next';
import React, { Fragment } from 'react';
import { Montserrat } from 'next/font/google';
import ProjectTopHero from 'components/ui/project-top-hero';

export const projectMainFont = Montserrat({
  weight: '300',
  subsets: ['latin-ext'],
});
export const projectFont = Montserrat({
  weight: '400',
  subsets: ['latin-ext'],
});
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
};

const ProjectPage = () => {
  return (
    <Fragment>
      <ProjectTopHero title="Projects" />

      <Projects />
    </Fragment>
  );
};

export default ProjectPage;
