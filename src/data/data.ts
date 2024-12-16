// src/data.ts
import bgBreadcrum from '../../public/assets/images/Breadcrum/modern.png';
import moto1 from '../../public/assets/images/MotorisedBlind/montorised1.png';
import img1 from '../../public/assets/images/MotorisedBlind/guarantee1.png';
import img2 from '../../public/assets/images/MotorisedBlind/businessmen1.png';
import img3 from '../../public/assets/images/MotorisedBlind/ready-stock.png';
import img4 from '../../public/assets/images/MotorisedBlind/loyalty-program.png';
import moto2 from '../../public/assets/images/MotorisedBlind/mons2.png';

import {
  BlogInfo,
  CardTypes,
  Email,
  FeatureProductData,
  GalleryItems,
  IColorData,
  ITopHeroLink,
  OurHistory,
  PhoneNumber,
  ProductCardData,
  ProductItems,
  SupportItem,
  TFooterSection,
  THeroImages,
  Tproductdata,
  TProductGuarantees,
  TRSlide,
  TsizePresets,
} from 'types/interfaces';
import { BlindsAndCurtainsTypes } from 'types/interfaces';
import { BannerData } from 'types/interfaces';
import { TRatingSlider } from 'types/interfaces';
import * as Yup from 'yup';
import { Product, Category, FormValues } from 'types/interfaces';
import { IProduct, ISUBCATEGORY } from 'types/types';

/* eslint-disable no-useless-escape */
export const generateSlug = (text: string) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};
/* eslint-enable no-useless-escape */

export const cardData: CardTypes[] = [
  {
    image: '/assets/images/blindcard/blind.png',
    heading: 'BLINDS',
    paragraph:
      'Find the perfect made-to-measure window blinds within our range and give your home a refreshing burst of style',
    buttonText: 'VIEW BLINDS',
  },
  {
    image: '/assets/images/blindcard/curtains.png',
    heading: 'CURTAINS',
    paragraph:
      'Find the perfect made-to-measure window blinds within our range and give your home a refreshing burst of style',
    buttonText: 'VIEW CURTAINS',
  },
  {
    image: '/assets/images/blindcard/shutters.png',
    heading: 'SHUTTERS',
    paragraph:
      'Find the perfect made-to-measure window blinds within our range and give your home a refreshing burst of style',
    buttonText: 'VIEW SHUTTERS',
  },
];

// Blinds and Curtains section data

export const BlindsAndCurtainstData: BlindsAndCurtainsTypes = {
  image: '/assets/images/blind& curtains_dubai/blinds-curtains-dubai.png',
  heading: 'We offer window treatments for homes or offices in Dubai',
  paragraph: [
    `Based in Dubai, we specialise in all types of window coverings including blinds, curtains, and shutters. From apartments to royal residences, and offices to colleges all over Dubai. Providing not only a stylish addition to your windows but also function. Blinds and Curtains Dubai has the largest selection of custom blinds in Dubai, if not the UAE (15 styles to choose from, each in a massive range of colour options).

As a trusted window treatment company, we bring style and functionality to every room. Whether you’re looking for custom blinds, or blackout curtains we house the selection to fit your needs. Or perhaps you’d like some elegant made-to-measure curtains to adorn your windows? With over 3000 curtain fabric options, you’ll be spoilt for choice.`,
  ],
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
    heading: 'The Home of Customised',
    subheading: 'Window Coverings',
    content:
      "Our beautiful collection of window covering isn't the only thing that makes us stand out. A lot of it has to do with how we treat you right from the moment you contact us to the moment your project is complete.  ",
  },
  {
    id: 2,
    name: 'g1.png',
    imageUrl: '/assets/images/Hero/g3.png',
    heading: 'Made To Measure Window  ',
    subheading: 'Curtains In Dubai',
    content:
      'Finding a reliable curtains company in Dubai is no easy task, but Blinds and Curtains makes it simple.',
  },
  {
    id: 3,
    name: 'g1.png',
    imageUrl: '/assets/images/Hero/g1.png',
    heading: 'Perfect Fit Window',
    subheading: 'Shutters Dubai',
    content:
      "You won't find a better deal than having shutters installed in your Dubai home or office, complete with free consultation, quick installation, and a 5-year warranty.",
  },
];
export const bannerData: BannerData = {
  imageUrl: '/assets/images/measure_shutter/measure_shutter.png',
  title: 'MADE TO MEASURE SHUTTERS FOR YOU..',
  buttonText: 'Book A Free Home Design Visit',
};

export const footerLinks: TFooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { text: 'About Us', href: '/about-us' },
      { text: 'Contact Us', href: '/contact-us' },
      { text: 'Request An Appointment', href: '/request-appointment' },
      { text: 'Product Guarantees', href: '/product-guarantees' },
      { text: 'Why Choose Us', href: '/choose-us' },
    ],
  },
];

export const footerInfo = 'Blinds & Curtains 2024 All Rights Reserved';

export const phoneNumberInfo: PhoneNumber = {
  number: '+971 54 494 5339',
};
export const WhatsAppInfo: PhoneNumber = {
  number: '+971 54 494 5339',
};
export const EmailInfo: Email = {
  email: 'connect@twoguys.ae',
};

export const OurClientImage = [
  { src: '/assets/images/ourclient/client1.png', alt: 'Floors-Walls-Dubai 1' },
  { src: '/assets/images/ourclient/client2.png', alt: 'Logomain' },
  { src: '/assets/images/ourclient/client3.png', alt: 'Two-Guys-Logo' },
  { src: '/assets/images/ourclient/client4.png', alt: 'Two-Guys-Logo' },
  { src: '/assets/images/ourclient/client5.png', alt: 'Two-Guys-Logo' },
  { src: '/assets/images/ourclient/client6.png', alt: 'Floors-Walls-Dubai 1' },
  { src: '/assets/images/ourclient/client7.png', alt: 'Logomain' },
  {
    src: '/assets/images/ourclient/client8.png',
    alt: 'Plantation-Shutters-Dubai 1',
  },
];
export const BlogTitles = [
  { id: 1, title: 'Understanding React Basics' },
  { id: 2, title: 'Advanced JavaScript Tips' },
  { id: 3, title: 'Building Modern Web Apps' },
];

export const CommentData = [
  {
    id: 1,
    blogId: 1, // Linking this comment to "Understanding React Basics"
    userName: 'Laura Hipster',
    comment:
      'Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.',
    createdAt: 'October 03, 2022',
  },
  {
    id: 2,
    blogId: 2, // Linking this comment to "Advanced JavaScript Tips"
    userName: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id neque metus. Sed lacinia luctus sem eget congue.',
    createdAt: 'October 05, 2022',
  },
];

