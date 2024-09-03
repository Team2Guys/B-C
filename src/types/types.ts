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
}

export interface ICategory {
  title?: string;
  CategoryId?: number;
  description?: string | null;
  id?: number;
  posterImage: PosterImage;
}

interface Image {
  imageUrl: string;
  public_id: string;
}

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
}


export interface IRECORDS {
  total_admins: string;
  total_categories: string;
  total_products: string;
  total_appointments: string;
  total_categorie: string;
  total_subCategories: string;
}

export interface IAppointments {
    area: string;
    email: string;
    how_user_find_us: string;
    id: number;
    name: string;
    phone_number: number;
    prefered_Date: string; // Consider using Date type if parsing date is needed
    prefered_contact_method: string;
    product_type: string;
    user_query: string;
    whatsapp_number: string;
    windows: string;
}