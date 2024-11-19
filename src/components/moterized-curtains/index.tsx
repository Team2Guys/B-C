'use client';
import TopHero from 'components/ui/top-hero';
import React from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import MotorisedInfo from 'components/motorised-blinds/motorised-info';
import moto1 from '../../../public/assets/images/MotorisedBlind/montorised1.png';
import moto2 from '../../../public/assets/images/MotorisedBlind/mons2.png';
import Measure from 'components/motorised-blinds/measure';
import ChooseUs from 'components/motorised-blinds/choose-us';
import img1 from '../../../public/assets/images/MotorisedBlind/guarantee1.png';
import img2 from '../../../public/assets/images/MotorisedBlind/businessmen1.png';
import img3 from '../../../public/assets/images/MotorisedBlind/ready-stock.png';
import img4 from '../../../public/assets/images/MotorisedBlind/loyalty-program.png';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { relativeProducts } from 'data/data';
import Container from 'components/Res-usable/Container/Container';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'types/types';
import { fetchProducts } from 'config/fetch';
import { usePathname } from 'next/navigation';

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
  {
    text: 'Hassle free care. Our motorised tracks are superior quality. They just don’t break down',
  },
  {
    text: 'Push the buttons on the remote or link up to your smart phone in literally 60 seconds',
  },
  {
    text: 'How about Apple Home? YES. What about Alexa? Sure, why not. Ok, and Google',
  },
  {
    text: 'Even if you have your own system, 99% of the time, our installers can liaise with your automation team to give you a full 360 solution.',
  },
  {
    text: 'Set timers, set scenes. Control your motors from the room down the hall or from the other side of the world, it really is that simple once we set it up for you',
  },
];

const MotorisedCurtains = () => {
  const pathName = usePathname();
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  return (
    <>
      <TopHero title="Motorised Curtains" image={bgBreadcrum} pagename={pathName} />
      <MotorisedInfo
        title={'MOTORISED CURTAINS'}
        subtitle={'The smartest curtains for your dream home.'}
        description={
          'Motorised curtains or electric curtains are typically operated by a remote control. You can even add smartphone control functionality to allow you total control of your curtains, home or away. Providing you with the same function as  but with the added comfort of only having to press a button rather than pull a chain. With a huge selection of fabrics and designs to choose from, our motorised curtains are the ideal choice for a beautiful and functional window dressing. Driven by an integrated motor that is hidden from sight, our motorised roller binds can be powered by rechargeable battery or directly from your mains supply. Our expert team of installation specialists will ensure all safety parameters and electrical regulations are met for your complete peace of mind.'
        }
        image={moto1}
      />
      <div className="bg-light text-center py-10 mt-20 mb-20">
        <Measure
          title="MADE TO MEASURE MOTORISED CURTAINS"
          description="Our entire motorised curtains collection is supplied on a made-to-measure basis. No more guessing or hoping it will fit. Our curtains are custom-made for your windows. Our end-to-end service means we are here from the very start right through to the final installment. You don’t have to lift a finger as we take care of the entire process on your behalf. We offer a range of motorised solutions."
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
        description="There are many advantages to choosing a motorised blind over a manually operated one. First and foremost, you have the ability to save a preferred position so that your curtains always open to the same spot. You can even add timers to command the curtains to open/close at set times. How’s that for convenience?"
      />
      <div className="bg-white text-center py-10 mt-20">
        <ChooseUs
          boxClass="bg-secondary flex justify-center items-center"
          title="Why choose us for your motorization?"
          gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-4 "
          items={motorization}
        />
      </div>
      <MotorisedInfo
        className="flex-row-reverse"
        description={
          'All our team members are paid a decent living wage and are not trained for the hard sell. Your consultation will be relaxed and pressure free as we don’t believe in the hard sell technique. If you choose to go with us, congratulations. If not, you will receive our quotation by email and a maximum of one follow up call to ensure you’ve received it and that’s it. Then it’s up to you to decide'
        }
        description2="You can call the sales team for a no obligation quotation on or fill out the online contact form and someone will get back to you as soon as possible."
        description3="Please remember that none of our sales team are on commission. All are paid a decent living wage which allows them to be as honest with you as possible and put you under ZERO pressure to buy. It is the way we enjoy being sold to, so we pass that method onto you too."
        image={moto2}
      />
      <BookNowBanner parent="curtains" />
      <Container className="mt-20">
        <RelatedProducts products={products || []} limit={4} />
      </Container>
    </>
  );
};

export default MotorisedCurtains;
