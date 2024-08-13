// src/data.ts
import { CardTypes } from 'types/interface';
import { BlindsAndCurtainsTypes } from 'types/interface';
import { BannerData } from 'types/interface';

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
export const bannerData: BannerData = {
  imageUrl: '/assets/images/dd.png',
  title: 'MADE TO MEASURE SHUTTERS FOR YOU..',
  buttonText: 'Booking Now',
};

export const footerLinks = [
  {
    title: 'Product',
    links: [
      'UI/UX Design',
      'Web Development',
      'Mobile Development',
      'IT Consultancy',
    ],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'Knowledge Base', 'Forums'],
  },
  {
    title: 'Legal',
    links: [
      'Legal Information',
      'Privacy Policy',
      'Report Abuse',
      'Terms of Sources',
      'WHOIS Lookup',
    ],
  },
  {
    title: 'Login',
    links: ['Web Hosting', 'DreamCompute', 'Website Builder'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Affiliate', 'Blog', 'Careers', 'Community'],
  },
];

export const footerInfo = ' ©Blindsand & Curtains  2024 All rights reserved';

export const OurClientImage = [
  { src: '/assets/images/ourclient/lgo1.png', alt: 'Floors-Walls-Dubai 1' },
  { src: '/assets/images/ourclient/logo2.png', alt: 'Logomain' },
  {
    src: '/assets/images/ourclient/logo3.png',
    alt: 'Plantation-Shutters-Dubai 1',
  },
  { src: '/assets/images/ourclient/logo4.png', alt: 'Two-Guys-Logo' },
  {
    src: '/assets/images/ourclient/logo5.png',
    alt: 'Yellow-Zone-Group-Dubai 1',
  },
  // { src: '/assets/images/ourclient/yellow-zone-group-dubai-2.png', alt: 'Yellow-Zone-Group-Dubai 2' }
];
