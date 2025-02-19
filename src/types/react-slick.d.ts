declare module 'react-slick' {
  import { Component, ReactNode } from 'react';

  export interface SliderSettings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    nextArrow?: ReactNode | undefined; // Allow undefined
    prevArrow?: ReactNode | undefined; // Allow undefined
    responsive?: Array<{
      breakpoint: number;
      settings: SliderSettings;
    }>;
    [key: string]: any;
  }

  export default class Slider extends Component<SliderSettings> {}
}
