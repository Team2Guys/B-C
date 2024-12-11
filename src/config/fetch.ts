import axios from 'axios';
import { IAppointments, ICategory, IRECORDS } from 'types/types';
import { Allproduct, BlogInfo } from 'types/interfaces';
import Cookies from 'js-cookie';

const superAdmintoken = Cookies.get('superAdminToken');
const token = Cookies.get('2guysAdminToken');
let Finaltoken = superAdmintoken ? superAdmintoken : token;

const headers = {
  Authorization: `Bearer ${Finaltoken}`,
};

export const fetchProducts = async (): Promise<Allproduct[]> => {
  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}`, "productscommercial");
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/GetAllProducts`);
  console.log(response, "productscommercial")
  return response.data;
};

export const fetchBlogs = async (): Promise<BlogInfo[]> => {
  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
  );
  return response.data;
};

export const fetchProductBySlug = async (slug: string) => {
  const response = await fetch(`/api/products?slug=${slug}`);
  if (!response.ok) {
    throw new Error('Error fetching product');
  }
  return response.json();
};

export const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/getAllCategories`,
  );
  return response.data;
};
export const fetchSubCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/get-all-subCategories`,
  );
  return response.data;
};

export const adminRecords = async (
  token: string | undefined,
): Promise<IRECORDS> => {
  try {
    if (!token) throw new Error('token not found');
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/get_all_records`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching admin records:', error);
    throw error;
  }
};

export const fetchAppointments = async (): Promise<IAppointments[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/getAllappointments`,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching appointment records:', error);
    throw error;
  }
};

export const PostAppointments = async (p0: {
  name: string;
  phone_number: string;
  area: string;
  email: string;
  whatsapp_number: string;
  windows: string;
  prefered_Date: Date;
  prefered_contact_method: string;
  how_user_find_us: string;
  user_query: string;
  productoption: {
    shutters?: boolean;
    curtains?: boolean;
    blinds?: boolean;
    roller_blinds?: boolean;
    wooden_blinds?: boolean;
    other_blinds?: boolean;
    plantation_bhutters?: boolean;
    others?: boolean;
  };
  other: string;
}): Promise<IAppointments[]> => {
  console.log(p0,"p0")
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/AddAppointment`,
  );
  return response.data;
};

export const getAllAdmins = async () => {
  try {
    const token = Cookies.get('superAdminToken');
    if (!token) {
      return;
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/get_all_admin`,
      { headers: {
        Authorization: `Bearer ${token}`,
      }},
    );
    const admins = await response.json();
    return admins;
  } catch (err:any) {
    throw new Error(err.message || JSON.stringify(err));
  }
};
