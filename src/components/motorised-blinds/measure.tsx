import Container from 'components/Res-usable/Container/Container';
import React from 'react';

const Measure = ({ title, description, className }: any) => {
  return (
    <Container className={`space-y-4 text-center mt-9 md:mt-10 ${className}`}>
      <h2 className=" text-20 md:text-30 font-medium">{title}</h2>
      <p className="text-12 md:text-16" dangerouslySetInnerHTML={{ __html: description }}></p>
    </Container>
  );
};

export default Measure;
