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


export async function fetchSingleCategory(customUrl: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/findsingleCategory/${customUrl.split("/").join("")}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      next: { tags: ['categories'] },
    });


    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('fetchSingleCategory error:', error.message);
    throw error;
  }
}

export async function fetchSingleCategorymain(customUrl: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/findsingleCategorymain/${customUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      next: { tags: ['categories'] },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch category');
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('fetchSingleCategory error:', error.message);
    throw error;
  }
}



export const fetchReviews = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`,
      {
        next: { tags: ['reviews'] },
      },
    );
    const reviews = await response.json();
    return reviews;
  } catch (error) {
    console.log(error)
  }



}


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
  try {
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



export const getAllAdmins = async (token: any) => {
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



export const admin_del_handler = async (id: any) => {
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

  } catch (error: any) {
    throw new Error(error.message || 'Error occured')
  }
}