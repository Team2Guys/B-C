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
  name: string;
  description: string;
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
}
