// src/data.ts
import exp from 'constants';
import { KeyType } from 'types/interfaces';
import {
  AboutStaticData,
  BlogInfo,
  BlogProps,
  CardTypes,
  FeatureProductData,
  GalleryItems,
  NavType,
  OurHistory,
  ProductCardData,
  ProductItems,
  SocialDataType,
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
import { title } from 'process';

export const generateSlug = (text: string) => {
  if(!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

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
  heading: 'BLINDS & CURTAINS DUBAI',
  paragraph: [
    'Based in Dubai, specializes in all types of window coverings including blinds, curtains, and shutters. From apartments to royal residences, and offices to colleges all over Dubai. Providing not only a stylish addition to your windows but also functional.',
    'All our professional teams are based in Dubai and speak great English and will easily understand your blinds and curtains requirements and advise as best as they can. We have the largest selection of blinds in Dubai, if not the UAE (15 styles to choose from, each in a massive range of colour options).',
    'Whether you’re looking for a classy, chic, or modern design, we house the selection to fit your needs. Or perhaps you’d like some elegant made-to-measure curtains to adorn your windows? With over 3000 curtain fabric options, you’ll be spoilt for choice.',
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
  },
  {
    id: 2,
    name: 'g1.png',
    imageUrl: '/assets/images/Hero/g1.png',
  },
];
export const bannerData: BannerData = {
  imageUrl: '/assets/images/measure_shutter/measure_shutter.png',
  title: 'MADE TO MEASURE SHUTTERS FOR YOU..',
  buttonText: 'Book A Free Home Design Visit',
};

export const footerLinks: TFooterSection[] = [
  {
    title: 'Pages',
    links: [
      { text: 'About Us', href: '/about-us' },
      { text: 'Contact Us', href: '/contact-us' },
      { text: 'Request An Appointment', href: '/appointment' },
      { text: 'Product Guarantees', href: '/product-guarantees' },
      { text: 'Why Choose Us', href: '/choose-us' },
    ],
  },
];

export const footerInfo = '  ©Blindsand & Curtains  2024 All rights reserved';

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
    href: 'https://www.facebook.com/blindsandcurtainsdubai',
    src: '/assets/images/icon/face.png',
    alt: 'Facebook',
  },
  {
    href: 'https://twitter.com',
    src: '/assets/images/icon/link.png',
    alt: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/blindsandcurtainsdubai/',
    src: '/assets/images/icon/insta.png',
    alt: 'Instagram',
  },
  {
    href: 'https://wa.me/971544945339',
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
  heading: 'BLINDS, CURTAINS & SHUTTERS PRODUCT GUARANTEES',
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
    'A growing business based in the heart of Dubai with a showroom in Al Quoz. blindsandcurtains.ae draws on over 20 years of experience in the drapery industry. You can be assured of the highest level of service and knowledge available. All our advisors are fully trained in all aspects of blinds & curtains and will always offer you the best, most impartial, honest advice you could ask for.',
    'Most of our products are manufactured right here in the U.A.E, ensuring that we can quality control check every single item leaving our factory, and delivering and fitting to your home within a week in most cases. All our blinds are manufactured to British Standard (BBSA) and are custom-made to your specifications. Factories used for our imported products have been quality tested for months before we signed exclusive distribution rights with them.',
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

export const AddProductvalidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.string().required('Price is required'),
  // salePrice: Yup.number()
  //   .min(1, 'Minimum sales price must be at least 1')
  //   .required('Required'),
});

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
  canCheckProfit: false,
  canCheckRevenue: false,
  canCheckVisitors: false,
  canViewUsers: false,
  canViewSales: false,
  canVeiwAdmins: false,
  canVeiwTotalproducts: false,
  canVeiwTotalCategories: false,
};

export const blindMegaMenuItems = [
  { productName: 'motorised-blinds' },
  { productName: 'aluminium-venetian-blinds-dubai' },
  { productName: 'blackout-blinds' },
  { productName: 'colby-honeycomb-blinds' },
  { productName: '3d-blinds' },
  { productName: 'duplex-blinds' },
  { productName: 'skylight-blinds-dubai' },
  { productName: 'sheer-horizon-blinds' },
  { productName: 'panel-blinds' },
  { productName: 'roller-blinds' },
  { productName: 'roman-blinds' },
  { productName: 'vertical-blinds' },
  { productName: 'wood-venetian-blinds' },
];

