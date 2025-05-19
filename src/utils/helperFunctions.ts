
import axios, { AxiosResponse} from 'axios';
import { generateSlug } from 'data/data';
import { ChangedProductUrl_handler, predefinedPaths } from 'data/urls';

import Cookies from 'js-cookie';
import { IProduct } from 'types/types';
const token = Cookies.get('2guysAdminToken');
const superAdmintoken = Cookies.get('superAdminToken');
const finalToken = token ? token : superAdmintoken;

export const uploadPhotosToBackend = async (files: File[]): Promise<any[]> => {
  const formData = new FormData();

  if (files.length === 0) throw new Error('No files found');

  try {
    for (const file of files) {
      console.log('hello from files');
      formData.append('file', file);
    }
console.log(formData, "formData")
    const response: AxiosResponse<any> = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/file-upload`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
};

export const ImageRemoveHandler = async (
  imagePublicId: string,
  setterFunction: any,
) => {
 
  console.log(imagePublicId);
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/file-upload/DelImage/${imagePublicId}`,
    );
    console.log('Image removed successfully:', response.data);
    setterFunction((prev: any) =>
      prev.filter((item: any) => item.public_id != imagePublicId),
    );
  } catch (error) {
    console.error('Failed to remove image:', error);
  }
};


export const Api_handler = async (
  Endpoint: string,
  data: any,
  method: 'get' | 'post' | 'put' | 'delete',
) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${finalToken}`},
    };

    let response;
    if (method === 'get' || method === 'delete') {
      response = await axios[method](
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${Endpoint}`,
        config,
      );
    } else {
      response = await axios[method](
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${Endpoint}`,
        data,
        config,
      );
    }

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || JSON.stringify(error),
    );
  }
};




export const UpdateShutterTitle = (title: string): string => {
  let updatedTitle = title
    .replace(/Wooden Shutters/i, '')
    .replace(/plantation shutters/i, '')
    .trim();
  return updatedTitle;
};


export const getPath = (product: IProduct) => {
    const parent = generateSlug(product.category?.title);
    const slug = ChangedProductUrl_handler(product.title);
    const basePath =product.href && parent? `${window.origin}/${product.href}`: `/${slug}`;

    const path = predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'? basePath : `/${parent?.toLowerCase() === 'shutters' ? `${parent.toLowerCase()}-range`
          : parent?.toLowerCase()
        }${['dimout-roller-blinds', 'sunscreen-roller-blinds', 'blackout-roller-blinds'].includes(slug)
          ? '/roller-blinds'
          : ''
        }/${slug}`);
    return path+"/";
  };