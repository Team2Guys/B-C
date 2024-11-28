import React, { FormEventHandler, SetStateAction } from 'react';

React.FormEvent<HTMLFormElement>;
export interface USRPROPS {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  error: string | null | undefined;
  loading: boolean | null | undefined;
  inputFields: any;
  buttonTitle: string;
  title?: string;
  descrition?: string;
  InstructionText?: string;
  routingText?: string;
  navigationLink?: string;
  navigationTxt?: string;
  SelectComonent?: any;
  setadminType?: React.Dispatch<SetStateAction<string | undefined>>;
  adminType?: string | undefined;
}

export interface PRODUCTCARDPROPS {
  ImgUrl: string;
  title: string;
  strikThroughPrice: string;
  price: string;
}

export interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
  colors: { colorName: string }[];
  totalStockQuantity: number;
  variantStockQuantities: { variant: string; quantity: number }[];
  modelDetails: { name: string; detail: string }[];
  spacification: { specsDetails: string }[];
  discountPrice: string;
  category: string;
}

export interface Category {
  name?: string;
  description?: string;
}

interface CategoriesType {
  posterImageUrl: IMAGE_INTERFACE;
}
export interface CategoriesType extends Category {}

interface CloudinaryImage {
  public_id: string | undefined;
  imageUrl: string | undefined;
  _id: string | undefined;
}

export interface IMAGE_INTERFACE {
  public_id?: string;
  imageUrl?: string;
  name?: string;
}

interface Images {
  posterImageUrl: string | undefined;
  hoverImageUrl: string | undefined;
  imageUrl: CloudinaryImage[];
}

export interface ProductWithImages extends Product, Images {}

export interface FormValues {
  name: string;
  description: string;
  salePrice: string;
  purchasePrice: string;
  discountPrice: string;
  starRating: string;
  reviews: string;
  colors: { colorName: string }[];
  modelDetails: { name: string; detail: string }[];
  spacification: { specsDetails: string }[];
  sizes: string[];
  category: string;
  code: string;
  totalStockQuantity: number;
  variantStockQuantities: { variant: string; quantity: number }[];
  CategoryId?: number;
  SubCategoryId?: number;
  price: number;
  product_type: string
  short_description?: string
heading?: string
Sub_Heading?: string
Sub_Heading_description?: string
}

interface Color {
  colorName?: string;
}
interface ModelDetail {
  name?: string;
  detail?: string;
}

interface Specification {
  specsDetails?: string;
}
interface sizes {
  sizesDetails?: string;
}

interface Image {
  imageUrl: string;
  public_id: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  posterImage: Image;
  imageUrls: Image[];
  CategoryId: number;
  SubCategoryId: number | null;
  createdAt: string; // Consider using Date if you want to handle this as a Date object
  updatedAt: string | null;
}

export default PRODUCTS_TYPES;

export interface ADDPRODUCTFORMPROPS {
  setselecteMenu: any;
  EditInitialValues?: any | undefined;
  EditProductValue?: Product | undefined;
  setEditProduct?: any;
}

export interface Categories_Types {
  posterImageUrl: {
    public_id: string;
    imageUrl: string;
  };
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: any;
}

interface Image {
  imageUrl: string;
  public_id: string;
}

export interface Allproduct {
  id: number;
  title: string;
  description: string;
  price: number;
  posterImage: any;
  imageUrls: Image[];
  CategoryId: number;
  SubCategoryId: number | null;
  createdAt: string; // Consider using Date if you want to handle this as a Date object
  updatedAt: string | null;
  name?: any;
}

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
  icon: ReactNode;
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
export interface FooterLink {
  text: string;
  href: string;
}
export interface TFooterSection {
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
export interface TProductGuarantees {
  heading: string;
  text: string;
  image: string;
  imageAlign: 'left' | 'right';
}

export interface formDataTypes {
  fullname: string;
  email: string;
  password: string;
  canAddProduct: boolean;
  canEditProduct: boolean;
  canDeleteProduct: boolean;
  canAddCategory: boolean;
  canDeleteCategory: boolean;
  canEditCategory: boolean;
  canAddSubCategory: boolean; 
  canDeleteSubCategory: boolean; 
  canEditSubCategory: boolean; 
  canViewAppointments: boolean; 
  canVeiwAdmins: boolean; 
  canVeiwTotalproducts: boolean; 
  canVeiwTotalCategories: boolean; 
  canVeiwTotalSubCategories: boolean; 
  canAddBlog: boolean;
  canDeleteBlog: boolean;
  canEditBlog: boolean;
  id?: any;
}

export interface ADMINS_PROPS {
  setselecteMenu: React.Dispatch<SetStateAction<string | null | undefined>>;
  setedit_admins: React.Dispatch<SetStateAction<formDataTypes | undefined>>;
}

export interface createAdmin extends ADMINS_PROPS {
  setedit_admins?: React.Dispatch<SetStateAction<formDataTypes | undefined>>;
  edit_admins: formDataTypes | undefined;
}

export interface BlogInfo {
  posterImage: string;
  category: string;
  title: string;
  content: string;
  comment?: commentprops[]
  createdAt?: date;
  updatedAt?: date;
}
interface commentprops{
  status?: string;
  title?: string;
  name?: string;
}
export interface UpdateBlog extends BlogInfo {
  id: string;
}
export interface BlogProps {
  className?: string;
  title?: string | undefined;
  id?: string;
  Blogdata: BlogInfo[];
  isFirstItemLarge?: boolean;
  buttonView?: boolean;
}
export interface CommentDataType {
  id: number;
  userName: string;
  comment: string;
  createdAt: data;
  replyId?: number;
}

export interface PhoneNumber{
  number: string;
}
export interface Email {
  email: string;
}

export interface ITopHeroLink {
  matchingTitle: string;
  title: string;
}

export interface IProductDiscription {
  id?: number;
  title: string;
  CategoryPageDiscription?: string;
}

export interface IColorData {
  url: string;
  color: string;
  name: string;
}