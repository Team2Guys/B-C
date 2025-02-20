import moto1 from '../../public/assets/images/MotorisedBlind/blind.png';
import moto3 from '../../public/assets/images/MotorisedBlind/blind1.png';
import img1 from '../../public/assets/images/MotorisedBlind/guarantee1.png';
import img2 from '../../public/assets/images/MotorisedBlind/businessmen1.png';
import img3 from '../../public/assets/images/MotorisedBlind/ready-stock.png';
import img4 from '../../public/assets/images/MotorisedBlind/loyalty-program.png';
import moto2 from '../../public/assets/images/MotorisedBlind/curtain.png';
import moto4 from '../../public/assets/images/MotorisedBlind/curtain1.png';

import {
  Email,
  IColorData,
  ITopHeroLink,
  OurHistory,
  PhoneNumber,
  SupportItem,
  TFooterSection,
  THeroImages,
  Tproductdata,
  TProductGuarantees,
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

export const reverseSlug = (slug: string): string => {
  if (!slug) return '';

  return slug
    .toString()
    .replace(/-/g, ' ') 
    .replace(/\s+/g, ' ') 
    .replace(/^\s+|\s+$/g, '') 
    .replace(/\b\w/g, (match) => match.toUpperCase()); 
};



export const BlindsAndCurtainstData: BlindsAndCurtainsTypes = {
  image: '/assets/images/blind-curtains-dubai/blinds-curtains-dubai1.png',
  heading: 'We offer window treatments for homes or offices in Dubai',
  paragraph: [
    `Based in Dubai, we specialise in all types of window coverings including blinds, curtains, and <a href="/shutters-range" target="_blank" style="text-decoration: underline"><b>shutters</b></a>. From apartments to royal residences, and offices to colleges all over Dubai. Providing not only a stylish addition to your windows but also function. Blinds and Curtains Dubai has the largest selection of <a href="/made-to-measure-blinds" target="_blank" style="text-decoration: underline"><b>custom blinds</b></a> in Dubai, if not the UAE (15 styles to choose from, each in a massive range of colour options).

   As a trusted window treatment company, we bring style and functionality to every room. Whether you’re looking for custom blinds, or <a href="/curtains/blackout-curtains-dubai" target="_blank" style="text-decoration:underline"><b>blackout curtains </b></a> we house the selection to fit your needs. Or perhaps you’d like some elegant made-to-measure <a href="/made-to-measure-curtains" target="_blank" style="text-decoration: underline"><b>curtains</b></a> to adorn your windows? With over 3000 curtain fabric options, you’ll be spoilt for choice.`,
  ],
  buttonText: 'Read More',
};


export const heroSlider = [
  {
    id: 1,
    name: 'blinds.png',
    imageUrl: '/assets/images/Hero/blinshd.png',
    heading: 'The Home of Customised',
    subheading: 'Window Coverings',
    content:"Our beautiful collection of window covering isn't the only thing that makes us stand out. A lot of it has to do with how we treat you right from the moment you contact us to the moment your project is complete."  },
  {
    id: 2,
    name: 'curtains.png',
    imageUrl: '/assets/images/Hero/curtainshd.png',
    heading: 'Made To Measure Window  ',
    subheading: 'Curtains In Dubai',
    content:"Finding a reliable curtains company in Dubai is no easy task, but Blinds and Curtains make it simple. You can choose from 1000s of fabrics and colours - velvets, silks, and plain textures.",
  },
  {
    id: 3,
    name: 'shutters.png',
    imageUrl: '/assets/images/Hero/shuttershd.png',
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
      { text: 'Our Projects', href: '/projects' },
      { text: 'Product Guarantees', href: '/product-guarantees' },
      { text: 'Why Choose Us?', href: '/why-choose-blinds-curtains' },
      { text: 'Book A Free Appointment', href: '/request-appointment' },
     
    ],
  },
];

export const footerInfo = 'Blinds & Curtains 2025 All Rights Reserved';

export const phoneNumberInfo: PhoneNumber = {
  number: '+971 54 494 5339',
};
export const WhatsAppInfo: PhoneNumber = {
  number: '+971 54 494 5339',
};
export const EmailInfo: Email = {
  email: 'sales@blindsandcurtains.ae',
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

export const RatingSlider: TRatingSlider = {
  imageUrl: '/assets/images/googleReview/qautes.png',
  StarImage: '/assets/images/googleReview/star.png',
};
export const HeroImages: THeroImages = {
  logo: '/assets/images/logomain.webp',
  backImage: '/assets/images/hero/back2.jpeg',
  defaultBackImage: '/assets/images/hero/BACK.jpeg',
};
export const productData: Tproductdata = {
  title: 'PRODUCT GUARANTEES',
  sideImage: '/assets/images/product-guarantees/guarantee1.png',
  sideImage1: '/assets/images/product-guarantees/guarantee2.png',
  heading: 'BLINDS, CURTAINS & SHUTTERS PRODUCT GUARANTEES',
  content:
    'We at <a href="/" target="_blank" style="text-decoration:underline">blindsandcurtains.ae</a> know our products will complement your home now and in the future. All our made-to-measure <a href="/made-to-measure-blinds" target="_blank" style="text-decoration:underline">blinds</a>, <a href="/made-to-measure-curtains" target="_blank" style="text-decoration:underline">curtains</a>, and <a href="/shutters-range" target="_blank" style="text-decoration:underline">shutters</a> come with a 10-year mechanical and labour warranty. We make sure all our products are of high quality, but if something goes wrong, our team will visit to assess the situation. With them, you can be sure your problem will be handled with care, whether with a quick fix or a replacement. We stand behind our work so that you can trust us.',
};


export const PGuarantees: TProductGuarantees[] = [
  {
    heading: 'What Our Guarantee Cover?',
    text: `When choosing blindsandcurtains.ae, you're buying beautiful window dressings and getting a customer service experience that is unmatched in Dubai. From <b class="text-black font-bold">free consultation and installation</b> to an after-sales care package, you can rest assured that you’ll be in good hands for the lifetime of your blinds, curtains or shutters. We understand how important fabric quality is to your blinds and curtains. That’s why we offer a <b class="text-black font-bold">3-year warranty</b> on all fabrics used in our products. From the track to the rod and every mechanism in between, every component of your blinds and curtains is durable. There's a <b class="text-black font-bold">10-year warranty on</b> all moving and static parts, so you're covered for the long term.If your custom window covering doesn’t perform as it should within <b class="text-black font-bold">10 years of installation</b>, we’ll fix it or give you a replacement of your choice. We do this so you'll always have a solution that works.`,
    image: '/assets/images/product-guarantees/guarantee3.png',
    imageAlign: 'left',
  },
  {
    heading: 'The Best Quality and Workmanship',
    text: "Great care and pride is attached to everything we do. As soon as they are installed, you can count on our support. This is our commitment to you.For over a decade, we’ve been helping homes across Dubai achieve stunning, functional window solutions. From transparent pricing to honest advice, we’ve built a reputation for reliability. Our <b class='text-black font-bold'>750+ 5-star reviews</b> speak to the trust our customers place in us.Call or email our support team, and we’ll guide you through the next steps. To fix the problem, our technicians will come to you when it's convenient for you. The <b class='text-black font-bold'>warranty</b> covers all labour costs and parts replacements. Moreover, we provide free uninstall/reinstall services within two years, protecting your peace of mind during renovations.",
    image: '/assets/images/product-guarantees/guarantee4.png',
    imageAlign: 'right',
  },
];

export const AboutUsPara = {
  id: 1,
  subheading: 'About Us',
  heading: ['Our Journey'],
  paragraph: [
    'Having spent 20 years in the UK retail industry, our Managing Partner, Shiraz, decided it was time for sunnier climes and moved to Dubai in 2014 with his family. The first office was a stunning waste of space on Sheikh Zayed Road, which gave Shiraz a fantastic view of Burj Khalifah, but chewed through his finances like water. School fees were duly paid and a move to a compact but cosy office in Port Saeed was home for the next 2 years.',
    'Like a lot of business people that move to Dubai, the first 2 years were painfully hard to adjust, but with the drive and ambition to succeed, and with a helping hand from God, things started to turn and the seeds that were laid in 2014 started bearing fruit.',
    'By 2017, we moved to our first actual showroom in Oud Metha. This is where things started to blow. Blinds and Curtains was now established as a firm favourite with hundreds of customers, most of whom would recommend us to their friends and families and also ended up being our return customers.',
  ],
};
export const UsHistoryPara = {
  id: 1,
  paragraph: [
    'This cycle ran successfully for many years but by 2021, with covid out the way, we figured it was time to push the barriers further. We had already introduced flooring, wallpaper and other items to our list of services offered, but the name felt restrictive. It was also around this time that lots of other companies turned up with copycat versions of our name (we guess blindsandcurtains.ae can’t really be expected to be exclusive) and it was quite confusing for our existing customers and quite a few were misled into buying from companies claiming to be us.',
    'With this in mind, we decided on a brand and image change. After weeks of deliberating, Shiraz’s brother Valy, (who had since followed his brother and made the move to Dubai), came up with Two Guys. It was instant love for both brothers and that is the name we trade as today. But with <a href="https://www.blindsandcurtains.ae" target="_blank" style="text-decoration: underline">www.blindsandcurtains.ae</a> having so many loyal customers, it would have been suicidal to wrap up and bury, so the brand is still alive and kicking today, albeit under the Two Guys Home Furnishings brand.',
    'Today we employ over 60 staff, dedicated to giving our customers the level of satisfaction that the owners themselves would accept (Shiraz literally has OCD). Our staff are trained to give impartial advice, to NEVER be pushy in their sales pitch and to NEVER “up-sell” when not required. Once we have you as a customer, our goal is to keep you for life, so you will find that the service doesn’t end once the final payments have been made. Your journey is a part of our journey, and we believe we have a long way to go before reaching the end of the road.',
  ],
};


export const OurHistoryData: OurHistory[] = [
  {
    id: 1,
    year: '1999',
    heading: 'Our UK fashion business wins Scottish Retailer of The Year Award',
    discription:
      'We started strong by winning the Scottish Retailer of the Year, setting a high standard from the outset. This early recognition defined our dedication to quality in the fashion industry.',
  },
  {
    id: 2,
    year: '2014',
    heading:
      '<a href="https://www.blindsandcurtains.ae" target="_blank" style="text-decoration: underline">www.blindsandcurtains.ae</a> is born',
    discription:
      'We entered the online world with blindsandcurtains.ae to expand our reach and redefine the way we interact with our customers.',
  },
  {
    id: 3,
    year: '2016',
    heading: 'Started manufacturing ourselves',
    discription:
      'Making our own products gave us greater control over quality and design, so we could better meet our customers needs.',
  },

  {
    id: 4,
    year: '2023 ',
    heading: 'Re-branded to Two Guys & moved to Al Quoz',
    discription:
      'We moved to Al Quoz as part of our company rebranding, taking advantage of new opportunities to better serve our customers.',
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
  { name: 'discountPrice', type: 'number' },
];

export const CategorinputFields = [{ name: 'name', type: 'text' }];


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
  Images_Alt_Text: '',
  Canonical_Tag: '',
  Meta_Title: '',
  Meta_description: '',
};

export const loginInitialValue = {
  name: '',
  password: '',
};


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
  Meta_Title: '',
  Meta_description: '',
  Canonical_Tag: '',
  Images_Alt_Text: '',
};



