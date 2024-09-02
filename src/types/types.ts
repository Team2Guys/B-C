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
  CategoryId: number;
  description: string | null;
  id: number;
  posterImage: PosterImage;
  title: string;
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
  createdAt: string; // Consider using Date if you want to handle this as a Date object
  updatedAt: string | null;
}


export interface IRECORDS {
  totalAdmins: string;
  totalCategories: string;
  totalProducts: string;
  totalUsers: string;
  totalProfit: string;
  totalSales: string;
  totalRevenue: string;
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