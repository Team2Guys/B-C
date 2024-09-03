import axios from 'axios';
import { IAppointments, ICategory, IRECORDS } from 'types/types';
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

export const adminRecords = async (token: string): Promise<IRECORDS[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/get_all_records`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching admin records:', error);
    throw error;
  }
};

export const fetchAppointments = async (token: string): Promise<IAppointments[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/getAllappointments`,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching appointment records:', error);
    throw error;
  }
};


export const PostAppointments = async (p0: { name: string; phone_number: string; area: string; email: string; whatsapp_number: string; windows: string; prefered_Date: Date; prefered_contact_method: string; how_user_find_us: string; user_query: string; productoption: { shutters?: boolean; curtains?: boolean; blinds?: boolean; roller_blinds?: boolean; wooden_blinds?: boolean; other_blinds?: boolean; plantation_bhutters?: boolean; others?: boolean; }; other: string; }): Promise<IAppointments[]> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/AddAppointment`,
  );
  return response.data;
};