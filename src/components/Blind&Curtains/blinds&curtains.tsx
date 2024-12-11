'use client'
import { NextPage } from 'next';
import { BlindsAndCurtainstData } from 'data/data';
import Container from 'components/Res-usable/Container/Container';
import BlindsAndCurtains from 'components/Blinds&Curtains/blinds&curtains';

const BlindsAndCurtainssection: NextPage = () => {
  return (
    <Container className="py-12 ">
      <BlindsAndCurtains data={BlindsAndCurtainstData} />
    </Container>
  );
};

export default BlindsAndCurtainssection;
