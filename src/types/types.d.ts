import React, { SetStateAction } from 'react';
import { CategoriesType } from './interfaces';
export type BRAND = {
  logo: string;
  name: string;
  visitors: number;
  revenues: string;
  sales: number;
  conversion: number;
};

export type PRODUCTBRANCH = {
  logo: string;
  name: string;
  price: number;
};

export interface listItems {
  listItem: any;
}

export interface PrivacyPolicyItem {
  title?: string;
  text?: any;
  listItems?: any[];
}

interface PosterImage {
  imageUrl: string;
  public_id: string;
  altText? :string
}

export interface ICategory {
  title: string;
  CategoryId: number;
  description: string | null;
  id: number;
  category: any;
  posterImage: PosterImage;
  bannerImage?: PosterImage;
  products: [];
  createdAt: Date;
  Meta_Title?: string;
  Canonical_Tag?: string;
  Meta_description?: string;
  last_editedBy?: string;
}

export interface Image {
  imageUrl: string;
  public_id: string;
  altText?:string
}


export interface POSTER_iMAGE extends Image{}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  posterImage: any;
  imageUrls: Image[];
  CategoryId: number;
  SubCategoryId: number | null;
  createdAt: string;
  updatedAt: string | null;
  length?: any;
  href?: string;
  category?: any;
  product_type?: string;
  subCategory?: [];
  short_description?: string;
  heading?: string;
  colors?: [
    {
      colorName: string;
      colorCode?: string;
    },
  ];
  Sub_Heading?: string;
  Sub_Heading_description?:string
  Meta_Title?: string;
  Canonical_Tag?: string;
  Meta_description?: string;
  
}

export interface IRECORDS {
  total_admins: string;
  total_categories: string;
  total_products: string;
  total_appointments: string;
  total_categorie: string;
  total_subCategories: string;
  total_Blogs: string;
}
export interface ISUBCATEGORY {
  title: string;
  description: string;
  short_description?: string;
  CategoryId: number | undefined;
  Meta_Title?: string;
  Meta_description?: string;
  Canonical_Tag?: string;
  Images_Alt_Text?: string;
}

export interface IAppointments {
  area: string;
  email: string;
  how_user_find_us: string;
  id: number;
  name: string;
  phone_number: string;
  prefered_Date: string; // Consider using Date type if parsing date is needed
  prefered_contact_method?: string;
  product_type?: string;
  user_query: string;
  whatsapp_number: string;
  windows: string;
  createdAt: string;
}

interface SubheadingContent {
  content?: string;
}

export interface ISelectedPage {
  heading?: string;
  paragraph?: string;
  src?: string;
  subheading1?: string;
  subheading2?: string;
  posterImage?: string;
  subheadingContent?: SubheadingContent[];
}

export interface IInfo {
  selectedPage: ISelectedPage | null;
}

export interface MotorisedPageProps {
  title: string;
  heroImage?: any;
  infoTitle: string;
  infoSubtitle: string;
  infoDescription: string;
  infoImage?: any;
  measureTitle: string;
  measureDescription: string;
  chooseUsItems: { image: any; text: string }[];
  motorization: { text: string }[];
  additionalDescription?: string;
  additionalImage?: any;
  measureTitle1: string;
  measureDescription1: string;
  additionalDescription2: string;
  additionalDescription3: string;
  chooseustitle: string;
  chooseustitle1: string;
}


export interface CategoryProps {
  setMenuType: React.Dispatch<SetStateAction<string>>;
  seteditCategory?: React.Dispatch<
    SetStateAction<CategoriesType | undefined | null>
  >;
  editCategory?: CategoriesType | undefined | null;
  subCategories?: ICategory[];
  categories?: ICategory[];
}

export interface ProductOptions {
  shutters?: boolean;
  curtains?: boolean;
  blinds?: boolean;
  roller_blinds?: boolean;
  wooden_blinds?: boolean;
  other_blinds?: boolean;
  shutters?: boolean;
  others?: boolean;
}


export interface ContactMethods {
  email: boolean;
  telephone: boolean;
  whatsapp: boolean;
}

export interface AppointmentProps {
  singlePage?: boolean;
  className?: string;
}
export interface PageData {
  heading: string;
  description: string;
  image: string;
  button1Text: string;
  button2Text: string;
  subheading: string;
  secondaryHeading: string;
  bulletPoints: string[];
  bulletPoints1: string[];
  para: string;
  para1: string;
}

export interface CommonSectionProps {
  data: PageData;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FeaturesCarouselProps {
  title: string;
  subtitle: string;
  features: Feature[];
  defaultVisibleItems?: number;
}
export interface Title {
  heading: string;
  className?:string;
}
export interface Video {
  src: string;
}

interface VideoSectionProps {
  videos: Video[];
  heading?: string;
}
export interface Blind {
  id: number;
  name: string;
  image: string;
  category: string;
  href?: string;
}

export interface Category {
  label: string;
  value: string;
}

export interface BlindsTabsProps {
  blindsData: Blind[];
  tabCategories: Category[];
}
export interface ExploreBlindsCurtainsProps {
  data: {
    title: string;
    description: string;
    image: string;
    viewlink: string;
    features: { icon: string; title: string; text: string,className?:string;}[];
    buttonLinks: { href: string; text: string }[];
    className?: string;
  };
  reverse?: boolean;
}
export interface WorkingProcessProps {
  title: string;
  description: string;
  data: { icon: string; title: string; description: string }[];
}

interface ServiceLocationsProps {
  title: string;
  description: string;
  locations: string[];
  mapLink: string;
}
interface BannerProps {
  imageSrc: string;
  paraText: string;
  linkHref: string;
  linkText: string;
  linkBgColor: string;
}
export interface ExploreBlindsProps extends ExploreBlindsCurtainsProps {
  imageHeights?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  imageHeight?: string;
  hideViewMore?: boolean;
  hidefeatures?: boolean;
}

export interface VideoPageProps {
  videoSrc: string;
  title: string;
  subtitle: string | any;
  description: string | any;
  width?: any;
  height?:any;
}
export interface relativeProps {
  products: IProduct[];
  categoriesList?: ICategory[];
  limit?: number;
  className?: string;
  title?: string;
  description?: string;
  bgcolor?: boolean;
  isPPc?:boolean
}
export interface ImageGalleryProps {
  images: ImageData[];
  columns?: number;
}