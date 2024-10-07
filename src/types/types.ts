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
  title: string;
  CategoryId: number;
  description: string | null;
  id: number;
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
  length?: any;
  href?: string;
  product_type?: string;
}

export interface IRECORDS {
  total_admins: string;
  total_categories: string;
  total_products: string;
  total_appointments: string;
  total_categorie: string;
  total_subCategories: string;
}
export interface ISUBCATEGORY {
  title: string;
  description: string;
  CategoryId: number | undefined;
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
//Landingpage
export interface FeatureType{
  icon?: string;
  title?: string;
}
export interface InstaType{
  video: string;
}
export interface ProductType{
  image:string;
}
export interface TabDataType{
  icon: string;
  title: string;
  video: string;
  description: string;
}
//RollerMainPage
export interface KeyFeaturesType{
  icon: string;
  heading: string;
  para: string;
}
export interface ReviewsType{
  id: number;
  name:string;
  date: string;
  image?:string;
  text: string;
}
export interface BlackoutRollerType{
  heading: string;
  Text: string;}
export interface ListData{
    imageurl:string;
    text: string;
  }


  interface ListItemInfo {
    className: string;   // Optional, you can make this `className?: string` if it's not always present
    imageurl: string;
    text: string;
  }
  
  export interface ListItem {
    info: ListItemInfo[];
  }
 