// src/data.ts
import exp from 'constants';
import {
  AboutStaticData,
  CardTypes,
  FeatureProductData,
  GalleryItems,
  OurHistory,
  ProductCardData,
  ProductItems,
  SocialDataType,
  SupportItem,
  TFooterSection,
  THeroImages,
  Tproductdata,
  TProductGuarantees,
  TsizePresets,
} from 'types/interface';
import { BlindsAndCurtainsTypes } from 'types/interface';
import { BannerData } from 'types/interface';
import { TRatingSlider } from 'types/interface';

export const generateSlug = (text: string) => {
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
  buttonText: 'Booking Now',
};

export const footerLinks: TFooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { text: 'Contact Us', href: '/contact-us' },
      { text: 'Knowledge Base', href: '/knowledge-base' },
      { text: 'Forums', href: '/forums' },
    ],
  },

  {
    title: 'Pages',
    links: [
      { text: 'Legal Information', href: '/legal-information' },
      { text: 'Privacy Policy', href: '/privacy-policy' },
      { text: 'Report Abuse', href: '/report-abuse' },
      { text: 'Terms of Service', href: '/terms-of-service' },
      { text: 'WHOIS Lookup', href: '/whois-lookup' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { text: 'Privacy Policy', href: '/privacy-policy' },
      { text: 'Return Policy', href: '/return-policy' },
      { text: 'Terms & Condition', href: '/terms-condition' },
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
      'Our collection is full of rich, bold colours, unusual designs, add simple elegance to a window',
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

export const ProductGuarantees: TProductGuarantees[] = [
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

export const aboutUsReviewData = [
  {
    id: 1,
    keys: '20 +',
    title: 'Years Experience',
  },
  {
    id: 2,
    keys: '375K',
    title: 'Work Completed',
  },
  {
    id: 2,
    keys: '19K',
    title: 'Client Satisfied',
  },
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
    id: 1,
    year: '2010',
    heading: 'Moved to an Office Building',
    discription:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has.',
  },
  {
    id: 1,
    year: '2013',
    heading: 'Completed 50K a large project',
    discription:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has.',
  },
  {
    id: 1,
    year: 'Now',
    heading: 'Have 4 branch office in 5 Country',
    discription:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has.',
  },
];

import * as Yup from 'yup';
import { Product, Category, FormValues } from 'types/interfaces';
import { ISUBCATEGORY } from 'types/types';

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
  // name: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  // description: Yup.string().required('Required'),
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
