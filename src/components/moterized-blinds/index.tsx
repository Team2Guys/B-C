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

const chooseUsItems = [
  {
    image: img1,
    text: '10 Years warranty on all mechanical parts and labour',
  },
  {
    image: img2,
    text: 'A team of 50 staff to ensure perfection from start-to-finish',
  },
  {
    image: img3,
    text: 'In house production - quality is our concern, not yours',
  },
  {
    image: img4,
    text: 'We’re trusted, with over 700+ 5*reviews',
  },
];
const motorization = [
  {
    text: 'Easily operate with remote. Smartphone, or voice command.',
  },
  {
    text: 'Block out harmful UV rays, reducing energy usage and utility costs.',
  },
  {
    text: 'Perfect for individuals with mobility or accessibility challenges.',
  },
  {
    text: 'Programmable to block out sunlight at specific times, ensuring privacy.',
  },
  {
    text: 'Adjust the amount of light entering your home to create the perfect ambiance.',
  },
];

const MotorisedBlind = () => {
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
      <TopHero title="Motorised Blinds" image={bgBreadcrum} />
      <MotorisedInfo
        title={'MOTORISED BLINDS'}
        subtitle={'Convert your windows into Smart Windows'}
        description={
          'Everything else in your life is automated, why not your blinds? There are so many reasons to go electric. These motorised blinds give you the option to control your window covering with the use of a single remote. Unlike off-the-shelf blinds found online, you just have to speak to our team and we measure your windows with precision. We offer the full service from initial advice, followed by professional installation to complete instructions and programming. We work with expert companies like Somfy, Nice, and Motion, known for their high-quality motors and integration with smart home systems. With these brands on our side, we offer remote control blinds that are smooth, reliable, and long-lasting. Whether you want a simple electric blind or fully connected, we’ve got the right motorisation system for you​.'
        }
        image={moto1}
      />
      <div className="bg-light text-center py-10 mt-20 mb-20">
        <Measure
          title="“Hey Alexa, lower my Blinds”"
          description= "With motorised systems, you can control them with a remote, your smartphone, or even your voice using Google Home, Apple HomeKit, or Amazon Alexa. Open and close your window coverings from anywhere in the house—or even while you're away. It's all about making things simpler and more flexible for you."
        />
      </div>
      <ChooseUs
        title="Why Choose Us For Your Motorisation?"
        gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4"
        boxClass="bg-white"
        items={chooseUsItems}
      />
      <Measure
        className="mt-20"
        title="Set Your Own Schedule or Control Remotely"
        description="We love our customers and want to make things easier for them. If you have several blinds in your home, one remote can control them all. You can control them from anywhere in the world with a wifi hub. As we work daily with motorisation systems and have experience in handling them we will discuss pros and cons and give honest impartial advice."
      />
      <div className="bg-white text-center py-10 mt-20">
        <ChooseUs
          boxClass="bg-secondary flex justify-center items-center"
          title="Control your windows anytime, anywhere!"
          gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-4 "
          items={motorization}
        />
      </div>
      <MotorisedInfo
        className="flex-row-reverse"
        decClass="text-18 md:text-30 lg:text-37  md:leading-10 font-semibold text-center"
        description={
          "There's no hard sell just relaxed and pressure-free consultation"
        }
        description2="We believe in making your experience as stress-free as possible. Our team members are paid a fair living wage, meaning they are here for you. Rest assured, no one is working on commission here. Our team’s priority is to provide honest, helpful advice that’s best for you—not to push for a sale. If you choose to go with us, congratulations. If not we’ll send you your quotation by email and one follow up call. Then it's up to you to decide."
        description3="We approach every consultation the way we’d like to be treated: with honesty and zero pressure. If you’re interested in a no-obligation quotation, you can give our friendly team a call, or simply fill out the online contact form, and we’ll get back to you quickly."
        image={moto2}
      />
      <BookNowBanner />
      <Container className="mt-20">
        <RelatedProducts products={products || []} limit={4} />
      </Container>
    </>
  );
};

export default MotorisedBlind;
