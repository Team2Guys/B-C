// card data types
export interface CardTypes {
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
}

// Blinds and Curtains section Types
export interface BlindsAndCurtainsTypes {
  image: string;
  heading: string;
  paragraph: string[];
  buttonText: string;
}

export interface SocialDataType {
  href: string;
  src: string;
  alt: string;
}
export interface FeatureProductData {
  id: number;
  category: string;
  title: string;
  image: string; // You can also use StaticImageData if importing images
  link: string;
}

export interface ProductCardData {
  id: number;
  category: string;
  title: string;
  decription: string;
  image: any; // You can also use StaticImageData if importing images
  link: string;
}
interface FooterLink {
  text: string;
  href: string;
}
interface TFooterSection {
  title: string;
  links: FooterLink[];
}

export interface SupportItem {
  title: string;
  description: string;
}

export interface TRSlide {
  title: string;
  content: string;
}
export type BannerData = {
  imageUrl: string;
  title: string;
  buttonText: string;
};

export type BannerProps = {
  data: BannerData;
};

export interface GalleryItems {
  id: number;
  imageUrl: string | StaticImageData;
  title: string;
  category: string;
}

export interface ProductItems {
  id: number;
  imageUrl: string | StaticImageData;
  title: string;
  discription: string;
  category: string;
}

export interface AboutStaticData {
  id: number;
  subheading: string;
  heading: string;
  paragraph: string;
}

export interface OurHistory {
  id: number;
  year: string;
  heading: string;
  discription: string;
}

export type TRatingSlider = {
  imageUrl: string;
  StarImage: string;
};
export interface THeroImages {
  logo: string;
  backImage: string;
  defaultBackImage: string;
}
export interface Tproductdata {
  title: string;
  heading: string;
  content: string;
  sideImage1: string;
  sideImage: string;
}
export interface TsizePresets {
  width: number;
  height: number;
  size: any;
}
interface TProductGuarantees {
  heading: string;
  text: string;
  image: string;
  imageAlign: 'left' | 'right';
}

export interface PRODUCTS_TYPES {
  _id?: any;
  name: string;
  posterImageUrl?: Image;
  hoverImageUrl?: Image;
  description?: string;
  salePrice?: number;
  purchasePrice?: number;
  category?: string;
  imageUrl?: IMAGE_INTERFACE[];
  discountPrice?: any;
  colors?: Color[];
  modelDetails?: { name: string; detail: string }[];
  spacification?: Specification[];
  createdAt: Date;
  updatedAt: Date;
  starRating?: string;
  reviews?: string;
  totalStockQuantity?: any;
  sizes?: sizes[];
  isFeatured?: any;
  price?: number;
  count?: any;
  length?: any;
  totalPrice?: any;
  customOrder?: number;
  createdAt?: any;
  updatedAt?: any;
}
