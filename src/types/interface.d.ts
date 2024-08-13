// card data types
export interface CardTypes {
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
}

// Blinds and Curtains section Types
export interface BlindsAndCurtainsTypes {
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
}

export interface SocialDataType {
  href: string;
  src: string;
  alt: string;
}
export interface FeatureProductData {
  id: number;
  category: string;
  title: string;
  image: string; // You can also use StaticImageData if importing images
  link: string;
}

export interface SupportItem {
  title: string;
  description: string;
}