export const subcategoryInitialValues: ISUBCATEGORY = {
  title: '',
  description: '',
  CategoryId: undefined,
  Meta_Title: '',
  Meta_description: '',
  Canonical_Tag: '',
  Images_Alt_Text: '',
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
  { productName: 'panel-blinds' },
  { productName: 'aluminium-blinds' },
  { productName: 'wooden-blinds' },
  { productName: 'roman-blinds' },
  { productName: 'roller-blinds' },
  { productName: 'zebra-blinds' },

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

  { productName: 'stripes-curtains' },
  { productName: 'geometric-curtains' },
  { productName: 'textured-curtains' },
  { productName: 'kids-prints-curtains' },
  { productName: 'natural-fabric-curtains' },
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
  { productName: 'dining-room-shutters' },
  { productName: 'tracked-shutters' },
];

export const commercialMegaMenuItems = [
  { productName: 'hospitals' },
  { productName: 'auditoriums' },
  { productName: 'hotels-restaurants' },
  { productName: 'schools' },
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
  'offices-blinds',
  'hotels-restaurants',
  'printed-blinds',
  'school-blinds',
  'sunscreentransparent',
  'vertical-blinds',
  'aluminium-blinds',
  'blackout-blinds',
  'motorised-blinds',
  'panel-blinds',
  'roman-blinds',
];
export const staticDescriptions: Record<string, string> = {
  'offices-blinds':
    'Our blinds are available in roller, vertical, and Venetian designs. These office blinds for windows offer corporate logos for brand identity.',
  'hotels-restaurants':
    'Hotel blinds with blackout, sheer, and layered options are suitable for luxury hotel window treatments. We offer sophisticated looks for hotel guests.',
  'printed-blinds':
    'Printed blinds offer dual-layer fabric combining translucent and opaque stripes. These printed zebra blinds provide a modern, artistic look  for residential or commercial spaces.',
  'school-blinds':
    'Our durable roller and vertical blinds provide bright, engaging colors to school window coverings. These blinds improve the focus of students on the whiteboard by regulating classroom light.',
  sunscreentransparent:
    'Sunscreen Roller Blinds offer Light-filtering fabrics. These transparent blinds provide a clear view of the outdoors offices, hotels, and homes with large windows.',
  'vertical-blinds':
    'Our vertical blinds are  perfect for office and home use. These are a combination of vertical blinds and layered curtains which adds an extra layer of insulation.',
  'aluminium-blinds':
    'Our horizontal or vertical blinds offer metallic finish. These lightweight aluminum blinds for windows are suitable for modern kitchens, bathrooms, and offices.',
  'wooden-blinds':
    'We Offer natural wood blinds that are available in various stains and finishes. These Wood panel window blinds complement classic and modern interior.',
  'blackout-blinds':
    'Roller, Roman, and pleated blackout blinds are custom fit to any window size. These Custom blackout blinds are ideal for restful sleep or focused work.',
  'motorised-blinds':
    'We offer roller, Venetian, and vertical designs for our custom electric blinds. These motorised blinds provide remote or device-controlled convenience.',
  'panel-blinds':
    'Panel blinds offer large fabric panels that slide smoothly. These Panel blinds for windows are perfect for wide windows and sliding doors. ',
  'roman-blinds':
    'For classic or modern look our roman blinds offer custom fit fabric folds. These office blinds for windows provide blackout and translucent options.',
};


export const megaMenubyStyle = [
  { productName: 'vertical-blinds' },
  { productName: 'zipline-outdoor-blinds' },
  { productName: 'honeycomb-blinds' },
  { productName: 'panel-blinds' },
  { productName: 'aluminium-blinds' },
  { productName: 'daynight-blinds' },
  { productName: 'zebra-blinds' },
  { productName: 'wooden-blinds' },
  { productName: 'roman-blinds' },
  { productName: 'roller-blinds' },

  { productName: 'outdoor-shutters' },
  { productName: 'solid-panel-shutters' },
  { productName: 'cafe-style-shutters' },
  { productName: 'tier-on-tier-shutters' },
  { productName: 'bay-window-shutters' },
  { productName: 'bi-fold-shutters' },
  { productName: 'full-height-shutters' },

  { productName: 'pencil-pleat-curtains' },
  { productName: 'ripplefoldwave-curtains' },
  { productName: 'tab-top-curtains' },
  { productName: 'eyelet-curtains' },
  { productName: 'double-pinch-pleat-curtains' },
  { productName: 'triple-pinch-pleat-curtains' },

  { productName: 'hospitals' },
  { productName: 'auditoriums' },
  { productName: 'hotels-restaurants' },
  { productName: 'schools' },
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
  { productName: 'office-blinds' },
  { productName: 'study-room-Blinds' },
  { productName: 'dining-room-blinds' },
  { productName: 'living-room-curtains' },
  { productName: 'dining-room-curtains' },
  { productName: 'bedroom-curtains' },
  { productName: 'kids-room-curtains' },
  { productName: 'staircase-curtains' },
  { productName: 'conservatory-curtains' },

  { productName: 'outdoor-blinds-and-curtains' },
  { productName: 'indoor-blinds-and-curtains' },
  { productName: 'skylight' },
  { productName: 'balcony-blinds-and-curtains' },
  { productName: 'pergola-curtains' },
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
  { productName: 'motorised-blinds' },
  { productName: 'dimout-blinds' },

  { productName: 'white-shutters' },
  { productName: 'light-wood-shutters' },
  { productName: 'off-white-shutters' },
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
  { productName: 'motorised-curtains' },
  { productName: 'goblet-pleat-curtains' },
  { productName: 'triple-pinch-pleat-curtains' },
  { productName: 'ripplefoldwave-curtains' },
  { productName: 'pelmet-curtains' },
  { productName: 'modern-curtains' },
  { productName: 'tab-top-curtains' },
  { productName: 'pencil-pleat-curtains' },

  { productName: 'full-height-shutters' },
  { productName: 'bay-window-shutters' },
  { productName: 'tracked-shutters' },
  { productName: 'special-shape-shutters' },
  { productName: 'solid-panel-shutters' },
  { productName: 'bi-fold-shutters' },
  { productName: 'outdoor-shutters' },
  { productName: 'cafe-style-shutters' },
  { productName: 'automated-curtains' },
  { productName: 'automated-blinds' },

];

