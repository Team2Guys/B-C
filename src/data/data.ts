// src/data.ts
import { CardTypes } from 'types/interface';
import { BlindsAndCurtainsTypes } from 'types/interface';
import imag1 from '../../public/assets/images/Container.png';
import imag12 from '../../public/assets/images/Container2.png';

export const cardData: CardTypes[] = [
  {
    image: '/assets/images/d.png',
    heading: 'BLINDS',
    paragraph:
      'Find the perfect made-to-measure window blinds within our range and give your home a refreshing burst of style',
    buttonText: 'VIEW BLINDS',
  },
  {
    image: '/assets/images/d.png',
    heading: 'CURTAINS',
    paragraph:
      'Find the perfect made-to-measure window blinds within our range and give your home a refreshing burst of style',
    buttonText: 'VIEW BLINDS',
  },
  {
    image: '/assets/images/d.png',
    heading: 'SHUTTERS',
    paragraph:
      'Find the perfect made-to-measure window blinds within our range and give your home a refreshing burst of style',
    buttonText: 'VIEW BLINDS',
  },
];

// Blinds and Curtains section data

export const BlindsAndCurtainstData: BlindsAndCurtainsTypes = {
  image: '/assets/images/Group 2102.png',
  heading: 'BLINDS & CURTAINS DUBAI',
  paragraph:
    'Based in Dubai, specializes in all types of window coverings including blinds, curtains, and shutters. From apartments to royal residences, and offices to colleges all over Dubai. Providing not only a stylish addition to your windows but also functional.  All our professional teams are based in Dubai and speak great English and will easily understand your blinds and curtains requirements and advise as best as they can. We have the largest selection of blinds in Dubai, if not the UAE (15 styles to choose from, each in a massive range of colour options). Whether you’re looking for a classy, chic, or modern design, we house the selection to fit your needs. Or perhaps you’d like some elegant made-to-measure curtains to adorn your windows? With over 3000 curtain fabric options, you’ll be spoilt for choice.',
  buttonText: 'Read More',
};

export const menuItem = [
  { id: 1, MenuName: 'Home' },
  { id: 2, MenuName: 'Bilnds', dropDown: true },
  { id: 3, MenuName: 'Curtains' },
  { id: 4, MenuName: 'Shutters' },
  { id: 5, MenuName: 'Commercial' },
  { id: 6, MenuName: 'Gallery' },
  { id: 7, MenuName: 'Installation' },
  { id: 8, MenuName: 'About Us' },
  { id: 8, MenuName: 'Contact Us' },
];
export const blindsSliderItems = [
  { key: 1, src: imag1, alt: 'Description 1', title: 'Title 1' },
  { key: 2, src: imag12, alt: 'Description 2', title: 'Title 2' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 1, src: imag1, alt: 'Description 1', title: 'Title 1' },
  { key: 2, src: imag12, alt: 'Description 2', title: 'Title 2' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 1, src: imag1, alt: 'Description 1', title: 'Title 1' },
  { key: 2, src: imag12, alt: 'Description 2', title: 'Title 2' },
];

export const curtainsSliderItems = [
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 1, src: imag1, alt: 'Description 1', title: 'Title 1' },
  { key: 2, src: imag12, alt: 'Description 2', title: 'Title 2' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 3, src: imag1, alt: 'Description 3', title: 'Title 3' },
  { key: 1, src: imag1, alt: 'Description 1', title: 'Title 1' },
];

export const heroSlider = [
  {
    id: 1,
    name: 'g2.png',
    imageUrl: '/assets/images/Hero/g2.png',
  },
  {
    id: 2,
    name: 'g1.png',
    imageUrl: '/assets/images/Hero/g1.png',
  },
];
export const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Blinds', path: '#', sliderData: blindsSliderItems },
  { label: 'Curtains', path: '#', sliderData: curtainsSliderItems },
  { label: 'Shutters', path: '#', sliderData: blindsSliderItems },
  { label: 'Commercial', path: '#', sliderData: curtainsSliderItems },
  { label: 'Estimator', path: '/estimator' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export const MobilemenuItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Blinds',
    subItems: blindsSliderItems.map((item) => ({
      key: item.key,
      src: item.src,
      alt: item.alt,
      title: item.title,
    })),
  },
  {
    label: 'Curtains',
    subItems: curtainsSliderItems.map((item) => ({
      key: item.key,
      src: item.src,
      alt: item.alt,
      title: item.title,
    })),
  },
  { label: 'Shutters', path: '/shutters' },
  { label: 'Commercial', path: '/commercial' },
  { label: 'Estimator', path: '/estimator' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];