export const curtainMegaMenuItems = [
  { productName: 'made-to-measure-bed-room-curtains' },
  { productName: 'blackout-curtains-dubai' },
  { productName: 'eyelet-curtains' },
  { productName: 'eyelet-curtains' },
  { productName: 'home-curtains' },
  { productName: 'hotel-curtains-dubai' },
  { productName: 'made-to-measure-living-room-curtains' },
  { productName: 'motorised-curtains' },
  { productName: 'pinch-pleat-curtains' },
  { productName: 'made-to-measure-sheer-curtains' },
  { productName: 'pinch-pleat-curtains' },
  { productName: 'goblet-pleat-curtains' },
  { productName: 'made-to-measure-linen-curtains' },
  { productName: 'triple-pinch-pleat-curtains' },
  { productName: 'stage-and-theatre-curtains' },
  { productName: 'made-to-measure-chiffon-curtains' },
];
export const shutterMegaMenuItems = [
  { productName: 'full-height-shutters' },
  { productName: 'bay-window-shutters' },
  { productName: 'tracked-window-shutters' },
  { productName: 'special-shape-shutters-wooden-shutters' },
  { productName: 'tier-on-tier-shutters-wooden-shutters' },
  { productName: 'solid-panel-shutters-plantation-shutters-dubai' },
];

export const commercialMegaMenuItems = [
  { productName: 'school-blinds' },
  { productName: 'office-blinds' },
  { productName: 'hotels-restaurants-blinds-curtains' },
  { productName: 'office-window-curtains' },
  { productName: 'printed-blinds' },
  { productName: 'printed-blinds' },
  { productName: 'hospital-curtains' },
  { productName: 'aluminium-venetian-blinds-dubai' },
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
  { productName: 'school-blinds' },

  { productName: 'hotels-restaurants-blinds-curtains' },
  { productName: 'blackout-blinds' },
  { productName: 'printed-blinds' },
  { productName: 'vertical-blinds' },
  { productName: 'panel-blinds' },
  { productName: 'special-shape-shutters-wooden-shutters' },
  { productName: 'tier-on-tier-shutters-wooden-shutters' },
  { productName: 'motorised-blinds' },
];

