import axios from 'axios';
import { IAppointments, ICategory, IProduct, IRECORDS } from 'types/types';
import { Allproduct } from 'types/interfaces';
import { generateSlug } from 'data/data';
import { ChangedProductUrl } from 'data/urls';
import { token } from 'components/ServerActons/ServerAction';



export const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/GetAllProducts`,
      {
        next: { tags: ['products'] },
      },
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error)
  }



};

export const fetchBlogs = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
      {
        next: { tags: ['blogs'] },
      },
    );

    let blogs = response.json()

    return blogs;
  } catch (error) {
    console.log(error)
  }

};

export const fetchProductBySlug = async (slug: string) => {
  try {
    const response = await fetch(`/api/products?slug=${slug}`, {
      next: { tags: ['products'] },
    },);
    if (!response.ok) {
      throw new Error('Error fetching product');
    }
    return response.json();
  } catch (error) {
    console.log(error)
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/getAllCategories`,
      {
        next: { tags: ['categories'] },
      },
    );
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
  }
};

export const fetchSubCategories = async () => {
  try{
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/get-all-subCategories`, {
    next: { tags: ['subCategories'] },
  }
  );
  let result = await response.json();
  return result;
} catch (error) {
  console.log(error)
}
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

export const fetchAppointments = async (token: string | undefined): Promise<IAppointments[]> => {
  try {

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/getAllappointments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,

        }
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
  console.log(p0, 'p0');
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/AddAppointment`,
  );
  return response.data;
};

export const getAllAdmins = async (token:any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/get_all_admin`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { tags: ['admins'] },
        
      },
    );
    const admins = await response.json();
    return admins;
  } catch (err: any) {
    throw new Error(err.message || JSON.stringify(err));
  }
};

export const filtereCategory = (
  categories: ICategory[],
  product: string,
  Cateories: number[],
): ICategory | undefined => {
  return categories?.find((sub) => {
    const title = ChangedProductUrl(product as string);
    const title_flag = title === generateSlug(sub.title);
    return (
      title_flag && Cateories.some((item: number) => item === sub.CategoryId)
    );
  });
};

export const filterProd = (
  prod: Allproduct[],
  product: string,
  Cateories: number[],
): IProduct | undefined => {
  return prod?.find((sub) => {
    const title = ChangedProductUrl(product as string);
    const title_flag = title === generateSlug(sub.title);
    return (
      title_flag && Cateories.some((item: number) => item === sub.CategoryId)
    );
  });
};



export const fetchReviewsHandler = async (setReviews: any) => {

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/fetchReviewsHandler`);
    console.log(response.data)
    setReviews(response.data);
    return
  } catch (error) {
    console.error('Error fetching admin records:', error);
    throw error;
  }
}

export const admin_del_handler =async(id:any)=>{
  try {
   let finalToken = await token()
    await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${finalToken}`,
        },
      },
    );
    
  } catch (error:any) {
    throw new Error(error.message || 'Error occured')
  }
}