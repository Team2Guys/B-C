import axios from 'axios';
import { ICategory } from 'types/types';
import { Allproduct } from 'types/interfaces';

export const fetchProducts = async (): Promise<Allproduct[]> => {
  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/GetAllProducts`,
  );
  return response.data;
};
export const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/get-all`,
  );
  return response.data;
};
export const fetchSubCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/subcategories/get-all`,
  );
  return response.data;
};
