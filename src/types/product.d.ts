import { ICategory, IProduct } from "./types";

export interface BreadcrumbProps  {
    title?: string;
    image?: string;
    slug?: string;
    subcategory?: string;
  }
 export interface CategoryProps {
  Data?: ICategory;
  Products?: IProduct[];
  title?: string;
}

interface AccordionItem {
  specsHeading?: string;
  specsDetails?: string;
}

export interface AccordionProps {
  items?: AccordionItem[];
}