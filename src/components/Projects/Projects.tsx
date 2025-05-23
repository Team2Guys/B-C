import { projectsData } from 'data/data';
import React from 'react';
import ProjectCard from './ProjectCard';
import Container from 'components/Res-usable/Container/Container';
import { MontserratFont } from 'typo/font';

const Projects: React.FC = () => {
  const sortedProjects = projectsData.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <Container className="px-6 pt-2 md:pt-12">
      <p
        className={` md:mx-20 line leading-10 md:leading-[54px] text-center text-xl md:text-[26px] mb-8 ${MontserratFont.className}`}
      >
        No matter where you are in Dubai, our expertise is just a phone call away
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