export const items = [
  {
    id: 1,
    text: 'Lorem is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    text: 'Lorem is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    text: 'Lorem is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 4,
    text: 'Lorem is simply dummy text of the printing and typesetting industry.',
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
//Landingpage
export const NavData : NavType[]=[
  {
    image: '/assets/images/Landing/vector.png',
   title:'We Can Visit you',
   description:'Take Measurements',
  },
  { image: '/assets/images/Landing/Vector1.png',
    title:'Help Select Fabrics',
    description:'install in 1-2 days ',
   },
   {image: '/assets/images/Landing/Group.png',
    title:'GUARANTEE',
    description:'3-YEAR',
  },
];
export const KeyData: KeyType[]=[
  {
    image:"/assets/images/Landing/guarantee.png",
    para:"we offer a fully comprehensive 5-year warrenty on all our motors",  
  },
  {
    image: "/assets/images/Landing/businessmen.png",
    para:"Our professional staff are fully trained to install as well as offer expert advice",  
  },
  {
    image:"/assets/images/Landing/ready.png",
    para:"we keep motors in stock, so no long delays waiting for stock",  
  },
  {
    image:"/assets/images/Landing/loyalty.png",
    para:"We only use the leading brands such as Somfy, nice and Motion",  
  },
  {
    image:"/assets/images/Landing/guarantee.png",
    para:"we offer a fully comprehensive 5-year warrenty on all our motors",  
  },
  {
    image: "/assets/images/Landing/businessmen.png",
    para:"Our professional staff are fully trained to install as well as offer expert advice",  
  },
  {
    image:"/assets/images/Landing/ready.png",
    para:"we keep motors in stock, so no long delays waiting for stock",  
  },
  {
    image:"/assets/images/Landing/loyalty.png",
    para:"We only use the leading brands such as Somfy, nice and Motion",  
  },
];

export const FeatureData=[{
    icon:"/assets/images/Landing/icon-automation1.png",
    title: "Lorem Ibsum Blinds:",
    list:[
      {heading:"Automated Scheduling" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
      {heading:"Enhanced Convenience" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
      {heading:"Automated Scheduling" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
      {heading:"Enhanced Convenience" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
    ],},
{
  icon:"/assets/images/Landing/icon-automation1.png",
  title: "Lorem Ibsum Blinds:",
  list:[
    {heading:"Automated Scheduling" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
    {heading:"Enhanced Convenience" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
    {heading:"Automated Scheduling" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
    {heading:"Enhanced Convenience" , para:"Set timers to automatically open or close your blinds at specific times for added convenience."},
  ],},
];

export const InstaData=[
  { video: "/assets/video/Agsons.mp4"
  },
  { video: "/assets/video/Agsons.mp4"
  },
  { video: "/assets/video/Agsons.mp4"
  },
  { video: "/assets/video/Agsons.mp4"
  },
  { video: "/assets/video/Agsons.mp4"
  },
  { video: "/assets/video/Agsons.mp4"
  },
];

export const ProductData=[
  {
    image: "/assets/images/Landing/image.png"
  },
  {
    image: "/assets/images/Landing/image2.png"
  },
];
export const TabData=[
{
  icon: "/assets/images/Landing/iconremote1.svg",
  title: "With a Control Your Motors",
  video: "/assets/video/Agsons.mp4",
  description: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting,"
},
{
  icon: "/assets/images/Landing/iconremote1.svg",
  title: "With a Control Your Motors2",
  video: "/assets/video/Agsons.mp4",
  description: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting,"
},
{
  icon: "/assets/images/Landing/iconremote1.svg",
  title: "With a Control Your Motors3",
  video: "/assets/video/Agsons.mp4",
  description: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting,"
},
{
  icon: "/assets/images/Landing/iconremote1.svg",
  title: "With a Control Your Motors4",
  video: "/assets/video/Agsons.mp4",
  description: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting,"
},
{
  icon: "/assets/images/Landing/iconremote1.svg",
  title: "With a Control Your Motors5",
  video: "/assets/video/Agsons.mp4",
  description: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting,"
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
//RollerMainPage
export const RollerBlindData = [
  {
    videoSrc: "/assets/video/Agsons.mp4",
    icon: "/assets/images/Rollerblind/roller.png",
    heading: "Blackout Roller Blinds",
    description: "What is Blackout Roller Blind Ibsum?",
    icon1: "/assets/images/Rollerblind/DualRoller.png",
    heading1: "Sunscreen Roller Blinds",
    description1: "What is Sunscreen Roller Blind Ibsum?",
    list: [
      { title: "Automated Scheduling", para: "Set timers to automatically open or close your blinds at specific times for added convenience." },
      { title: "Enhanced Convenience", para: "Set timers to automatically open or close your blinds at specific times for added convenience." },
      { title: "Automated Scheduling", para: "Set timers to automatically open or close your blinds at specific times for added convenience." }
    ]
  }
];
export const KeyFeaturesData=[
  {
    icon:"/assets/images/Rollerblind/design1.png",
    heading:"Lorem Ipsum",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
  {
    icon:"/assets/images/Rollerblind/design1.png",
    heading:"Lorem Ipsum",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  },
  {
    icon:"/assets/images/Rollerblind/order1.png",
    heading:"Lorem Ipsum",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
  {
    icon:"/assets/images/Rollerblind/design1.png",
    heading:"Lorem Ipsum",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
];
export const ReviewsData=[
  {
  id: 1,
  name:"Masuad Rana",
  date:"jun 22, 2024",
  text:"This is very good website . I highly recomit👍 adipiscing elit. Sagittis, sagittis neque egesta velit, nec, malesuada tellus. Urna"
},
{
  id: 1,
  name:"Masuad Rana",
  date:"jun 22, 2024",
  text:"This is very good website . I highly recomit👍 adipiscing elit. Sagittis, sagittis neque egesta velit, nec, malesuada tellus. Urna"
},
{
  id: 1,
  name:"Masuad Rana",
  date:"jun 22, 2024",
  text:"This is very good website . I highly recomit👍 adipiscing elit. Sagittis, sagittis neque egesta velit, nec, malesuada tellus. Urna"
},
{
  id: 1,
  name:"Masuad Rana",
  date:"jun 22, 2024",
  text:"This is very good website . I highly recomit👍 adipiscing elit. Sagittis, sagittis neque egesta velit, nec, malesuada tellus. Urna"
},
];
export const BlackoutRollerData=[
  {
    heading:"BLACKOUT ROLLER BLINDS",
    text:"See our comprehensive Blinds range Find the perfect made-to-measure  ds within our exclusive range. There are many shades and stunning patterns to select from",
    list:[
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 907.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 906.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 901.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 902.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 908.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 900.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 905.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 903.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
      {
        imageurl:"/assets/images/Rollerblind/Rectangle 904.png",
        text:"Thermal Blackout Black Roller Blind",
        icon:"/assets/images/Rollerblind/Groupwww.png",
      },
    ]
  }
]