// src/data.ts
import {
  CardTypes,
  FeatureProductData,
  SocialDataType,
  SupportItem,
} from 'types/interface';
import { BlindsAndCurtainsTypes } from 'types/interface';
import imag1 from '../../public/assets/images/Container.png';
import imag12 from '../../public/assets/images/Container2.png';
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
    title: 'Quick Links',
    links: ['Contact Us', 'Knowledge Base', 'Forums'],
  },
  {
    title: 'Account Inf0',
    links: [
      'Legal Information',
      'Privacy Policy',
      'Report Abuse',
      'Terms of Sources',
      'WHOIS Lookup',
    ],
  },
  {
    title: 'Polices',
    links: [
      'Legal Information',
      'Privacy Policy',
      'Report Abuse',
      'Terms of Sources',
      'WHOIS Lookup',
    ],
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

export const SocialData: SocialDataType[] = [
  {
    href: 'https://facebook.com',
    src: '/assets/images/icon/face.png',
    alt: 'Facebook',
  },
  {
    href: 'https://twitter.com',
    src: '/assets/images/icon/link.png',
    alt: 'Twitter',
  },
  {
    href: 'https://instagram.com',
    src: '/assets/images/icon/insta.png',
    alt: 'Instagram',
  },
  {
    href: 'https://instagram.com',
    src: '/assets/images/icon/whats.png',
    alt: 'Instagram',
  },
];
export const featureProducts: FeatureProductData[] = [
  {
    id: 1,
    category: 'Blind',
    title: 'Vertical Blinds',
    image: '/assets/images/dynamic/Rectangle 811d.png', // Adjust the path accordingly
    link: '/products',
  },
  {
    id: 2,
    category: 'Curtains',
    title: 'Sheer Curtains',
    image: '/assets/images/dynamic/Rectangle 811da.png',
    link: '/products',
  },
  {
    id: 3,
    category: 'Shutters',
    title: 'Plantation Shutters',
    image: '/assets/images/dynamic/Rectangle 811dds.png',
    link: '/products',
  },
  {
    id: 4,
    category: 'Blind',
    title: 'Plantation Shutters',
    image: '/assets/images/dynamic/Rectangle 811da.png',
    link: '/products',
  },
  {
    id: 5,
    category: 'Curtains',
    title: 'Sheer Curtains',
    image: '/assets/images/dynamic/Rectangle 811da.png',
    link: '/products',
  },
  {
    id: 6,
    category: 'Shutters',
    title: 'Plantation Shutters',
    image: '/assets/images/dynamic/Rectangle 811dds.png',
    link: '/products',
  },
  {
    id: 7,
    category: 'Curtains',
    title: 'Sheer Curtains',
    image: '/assets/images/dynamic/Rectangle 811da.png',
    link: '/products',
  },
  {
    id: 8,
    category: 'Shutters',
    title: 'Plantation Shutters',
    image: '/assets/images/dynamic/Rectangle 811dds.png',
    link: '/products',
  },
];

export const supportItems: SupportItem[] = [
  {
    title: 'MOTORS DO THE WORK FOR YOU',
    description:
      'No need to pull on heavy or hard-to-reach blinds and curtains. No more cables to operate or strings that get tangled up! Relax and let the motors do the work for you.',
  },
  {
    title: 'EXPERTS ASSIST',
    description:
      'No need to pull on heavy or hard-to-reach blinds and curtains. No more cables to operate or strings that get tangled up! Relax and let the motors do the work for you.',
  },
  {
    title: 'SMART HOME AUTOMATION',
    description:
      'No need to pull on heavy or hard-to-reach blinds and curtains. No more cables to operate or strings that get tangled up! Relax and let the motors do the work for you.',
  },
];
export const testimonials = [
  {
    id: 1,
    name: 'Masud Rana',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `
      This website has been an absolute game-changer for me. I was initially skeptical about using it because I had tried several other platforms in the past and was never fully satisfied. However, after giving this site a try, I realized it was different. The user interface is incredibly intuitive and easy to navigate, which is a huge

    `,
    rating: 5,
  },
  {
    id: 2,
    name: 'Alice Johnson',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `
      I’ve been using this website for several months now, and I can honestly say that it’s one of the best decisions I’ve made. From the moment I signed up, I was impressed by how seamless the entire process was. The registration was quick and easy, and I was able to start using the platform right away. What I love most about 

    `,
    rating: 5,
  },
  {
    id: 3,
    name: 'John Doe',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `
      This website has been an integral part of my business operations for the past year, and I’m thoroughly impressed with the level of service and functionality it offers. When I first started using it, I was looking for a platform that could help streamline my workflow and improve communication within my team. This site has
    `,
    rating: 5,
  },
  {
    id: 4,
    name: 'Jane Smith',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `
      I recently started using this website after hearing great things about it from my colleagues, and I have to say, it has lived up to the hype. From the moment I started using it, I could tell that a lot of thought and care had gone into designing every aspect of the platform. The user experience is seamless, and everything 
    `,
    rating: 5,
  },
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
