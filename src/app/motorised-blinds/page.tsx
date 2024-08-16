import TopHero from 'components/ui/top-hero';
import React from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import MotorisedInfo from 'components/motorised-blinds/motorised-info';
import moto1 from '../../../public/assets/images/MotorisedBlind/montorised1.png';
import Measure from 'components/motorised-blinds/measure';
import ChooseUs from 'components/motorised-blinds/choose-us';
import img1 from '../../../public/assets/images/MotorisedBlind/guarantee1.png';
import img2 from '../../../public/assets/images/MotorisedBlind/businessmen1.png';
import img3 from '../../../public/assets/images/MotorisedBlind/ready-stock.png';
import img4 from '../../../public/assets/images/MotorisedBlind/loyalty-program.png';
import Appointment from 'components/motorised-blinds/appointment';
const chooseUsItems = [
  {
    image: img1,
    text: 'We offer a fully comprehensive 5 year warranty on all our motors',
  },
  {
    image: img2,
    text: 'Our professional staff are fully trained to install as well as offer expert advice',
  },
  {
    image: img3,
    text: 'We keep motors in stock, so no long delays waiting for stock',
  },
  {
    image: img4,
    text: 'We only use the leading brands such as Somfy, Nice & Motion.',
  },
];
const motorization = [
  { text: 'We offer a fully comprehensive 5 year warranty on all our motors' },
  {
    text: 'Our professional staff are fully trained to install as well as offer expert advice',
  },
  {
    text: 'Our professional staff are fully trained to install as well as offer expert advice',
  },
  { text: 'We keep motors in stock, so no long delays waiting for stock' },
  { text: 'We only use the leading brands such as Somfy, Nice & Motion.' },
];

const MotorisedBlind = () => {
  return (
    <>
      <TopHero title="Motorised Blinds" image={bgBreadcrum} />
      <MotorisedInfo
        imageClass="lg:float-end"
        title={'MOTORISED BLINDS'}
        subtitle={'The smartest blinds for your dream home.'}
        description={
          'Motorised blinds or electric blinds are typically operated by a remote control. You can even add smartphone control functionality to allow you total control of your blinds, home or away. Providing you with the same function as  but with the added comfort of only having to press a button rather than pull a chain. With a huge selection of fabrics and designs to choose from, our motorised blinds are the ideal choice for a beautiful and functional window dressing. Driven by an integrated motor that is hidden from sight, our motorised roller binds can be powered by rechargeable battery or directly from your mains supply. Our expert team of installation specialists will ensure all safety parameters and electrical regulations are met for your complete peace of mind.'
        }
        image={moto1}
      />
      <div className="bg-light text-center py-10 mt-20 mb-20">
        <Measure
          title="MADE TO MEASURE MOTORISED BLINDS"
          description="Our entire motorised blinds collection is supplied on a made-to-measure basis. No more guessing or hoping it will fit. Our blinds are custom-made for your windows. Our end-to-end service means we are here from the very start right through to the final installment. You don’t have to lift a finger as we take care of the entire process on your behalf. We offer a range of motorised solutions."
        />
      </div>
      <ChooseUs
        title="Why choose us for your motorization?"
        gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4"
        boxClass="bg-white"
        items={chooseUsItems}
      />
      <Measure
        className="mt-20"
        title="MOTORISED BENEFITS"
        description="There are many advantages to choosing a motorised blind over a manually operated one. First and foremost, you have the ability to save a preferred position so that your blinds always open to the same spot. You can even add timers to command the blinds to open/close at set times. How’s that for convenience?"
      />
      <div className="bg-white text-center py-10 mt-20">
        <ChooseUs
          boxClass="bg-secondary"
          title="Why choose us for your motorization?"
          gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-4"
          items={motorization}
        />
      </div>
      <MotorisedInfo
        className="flex-row-reverse"
        imageClass="lg:float-start"
        title={'MOTORISED BLINDS'}
        subtitle={'The smartest blinds for your dream home.'}
        description={
          'Motorised blinds or electric blinds are typically operated by a remote control. You can even add smartphone control functionality to allow you total control of your blinds, home or away. Providing you with the same function as  but with the added comfort of only having to press a button rather than pull a chain. With a huge selection of fabrics and designs to choose from, our motorised blinds are the ideal choice for a beautiful and functional window dressing. Driven by an integrated motor that is hidden from sight, our motorised roller binds can be powered by rechargeable battery or directly from your mains supply. Our expert team of installation specialists will ensure all safety parameters and electrical regulations are met for your complete peace of mind.'
        }
        image={moto1}
      />
    </>
  );
};

export default MotorisedBlind;