export const extendedByRoom = [
  { productName: 'kids-room-blinds' },
  { productName: 'study-room-blinds' },
  { productName: 'dining-room-blinds' },
  { productName: 'conservatory-blinds' },
  { productName: 'staircase-blinds' },
  { productName: 'door-blinds' },
  { productName: 'bedroom-blinds' },
  { productName: 'office-blinds' },
  { productName: 'bathroom-blinds' },
  { productName: 'school-blinds' },
  { productName: 'offices-blinds' },

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
  { productName: 'hotel-curtains' },
  { productName: 'office-curtains' },
  { productName: 'door-curtains' },

];
export const extendedDynamic = [
  { productName: 'motorised-blinds' },
  { productName: 'blackout-blinds' },
  { productName: 'skylight-blinds-dubai' },
  { productName: 'blackout-roller-blinds' },
  { productName: 'sunscreen-blinds' },
  { productName: 'dimout-blinds' },
  { productName: 'translucent-blinds' },

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
  { productName: 'linen-curtains' },
  { productName: 'chiffon-curtains' },

];

export const AddProductvalidationSchema = Yup.object().shape({

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
  {
    matchingTitle: 'blog',
    title: 'blog',
  },
];


export const categoriesContent = [
  {
    slug: 'made-to-measure-blinds',
    content: {
      heading: 'Made to Measure Blinds',
      src: '/assets/video/mainblinds.mp4',
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
            'Book a free, no-pressure appointment today by clicking the button below',
        },
      ],
    },
  },
  {
    slug: 'made-to-measure-curtains',
    content: {
      heading: 'Made to Measure Curtains',
      src: '/assets/video/curtains.mp4',
      paragraph:
        '1000s of colour and style choices—voiles, velvets, silks, and plain textured fabrics. Get curtains installed in your Dubai home or office, with free consultation, quick installation, and 5-year warranty.',
      subheading1: 'Custom Window Curtains ',
      subheading2: 'More than 6 Styles + 2000 Different Materials & Colours',
      posterImage: '/assets/images/Curtain/landing/landing.webp',
      subheadingContent: [
        {
          content:
            "When it comes to curtains, there is no such thing as 'standard. We offer <a href='/curtains/made-to-measure-sheer-curtains' style='text-decoration: underline'>sheer curtains</a> to create smooth, flowing elegance, pinch pleats to provide refinement, and eyelets to add simplicity without sacrificing style. With fabrics that do more-like <a href='/curtains/blackout-curtains-dubai' style='text-decoration: underline'>blackout curtains</a> for better sleep or textures that add warmth-you'll see we're more than providing a standard curtains service. ",
        },
        {
          content:
            'As the most reliable <a href="/" target="_blank" style="text-decoration: underline">window covering company in Dubai</a> with 700+ 5-star reviews on google, we are not here just to sell; we are here to help you in making the right choice. Our team is committed to listening to your needs and understanding your space honestly and without pressure. Our expert installers make, measure, and install curtains with care, so you get the finest. Keeping these high standards means making customers feel appreciated and valued. ',
        },
      ],
    },
  },
  {
    slug: 'shutters-range',
    content: {
      heading: 'Made to Measure shutters',
      src: '/assets/video/shutter.mp4',
      paragraph:
        'We offer custom made window shutters that fit any window. Make your home more stylish with our versatile made-to-measure shutters, including stylish window plantation shutters.',
      subheading1: 'Custom Window Shutters',
      subheading2: 'Wide range of stains and paints',
      posterImage: '/assets/images/Shutters/landing/landing.webp',
      subheadingContent: [
        {
          content:
            'Our made-to-measure shutters are custom-designed <a href="/" target="_blank" style="text-decoration: underline">window coverings</a> that fit your windows&apos; exact dimensions and style. We make sure our custom made shutters match the size and shape of your unique windows; this includes unique shapes like arches, circles, or bay windows. Shutters are available in a variety of stunning colors, like white, <a href="/shutters-range/off-white-shutters" target="_blank" style="text-decoration: underline">off-white</a>, black, bold shades, grey, and <a href="/shutters-range/dark-wood-shutters" target="_blank" style="text-decoration: underline">dark wood</a>, with premium materials such as wood, faux wood, vinyl, and composite. Our shutters are built for longevity. We crafted these shutters with reinforced hinges and quality finishes to resist wear and tear. These easy-to-clean shutters are less likely to harbor allergens. We provide free uninstall and reinstallation services and have a committed staff of 50 experts. We&apos;re not only here to make sales. We are here to help you, from the initial meeting to the last installation. ',
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

export const MoterisedContent = [
  {
    maintitle: '/automated-blinds/',
    Data: [
      {
        title: 'Automated Blinds',
        heroVideo: '/assets/video/Automated_Blinds.mp4',
        infoTitle: 'Automatic Blinds with Remote',
        infoSubtitle: 'Convert your windows into Smart Windows ',
        infoDescription:
          'Everything else in your life is automated, why not your blinds? There are so many reasons to go electric. These motorised blinds give you the option to control your <a href="/made-to-measure-curtains" target="_blank" style="text-decoration:underline">window covering</a> with the use of a single remote. Unlike off-the-shelf blinds found online, you just have to speak to our team and we measure your windows with precision. We offer the full service from initial advice, followed by professional installation to complete instructions and programming. We work with expert companies like Somfy, Nice, and Motion, known for their high-quality motors and integration with smart home systems. With these brands on our side, we offer <a href="/blinds/motorised-blinds" target="_blank" style="text-decoration:underline">remote control blinds</a> that are smooth, reliable, and long-lasting. Whether you want simple automated or fully connected, we’ve got the right custom smart blinds for you.',
        infoImage: moto1,
        measureTitle: '“Hey Alexa, lower my Blinds”',
        measureDescription:
          "With automatic blinds, you can control them with a remote, your smartphone, or even your voice using <b>Google Home, Apple HomeKit, </b>or <b>Amazon Alexa.</b> Open and close your window coverings from anywhere in the house—or even while you're away. It's all about making things simpler and more flexible for you.",
        chooseustitle: 'Why Choose Us For Your Motorisation?',
        chooseustitle1: 'Control your windows anytime, anywhere!',
        measureTitle1: 'Set Your Own Schedule or Control Remotely',
        measureDescription1:
          'We love our customers and want to make things easier for them. If you have several blinds in your <a href="/blinds/living-room-blinds" target="_blank" style="text-decoration:underline">living room</a>, one remote can control them all. With home automation blinds, you can control your windows from anywhere in the world with a wifi hub. As we work daily with motorisation systems and have experience in handling them we will discuss pros and cons of custom smart blinds and give honest impartial advice.',
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
        additionalImage: moto3,
        additionalDescription2: `We believe in making your experience as stress-free as possible. Our team members are paid a fair living wage, meaning they are here for you. Rest assured, no one is working on commission here. <a href="/" target="_blank" style="text-decoration:underline">Blinds and Curtains Dubai’s</a> priority is to provide honest, helpful advice that’s best for you—not to push for a sale. If you choose to go with us, congratulations. If not we’ll send you your quotation by email and one follow up call. Then it's up to you to decide.`,
        additionalDescription3:
          'We approach every consultation the way we’d like to be treated: with honesty and zero pressure. Contact our friendly team if you would like a no-obligation quote on our home automation window blinds, or fill out the online contact form, and we will get back to you as soon as possible.',
      },
    ],
  },
  {
    maintitle: '/automated-curtains/',
    Data: [
      {
        title: 'Automated Curtains',
        heroVideo: '/assets/video/automated_curtains.mp4',
        infoTitle: 'Modern Automatic Curtains',
        infoSubtitle: 'Convert your windows into Smart Windows',
        infoDescription: `Our passion for high-quality products makes us more than just a <a href="/made-to-measure-blinds" target="_blank" style="text-decoration:underline">window covering</a> company. Everything else in your life is automated, why not your blinds? There are so many reasons to go electric. Set timers for your curtains to open and close at certain times so you can enjoy the warmth of natural sunlight. Make your everyday life easier with <a href="/curtains/motorised-curtains" target="_blank" style="text-decoration:underline">motorised curtains</a>. It's great for people who have mobility problems or are away from home a lot. It's much easier to close modern automated curtains for windows that are high or hard to reach. Our salespeople won't push you to buy; we'll help you find the one that's right for you. With whisper-quiet motors, our automated curtains operate smoothly for years to come. Since we're confident in our products, we offer free uninstall and reinstall services within the first 2 years, plus a 10-year warranty that covers all mechanical parts and labor.`,
        infoImage: moto4,
        measureTitle: 'Made to Measure Motorised Curtains',
        measureDescription: `Just say the word, and let your motorisation system do the rest. It's now easier to control auto curtains with a remote, a smartphone, or even a voice command ("Alexa, close the curtains") using Amazon Alexa, Apple HomeKit, or Google Home. From anywhere in the house, you can open and close your curtains. It's all about making things simpler and more flexible for you.`,
        chooseustitle: 'Why Choose Us For Your Motorisation?',
        chooseustitle1: 'Control your windows anytime, anywhere!',
        measureTitle1: 'Set Your Own Schedule or Control Remotely',
        measureDescription1: `We handle everything, from consultation to installation. Besides setting up, we'll teach you how to use automatic window curtains so you feel confident. We work with industry leaders like Somfy, Nice, and Motion to give you control over your smart home through apps, remotes, and voice assistants, and options like <a href="/curtains/blackout-curtains-dubai" target="_blank" style="text-decoration:underline">blackout curtains</a> for added convenience.`,
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
        additionalDescription2: `At <a href="/" target="_blank" style="text-decoration:underline">Blinds and Curtains Dubai</a>, choosing automated curtains should be fun and enjoyable instead of stressful. So we designed our consultations to be relaxed and informative. Our team is here to guide you, not to push you. We take the time to fully understand your needs and provide solutions that genuinely work for your space, whether you're looking for fabrics, modern automated curtains, or light control advice.`,
        additionalDescription3: `Every home is different, and every customer has a different taste. That's why we listen to you and offer honest, helpful advice during our consultations. There's no hustle, no pressure, and definitely no hard sell.`,
      },
    ],
  },
];

export const Cateories = [9, 2, 5, 12];


export const colorData: IColorData[] = [
  {
    id: 1,
    name: 'Off White Shutters',
    color: 'FAF9EF',
    url: '/shutters-range/off-white-shutters/',
    imageUrls: [
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off white tier on tier shutters.webp',
        altText: 'Off White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off white tracked window shutters.webp',
        altText: 'Off White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off White Shutters 1.jpg',
        altText: 'Off White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off White Shutters 2.jpg',
        altText: 'Off White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off White Shutters 3.jpg',
        altText: 'Off White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off White Shutters 4.jpg',
        altText: 'Off White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off White Shutters 5.jpg',
        altText: 'Off White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Off-white/Off White Shutters 6.jpg',
        altText: 'Off White Shutters',
      },
    ],
  },
  {
    id: 2,
    name: 'White Shutters',
    color: 'FFFFFF',
    url: '/shutters-range/white-shutters/',
    imageUrls: [
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/White cafe style shutters.webp',
        altText: 'White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/White Cafe style Shutters (2).webp',
        altText: 'White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/Full height shutters (2).webp',
        altText: 'White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/Solid panel shutter for kitchen.webp',
        altText: 'White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/Cafe-Style-Shutters-2-.webp',
        altText: 'White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/BiFold Shutters (3).webp',
        altText: 'White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/Bay window shutters (2).webp',
        altText: 'White Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/White-shutters/Bay-Window-shutters.webp',
        altText: 'White Shutters',
      },
    ],
  },
  {
    id: 3,
    name: 'Black Shutters',
    color: '000000',
    url: '/shutters-range/black-shutters/',
    imageUrls: [
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/Black shutters (1).webp',
        altText: 'Black Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/Black shutters (2).webp',
        altText: 'Black Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/Black shutters (3).webp',
        altText: 'Black Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/Black shutters (4).webp',
        altText: 'Black Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/BiFold Shutters (5).webp',
        altText: 'Black Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/Cold color shutters (1).webp',
        altText: 'Black Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/Black Shutters 3.jpg',
        altText: 'Black Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Black-shutters/Black Shutters 1-min.jpg',
        altText: 'Black Shutters',
      },
    ],
  },
  {
    id: 4,
    name: 'Grey Shutters',
    color: '808080',
    url: '/shutters-range/grey-shutters/',
    imageUrls: [
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey color Bifold shutters.webp',
        altText: 'Grey Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey Shutters (1).webp',
        altText: 'Grey Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey Shutters (2).webp',
        altText: 'Grey Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey Shutters (3).webp',
        altText: 'Grey Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey Shutters 1.jpg',
        altText: 'Grey Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey Shutters 2.jpg',
        altText: 'Grey Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey Shutters 4.jpg',
        altText: 'Grey Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Grey-color/Grey Shutters 5.jpg',
        altText: 'Grey Shutters',
      },
    ],
  },
  {
    id: 5,
    name: 'Dark Wood Shutters',
    color: '815438',
    url: '/shutters-range/dark-wood-shutters/',
    imageUrls: [
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Full-height-shutters-(-Dark-wood).jpg',
        altText: 'Dark Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Special shaped shutters ( Dark wood).webp',
        altText: 'Dark Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Dark Wood Shutters 1.jpg',
        altText: 'Dark Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Dark Wood Shutters 2.jpg',
        altText: 'Dark Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Dark Wood Shutters 3.jpg',
        altText: 'Dark Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Dark Wood Shutters 4.jpg',
        altText: 'Dark Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Dark Wood Shutters 5.jpg',
        altText: 'Dark Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Dark-wood/Dark Wood Shutters 6.jpg',
        altText: 'Dark Woods Shutters',
      },




    ],
  },
  {
    id: 6,
    name: 'Light Wood Shutters',
    color: 'deb887',
    url: '/shutters-range/light-wood-shutters/',
    imageUrls: [
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light wood bay window shutters.jpg',
        altText: 'Light Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light wood shutters (1).webp',
        altText: 'Light Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light wood shutters (2).webp',
        altText: 'Light Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light wood shutters (3).webp',
        altText: 'Light Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light Wood Shutters 1.jpg',
        altText: 'Light Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light Wood Shutters 5 (1).jpg',
        altText: 'Light Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light Wood Shutters 3.jpg',
        altText: 'Light Woods Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Light-wood/Light Wood Shutters 4.jpg',
        altText: 'Light Woods Shutters',
      },


    ],
  },
  {
    id: 7,
    name: 'Bold Colour Shutters',
    color: '8f1601',
    url: '/shutters-range/bold-colours-shutters/',
    imageUrls: [
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Bold color shutters (1).webp',
        altText: 'Bold Colour Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Bold Colour Shutters 1 (1).jpg',
        altText: 'Bold Colour Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Bold color shutters (2).webp',
        altText: 'Bold Colour Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Bold color shutters.webp',
        altText: 'Bold Colour Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (1).webp',
        altText: 'Bold Colour Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (2).webp',
        altText: 'Bold Colour Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (3).webp',
        altText: 'Bold Colour Shutters',
      },
      {
        imageUrl:
          '/assets/images/optimized-images/Color/Bold-colors/Cold color shutters (4).webp',
        altText: 'Bold Colour Shutters',
      },
    ],
  },
];

