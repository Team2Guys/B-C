import { ProductImage } from "./prod";



export interface IREVIEWS {
  id: number;
  name: string;
  ReviewsDescription : string
  starRating?:number
  createdAt: string;
  posterImageUrl: ProductImage
  updatedAt?:string
  reviewDate?:string
}

 //eslint-disable-next-line
export interface initiValuesProps extends Omit<IReview, "posterImageUrl" | "createdAt", "updatedAt" >{}



export interface ISOCIAL_LINKS {
  id: number;
  post_links : string
  createdAt: string;
  posterImageUrl: ProductImage
  updatedAt?:string

}

 //eslint-disable-next-line
export interface initialSocial extends Omit<ISOCIAL_LINKS, "posterImageUrl" | "createdAt", "updatedAt" >{}


export interface RedirectUrls{
    updatedAt?:string
      createdAt?: string;
      id:number,
      url:string, 
      redirectedUrl:string
}

  
export interface initialRedirectUrls extends Omit<RedirectUrls, "id" >{
   redirectedUrl?:string
         url?:string, 
}
