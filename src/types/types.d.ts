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
  altText? :string
}

export interface ICategory {
  title: string;
  CategoryId: number;
  description: string | null;
  id: number;
  category: any;
  posterImage: PosterImage;
  bannerImage?: PosterImage;
  products: [];
  createdAt: Date;
  Meta_Title?: string;
  Canonical_Tag?: string;
  Meta_description?: string;

}

export interface Image {
  imageUrl: string;
  public_id: string;
  altText?:string
}


export interface POSTER_iMAGE extends Image{}

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
  category?: any;
  product_type?: string;
  subCategory?: [];
  short_description?: string;
  heading?: string;
  colors?: [
    {
      colorName: string;
      colorCode?: string;
    },
  ];
  Sub_Heading?: string;
  Sub_Heading_description?:string
  Meta_Title?: string;
  Canonical_Tag?: string;
  Meta_description?: string;
  
}

export interface IRECORDS {
  total_admins: string;
  total_categories: string;
  total_products: string;
  total_appointments: string;
  total_categorie: string;
  total_subCategories: string;
  total_Blogs: string;
}
export interface ISUBCATEGORY {
  title: string;
  description: string;
  short_description?: string;
  CategoryId: number | undefined;
  Meta_Title?: string;
  Meta_description?: string;
  Canonical_Tag?: string;
  Images_Alt_Text?: string;
}

export interface IAppointments {
  area: string;
  email: string;
  how_user_find_us: string;
  id: number;
  name: string;
  phone_number: string;
  prefered_Date: string; // Consider using Date type if parsing date is needed
  prefered_contact_method?: string;
  product_type?: string;
  user_query: string;
  whatsapp_number: string;
  windows: string;
}

interface SubheadingContent {
  content?: string;
}

export interface ISelectedPage {
  heading?: string;
  paragraph?: string;
  subheading1?: string;
  subheading2?: string;
  posterImage?: string;
  subheadingContent?: SubheadingContent[];
}

export interface IInfo {
  selectedPage: ISelectedPage | null;
}

export interface MotorisedPageProps {
  title: string;
  heroImage?: any;
  infoTitle: string;
  infoSubtitle: string;
  infoDescription: string;
  infoImage?: any;
  measureTitle: string;
  measureDescription: string;
  chooseUsItems: { image: any; text: string }[];
  motorization: { text: string }[];
  additionalDescription?: string;
  additionalImage?: any;
  measureTitle1: string;
  measureDescription1: string;
  additionalDescription2: string;
  additionalDescription3: string;
  chooseustitle: string;
  chooseustitle1: string;
}
