'use client';
import Hero from 'components/Hero/Hero';
import Appointment from 'components/Appointment/Appointment';
import FeatureProduct from 'components/feture-product/feature-product';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import Testimonial from 'components/slider/testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <Appointment />
      <FeatureProduct />
      <VideoAutomation />
      <Support />
      <Guarrenty />
      <Testimonial />
    </>
  );
}
