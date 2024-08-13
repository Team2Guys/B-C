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

export interface TRSlide {
  title: string;
  content: string;
}
export type BannerData = {
  imageUrl: string;
  title: string;
  buttonText: string;
};

export type BannerProps = {
  data: BannerData;
};
