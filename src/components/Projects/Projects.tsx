import { projectsData } from 'data/data';
import React from 'react';
import ProjectCard from './ProjectCard';
import Container from 'components/Res-usable/Container/Container';
import { projectFont } from 'typo/font';

const Projects: React.FC = () => {
  return (
    <Container className="px-6 pt-12">
      <p
        className={` md:mx-20 line  leading-10 md:leading-[54px] text-center text-2xl md:text-[36px] mb-8 ${projectFont.className}`}
      >
        A RANGE OF THE VAST CHOICES OF WINDOW COVERINGS AVAILABLE FOR YOUR HOME
        OR OFFICE
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {projectsData.map((project, index) => (
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