export const ByColorContent = [
  {
    slug: '/shutters-range/off-white-shutters/',
    content: {
      heading: 'Off White Shutters: A Classic Choice',
      paragraph:
        'Off white exterior shutters balance warmth and brightness, creating a cosy yet airy, inviting, and comfy vibe. With excellent light and privacy control, these off white plantation shutters let you tweak the ambiance to match your mood. The off-white colour fits in with any style, whether you like things simple or fancy. This makes <a href="/shutters-range" target="_blank" style="text-decoration: underline">window shutters</a> a favorite for people who like classic designs and want lasting <a href="/" target="_blank" style="text-decoration: underline">window treatment</a>.',
      subheading1: '',
      subheading2: '',
      subheadingContent: [
        {
          content: '',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/white-shutters/',
    content: {
      heading: 'Aesthetically Beautiful Pure White Shutters',
      paragraph:
        'Pure white shutters offer a classic and timeless <a href="/" target="_blank" style="text-decoration: underline">window treatment</a> that gives any room a hint of elegance.  Whether in <a href="/shutters-range/living-room-shutters" target="_blank" style="text-decoration: underline">living rooms</a>, bedrooms, or kitchens, pure white wooden shutters bring a sense of openness and airiness, making them a favourite among homeowners and interior designers',
      subheading1: '',
      subheading2: '',
      subheadingContent: [
        {
          content: '',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/black-shutters/',
    content: {
      heading: 'Black Shutters - Bold and Sophisticated',
      paragraph:
        'Black shutters are a great pick if you&apos;re going for a bold, sophisticated look. Black plantation shutters make a statement and work as a versatile backdrop for other design elements in the room. They also provide excellent light and privacy control, just like off-white plantation shutters. At <a href="/" target="_blank" style="text-decoration: underline">Blinds and Curtains Dubai</a>, we&apos;ve got a great selection of black <a href="/shutters-range" target="_blank" style="text-decoration: underline">window shutters</a> to elevate your home&apos;s interior design.',
      subheading1: '',
      subheading2: '',
      subheadingContent: [
        {
          content: '',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/dark-wood-shutters/',
    content: {
      heading: 'Dark Wood Shutters - Rustic and Timeless',
      paragraph:
        'Dark Wood Shutters are a classic choice that warms any room with their timeless appeal. The wood grain adds <a href="/curtains/textured-curtains" target="_blank" style="text-decoration: underline">texture</a> and depth, making these shutters stand out as both functional and decorative pieces. We offer a variety of dark wood shutters at <a href="/" target="_blank" style="text-decoration: underline">Blinds and Curtains Dubai</a>, so you can find the perfect fit for your home.',
      subheading1: '',
      subheading2: '',
      subheadingContent: [
        {
          content: '',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/bold-colours-shutters/',
    content: {
      heading: 'Bold Colours Shutters - Express Yourself',
      paragraph:
        'If you want to give your home some style, try bold colour shutters. Whether you like bright colors like red and blue or more calm colours like olive green and taupe, these <a href="/shutters-range" target="_blank" style="text-decoration: underline">shutters</a> can change the look of your space. Bold colour wooden shutters are great for adding colour to neutral rooms or matching existing colour schemes.Our team at <a href="/" target="_blank" style="text-decoration: underline">Blinds and Curtains Dubai</a> thoughtfully selected each colour and material for shutters to give you both style and durability.',
      subheading1: '',
      subheading2: '',
      subheadingContent: [
        {
          content: '',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/grey-shutters/',
    content: {
      heading: 'Grey Shutters - A Modern Touch',
      paragraph:
        'These grey window shutters aren&apos;t just good-looking—they&apos;re also super durable and low maintenance. At <a href="/" target="_blank" style="text-decoration: underline">Blinds and Curtains Dubai</a>, we&apos;ve got a wide range of grey shutters, all made with quality materials and a keen eye for detail. Whether you want a calming vibe in the <a href="/shutters-range/bedroom-shutters" target="_blank" style="text-decoration: underline">bedroom</a> or a modern touch in the living room, our grey shutters give you plenty of options to suit your taste.',
      subheading1: '',
      subheading2: '',
      subheadingContent: [
        {
          content: '',
        },
      ],
    },
  },
  {
    slug: '/shutters-range/light-wood-shutters/',
    content: {
      heading: 'Light Wood Shutters -  Versatile and Chic',
      paragraph:
        'Light wood shutters are a fantastic way to brighten your space and create a welcoming vibe. Like <a href="/shutters-range/dark-wood-shutters" target="_blank" style="text-decoration: underline">darker shutters</a>, they offer great insulation and light control while adding a chic touch to your home’s interior. At Blinds and Curtains Dubai, we’ve got a wide <a href="/shutters-range" target="_blank" style="text-decoration: underline">shutters range</a> of light wood shutters in different styles and finishes to match your style. At Blinds and Curtains Dubai, our expert team can help you install light wood exterior shutters to give your home a fresh, updated look.',
      subheading1: '',
      subheading2: '',
      subheadingContent: [
        {
          content: '',
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
  'Indoor Blinds And Curtains',
  'Skylight',
  'Balcony Blinds And Curtains',
  'Pergola Curtains',
  'Outdoor Blinds And Curtains',
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
    title: 'Indoor Blinds And Curtains',
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
    title: 'Balcony Blinds And Curtains',
    productsTitles: [
      'blackout-blinds',
      'outdoor-shutters',
      'roman-blinds',
      'eyelet-curtains',
    ],
  },
  {
    title: 'Pergola Curtains',
    productsTitles: [
      'sheer-curtains',
      'blackout-curtains',
      'aluminium-blinds',
      'bi-fold-shutters',
    ],
  },
  {
    title: 'Outdoor Blinds And Curtains',
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
      'Ready to get started? Call our sales team at <a href="tel:(04) 252 2025" target="_blank" style="text-decoration:underline">(04) 252 2025</a> for a free quote or fill out the online form, and we&apos;ll be in touch',
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
        title: 'Explore Popular Made to Measure Curtain Options',
        subtitle:
          'Want to see your dream come to life in stunning detail? Our professional curtain installation team is always available to answer questions and help with any curtain challenge you have.',
      },
      {
        type: 'By Style',
        title: 'Perfect for Any Taste & Every Window',
        subtitle:
          'Choose affordable custom curtains that fit your personal style and enhance your space.',
      },
      {
        type: 'By Room',
        title: 'Curtains for Any Room',
        subtitle:
          'Find the perfect curtains for each area of your home, from the living room to the bedroom',
      },
      {
        type: 'dynamic',
        title: 'Explore Our Bespoke Curtains Collection',
        subtitle:
          'Discover bespoke curtains in a variety of fabrics, from sheer to velvet for every window.',
      },
    ],
  },
  {
    category: 'shutters',
    types: [
      {
        type: 'ALL',
        title: 'View Our Entire Selection',
        subtitle:
          'Explore our comprehensive range of shutters, suited for every preference and window style.',
      },
      {
        type: 'By Style',
        title: 'Shutters that bring a sense of style',
        subtitle:
          'Choose shutters that echo your personal style, from classic to contemporary designs.',
      },
      {
        type: 'By Room',
        title: 'Custom Shutters for Every Room',
        subtitle:
          'Find the perfect shutters for each area of your home, enhancing both aesthetics and function.',
      },
      {
        type: 'dynamic',
        title: 'Choose from Over 50 Shades',
        subtitle:
          'Choose from a wide selection of shutter colours to perfectly complement any room&apos;s decor.',
      },
    ],
  },
];

export const RelatedProductsdata = [
  {
    name: 'blinds',
    para: 'Explore our collection, each piece a showcase of exceptional window blinds design.',
  },
  {
    name: 'curtains',
    para: 'For quality curtain installation in Dubai, check out our services designed to make your living spaces more beautiful.',
  },
  {
    name: 'shutters-range',
    para: 'Explore our range of Interior & Exterior Shutters, designed for both style and durability.',
  },
  {
    name: 'commercial',
    para: 'Browse through our selection of high quality commercial window treatments.',
  },
];

export const HiddenProducts_list = [
  'Hotels & Restaurants , blinds & curtains',
  'Study Room Blinds',
];

export const footerData = [
  {
    key:"1",
    title: 'Blinds',
    items: [
      'Roller Blinds',
      'Roman Blinds',
      'Vertical Blinds',
      'Wooden Blinds',
      'Aluminium Blinds',
      'Zebra Blinds',
      'Zipline Outdoor Blinds',
      'Panel Blinds',
      'Blackout Blinds',
      'Motorised blinds',
    ],
  },
  {
    key:"2",
    title: 'Curtains',
    items: [
      'Triple Pinch Pleat Curtains',
      'Double Pinch Pleat Curtains',
      'Pencil Pleat Curtains',
      'Ripplefold/Wave Curtains',
      'Eyelet Curtains',
      'Tab Top Curtains',
      'Blackout Curtains',
      'Motorised curtains',
      'Sheer Curtains',
      'Textured Curtains',
    ],
  },
  {
    key:"3",
    title: 'Shutters',
    items: [
      'Full Height Shutters',
      'Bi-Fold Shutters',
      'Solid Panel Shutters',
      'Tier On Tier Shutters',
      'Cafe Style Shutters',
      'Bay Window Shutters',
      'Outdoor Shutters',
      'Tracked Shutters',
      'Special Shape Shutters',
      'Black Shutters',
    ],
  },
];

export const GuaranteeVisitData = [
  {
    heading: 'Book a free consultation',
    description:
      'Our experts will come over at your convenience and discuss colours, styles, and measurements.',
    button: 'Book an appointment',
    href: '/request-appointment',
  },
  {
    heading: 'Visit our showroom ',
    description:
      "Visit us in person next time you're in the area, and see for yourself what we've got to offer.",
    button: 'Find Our Location Map',
    href: 'https://www.google.com/maps?cid=2467468347994691262&hl=en',
  },
  {
    heading: 'Talk To Our Specialist',
    description:
      'Do you want to talk with the Blinds & Curtains Team? Our team will get back to you ASAP.',
    button: 'Talk To Specialist',
    href: 'https://api.whatsapp.com/send/?phone=%2B971544945339&text&type=phone_number&app_absent=0',
  },
];

export const contentArray = [
  [
    'Free home visits with free installation',
    'Great selection of blinds, curtains, and shutters',
    'Free uninstall/re-install within 2 years',
    'We’re trusted, with over 750+ 5* reviews',
  ],
  [
    'A team of 50 staff to ensure perfection from start to finish',
    'In-house production - quality is our concern, not yours',
    '10 YEARS warranty on all mechanical parts and labour',
  ],
];

export const links = {
  blinds: '/made-to-measure-blinds',
  curtains: '/made-to-measure-curtains',
  shutters: '/shutters-range',
};

export const locations = [
  ['Sheikh Zayed Road', 'Downtown Dubai', 'JLT', 'City Walk'],
  ['Oud Metha', 'Dubai Marina', 'Jadaff', 'Blue Water Island'],
  ['Business Bay', 'Nad Al Shiba', 'Palm Jumeirah', 'Dubai Hills'],
  ['Karama', 'JBR', 'Jumeirah', '50 More Areas'],
];
export const projectsData = [
  {
    title: 'Downtown Dubai',
    description:
      'In Downtown Dubai, we have installed <a href="/" target="_blank" style="text-decoration:underline">window coverings</a> to keep out brightness and soften the lights. ',
    imageUrl: '/assets/images/Projects/downtown dubai.webp',
  },
  {
    title: 'Albarsha',
    description: `As versatile as life in Al Barsha, we've designed blinds, curtains, and shutters to suit busy or restful households.`,
    imageUrl: '/assets/images/Projects/Albarsha.webp',
  },
  {
    title: 'Business Bay',
    description:
      'We added calm and precision to the hectic world of Business Bay with our window coverings.',
    imageUrl: '/assets/images/Projects/Business bay dubai.webp',
  },
  {
    title: 'Jumeirah Beach',
    description:
      'The struggle of the sun and sea? We met those with fabrics that resist fading and salt air.',
    imageUrl: '/assets/images/Projects/Jumeirah Beach.webp',
  },
  {
    title: 'Arabian Ranches',
    description:
      'We brought warmth to Arabian Ranches with window treatments that feel as inviting as the homes themselves.',
    imageUrl: '/assets/images/Projects/Arabian Ranches.webp',
  },
  {
    title: 'Jumeirah Bay Island',
    description: `A luxury home needs custom care. We made <a href="/made-to-measure-blinds" target="_blank" style="text-decoration:underline">custom blinds</a>, curtains and shutters for Jumeirah Bay Island's exclusive clients.`,
    imageUrl: '/assets/images/Projects/jumeriah bay island.webp',
  },
  {
    title: 'Dubai Hills',
    description: `In keeping with Dubai Hills' tradition of balance, our designs integrate smoothly into any interior.`,
    imageUrl: '/assets/images/Projects/dubai-hills.jpg',
  },
  {
    title: 'Palm Jumeirah',
    description: `We've made sure the blinds and <a href="/made-to-measure-curtains" target="_blank" style="text-decoration:underline">curtains</a> match the scale and elegance of Palm Jumeirah.`,
    imageUrl: '/assets/images/Projects/Palm Jumeirah.webp',
  },
];

export const projectsTags = [
  'Emirates Hills',
  'The Lakes',
  'Meadows',
  'Damac Hills',
  'Arjan',
  'Al Quoz',
  'Al Barari',
  'Furjan',
  'Mohammed Bin Rashid City',
  'District 1',
  'Meydan',
  'Sobha Hartland',
  'Villa Nova',
  'Al Reem',
  'Townsquare',
  'Alvorada',
  'Beachfront',
  'Maple Villas',
  'Sidra Villas',
  'The Greens',
  'Dubai Harbour',
  'Dubai Creek Harbour',
  'Barsha Heights',
  'Academic City',
  'Nad Al Sheba',
  'Dubailand',
  'DIFC',
  'Al Khawaneej',
  'Dubai Design District',
  'Jumeirah Village Circle',
  'Discovery Gardens',
  'Umm Suqeim',
  'Jumeirah Beach Residence',
  'Jebel Ali Village',
  'Dubai Marina',
  'Business Bay Dubai',
  'Nad Al Hamar',
  'Festival City',
  'Dubai Creek',
  'Al Qusais',
  'Media City',
  'Bur Dubai',
  'Al Sufouh',
  'Silicon Oasis',
  'Mirdif',
  'Falcon City',
  'Jumeirah',
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



export   const checkboxData = [
  { name: 'canAddProduct', label: 'Can Add Product' },
  { name: 'canEditProduct', label: 'Can Edit Product' },
  { name: 'canDeleteProduct', label: 'Can Delete Product' },
  { name: 'canAddCategory', label: 'Can Add Category' },
  { name: 'canDeleteCategory', label: 'Can Delete Category' },
  { name: 'canEditCategory', label: 'Can Edit Category' },
  { name: 'canAddSubCategory', label: 'Can Add SubCategory' },
  { name: 'canDeleteSubCategory', label: 'Can Delete SubCategory' },
  { name: 'canEditSubCategory', label: 'Can Edit SubCategory' },
  { name: 'canViewAppointments', label: 'Can View Appointments' },
  { name: 'canVeiwAdmins', label: 'Can View Admins' },
  { name: 'canVeiwTotalproducts', label: 'Can View Total Products' },
  { name: 'canVeiwTotalCategories', label: 'Can View Total Categories' },
  { name: 'canVeiwTotalSubCategories', label: 'Can View Total SubCategories' },
  { name: 'canAddBlog', label: 'Can Add Blog' },
  { name: 'canDeleteBlog', label: 'Can Delete Blog' },
  { name: 'canEditBlog', label: 'Can Edit Blog' },
];

// Landingpage content
export const NavData = [
  {
    image: '/assets/images/Moterised-ads-blinds/visit.png',
   title:'We Can Visit you',
   description:'Take Measurements',
  },
  { image: '/assets/images/Moterised-ads-blinds/Vector1.png',
    title:'Help Select Fabrics',
    description:'install in 2-3 days ',
   },
   {image: '/assets/images/Moterised-ads-blinds/Group.png',
    title:'Warranty',
    description:'10-YEAR',
  },
];

export const InstablindData = [
  {
   video:"https://player.vimeo.com/video/1055115625?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
  },
  {
    video:"https://player.vimeo.com/video/1055115695?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
   },
   { video:"https://player.vimeo.com/video/1055115555?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
   },
  { video:"https://player.vimeo.com/video/1055115449?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
  },
  { video: "https://player.vimeo.com/video/1055115492?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  { video:"https://player.vimeo.com/video/1055115524?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
];

export const InstacurtainData = [
  { video: "https://player.vimeo.com/video/1055113938?h=ee041f419c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  { video:"https://player.vimeo.com/video/1055113888?h=bf0480c871&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  { video: "https://player.vimeo.com/video/1055113913?h=15d0c4c019&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  { video: "https://player.vimeo.com/video/1055113770?h=60a0d27ace&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  { video:"https://player.vimeo.com/video/1055113824?h=b785d67083&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  { video:"https://player.vimeo.com/video/1055113856?h=ecfdbe3d6d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  }, 
];


export const KeyData =[
  {
    image:"/assets/images/Moterised-ads-blinds/guarantee.png",
    para:"Trusted by over 700+ happy customers with glowing 5-star reviews for quality and service.",  
  },
  {
    image: "/assets/images/Moterised-ads-blinds/businessmen.png",
    para:"Our expert installers will make sure you have the perfect setup along with a hassle-free, clean installation.",  
  },
  {
    image:"/assets/images/Moterised-ads-blinds/ready.png",
    para:"There's a 10-year warranty on all hardware and a 5-year warranty on fabrics.",  
  },
  {
    image:"/assets/images/Moterised-ads-blinds/loyalty.png",
    para:"Book a free consultation today and experience the difference with motorised blinds designed just for you.",  
  },
];

export const benefits = {
  motorized_blinds: [
    { 
      heading: "Control your blinds", 
      description: "with just a tap on your phone or voice command, making life easier and more comfortable." 
    },
    { 
      heading: "Save energy and stay cool", 
      description: "by scheduling your blinds to block heat during the day, helping reduce your energy bills." 
    }
  ],
  motorized_curtains: [
    { 
      heading: "Convenience", 
      description: "Control them from anywhere—your couch, your office, even on vacation." 
    },
    { 
      heading: "Energy Efficiency", 
      description: "Keep your home cool in the summer and warm in the winter with automated schedules." 
    }
  ]
};



export const MotorisedSellingDataBlinds=[{
  icon:"/assets/images/Moterised-ads-blinds/icon-automation1.png",
  title: "Motorised blinds make life easy…",
  list:[
    {heading:"Easy Control:" , para:"Adjust light or privacy using your phone, remote, or even voice commands like Alexa or Google Home."},
    {heading:"Energy Savings:" , para:"Reduce heating and cooling costs by automatically adjusting your blinds."},
    {heading:"Safety First:" , para:"No cords means a safer environment for children and pets, eliminating the risks of entanglement."},
    {heading:"Customised Solutions:" , para:"A wide range of fabric and design choices to personalise your motorised blinds."},
  ],},
{
icon:"/assets/images/Moterised-ads-blinds/icon-automation1.png",
title: "With full automation at your command",
list:[
  {heading:"Quiet Operation:" , para:"Designed to operate softly, so you can enjoy smooth operation without the racket."},
  {heading:"Convenient Scheduling:" , para:"You can set timers for your blinds to open and close at certain times."},
  {heading:"Professional Installation:" , para:"We make sure your blinds are measured, installed, and programmed perfectly for your home."},
  {heading:"Durable and Reliable:" , para:"With a 10-year warranty so you can be sure they will work smoothly for as long as you need them."},
],},
];

export const MotorisedSellingDataCurtain=[{
  icon:"/assets/images/Moterised-ads-blinds/icon-automation1.png",
  title: "Motorised Curtains make life easy…",
  list:[
    {heading:"Effortless Control:" , para:"Use your phone, remote, or voice assistant to open or close them instantly."},
    {heading:"Customised for You:" , para:" Pick fabrics, colours, and styles to match your space."},
    {heading:"Privacy Anytime:" , para:"Close your curtains in seconds for complete privacy."},
    {heading:"Energy Efficient:" , para:"Save on energy costs by scheduling your curtains to manage heat and light."},
  ],},
{
icon:"/assets/images/Moterised-ads-blinds/icon-automation1.png",
title: "With full automation at your command",
list:[
  {heading:"Cord-Free Safety:" , para:"Keep your home safe for kids and pets with no dangling cords."},
  {heading:"Smooth & Silent:" , para:"Quiet motors are good for easy operation and peace of mind."},
  {heading:"Convenient Scheduling:" , para:"Set them to open and close automatically, whether you're home or not."},
  {heading:"Built to Last:" , para:"A 10-year warranty proves that we don't compromise on quality."},
],},
];

export const TabData = { 
  motorized_blinds: [
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/smart.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/smart1.svg",
      title: "Control your windows anytime, anywhere!",
      video: "/assets/video/moto.mp4",
      description:
        "Smart control systems from Somfy, Nice, and Motion make it easier than ever to manage your blinds from a smart hub, mobile device, voice assistant, or remote. All while blocking UV rays and offering precision light, privacy, and energy efficiency control.",
      tab: "Smart control",
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/mobile.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/mobile1.svg",
      title: "Just tap your screen & control your blinds",
      video: "/assets/video/moto.mp4",
      description:
        "Adjusting your blinds is now as easy as tapping a screen. No matter where you are—whether at home, the office, or even out running errands—you can control your blinds in real time.",
      tab: "Smartphone",
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/voice.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/voice1.svg",
      title: "Just say the word & enjoy the morning sunshine!",
      video: "/assets/video/moto.mp4",
      description:
        "Connect your blinds to a voice assistant like Alexa or Google Home. With a simple voice command like “Alexa, lower my blinds” you can open, close, or adjust the blinds without lifting a finger.",
      tab: "Voice assistant",
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/remote.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/remote1.svg",
      title: "Quick, easy, and always within reach!",
      video: "/assets/video/moto.mp4",
      description:
        "Whether you prefer the convenience of a handheld remote or a fixed wall switch, you get easy access to control light and privacy. No more fussing with cords—just a quick press to adjust your blinds exactly how you want them.",
      tab: "Remote or Wall switch",
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/automated.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/automated1.svg",
      title: "Set timers for your blinds to open and close automatically",
      video: "/assets/video/moto.mp4",
      description:
        "Set your blinds to open in the morning and close at night—without lifting a finger. Wake up to a natural light-filled morning or enjoy a moment of instant privacy at the exact moment you choose, all on autopilot.",
      tab: "Automated Scheduling",
    },
  ],
  motorized_curtains: [
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/smart.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/smart1.svg",
      title: "Control your windows anytime, anywhere!",
      video: "/assets/video/curto.mp4",
      description:
        "Smart control systems from Somfy, Nice, and Motion make it easier than ever to manage your curtains from a smart hub, mobile device, voice assistant, or remote. All while blocking UV rays and offering precision light, privacy, and energy efficiency control.",
        tab: "Smart control"
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/mobile.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/mobile1.svg",
      title: "Just tap your screen & control your curtains",
      video: "/assets/video/curto.mp4",
      description:
        "Adjusting your curtains is now as easy as tapping a screen. No matter where you are—whether at home, the office, or even out running errands—you can control your curtains in real-time.",
      tab: "Smartphone",
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/voice.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/voice1.svg",
      title: "Just say the word & enjoy the morning sunshine!",
      video: "/assets/video/curto.mp4",
      description:
        "Connect with a voice assistant like Alexa or Google Home. With a simple voice command like “Alexa, close my curtains” you can open, close, or adjust the curtains without lifting a finger.",
      tab: "Voice assistant",
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/remote.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/remote1.svg",
      title: "Quick, easy, and always within reach!",
      video: "/assets/video/curto.mp4",
      description:
        "Whether you prefer the convenience of a handheld remote or a fixed wall switch, you get easy access to control light and privacy. No more fussing with cords—just a quick press to adjust your curtains exactly how you want them.",
        tab: "Remote or Wall switch"
    },
    {
      icon: "/assets/images/Moterised-ads-blinds/landing/automated.svg",
      activeicon: "/assets/images/Moterised-ads-blinds/landing/automated1.svg",
      title: "Set timers for your curtains to open and close automatically",
      video: "/assets/video/curto.mp4",
      description:
        "Set your curtains to open in the morning and close at night—without lifting a finger. Wake up to a natural light-filled morning or enjoy a moment of instant privacy at the exact moment you choose, all on autopilot.",
      tab: "Automated Scheduling",
    },
  ],
};


// RollerMainContent
export const tabsData = [
  {
    id: 0,
    title: 'Blackout Roller Blinds',
    subtitle: 'Made-to-measure for a perfect fit in any window size',
    heading: "Total Darkness & Maximum Comfort",
    content: [
      {
        title1: '100% Light Blockage:',
        description: 'No light can pass through the material. Add side channels to completely block light from entering from the edges too.'
      },
      {
        title1: 'Energy Efficient:',
        description: 'Insulated fabric keeps your room warmer in winter, cooler in summer and lower energy bills.'
      },
      {
        title1: 'Noise Reduction:',
        description: 'Thick blackout fabric helps to absorb sound and keeps your home quiet and peaceful all day long.'
      },
    ],
    iconSrc: '/assets/images/Rollerblind/roller.png',
    videoSrc: '/assets/video/blackoutroller.mp4', 
  },
  {
    id: 1,
    title: 'Sunscreen Roller Blinds',
    subtitle:'Enjoy Natural Light Without the Harsh Glare',
    heading: "Light Control with UV Protection",
    content: [
      {
        title1: 'UV Protection:',
        description: 'UV roller blinds block up to 98% of harmful UV rays and help protect your furniture, floors, and interior décor from fading.'
      },
      {
        title1: 'Energy Efficiency:',
        description: 'Blocking excessive sunlight reduces the need for air conditioning and reduces energy costs.'
      },
      {
        title1: 'Custom Fit & Style:',
        description: ' Various fabrics and colours are available to complement your interior while providing functional advantages.'
      },
    ],
    iconSrc: '/assets/images/Rollerblind/roller.png',
    videoSrc: '/assets/video/sunscreen.mp4', 
  },
];

  // BlackoutimagesSection
  export const Blackoutimages = [{
    heading:"Stylish & Functional Blackout Blinds for Any Space",
    para: "Upgrade your home or office with sleek blackout blinds",
    imgurl:  "/assets/images/Rollerblind/sliderimg/b4.jpg",
    },
    {
      heading:"Total Darkness, Maximum Comfort",
      para: "ultimate privacy with our high-quality blackout roller blinds",
      imgurl:"/assets/images/Rollerblind/sliderimg/b3.jpg",
      },
      {
        heading:"Enhance Your Space with Premium Blackout Blinds",
        para: "Enjoy a perfect balance of function and design with our blackout blinds",
        imgurl: "/assets/images/Rollerblind/sliderimg/b5.jpg",
      },
    ];
  
    // SunscreenimagesSection  
    export const Sunscreenimages = [{
      heading:"Modern Sunscreen Blinds for Stylish Spaces",
      para: "Blinds",
      imgurl:  "/assets/images/Rollerblind/sliderimg/s1.jpg",
      },
      {
        heading:"Smart Sun Protection with a Modern Touch",
        para: "Blinds",
        imgurl:"/assets/images/Rollerblind/sliderimg/s2.jpg",
        },
        {
          heading:"Sunscreen Roller Blinds – Style Meets Functionality",
          para: "Blinds",
          imgurl:"/assets/images/Rollerblind/sliderimg/s3.jpg",
        },
      ];

  // BlackoutFeatures
  export const KeyFeaturesRoller=[
    {
      icon:"/assets/images/Rollerblind/keyfeatures/lightbulb.png",
      heading:"Control Light, Your Way",
      para:"Choose from blackout or light-filtering fabrics for maximum light control, privacy, and a peaceful sleep.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/energy.png",
      heading:"Energy Saving Design",
      para:"Reduce energy costs by controlling sunlight and temperature with our smart designs.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/custom.png",
      heading:"Custom-Made to Fit",
      para:"Every blind is measured and made to fit your windows, leaving no room for imperfections.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/moterised.png",
      heading:"Motorised Options Available",
      para:"Upgrade to motorised blinds for ultimate convenience—control them with your phone, voice or remote.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/gurantee.png",
      heading:"Durability Guaranteed",
      para:"Our high-quality materials will make sure long-lasting use, with a 5-year warranty on all products.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/installation.png",
      heading:"Professional Installation",
      para:"We offer expert guidance, custom fitting, and professional installation to guarantee a flawless fit for every window.",
    },
  ];
  // SunscreenFeatures
  export const KeyFeaturesSunScreen=[
    {
      icon:"/assets/images/Rollerblind/keyfeatures/natural.png",
      heading:"Reduce Heat Without Losing Natural Light",
      para:"Sunscreen blinds filter sunlight and keep your home cooler while natural light fills the room.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/privacy.png",
      heading:"Daytime Privacy with an Open View",
      para:"Enjoy full privacy during the day without shutting out the outside view. Perfect for rooms with large windows.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/fading.png",
      heading:"Protect Your Interiors from Fading",
      para:"No one enjoys constant sun exposure, which can cause interiors to fade over time. But with sunscreen, you can keep them fresh for a long time.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/cost.png",
      heading:"Energy-Efficient and Cost Saving",
      para:"These blinds help lower your need for air conditioning. So you can save a little on energy bills without sacrificing comfort.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/maintance.png",
      heading:"Low Maintenance for a Busy Life",
      para:"Sunscreen blinds are easy to maintain and naturally resist dust, making them perfect for Dubai's dry and dusty climate.",
    },
    {
      icon:"/assets/images/Rollerblind/keyfeatures/stylish.png",
      heading:"Stylish and Functional",
      para:"We offer an extensive selection of colours and textures, perfect for everything from living rooms and commercial spaces to your kid's room. So why not bring style into your space?",
    },
  ];


  export const GallaryData =[
    {
      info: [
        {
          className: 'h-[493px]', 
          imageurl: '/assets/images/galleryimages/all/b1.png', 
          text: 'Blackout Roller Blinds',
        },
        {
          className: 'h-[308px]',
          imageurl: '/assets/images/galleryimages/all/b2.png',
          text: 'Blackout Roller Blinds',
          alt:"ss"
        },
      ],
    },
    {
      info: [
        {
          className: 'h-[222px]',
          imageurl: '/assets/images/galleryimages/all/b3.png',
          text: 'Blackout Roller Blinds',
        },
        {
          className: 'h-[581px]',
          imageurl: '/assets/images/galleryimages/all/b4.png',
          text: 'Blackout Roller Blinds',
        },
      ],
    },
    {
      info: [
        {
          className: 'h-[493px]', 
          imageurl: '/assets/images/galleryimages/all/b5.png', 
          text: 'Blackout Roller Blinds',
        },
        {
          className: 'h-[308px]',
          imageurl: '/assets/images/galleryimages/all/b6.png',
          text: 'BBlackout Roller Blinds',
        },
      ],
    },
    {
      info: [
        {
          className: 'h-[205px]',
          imageurl: '/assets/images/galleryimages/all/b7.png',
          text: 'Blackout Roller Blinds',
        },
        {
          className: 'h-[220px]',
          imageurl: '/assets/images/galleryimages/all/b8.png',
          text: 'Blackout Roller Blinds',
        },
        {
          className: 'h-[356px]',
          imageurl: '/assets/images/galleryimages/all/s1.png',
          text: 'Sunscreen Roller Blinds',
        },
      ],
    },
    // Add more objects as needed
    {
      info: [
        {
          className: 'h-[493px]', 
          imageurl: '/assets/images/galleryimages/all/s2.png', 
          text: 'Sunscreen Roller Blinds',
        },
        {
          className: 'h-[308px]',
          imageurl: '/assets/images/galleryimages/all/s3.png',
          text: 'Sunscreen Roller Blinds',
          alt:"ss"
        },
      ],
    },
    {
      info: [
        {
          className: 'h-[222px]',
          imageurl: '/assets/images/galleryimages/all/s4.png',
          text: 'Sunscreen Roller Blinds',
        },
        {
          className: 'h-[581px]',
          imageurl: '/assets/images/galleryimages/all/s5.png',
          text: 'Sunscreen Roller Blinds',
        },
        ],
      },
    ];

      export const GallaryData1 = [
        {
          text: "Blackout Roller Blinds",
          images: [
            { imageurl: "/assets/images/galleryimages/blackout/b1.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/B3.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO4.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO5.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO6.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO7.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO8.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO9.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO10.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO11.webp", alt: "ss" },
            { imageurl: "/assets/images/galleryimages/blackout/BO12.jpg" },
            { imageurl: "/assets/images/galleryimages/blackout/BO13.jpg" },
          ],
        },
      ];
      



export const GallaryData2 =[ {
  text: "Sunscreen Roller Blinds",
  images: [
    { className: "h-[493px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen1.jpg" },
    { className: "h-[308px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen2.jpg", alt: "ss" },
    { className: "h-[222px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen3.jpg" },
    { className: "h-[581px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen4.jpg" },
    { className: "h-[493px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen5.jpeg" },
    { className: "h-[308px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen6.webp" },
    { className: "h-[205px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen7.jpg" },
    { className: "h-[220px]", imageurl: "/assets/images/galleryimages/sunscreen/sunscreen8.jpg" },
    { className: "h-[356px]", imageurl: "/assets/images/galleryimages/all/s1.webp" },
    { className: "h-[493px]", imageurl: "/assets/images/galleryimages/all/s2.png" },
    { className: "h-[308px]", imageurl: "/assets/images/galleryimages/all/s3.png", alt: "ss" },
    { className: "h-[222px]", imageurl: "/assets/images/galleryimages/all/s4.png" },
    { className: "h-[581px]", imageurl: "/assets/images/galleryimages/all/s5.png" },
  ],
},]

        
        

// Rollervideos
    export const InstaRollerData = [
        
          {
            video:"https://player.vimeo.com/video/1058587348?h=16d3d85879&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"},
           {
            video:"https://player.vimeo.com/video/1058587916?h=29c4ff74ec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            },
            { video:"https://player.vimeo.com/video/1058588359?h=f073412e6f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            },



           { video:"https://player.vimeo.com/video/1058590233?h=21068feea6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
           },
           { video:"https://player.vimeo.com/video/1058590498?h=56444f8e8d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 

           },


           { video:"https://player.vimeo.com/video/1058590867?h=29efc694ca&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
           },



        ];
        
  
