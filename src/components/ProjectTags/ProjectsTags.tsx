import Container from 'components/Res-usable/Container/Container';
import { projectsTags } from 'data/data';
import React from 'react';
import { MontserratFont, RobotoFont } from 'typo/font';

const ProjectsTags = () => {
  return (
    <Container className="pt-20 pb-10 w-full !max-w-[982px]">
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl text-center ${RobotoFont.className}`}
      >
        Made-To-Measure Blinds & Curtains
      </h2>
      <p
  className={`text-base sm:text-16 md:text-[20px] w-full md:w-2/3 text-center mx-auto mt-5 ${MontserratFont.className}`}>
  You&apos;ll never have an ill-fitting or messy window in your house with custom blinds and curtains that are made to match.</p>
  <div className="flex flex-wrap justify-center mt-5 md:mt-10 gap-x-2 gap-y-3">
        {projectsTags.sort().map((tag, index) => (
          <span
            key={index}
            className={`bg-secondary text-white rounded-lg p-2 text-12 xs:text-14 sm:text-16 tracking-widest mr-2 ${MontserratFont.className}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </Container>
  );
};

export default ProjectsTags;
