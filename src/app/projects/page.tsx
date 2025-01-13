import Projects from 'components/Projects/Projects';
import ProjectsTags from 'components/ProjectTags/ProjectsTags';
import { Metadata } from 'next';
import React, { Fragment } from 'react';
import ProjectTopHero from 'components/ui/project-top-hero';

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
      <ProjectsTags />
    </Fragment>
  );
};

export default ProjectPage;