export const NestedCommentData = [
  {
    id: 1,
    replyId: 1,
    userName: 'Emma Watson',
    comment: 'I totally agree with this statement!',
    createdAt: 'October 04, 2022',
  },
  {
    id: 2,
    replyId: 1,
    userName: 'Chris Pratt',
    comment: 'Could you elaborate on this part?',
    createdAt: 'October 06, 2022',
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
    category: 'Blind',
    title: 'Sheer Curtains',
    image: '/assets/images/dynamic/Rectangle 811da.png',
    link: '/products',
  },
  {
    id: 3,
    category: 'Blind',
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
    category: 'Curtains',
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

export const ProductCardINFO: ProductCardData[] = [
  {
    id: 1,
    category: 'BLINDS BY TYPE',
    title: 'Vertical Blinds',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/6.png',
    link: '/product',
  },
  {
    id: 2,
    category: 'BLINDS BY TYPE',
    title: 'Sheer Curtains',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/1.png',
    link: '/product',
  },
  {
    id: 3,
    category: 'BLINDS BY TYPE',
    title: 'Plantation Shutters',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/2.png',
    link: '/product',
  },
  {
    id: 4,
    category: 'BLINDS BY TYPE',
    title: 'Plantation Shutters',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/3.png',
    link: '/product',
  },
  {
    id: 5,
    category: 'BY ROOM',
    title: 'Sheer Curtains',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/4.png',
    link: '/product',
  },
  {
    id: 6,
    category: 'BY ROOM',
    title: 'Plantation Shutters',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/5.png',
    link: '/product',
  },
  {
    id: 7,
    category: 'BY ROOM',
    title: 'Sheer Curtains',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/6.png',
    link: '/product',
  },
  {
    id: 8,
    category: 'BY ROOM',
    title: 'Plantation Shutters',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/5.png',
    link: '/product',
  },
  {
    id: 9,
    category: 'BLINDS BY TYPE',
    title: 'Plantation Shutters',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/4.png',
    link: '/product',
  },
  {
    id: 10,
    category: 'BY ROOM',
    title: 'Sheer Curtains',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/3.png',
    link: '/product',
  },
  {
    id: 11,
    category: 'BY ROOM',
    title: 'Plantation Shutters',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/2.png',
    link: '/product',
  },
  {
    id: 12,
    category: 'BY ROOM',
    title: 'Sheer Curtains',
    decription:
      'Our collection is full of rich, bold colours,unusual designs, add simple elegance to a window',
    image: '/assets/images/product/1.png',
    link: '/product',
  },
];

export const supportItems: SupportItem[] = [
  {
    title: 'Added Convenience',
    description:
      'A luxurious addition to your home that lets you set timers, create scenes, and makes you wonder why you didn’t switch your blinds and curtains sooner.',
  },
  {
    title: 'Compatible with all major smart homes systems',
    description:
      'Talk to our specialists today to find the best option for your blinds & curtains, whether it’s a remote, Alexa, Google Home, or Apple HomeKit.',
  },
  {
    title: 'Energy Efficient',
    description:
      'Live comfortably and save energy with blinds and curtains automation that helps keep your room warm in winter and cool in summer.',
  },
];
export const testimonials = [
  {
    id: 1,
    name: 'Masud Rana',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `
      This is very good website . I highly recomit👍 
adipiscing elit. Sagittis, sagittis neque egestas
velit, nec, malesuada tellus. Urna   `,
    rating: 5,
  },
  {
    id: 2,
    name: 'Masud rana',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `This is very good website . I highly recomit👍 
adipiscing elit. Sagittis, sagittis neque egestas
velit, nec, malesuada tellus. Urna  `,
    rating: 5,
  },
  {
    id: 3,
    name: 'Masud rana',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `This is very good website . I highly recomit👍 
adipiscing elit. Sagittis, sagittis neque egestas
velit, nec, malesuada tellus. Urna  `,
    rating: 5,
  },
  {
    id: 4,
    name: 'Masud rana',
    date: 'Jun 22, 2024',
    image: '/assets/images/static/testiImage.png',
    text: `This is very good website . I highly recomit👍 
adipiscing elit. Sagittis, sagittis neque egestas
velit, nec, malesuada tellus. Urna `,
    rating: 5,
  },
];

export const blindsSliderItems = [
  {
    key: 1,
    src: '/assets/images/Container.png',
    alt: 'Description 1',
    title: 'Title 1',
  },
  {
    key: 2,
    src: '/assets/images/Container2.png',
    alt: 'Description 2',
    title: 'Title 2',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 1,
    src: '/assets/images/Container.png',
    alt: 'Description 1',
    title: 'Title 1',
  },
  {
    key: 2,
    src: '/assets/images/Container2.png',
    alt: 'Description 2',
    title: 'Title 2',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 1,
    src: '/assets/images/Container.png',
    alt: 'Description 1',
    title: 'Title 1',
  },
  {
    key: 2,
    src: '/assets/images/Container2.png',
    alt: 'Description 2',
    title: 'Title 2',
  },
];

export const curtainsSliderItems = [
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 1,
    src: '/assets/images/Container.png',
    alt: 'Description 1',
    title: 'Title 1',
  },
  {
    key: 2,
    src: '/assets/images/Container2.png',
    alt: 'Description 2',
    title: 'Title 2',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 3,
    src: '/assets/images/Container.png',
    alt: 'Description 3',
    title: 'Title 3',
  },
  {
    key: 1,
    src: '/assets/images/Container.png',
    alt: 'Description 1',
    title: 'Title 1',
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

export const galleryItems: GalleryItems[] = [
  {
    id: 1,
    imageUrl: '/assets/images/Rectangle8.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'BILNDS',
  },
  {
    id: 2,
    imageUrl: '/assets/images/Rectangle8dd.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'CURTAINS',
  },
  {
    id: 3,
    imageUrl: '/assets/images/Image_3.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'BILNDS',
  },
  {
    id: 4,
    imageUrl: '/assets/images/Image_4.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'SHUTTERS',
  },
  {
    id: 5,
    imageUrl: '/assets/images/Image_5.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'COMMERCIAL',
  },
  {
    id: 6,
    imageUrl: '/assets/images/Image_3.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'SHUTTERS',
  },
  {
    id: 7,
    imageUrl: '/assets/images/Image_6.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'COMMERCIAL',
  },
  {
    id: 8,
    imageUrl: '/assets/images/Image_4.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'SHUTTERS',
  },
  {
    id: 9,
    imageUrl: '/assets/images/Image_6.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'INSTALLATION',
  },
  {
    id: 10,
    imageUrl: '/assets/images/Image_4.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'COMMERCIAL',
  },
  {
    id: 11,
    imageUrl: '/assets/images/Image_5.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'SHUTTERS',
  },
  {
    id: 12,
    imageUrl: '/assets/images/Image_4.png',
    title: 'The Bel Air Wooden Blinds',
    category: 'INSTALLATION',
  },
];

export const relativeProducts: GalleryItems[] = [
  {
    id: 1,
    imageUrl: '/assets/images/Rectangle8.png',
    title: 'Vertical Blinds',
    category: 'BILNDS',
  },
  {
    id: 2,
    imageUrl: '/assets/images/Rectangle8dd.png',
    title: 'Vertical Blinds',
    category: 'CURTAINS',
  },
  {
    id: 3,
    imageUrl: '/assets/images/image_3.png',
    title: 'Vertical Blinds',
    category: 'BILNDS',
  },
];

export const productItems: ProductItems[] = [
  {
    id: 1,
    imageUrl: '/assets/images/Rectangle812h.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'OFFICE',
    category: 'OFFICE',
  },
  {
    id: 2,
    imageUrl: '/assets/images/Rectangle812g.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'ROMAN BLINDS',
    category: 'ROMAN BLINDS',
  },
  {
    id: 3,
    imageUrl: '/assets/images/Rectangle812gs.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'ROMAN BLINDS',
    category: 'ROMAN BLINDS',
  },
  {
    id: 4,
    imageUrl: '/assets/images/Rectangle812h.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'OFFICE',
    category: 'OFFICE',
  },
  {
    id: 5,
    imageUrl: '/assets/images/Rectangle812g.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'OFFICE',
    category: 'OFFICE',
  },
  {
    id: 6,
    imageUrl: '/assets/images/Rectangle812gs.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'ROMAN BLINDS',
    category: 'ROMAN BLINDS',
  },
  {
    id: 7,
    imageUrl: '/assets/images/Rectangle812h.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'OFFICE',
    category: 'OFFICE',
  },
  {
    id: 8,
    imageUrl: '/assets/images/Rectangle812g.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'ROMAN BLINDS',
    category: 'ROMAN BLINDS',
  },
  {
    id: 9,
    imageUrl: '/assets/images/Rectangle812gs.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'OFFICE',
    category: 'OFFICE',
  },
  {
    id: 10,
    imageUrl: '/assets/images/Rectangle812h.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'OFFICE',
    category: 'OFFICE',
  },
  {
    id: 11,
    imageUrl: '/assets/images/Rectangle812g.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'ROMAN BLINDS',
    category: 'ROMAN BLINDS',
  },
  {
    id: 12,
    imageUrl: '/assets/images/Rectangle812gs.png',
    discription:
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
    title: 'OFFICE',
    category: 'OFFICE',
  },
];
export const RatingSlider: TRatingSlider = {
  imageUrl: '/assets/images/googleReview/qautes.png',
  StarImage: '/assets/images/googleReview/star.png',
};
export const HeroImages: THeroImages = {
  logo: '/assets/images/logomain.png',
  backImage: '/assets/images/hero/back2.jpeg',
  defaultBackImage: '/assets/images/hero/BACK.jpeg',
};
export const productData: Tproductdata = {
  title: 'PRODUCT GUARANTEES',
  sideImage: '/assets/images/product-guarantees/guarantee1.png',
  sideImage1: '/assets/images/product-guarantees/guarantee2.png',
  heading: 'BLINDS, CURTAINS & SHUTTERS PRODUCT GUARANTEES',
  content:
    'When you’re choosing Blinds & Curtains window dressings, you can be confident that they will continue to enhance your home now and in the come fully guaranteed, so you can rest assured you’re investing in quality products that are made to the highest specifications. you can be confident that they will continue to enhance your home now and in the come fully guaranteed, so you can rest assured you’re investing in quality products that are made to the highest specifications.',
};

export const sizePresets: TsizePresets[] = [
  { width: 300, height: 400, size: 100 },
  { width: 50, height: 500, size: 100 },
  { width: 400, height: 300, size: 100 },
  { width: 120, height: 100, size: 100 },
];

export const initialSize: TsizePresets = {
  width: 200,
  height: 200,
  size: 100,
};

export const PGuarantees: TProductGuarantees[] = [
  {
    heading: 'OUR 3-YEAR GUARANTEE',
    text: "When choosing blindsandcurtains.ae for your window dressings, you can relax in the knowledge that you're not only buying a beautiful product, but you're also buying into a customer service ethos that will be like no other experience in Dubai. From our after-sales care package to our 1 working day guaranteed response, you can rest assured that you'll be in good hands for the lifetime of your blinds, curtains or shutters. Great care and pride is attached into everything we do. From the blinds we supply and our beautiful handmade curtains, to the shutters that we import. You'll have our support from the day they are installed. This is the promise we make to you. When choosing blindsandcurtains.ae for your window dressings, you can relax in the knowledge that you're not only buying a beautiful product, but you're also buying into a customer service ethos that will be like no other experience in Dubai. From our after-sales care package to our 1 working day guaranteed response, you can rest assured that you'll be in good hands for the lifetime of your blinds, curtains or shutters. Great care and pride is attached into everything we do. From the blinds we supply and our beautiful handmade curtains, to the shutters that we import. You'll have our support from the day they are installed. This is the promise we make to you.",
    image: '/assets/images/product-guarantees/guarantee2.png',
    imageAlign: 'left',
  },
  {
    heading: 'OUR LIFETIME WARRANTY',
    text: "From the day your order is fitted, you will have a fully comprehensive 3-year Guarantee against manufacturing defects. This encompasses all parts, components, and materials used. Once the 3 years have passed, you can relax in the knowledge that we will be there to support you throughout the lifetime of your blinds, curtains or shutters. Where repairs are required, we will provide this service for you at a nominal fee and cost of goods only. Where goods are no longer available, we will offer you the most cost-effective method of resolving any issues. When choosing blindsandcurtains.ae for your window dressings, you can relax in the knowledge that you're not only buying a beautiful product, but you're also buying into a customer service ethos that will be like no other experience in Dubai. From our after-sales care package to our 1 working day guaranteed response, you can rest assured that you’ll be in good hands for the lifetime of your blinds, curtains or shutters. Great care and pride is attached into everything we do. From the blinds we supply and our beautiful handmade curtains, to the shutters that we import. You'll have our support from the day they are installed. This is the promise we make to you. ",
    image: '/assets/images/product-guarantees/guarantee1.png',
    imageAlign: 'right',
  },
];

export const AboutUsPara = {
  id: 1,
  subheading: 'About Us',
  heading: ['WELCOME TO', 'BLINDS & CURTAINS DUBAI'],
  paragraph: [
    'A growing business based in the heart of Dubai with a showroom in Al Quoz. blindsandcurtains.ae draws on over 20 years of experience in the drapery industry. You can be assured of the highest level of service and knowledge available. All our advisors are fully trained in all aspects of blinds & curtains and will always offer you the best, most impartial, honest advice you could ask for.',
    'Most of our products are manufactured right here in the U.A.E, ensuring that we can quality control check every single item leaving our factory, and delivering and fitting to your home within a week in most cases. All our blinds are manufactured to British Standard (BBSA) and are custom-made to your specifications. Factories used for our imported products have been quality tested for months before we signed exclusive distribution rights with them.',
  ],
};
export const UsHistoryPara = {
  id: 1,
  subheading: 'OUR HISTORY',
  heading: ['Here is our', 'journey'],
  paragraph: [
    'All our materials and fabrics are of the finest quality with over 70% sourced directly from Europe. With a dedicated design team based in London, constantly launching new colours and patterns to give you the latest fashion colours from Europe as well as being a step ahead of the rest.',
    'Make tomorrow your day and give us a call. We can visit you in the comfort of your home with our catalogues or you can visit us in our showroom in Al Quoz.',
    'None of our sales advisors are on commission and will not be pushy at all. We wouldn’t like that done to us, and there’s no way we would do any different to you. That’s our ethos and it has worked so far.',
    'Thanks for visiting our site and we look forward to hearing from you.',
  ],
};

// export const aboutUsReviewData = [
//   {
//     id: 1,
//     keys: '20 +',
//     title: 'Years Experience',
//   },
//   {
//     id: 2,
//     keys: '375K',
//     title: 'Work Completed',
//   },
//   {
//     id: 3,
//     keys: '19K',
//     title: 'Client Satisfied',
//   },
// ];

export const aboutUsReviewData = [
  { id: 1, keys: 20, suffix: '+', title: 'Years Experience' },
  { id: 2, keys: 375, suffix: 'K', title: 'Work Completed' },
  { id: 3, keys: 19, suffix: 'K', title: 'Client Satisfied' },
];

export const OurHistoryData: OurHistory[] = [
  {
    id: 1,
    year: '2005',
    heading: 'Starting from Garage Building',
    discription:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has.',
  },
  {
    id: 2,
    year: '2010',
    heading: 'Moved to an Office Building',
    discription:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has.',
  },
  {
    id: 3,
    year: '2013',
    heading: 'Completed 50K a large project',
    discription:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has.',
  },
  {
    id: 4,
    year: 'Now',
    heading: 'Have 4 branch office in 5 Country',
    discription:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has.',
  },
];

export const validateForm = (formData: {
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
}) => {
  if (formData.password !== formData.confirmpassword) {
    return 'Confirm password and password do not match.';
  }

  if (!formData.fullName || !formData.email || !formData.password) {
    return 'All fields are required.';
  }

  if (formData.password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  if (!/\d/.test(formData.password)) {
    return 'Password must contain at least one number.';
  }

  if (!/[!@#$%^&*]/.test(formData.password)) {
    return 'Password must contain at least one special character.';
  }

  return '';
};

export const withoutHeaderPages = ['/login', '/register', '/superAdminlogin'];

export const inputFields = [
  { name: 'name', type: 'text' },
  { name: 'description', type: 'text' },
  { name: 'price', type: 'number' },
  // { name: "category", type: 'text' },
  { name: 'discountPrice', type: 'number' },
];

export const CategorinputFields = [{ name: 'name', type: 'text' }];
export const withoutVariation = [
  { name: 'totalStockQuantity', type: 'number' },
];

export const Variation = [
  { name: 'variant', type: 'text' },
  { name: 'quantity', type: 'number' },
];

export const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
});

export const loginValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const categoryValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('required'),
});
export const subcategoryValidationSchema = Yup.object({
  title: Yup.string().required('Required'),
  CategoryId: Yup.number().required('required'),
});

export const initialValues: Product = {
  name: '',
  description: '',
  price: '',
  colors: [],
  totalStockQuantity: 0,
  variantStockQuantities: [],
  modelDetails: [],
  spacification: [],
  discountPrice: '',
  category: '',
};

export const categoryInitialValues: Category = {
  name: '',
  description: '',
};

export const loginInitialValue = {
  name: '',
  password: '',
};

// export const AddProductvalidationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   description: Yup.string().required('Required'),
//   price: Yup.string().required('Price is required'),
//   // salePrice: Yup.number()
//   //   .min(1, 'Minimum sales price must be at least 1')
//   //   .required('Required'),
// });

export const AddproductsinitialValues: FormValues = {
  name: '',
  description: '',
  salePrice: '',
  purchasePrice: '',
  discountPrice: '',
  starRating: '',
  reviews: '',
  colors: [],
  variantStockQuantities: [],
  totalStockQuantity: 0,
  modelDetails: [],
  spacification: [],
  sizes: [],
  category: '',
  code: '',
  price: 0,
  product_type: 'By Type',
  short_description: '',
  heading: '',
  Sub_Heading: '',
  Sub_Heading_description: '',
};

export const options = [
  {
    value: 'abu_dhabi',
    label: 'Abu Dhabi',
  },
  {
    value: 'dubai',
    label: 'Dubai',
  },
  {
    value: 'sharjah',
    label: 'Sharjah',
  },
  {
    value: 'ajman',
    label: 'Ajman',
  },
  {
    value: 'umm_al_quwain',
    label: 'Umm Al Quwain',
  },
  {
    value: 'ras_al_khaimah',
    label: 'Ras Al Khaimah',
  },
  {
    value: 'fujairah',
    label: 'Fujairah',
  },
];

export const subcategoryInitialValues: ISUBCATEGORY = {
  title: '',
  description: '',
  CategoryId: undefined,
};

export const intitalValues = {
  fullname: '',
  email: '',
  password: '',
  canAddProduct: false,
  canEditProduct: false,
  canDeleteProduct: false,
  canAddCategory: false,
  canDeleteCategory: false,
  canEditCategory: false,
  canVeiwAdmins: false,
  canAddSubCategory: false,
  canDeleteSubCategory: false,
  canEditSubCategory: false,
  canViewAppointments: false,
  canVeiwTotalproducts: false,
  canVeiwTotalCategories: false,
  canVeiwTotalSubCategories: false,
  canAddBlog: false,
  canDeleteBlog: false,
  canEditBlog: false,
};

export const blindMegaMenuItems = [
  { productName: 'vertical-blinds' },
  { productName: 'zipline-outdoor-blinds' },
  { productName: 'honeycomb-blinds' },
  { productName: 'panel-blinds' },
  { productName: 'aluminium-blinds' },
  // { productName: 'wood-venetian' },
  { productName: 'daynight-blinds' },
  { productName: 'wooden-blinds' },
  { productName: 'roman-blinds' },
  { productName: 'roller-blinds' },

  { productName: 'staircase' },
  { productName: 'vertical' },
  { productName: 'conservatory' },
  { productName: 'office' },
  { productName: 'bedroom' },
  { productName: 'kitchen' },
  { productName: 'dining-room' },
  { productName: 'living-room' },
  { productName: 'officestudy' },

  { productName: 'blackout-blinds' },
  // { productName: 'outdoor' },
  { productName: 'motorised-blinds' },
  { productName: 'dimout-blinds' },
  { productName: 'sunscreentransparent-blinds' },
];

export const curtainMegaMenuItems = [
  { productName: 'pencil-pleat-curtains' },
  { productName: 'ripplefoldwave-curtains' },
  { productName: 'tab-top-curtains' },
  { productName: 'motorised-curtains' },
  { productName: 'eyelet-curtains' },
  { productName: 'double-pinch-pleat-curtains' },
  { productName: 'triple-pinch-pleat-curtains' },

  { productName: 'conservatory' },
  { productName: 'staircase' },
  { productName: 'bedroom' },
  { productName: 'bathroom-blinds' },
  { productName: 'kids-room-blinds' },
  { productName: 'dining' },
  { productName: 'loungeliving' },
  // { productName: 'kids-bedroom' },

  { productName: 'stripes-curtains' },
  { productName: 'geometric-curtains' },
  { productName: 'textured-curtains' },
  { productName: 'kids-prints-curtains' },
  { productName: 'natural-fabric-curtains' },
  { productName: 'patterned-curtains' },
  { productName: 'plain-curtains' },
  { productName: 'sheer-curtains' },
  { productName: 'blackout-curtains' },
];

export const shutterMegaMenuItems = [
  { productName: 'special-shape-shutters' },
  { productName: 'outdoor-shutters' },
  { productName: 'solid-panel-shutters' },
  { productName: 'cafe-style-shutters' },
  { productName: 'tier-on-tier-shutters' },
  { productName: 'bay-window-shutters' },
  { productName: 'bi-fold-shutters' },
  { productName: 'full-height-shutters' },
  { productName: 'staircase-shutters' },
  // { productName: 'bathroom-shutters' },
  // { productName: 'kitchen-shutters' },
  { productName: 'dining-room-shutters' },
  { productName: 'tracked-shutters' },
];

export const commercialMegaMenuItems = [
  { productName: 'hospitals' },
  { productName: 'auditoriums' },
  { productName: 'hotels-restaurants' },
  { productName: 'schools' },
  // { productName: 'offices' },
  { productName: 'gym' },
  { productName: 'theatre' },

  { productName: 'indoor' },
  { productName: 'outdoor' },
  { productName: 'skylight' },
  { productName: 'balcony' },
  { productName: 'pergola' },

  { productName: 'fire-retardant' },
  { productName: 'water-repellent' },
  { productName: 'washable' },
  { productName: 'anti-microbial' },
];

export const staticCommercialMegaMenuItems: IProduct[] = [
  {
    id: 36,
    title: 'Office Blinds',
    posterImage: {
      imageUrl:
        'http://res.cloudinary.com/dz7nqwiev/image/upload/v1726645877/sruin6vc0ujvgxffpgne.png',
      public_id: 'sruin6vc0ujvgxffpgne',
    },
    imageUrls: [
      {
        imageUrl:
          'http://res.cloudinary.com/dz7nqwiev/image/upload/v1726645880/p1mgmoe4gndfyndvlown.png',
        public_id: 'p1mgmoe4gndfyndvlown',
      },
    ],
    price: 1000,
    href: 'commercial',
    CategoryId: 9,
    SubCategoryId: null,
    description:
      'Our custom-printed roller blinds range is the perfect solution to tick all boxes. Increase your brand exposure, raise your profile, and give your premises a professional fit-out feel while at the same time, keeping your staff and customers comfortable.\n\nProvide us with a high-quality image and leave the rest to us. Your blinds will be custom-made to size, and custom printed as required. A truly unique blind that will set your company apart from the rest.',
    updatedAt: null,
    createdAt: '2024-09-18T07:51:23.509Z',
  },
];

export const commercialPagesItems = [
  'hotels-restaurants',
  'printed-blinds',
  'school-blinds',
  'sunscreentransparent',
  'vertical-blinds',
  'aluminium-blinds',
  'wooden-blinds',
  'blackout-roller-blinds',
  'motorised-blinds',
  'panel-blinds',
  'roman-blinds',
];

export const items = [
  {
    id: 1,
    text: 'A team of 50 staff to ensure perfection from start-to-finish',
  },
  {
    id: 2,
    text: 'In house production - quality is our concern, not yours',
  },
  {
    id: 3,
    text: 'Free uninstall/re-install within 2 years',
  },
  {
    id: 4,
    text: '10 YEARS warranty on all mechanical parts and labour',
  },
  {
    id: 5,
    text: 'We’re trusted, with over 750+ 5* reviews',
  },
  {
    id: 6,
    text: 'Free home visits with free installation',
  },
];

export const slides: TRSlide[] = [
  {
    title: 'Victoria Wotton',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    title: 'Victoria Wotton',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
  },
];

export const isActiveTabs: { name: string }[] = [
  {
    name: 'blinds',
  },
  {
    name: 'shutters',
  },
  {
    name: 'curtains',
  },
  {
    name: 'commercial',
  },
  {
    name: 'gallery',
  },
  {
    name: 'contact-us',
  },
];

export const optionDetail = [
  { value: 'Select Sizes', label: 'Select Sizes', disabled: true },
  { value: '140 x 180', label: '140 x 180' },
  { value: '160 x 180', label: '160 x 180' },
  { value: '180 x 180', label: '180 x 180' },
  { value: '200 x 180', label: '200 x 180' },
  { value: '220 x 180', label: '220 x 180' },
];

export const estimateSldie = {
  320: {
    slidesPerView: 1.4,
    spaceBetween: 10,
  },
  420: {
    slidesPerView: 2.3,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  890: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1330: {
    slidesPerView: 3.5,
    spaceBetween: 15,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

export const blogData: BlogInfo[] = [
  {
    posterImage: '/assets/images/product/1.png',
    category: 'Technology',
    title: 'The Rise of AI in Modern Technology',
    content:
      'Explore how AI is revolutionizing industries and what the future holds for this incredible technology. Explore how AI is revolutionizing industries and what the future holds for this incredible technology Explore how AI is revolutionizing industries and what the future holds for this incredible technology Explore how AI is revolutionizing industries and what the future holds for this incredible technology',
  },
  {
    posterImage: '/assets/images/product/2.png',
    category: 'Health',
    title: 'Top 10 Health Tips for a Better Life',
    content:
      'Discover essential health tips that can help you live a healthier and more fulfilling life.',
  },
  {
    posterImage: '/assets/images/product/3.png',
    category: 'Travel',
    title: 'Best Travel Destinations for 2024',
    content:
      'Check out the must-visit travel destinations for 2024, from exotic beaches to bustling cities.',
  },
  {
    posterImage: '/assets/images/product/1.png',
    category: 'Technology',
    title: 'The Rise of AI in Modern Technology',
    content:
      'Explore how AI is revolutionizing industries and what the future holds for this incredible technology.',
  },
  {
    posterImage: '/assets/images/product/2.png',
    category: 'Health',
    title: 'Top 10 Health Tips for a Better Life',
    content:
      'Discover essential health tips that can help you live a healthier and more fulfilling life.',
  },
  {
    posterImage: '/assets/images/product/3.png',
    category: 'Travel',
    title: 'Best Travel Destinations for 2024',
    content:
      'Check out the must-visit travel destinations for 2024, from exotic beaches to bustling cities.',
  },
  {
    posterImage: '/assets/images/product/2.png',
    category: 'Health',
    title: 'Top 10 Health Tips for a Better Life',
    content:
      'Discover essential health tips that can help you live a healthier and more fulfilling life.',
  },
  {
    posterImage: '/assets/images/product/3.png',
    category: 'Travel',
    title: 'Best Travel Destinations for 2024',
    content:
      'Check out the must-visit travel destinations for 2024, from exotic beaches to bustling cities.',
  },
];

export const blogPara = [
  {
    para: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    para: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
  },
  {
    para: ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of',
  },
];

export const megaMenubyStyle = [
  { productName: 'vertical-blinds' },
  { productName: 'zipline-outdoor-blinds' },
  { productName: 'honeycomb-blinds' },
  { productName: 'panel-blinds' },
  { productName: 'aluminium-blinds' },
  // { productName: 'wood-venetian' },
  { productName: 'daynight-blinds' },
  { productName: 'wooden-blinds' },
  { productName: 'roman-blinds' },
  { productName: 'roller-blinds' },

  { productName: 'special-shape-shutters' },
  { productName: 'outdoor-shutters' },
  { productName: 'solid-panel-shutters' },
  { productName: 'cafe-style-shutters' },
  { productName: 'tier-on-tier-shutters' },
  { productName: 'bay-window-shutters' },
  { productName: 'bi-fold-shutters' },
  { productName: 'full-height-shutters' },
  { productName: 'tracked-shutters' },

  { productName: 'pencil-pleat-curtains' },
  { productName: 'ripplefoldwave-curtains' },
  { productName: 'tab-top-curtains' },
  { productName: 'motorised-curtains' },
  { productName: 'eyelet-curtains' },
  { productName: 'double-pinch-pleat-curtains' },
  { productName: 'triple-pinch-pleat-curtains' },

  { productName: 'hospitals' },
  { productName: 'auditoriums' },
  { productName: 'hotels-restaurants' },
  { productName: 'schools' },
  // { productName: 'offices' },
  { productName: 'gym' },
  { productName: 'theatre' },
];

export const megaMenubyRoom = [
  { productName: 'staircase' },
  { productName: 'vertical' },
  { productName: 'conservatory' },
  { productName: 'office' },
  { productName: 'bedroom' },
  { productName: 'bathroom-blinds' },
  { productName: 'kids-room-blinds' },
  { productName: 'kitchen-blinds' },
  { productName: 'dining-room' },
  { productName: 'living-room-blinds' },
  { productName: 'officestudy' },

  { productName: 'living-room-shutters' },
  { productName: 'dining-room-shutters' },
  { productName: 'kitchen-shutters' },
  { productName: 'bathroom-shutters' },
  { productName: 'bedroom-shutters' },
  { productName: 'staircase-shutters' },

  { productName: 'conservatory-blinds' },
  { productName: 'staircase-blinds' },
  { productName: 'bedroom-blinds' },
  { productName: 'offices-blinds' },
  // { productName: 'school-blinds' },
  { productName: 'study-room-Blinds' },
  { productName: 'dining-room-blinds' },
  // { productName: 'loungeliving' },
  { productName: 'living-room-curtains' },
  { productName: 'dining-room-curtains' },
  { productName: 'bedroom-curtains' },
  // { productName: 'kids-bedroom' },
  { productName: 'kids-room-curtains' },
  { productName: 'staircase-curtains' },
  { productName: 'conservatory-curtains' },

  { productName: 'outdoor' },
  { productName: 'indoor' },
  { productName: 'skylight' },
  { productName: 'balcony' },
  { productName: 'pergola' },
];

export const megaMenuDynamic = [
  { productName: 'sunscreentransparent-blinds' },
  { productName: 'blackout-blinds' },
  { productName: 'stripes-curtains' },
  { productName: 'geometric-curtains' },
  { productName: 'textured-curtains' },
  { productName: 'kids-prints-curtains' },
  { productName: 'natural-fabric-curtains' },
  { productName: 'patterned-curtains' },
  { productName: 'plain-curtains' },
  { productName: 'sheer-curtains' },
  { productName: 'blackout-curtains' },
  { productName: 'blackout-blinds' },
  { productName: 'outdoor' },
  // { productName: 'outdoor-blinds' },
  { productName: 'motorised-blinds' },
  { productName: 'dimout-blinds' },

  { productName: 'white-shutters' },
  { productName: 'light-wood-shutters' },
  { productName: 'off-white-shutters' },
  { productName: 'black-shutters' },
  { productName: 'dark-wood-shutters' },
  { productName: 'bold-colours-shutters' },
  { productName: 'grey-shutters' },

  { productName: 'stripes-curtains' },
  { productName: 'geometric-curtains' },
  { productName: 'textured-curtains' },
  { productName: 'kids-prints-curtains' },
  { productName: 'natural-fabric-curtains' },
  { productName: 'patterned-curtains' },
  { productName: 'plain-curtains' },
  { productName: 'sheer-curtains' },
  { productName: 'blackout-curtains' },

  { productName: 'fire-retardant' },
  { productName: 'water-repellent' },
  { productName: 'washable' },
  { productName: 'anti-microbial' },
];

export const extendedByStyle = [
  { productName: '3d-blinds' },
  { productName: 'sheer-horizon-blinds' },
  { productName: 'aric-blinds' },
  { productName: 'zebra-blinds' },
  { productName: 'pleated-blinds' },
  { productName: 'sierra-blinds' },
  { productName: 'eton-blinds' },
  { productName: 'patricia-blinds' },
  { productName: 'wooden-aluminium-blinds' },

  { productName: 'eyelet-curtains' },
  { productName: 'pinch-pleat-curtains' },
  // { productName: 'sheer-curtains' },
  { productName: 'goblet-pleat-curtains' },
  { productName: 'triple-pinch-pleat-curtains' },
  { productName: 'ripplefoldwave-curtains' },
  // { productName: 'double-pinch-pleat-curtains-curtains' },
  { productName: 'pelmet-curtains' },
  { productName: 'modern-curtains' },
  { productName: 'tab-top-curtains' },
  { productName: 'pencil-pleat-curtains' },
  // { productName: 'stripes-curtains' },

  { productName: 'full-height-shutters' },
  { productName: 'bay-window-shutters' },
  { productName: 'special-shape-shutters' },
  // { productName: 'tier-on-tier-shutters' },
  { productName: 'solid-panel-shutters' },
  { productName: 'bi-fold-shutters' },
  { productName: 'outdoor-shutters' },
  { productName: 'staircase-shutters' },
  { productName: 'cafe-style-shutters' },
];

export const extendedByRoom = [
  { productName: 'kids-room-blinds' },
  { productName: 'study-room-blinds' },
  { productName: 'dining-room-blinds' },
  { productName: 'conservatory-blinds' },
  { productName: 'staircase-blinds' },
  { productName: 'door-blinds' },
  { productName: 'bedroom-blinds' },
  { productName: 'offices-blinds' },
  { productName: 'bathroom-blinds' },

  { productName: 'bedroom-curtains' },
  { productName: 'living-room-curtains' },
  { productName: 'kids-room-curtains' },
  { productName: 'home-curtains' },
  { productName: 'room-curtains' },
  { productName: 'dining-room-curtains' },
  { productName: 'staircase-curtains' },
  { productName: 'conservatory-curtains' },

  { productName: 'living-room-shutters' },
  { productName: 'dining-room-shutters' },
  { productName: 'kitchen-shutters' },
  { productName: 'bedroom-shutters' },
  { productName: 'staircase-shutters' },
];
export const extendedDynamic = [
  { productName: 'motorised-blinds' },
  { productName: 'blackout-blinds' },
  { productName: 'skylight-blinds-dubai' },
  // { productName: 'roller-blinds' },
  { productName: 'blackout-roller-blinds' },
  { productName: 'sunscreen-blinds' },
  { productName: 'dimout-blinds' },
  { productName: 'transculent-blinds' },
  // { productName: 'zipline-outdoor-blinds' },

  { productName: 'made-to-measure-chiffon-curtains' },
  { productName: 'made-to-measure-linen-curtains' },
  { productName: 'velvet-curtains' },
  { productName: 'plain-curtains' },
  { productName: 'patterned-curtains' },
  { productName: 'natural-fabric-curtains' },
  { productName: 'geometric-curtains' },
  { productName: 'textured-curtains' },
  { productName: 'kids-print-curtains' },

  { productName: 'offwhite-shutters' },
  { productName: 'white-shutters' },
  { productName: 'light-wood-shutters' },
  { productName: 'black-shutters' },
  { productName: 'dark-wood-shutters' },
  { productName: 'bold-colours-shutters' },
  { productName: 'grey-shutters' },
];

export const AddProductvalidationSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  // description: Yup.string().required('Required'),
  // salePrice: Yup.number()
  //   .min(1, 'Minimum sales price must be at least 1')
  //   .required('Required'),
  // purchasePrice: Yup.number()
  //   .min(1, "Must be at least 1")
  //   .required('Required'),
  // discountPrice: Yup.number().nullable(),
  // starRating: Yup.number()
  //   .min(1, 'Rating must be at least 1')
  //   .max(5, 'Star Rating should be a maximum of 5')
  //   .nullable(),
  // reviews: Yup.string().nullable(),
  // colors: Yup.array().of(
  //   Yup.object().shape({
  //     colorName: Yup.string().nullable(),
  //   }),
  // ),
  // modelDetails: Yup.array().of(
  //   Yup.object().shape({
  //     name: Yup.string().nullable(),
  //     detail: Yup.string().nullable(),
  //   }),
  // ),
  // spacification: Yup.array().of(
  //   Yup.object().shape({
  //     specsDetails: Yup.string().nullable(),
  //   }),
  // ),
  // // category: Yup.string().required('Category is required'),
  // totalStockQuantity: Yup.number().nullable(),
  // variantStockQuantities: Yup.array().of(
  //   Yup.object().shape({
  //     variant: Yup.string().nullable(),
  //     quantity: Yup.number().nullable(),
  //   }),
  // ),
});

export const TopHeroLink: ITopHeroLink[] = [
  {
    matchingTitle: 'blinds',
    title: 'made-to-measure-blinds',
  },
  {
    matchingTitle: 'curtains',
    title: 'made-to-measure-curtains',
  },
  {
    matchingTitle: 'shutters',
    title: 'shutters-range',
  },
  {
    matchingTitle: 'shutters',
    title: 'shutters range',
  },
];

export const categoriesContent = [
  {
    slug: 'made-to-measure-blinds',
    content: {
      heading: 'Made to Measure Blinds',
      paragraph:
        'Our experts are here to help you find the customised fit for every window, and we have a dedicated team of full-time installers ready to handle any window covering challenges.',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      posterImage: '/assets/images/Blinds/landing/landing.webp',
      subheadingContent: [
        {
          content:
            '<a href="/" target="_blank" style="text-decoration: underline">Blinds and Curtains Dubai</a> offers more options in style, design, patterns, and colours than ready-made blinds. From large floor-to-ceiling windows to small bedroom windows, and from office spaces to holiday homes with bay windows, we have solutions for every space. Regardless of the size and scale, we measure, make and install outstanding blinds for every single project. ',
        },
        {
          content:
            'As our staff are not paid sales commissions, they will give you honest, impartial advice to ensure the best for your home and pocket. A window treatment is an investment that improves your quality of life. Our <a href="/blinds/roller-blinds/sunscreen-roller-blinds" target="_blank" style="text-decoration: underline">Sunscreen Blinds</a> let in soft, natural light while our <a href="/blinds/blackout-blinds" target="_blank" style="text-decoration: underline">Blackout Blinds</a> block light and cut down on noise.',
        },
        {
          content:
            'Call the team now and book a free appointment today. No pressure!',
        },
      ],
    },
  },
  {
    slug: 'made-to-measure-curtains',
    content: {
      heading: 'Made to Measure Curtains',
      paragraph:
        'Our made-to-measure curtains are the perfect solution to give your home a fresh new look. With a range of styles, colors, and fabrics to choose from, you can create a unique look that complements your home décor. Whether you’re looking for blackout curtains to keep the light out or sheer curtains to let the light in, we have the perfect solution for you. Our made-to-measure curtains are custom-made to fit your windows perfectly, ensuring a professional finish every time. With our expert advice and guidance, you can create a stunning look that will transform your home.',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      posterImage: '/assets/images/Curtain/landing/landing.webp',
      subheadingContent: [
        {
          content:
            'Our made-to-measure curtains are custom-made to fit your windows perfectly, ensuring a professional finish every time.',
        },
        {
          content:
            'With a range of styles, colors, and fabrics to choose from, you can create a unique look that complements your home décor.',
        },
        {
          content:
            'Our team of experts are on hand to provide advice and guidance on the best curtains for your home.',
        },
        {
          content:
            'We use only the highest quality materials to ensure that your curtains are durable and long-lasting.',
        },
      ],
    },
  },
  {
    slug: 'shutters-range',
    content: {
      heading: 'Made to Measure Curtains',
      paragraph:
        'Our made-to-measure curtains are the perfect solution to give your home a fresh new look. With a range of styles, colors, and fabrics to choose from, you can create a unique look that complements your home décor. Whether you’re looking for blackout curtains to keep the light out or sheer curtains to let the light in, we have the perfect solution for you. Our made-to-measure curtains are custom-made to fit your windows perfectly, ensuring a professional finish every time. With our expert advice and guidance, you can create a stunning look that will transform your home.',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      posterImage: '/assets/images/Shutters/landing/landing.webp',

      subheadingContent: [
        {
          content:
            'Our made-to-measure curtains are custom-made to fit your windows perfectly, ensuring a professional finish every time.',
        },
        {
          content:
            'With a range of styles, colors, and fabrics to choose from, you can create a unique look that complements your home décor.',
        },
        {
          content:
            'Our team of experts are on hand to provide advice and guidance on the best curtains for your home.',
        },
        {
          content:
            'We use only the highest quality materials to ensure that your curtains are durable and long-lasting.',
        },
      ],
    },
  },
];

export const BreakCrum_conent_pages = [
  {
    url: '/blinds/roller-blinds',
    content: 'Made to Measure Roller Blinds',
  },
];

//AutomatedMoterisedData
export const MoterisedContent=[
  {
    maintitle:"/automated-blinds",
    Data:[
      {
        title: 'Automated Blinds',
        heroImage: bgBreadcrum,
        infoTitle: 'Automated Blinds',
        infoSubtitle: 'Convert your windows into Smart Windows',
        infoDescription:
          'Everything else in your life is automated, why not your blinds? There are so many reasons to go electric. These motorised blinds give you the option to control your <a href="/made-to-measure-curtains" target="_blank" style="text-decoration: underline">window covering</a> with the use of a single remote. Unlike off-the-shelf blinds found online, you just have to speak to our team and we measure your windows with precision. We offer the full service from initial advice, followed by professional installation to complete instructions and programming. We work with expert companies like Somfy, Nice, and Motion, known for their high-quality motors and integration with smart home systems. With these brands on our side, we offer <a href="/blinds/motorised-blinds" target="_blank" style="text-decoration: underline">remote control blinds</a> that are smooth, reliable, and long-lasting. Whether you want a simple electric blind or fully connected, we’ve got the right motorisation system for you.',
        infoImage: moto1,
        measureTitle: '“Hey Alexa, lower my Blinds”',
        measureDescription:
          "With motorised systems, you can control them with a remote, your smartphone, or even your voice using Google Home, Apple HomeKit, or Amazon Alexa. Open and close your window coverings from anywhere in the house—or even while you're away. It's all about making things simpler and more flexible for you.",
        chooseustitle: 'Why Choose Us For Your Motorisation?',
        chooseustitle1: 'Control your windows anytime, anywhere!',
        measureTitle1: 'Set Your Own Schedule or Control Remotely',
        measureDescription1:
          'We love our customers and want to make things easier for them. If you have several blinds in your home, one remote can control them all. You can control them from anywhere in the world with a wifi hub. As we work daily with motorisation systems and have experience in handling them we will discuss pros and cons and give honest impartial advice.',
        chooseUsItems: [
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
          { image: img4, text: 'We’re trusted, with over 700+ 5*reviews' },
        ],
        motorization: [
          { text: 'Easily operate with remote. Smartphone, or voice command.' },
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
        ],
        additionalDescription:
          "There's no hard sell just relaxed and pressure-free consultation",
        additionalImage: moto2,
        additionalDescription2:
          "We believe in making your experience as stress-free as possible. Our team members are paid a fair living wage, meaning they are here for you. Rest assured, no one is working on commission here. Our team’s priority is to provide honest, helpful advice that’s best for you—not to push for a sale. If you choose to go with us, congratulations. If not we’ll send you your quotation by email and one follow up call. Then it's up to you to decide.",
        additionalDescription3:
          'We approach every consultation the way we’d like to be treated: with honesty and zero pressure. If you’re interested in a no-obligation quotation, you can give our friendly team a call, or simply fill out the online contact form, and we’ll get back to you quickly.',
     
      }
    ] 
     },
  {
    maintitle:"/automated-curtains",
    Data:[
      {
    title: 'Automated Curtains',
    heroImage: bgBreadcrum,
    infoTitle: 'Automatic Curtains',
    infoSubtitle: 'Convert your windows into Smart Windows',
    infoDescription:
      "Our passion for high-quality products makes us more than just a window covering company. Everything else in your life is automated, why not your blinds? There are so many reasons to go electric. Set timers for your curtains to open and close at certain times so you can enjoy the warmth of natural sunlight. Make your everyday life easier with motorised curtains. It's great for people who have mobility problems or are away from home a lot. It's much easier to close modern automated curtains for windows that are high or hard to reach. Our salespeople won't push you to buy; we'll help you find the one that's right for you. With whisper-quiet motors, our automated curtains operate smoothly for years to come. Since we're confident in our products, we offer free uninstall and reinstall services within the first 2 years, plus a 10-year warranty that covers all mechanical parts and labor.",
    infoImage: moto1,
    measureTitle: 'Made to Measure Motorised Curtains',
    measureDescription: `Just say the word, and let your motorisation system do the rest. It's now easier to control auto curtains with a remote, a smartphone, or even a voice command ("Alexa, close the curtains") using Amazon Alexa, Apple HomeKit, or Google Home. From anywhere in the house, you can open and close your curtains. It's all about making things simpler and more flexible for you.`,
    chooseustitle: 'Why Choose Us For Your Motorisation?',
    chooseustitle1: 'Control your windows anytime, anywhere!',
    measureTitle1: 'Set Your Own Schedule or Control Remotely',
    measureDescription1: `We handle everything, from consultation to installation. Besides setting up, we'll teach you how to use automatic window curtains so you feel confident. We work with industry leaders like Somfy, Nice, and Motion to give you control over your smart home through apps, remotes, and voice assistants, and options like blackout curtains for added convenience.`,
    chooseUsItems: [
      {
        image: img1,
        text: '10 Years warranty on all mechanical parts and labour',
      },
      {
        image: img2,
        text: '50 experts to make sure perfection is maintained from start-to-finish',
      },
      {
        image: img3,
        text: `Quality production - we're in it for the long haul`,
      },
      {
        image: img4,
        text: 'More than 700 5-star reviews prove our reputation as trusted',
      },
    ],
    motorization: [
      {
        text: 'Easily operate with remote. Smartphone, or voice command.',
      },
      {
        text: 'Save money and protect your home from UV rays.',
      },
      {
        text: `It's perfect for people with mobility or accessibility issues.`,
      },
      {
        text: 'You can set it up to block out the sun at specific times.',
      },
      {
        text: 'Adjust the amount of light entering your home to create the perfect ambiance.',
      },
    ],
    additionalDescription: `There's no hard sell just relaxed and pressure-free consultation`,
    additionalImage: moto2,
    additionalDescription2: `At Blinds and Curtains Dubai, choosing automated curtains should be fun and enjoyable instead of stressful. So we designed our consultations to be relaxed and informative. Our team is here to guide you, not to push you. We take the time to fully understand your needs and provide solutions that genuinely work for your space, whether you're looking for fabrics, modern automated curtains, or light control advice.`,
    additionalDescription3: `Every home is different, and every customer has a different taste. That's why we listen to you and offer honest, helpful advice during our consultations. There's no hustle, no pressure, and definitely no hard sell.`,
      }]
  },
]

//MoterisedBlindsData
// export const motorisedPageData = {
//   title: 'Motorised Blinds',
//   heroImage: bgBreadcrum,
//   infoTitle: 'MOTORISED BLINDS',
//   infoSubtitle: 'Convert your windows into Smart Windows',
//   infoDescription:
//     'Everything else in your life is automated, why not your blinds? There are so many reasons to go electric. These motorised blinds give you the option to control your <a href="/made-to-measure-curtains" target="_blank" style="text-decoration: underline">window covering</a> with the use of a single remote. Unlike off-the-shelf blinds found online, you just have to speak to our team and we measure your windows with precision. We offer the full service from initial advice, followed by professional installation to complete instructions and programming. We work with expert companies like Somfy, Nice, and Motion, known for their high-quality motors and integration with smart home systems. With these brands on our side, we offer <a href="/blinds/motorised-blinds" target="_blank" style="text-decoration: underline">remote control blinds</a> that are smooth, reliable, and long-lasting. Whether you want a simple electric blind or fully connected, we’ve got the right motorisation system for you.',
//   infoImage: moto1,
//   measureTitle: '“Hey Alexa, lower my Blinds”',
//   measureDescription:
//     "With motorised systems, you can control them with a remote, your smartphone, or even your voice using Google Home, Apple HomeKit, or Amazon Alexa. Open and close your window coverings from anywhere in the house—or even while you're away. It's all about making things simpler and more flexible for you.",
//   chooseustitle: 'Why Choose Us For Your Motorisation?',
//   chooseustitle1: 'Control your windows anytime, anywhere!',
//   measureTitle1: 'Set Your Own Schedule or Control Remotely',
//   measureDescription1:
//     'We love our customers and want to make things easier for them. If you have several blinds in your home, one remote can control them all. You can control them from anywhere in the world with a wifi hub. As we work daily with motorisation systems and have experience in handling them we will discuss pros and cons and give honest impartial advice.',
//   chooseUsItems: [
//     {
//       image: img1,
//       text: '10 Years warranty on all mechanical parts and labour',
//     },
//     {
//       image: img2,
//       text: 'A team of 50 staff to ensure perfection from start-to-finish',
//     },
//     {
//       image: img3,
//       text: 'In house production - quality is our concern, not yours',
//     },
//     { image: img4, text: 'We’re trusted, with over 700+ 5*reviews' },
//   ],
//   motorization: [
//     { text: 'Easily operate with remote. Smartphone, or voice command.' },
//     {
//       text: 'Block out harmful UV rays, reducing energy usage and utility costs.',
//     },
//     {
//       text: 'Perfect for individuals with mobility or accessibility challenges.',
//     },
//     {
//       text: 'Programmable to block out sunlight at specific times, ensuring privacy.',
//     },
//     {
//       text: 'Adjust the amount of light entering your home to create the perfect ambiance.',
//     },
//   ],
//   additionalDescription:
//     "There's no hard sell just relaxed and pressure-free consultation",
//   additionalImage: moto2,
//   additionalDescription2:
//     "We believe in making your experience as stress-free as possible. Our team members are paid a fair living wage, meaning they are here for you. Rest assured, no one is working on commission here. Our team’s priority is to provide honest, helpful advice that’s best for you—not to push for a sale. If you choose to go with us, congratulations. If not we’ll send you your quotation by email and one follow up call. Then it's up to you to decide.",
//   additionalDescription3:
//     'We approach every consultation the way we’d like to be treated: with honesty and zero pressure. If you’re interested in a no-obligation quotation, you can give our friendly team a call, or simply fill out the online contact form, and we’ll get back to you quickly.',
// };

//Moterised Curtains Data
// export const motorisedPageData1 = {
//   title: 'Motorised Curtains',
//   heroImage: bgBreadcrum,
//   infoTitle: 'MOTORISED CURTAINS',
//   infoSubtitle: 'Convert your windows into Smart Windows ',
//   infoDescription:
//     "Our passion for excellence makes us more than just a window covering company. There are so many reasons to go electric. Everything else in your life is automated, why not your blinds?  Set timers for your curtains to open and close at certain times so you can enjoy the warmth of natural sunlight. Make your everyday life easier with motorised curtains. It's great for people who have mobility problems or are away from home a lot. It's much easier to close modern automated curtains for windows that are high or hard to reach. Our salespeople won't push you to buy; we'll help you find the one that's right for you. With whisper-quiet motors, our automated curtains operate smoothly, continuously for years to come. Since we're confident in our products, we offer free uninstall and reinstall services within the first 2 years, plus a 10-year warranty that covers all mechanical parts.",
//   infoImage: moto1,
//   measureTitle: 'Made to Measure Motorised Curtains',
//   measureDescription: `Just say the word, and let your motorisation system do the rest. It's now easier to control them with a remote, a smartphone, or even a voice command ("Alexa, close the curtains") using Amazon Alexa, Apple HomeKit, or Google Home. From anywhere in the house, you can open and close your curtains. It's all about making things simpler and more flexible for you.`,
//   chooseustitle: 'Why Choose Us For Your Motorisation?',
//   chooseustitle1: 'Control your windows anytime, anywhere!',
//   measureTitle1: 'Set Your Own Schedule or Control Remotely',
//   measureDescription1: `We handle everything, from consultation to installation. Besides setting up, we'll teach you how to use your system so you feel confident. We work with industry leaders like Somfy, Nice, and Motion to give you control over your smart home through apps, remotes, and voice assistants.`,
//   chooseUsItems1: [
//     {
//       image: img1,
//       text: '10 Years warranty on all mechanical parts and labour',
//     },
//     {
//       image: img2,
//       text: '50 experts to make sure perfection is maintained from start-to-finish',
//     },
//     {
//       image: img3,
//       text: `Quality production - we're in it for the long haul`,
//     },
//     {
//       image: img4,
//       text: 'More than 700 5-star reviews prove our reputation as trusted',
//     },
//   ],
//   motorization1: [
//     {
//       text: 'Easily operate with remote. Smartphone, or voice command.',
//     },
//     {
//       text: 'Save money and protect your home from UV rays.',
//     },
//     {
//       text: `It's perfect for people with mobility or accessibility issues.`,
//     },
//     {
//       text: 'You can set it up to block out the sun at specific times.',
//     },
//     {
//       text: 'Adjust the amount of light entering your home to create the perfect ambiance.',
//     },
//   ],
//   additionalDescription: `There's no hard sell just relaxed and pressure-free consultation`,
//   additionalImage: moto2,
//   additionalDescription2: `At Blinds and Curtains Dubai, choosing window coverings should be fun and enjoyable instead of stressful. So we designed our consultations to be relaxed and informative. Our team is here to guide you, not to push you. We take the time to fully understand your needs and provide solutions that genuinely work for your space, whether you're looking for fabrics, motorised options, or light control advice.`,
//   additionalDescription3: `Every home is different, and every customer has a different taste. That's why we listen to you and offer honest, helpful advice during our consultations. There's no hustle, no pressure, and definitely no hard sell.`,
// };

export const Cateories = [9, 2, 5, 12];

//BathroomBlindsData
export const BathroomBlindsData = [
  {
    imgsrc: '/assets/images/bathroom-blinds/Rectangle1.png',
    title: 'BATHROOM ROLLER BLINDS',
    description:
      'Choose a Roller blind for a neat and clutter-free finish. From fun prints to textured plains, all in moisture-resistant fabrics, you’re sure to find the perfect bathroom blinds, whatever your style of bathroom. Roller blinds are ideal for any bathroom where you want to maximise light and space. They filter the light beautifully while giving you much-needed privacy, especially in downstairs bathrooms and rooms that are overlooked.',
    buttontext: 'VIEW OUR ROLLER BLINDS',
  },
  {
    imgsrc: '/assets/images/bathroom-blinds/Rectangle2.png',
    title: 'BATHROOM VENETIAN BLINDS',
    description:
      'Venetian blinds come in a wide range of colours, metallic shades, and special finishes for a sleek and contemporary look. Practical and easy to maintain, Venetian blinds are great for bathrooms. They are ideal for windows that are away from sinks, showers, and baths.',
    buttontext: 'VIEW OUR VENETIAN BLINDS',
  },
  {
    imgsrc: '/assets/images/bathroom-blinds/Rectangle1.png',
    title: 'BATHROOM VERTICAL BLINDS',
    description:
      'Ideal for large glazed windows and doors, Vertical blinds a great option for bathrooms and wet rooms, where their moisture-resistant properties are a real bonus. Vertical blinds come in a fantastic array of designs and fabrics that work particularly well in contemporary spaces. Durable and hardwearing PVC fabrics are especially suited to steamy bathrooms and wet rooms.',
    buttontext: 'VIEW OUR VERTICAL BLINDS',
  },
  {
    imgsrc: '/assets/images/bathroom-blinds/Rectangle2.png',
    title: 'BATHROOM WOODEN BLINDS',
    description:
      'Wood Venetian blinds are the natural choice for those who like to mix a bit of elegance with timeless while giving a modern or classic feel to any room. These give you the same good looks, but with the added benefit of being moisture-resistant.',
    buttontext: 'VIEW OUR WOODEN BLINDS',
  },
  {
    imgsrc: '/assets/images/bathroom-blinds/Rectangle1.png',
    title: 'BATHROOM BLACKOUT BLINDS',
    description:
      'Our blackout blinds for bathrooms guarantee all the privacy you need, which is important if your bathroom is overlooked by neighbors or looks out onto the street. Many are available in PVC fabrics that are 100% waterproof, and they all block out the light.',
    buttontext: 'VIEW OUR BLACKOUT BLINDS',
  },
  {
    imgsrc: '/assets/images/bathroom-blinds/Rectangle2.png',
    title: 'BATHROOM SKYLIGHT BLINDS',
    description:
      'Our skylight blinds come in a range of colours to suit your style and with a selection of waterproof fabrics, you don’t have to worry about accidental splashes.',
    buttontext: 'VIEW OUR SKYLIGHT BLINDS',
  },
];

export const infoSectionData = {
  title: 'Lorem Ipsum is simply dummy text of',
  description:
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

export const colorData: IColorData[] = [
  {
    id: 1,
    name: 'Off White Shutters',
    color: 'FAF9EF',
    url: '/shutters-range/off-white-shutters',
    imageUrls:[
      {
        imageUrl: '/assets/images/optimized-images/Color/Off-white/Off white tier on tier shutters.webp',
        altText: 'Off White Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Off-white/Off white tracked window shutters.webp',
        altText: 'Off White Shutters'
      },
    ]
  },
  {
    id: 2,
    name: 'White Shutters',
    color: 'FFFFFF',
    url: '/shutters-range/white-shutters',
    imageUrls:[
      {
        imageUrl: '/assets/images/optimized-images/Color/White-shutters/White cafe style shutters.webp',
        altText: 'White Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/White-shutters/White Cafe style Shutters (2).webp',
        altText: 'White Shutters'
      },
    ]
  },
  {
    id: 3,
    name: 'Black Shutters',
    color: '000000',
    url: '/shutters-range/black-shutters',
    imageUrls:[
      {
        imageUrl: '/assets/images/optimized-images/Color/Black-shutters/Full-height-shutters.jpg',
        altText: 'Black Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Black-shutters/Full-height-shutters-.jpg',
        altText: 'Black Shutters'
      },
    ]
  },
  {
    id: 4,
    name: 'Grey Shutters',
    color: '808080',
    url: '/shutters-range/grey-shutters',
    imageUrls:[
      {
        imageUrl: '/assets/images/optimized-images/Color/Grey-color/Grey color Bifold shutters.webp',
        altText: 'Grey Shutters'
      },
      
    ]
  },
  {
    id: 5,
    name: 'Dark Wood Shutters',
    color: '815438',
    url: '/shutters-range/dark-wood-shutters',
    imageUrls:[
      {
        imageUrl: '/assets/images/optimized-images/Color/Dark-wood/Full-height-shutters-(-Dark-wood).jpg',
        altText: 'Dark Woods Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Dark-wood/Special shaped shutters ( Dark wood).webp',
        altText: 'Dark Woods Shutters'
      },
    ]
  },
  {
    id: 6,
    name: 'Light Wood Shutters',
    color: 'deb887',
    url: '/shutters-range/light-wood-shutters',
    imageUrls:[
      {
        imageUrl: '/assets/images/optimized-images/Color/Light-wood/Light wood bay window shutters.jpg',
        altText: 'Light Woods Shutters'
      },
      
    ]
  },
  {
    id: 7,
    name: 'Bold Colour Shutters',
    color: '8f1601',
    url: '/shutters-range/bold-colours-shutters',
    imageUrls:[
      {
        imageUrl: '/assets/images/optimized-images/Color/Bold-colors/Bold color shutters (1).webp',
        altText: 'Bold Colour Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Bold-colors/Bold color shutters (2).webp',
        altText: 'Bold Colour Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Bold-colors/Bold color shutters.webp',
        altText: 'Bold Colour Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (1).webp',
        altText: 'Bold Colour Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (2).webp',
        altText: 'Bold Colour Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (3).webp',
        altText: 'Bold Colour Shutters'
      },
      {
        imageUrl: '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (4).webp',
        altText: 'Bold Colour Shutters'
      },
      
    ]
  },
];

export const ByColorContent = [
  {
    slug: '/shutters-range/off-white-shutters',
    content: {
      heading: 'Off White Colour Shutters',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      subheadingContent: [
        {
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/white-shutters',
    content: {
      heading: 'White Colour Shutters',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      subheadingContent: [
        {
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/black-shutters',
    content: {
      heading: 'Black Colour Shutters',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      subheadingContent: [
        {
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/dark-wood-shutters',
    content: {
      heading: 'Dark Woods Colour Shutters',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      subheadingContent: [
        {
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/bold-colours-shutters',
    content: {
      heading: 'Bold Colour Shutters',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      subheadingContent: [
        {
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/grey-shutters',
    content: {
      heading: 'Grey Colour Shutters',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      subheadingContent: [
        {
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/light-wood-shutters',
    content: {
      heading: 'Light Woods Shutters',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
      subheading1: 'Custom Window Blinds ',
      subheading2: '35 Styles + 2000 Different Materials',
      subheadingContent: [
        {
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
        },
      ],
    },
  },
];
export const specificTitles = [
  'Living Room Blinds',
  'Staircase Blinds',
  'Bedroom Blinds',
  'Conservatory Blinds',
  'Study Room Blinds',
  'Dining Room Blinds',
  'Kitchen Blinds',
  'Kids Room Blinds',
  'Bathroom Blinds',
  'Bedroom Curtains',
  'Conservatory Curtains',
  'Living Room Curtains',
  'Kids Room Curtains',
  'Home Curtains',
  'Room Curtains',
  'Dining Room Curtains',
  'Staircase Curtains',
  'Kitchen Shutters',
  'Bathroom Shutters',
  'Living Room Shutters',
  'Staircase Shutters',
  'Dining Room Shutters',
  'Bedroom Shutters',
  'Indoor',
  'Skylight',
  'Balcony',
  'Pergola',
  'Outdoor',
];
export const officeBlindsItems = [
  'Office Blinds',
  'Office Curtains',
  'Office Roller Blinds',
  'Office Windows Curtains',
  'Office Windows Blinds',
  'Professional Blinds',
  'Custom Made-to-Measure Blinds',
  'Commercial Office Blinds',
];
export const ByRoomCommercialProduct = [
  {
    title: 'Indoor',
    productsTitles: [
      'motorised-blinds',
      'blackout-curtains',
      'bay-window-shutters',
      'daynight-blinds',
    ],
  },
  {
    title: 'Skylight',
    productsTitles: [
      'pleated-blinds',
      'tab-top-curtains',
      'dimout-blindssemi-transparent',
      'solid-panel-shutters',
    ],
  },
  {
    title: 'Balcony',
    productsTitles: [
      'blackout-blinds',
      'outdoor-shutters',
      'roman-blinds',
      'eyelet-curtains',
    ],
  },
  {
    title: 'Pergola',
    productsTitles: [
      'sheer-curtains',
      'blackout-curtains',
      'aluminium-blinds',
      'bi-fold-shutters',
    ],
  },
  {
    title: 'Outdoor',
    productsTitles: [
      'aluminium-blinds',
      'ripplefoldwave-curtains',
      'full-height-shutters',
      'sunscreentransparent-blinds',
    ],
  },
];

export const BooKNowbannerContent = [
  {
    url: '/blinds/roller-blinds',
    content:
      'Ready to get started? Call our sales team at (04) 252 2025 for a free quote or fill out the online form, and we&apos;ll be in touch',
  },
  {
    url: '/blinds/panel-blinds',
    content:
      'Need expert advice? We can make <a href="/made-to-measure-blinds" target="_blank" target="_blank" style="text-decoration: underline">custom window blinds</a> for you. Feel free to give us a call at (04) 252 2025, or fill out our online contact form, and we&apos;ll walk you through everything.',
  },
];

export const subCategoryName = [
  {
    name: 'Living Room Blinds',
    alterName: 'Made To Measure Blinds For Living Room',
  },
];

export const categorydata = [
  {
    category: 'Blinds',
    types: [
      {
        type: 'ALL',
        title: 'Explore Popular Made to Measure Blind Options',
        subtitle:
          'Our bespoke blinds are designed to meet your needs. Various types of window blinds are available in a variety of materials and colours, so you can create an ambience to suit your style.',
      },
      {
        type: 'By Style',
        title: 'Style Your Space',
        subtitle:
          'Pick blinds that match the vibe of your room, from minimalist to modern.',
      },
      {
        type: 'By Room',
        title: 'Blinds for Every Room',
        subtitle:
          'Find blinds crafted to enhance the look and feel of each specific space in your home.',
      },
      {
        type: 'dynamic',
        title: 'Practical Elegance',
        subtitle:
          'Explore our blinds sorted by their practical features, ensuring you get both style and functionality.',
      },
    ],
  },
  {
    category: 'Curtains',
    types: [
      {
        type: 'ALL',
        title: 'Explore Popular Made to Measure Blind Options',
        subtitle:
          'Our bespoke Curtain are designed to meet your needs. Various types of window Curtain are available in a variety of materials and colours, so you can create an ambience to suit your style.',
      },
      {
        type: 'By Style',
        title: 'Style Your Space',
        subtitle:
          'Pick Curtain that match the vibe of your room, from minimalist to modern.',
      },
      {
        type: 'By Room',
        title: 'Curtain for Every Room',
        subtitle:
          'Find Curtain crafted to enhance the look and feel of each specific space in your home.',
      },
      {
        type: 'dynamic',
        title: 'Curtain for Every Room',
        subtitle:
          'Find Curtain crafted to enhance the look and feel of each specific space in your home.',
      },
    ],
  },
  {
    category: 'shutters',
    types: [
      {
        type: 'ALL',
        title: 'Explore Popular Made to Measure shutters Options',
        subtitle:
          'Our bespoke shutters are designed to meet your needs. Various types of window shutters are available in a variety of materials and colours, so you can create an ambience to suit your style.',
      },
      {
        type: 'By Style',
        title: 'Style Your Space',
        subtitle:
          'Pick shutters that match the vibe of your room, from minimalist to modern.',
      },
      {
        type: 'By Room',
        title: 'shutters for Every Room',
        subtitle:
          'Find shutters crafted to enhance the look and feel of each specific space in your home.',
      },
      {
        type: 'dynamic',
        title: 'shutters for Every Room',
        subtitle:
          'Find shutters crafted to enhance the look and feel of each specific space in your home.',
      },
    ],
  },
];

//RelatedProductsDta
export const RelatedProductsdata =[
  { url:"/automated-blinds",
    para: "Explore our collection, each piece a showcase of exceptional window blinds design.",
  },
  { url:"/automated-curtains",
    para: "Explore our collection, each piece a showcase of exceptional window blinds design.",
  },
  { url:"/made-to-measure-blinds",
    para: "Explore our collection, each piece a showcase of exceptional window blinds design.",
  },
  { url:"/made-to-measure-curtains",
    para: "For quality curtain installation in Dubai, check out our services designed to make your living spaces more beautiful.",
  },
  { url:"/shutters-range",
    para: "Explore our range of Interior & Exterior Shutters, designed for both style and durability.",
  },
  { url:"/commercial",
    para: "Explore our collection, each piece a showcase of exceptional window blinds design.",
  },
]


export const  HiddenProducts_list =["Hotels & Restaurants , blinds & curtains","Study Room Blinds" ]