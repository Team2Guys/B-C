import Projects from 'components/Projects/Projects';
import ProjectsTags from 'components/ProjectTags/ProjectsTags';
import { Metadata } from 'next';
import React, { Fragment } from 'react';
import ProjectTopHero from 'components/ui/project-top-hero';

export const metadata: Metadata = {
  title: 'Blinds And Curtains Dubai | Projects',
  description: 'We offer premium quality made-to-measure blinds in Dubai, check out the projects that we did for our clients. Like something give us a call to learn more.',
  openGraph: {
    title: 'Blinds And Curtains Dubai | Projects',
    description: 'We offer premium quality made-to-measure blinds in Dubai, check out the projects that we did for our clients. Like something give us a call to learn more.',
    url: 'fullUrl',
    images: [
      {
        url: 'imageUrl',
        alt: 'Blinds And Curtains Dubai | Projects',
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
      <ProjectTopHero title="Our Projects" />
      <Projects />
      <ProjectsTags />
    </Fragment>
  );
};

export default ProjectPage;
