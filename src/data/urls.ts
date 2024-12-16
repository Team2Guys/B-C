import { generateSlug } from './data';

export const urls = [
  {
    productName: 'Living Room Curtains',
    Url: 'made-to-measure-living-room-curtains',
    errorUrl: '/curtains/living-room-curtains',
  },
  {
    productName: 'Kids Room Blinds',
    Url: 'blinds-for-kids-room',
    errorUrl: '/blinds/kids-room-blinds',
  },
  {
    productName: 'Day/Night Blinds',
    Url: 'duplex-blinds',
    errorUrl: '/blinds/daynight-blinds',
  },
  {
    productName: 'Wooden Blinds',
    Url: 'wooden-venetian',
    errorUrl: '/blinds/wooden-blinds',
  },
  {
    productName: 'Zipline Outdoor Blinds',
    Url: 'zipline-blinds',
    errorUrl: 'zipline-outdoor-blinds',

  },
  {
    productName: 'Ripplefold/Wave Curtains',
    Url: 'wave-curtains',
    errorUrl: 'ripplefold/wave-curtains',

  },
  {
    productName: 'Kids Prints Curtains',
    Url: 'curtain-prints-for-kids',
    errorUrl: 'kids-prints-curtains',

  },
  {
    productName: 'Double Pinch Pleat Curtains',
    Url: 'double-pleat-curtains',
    errorUrl: 'double-pleat-pleat-curtains',

  },
 
  {
    productName: 'Office Curtains',
    Url: 'office-window-curtains',
    errorUrl: 'office-curtains',
  },

  {
    productName: 'Bedroom Curtains',
    Url: 'made-to-measure-bed-room-curtains',
    errorUrl: '/curtains/bedroom-curtains',
  },
  {
    productName: 'Bathroom Blinds',
    Url: 'bathroom-blinds-dubai',
    errorUrl: '/blinds/bathroom-blinds',
  },
  {
    productName: 'Aluminium Blinds',
    Url: 'aluminium-venetian-blinds-dubai',
    errorUrl: '/blinds/aluminium-blinds',
  },
  {
    productName: 'Honeycomb Blinds',
    Url: 'colby-honeycomb-blinds',
    errorUrl: '/blinds/honeycomb-blinds',
  },
  {
    productName: 'Sunscreen/Transparent Blinds',
    Url: 'sunscreen-roller-blinds',
    errorUrl: '/blinds/roller-blinds/sunscreentransparent-blinds',
  },
  {
    productName: 'Dimout Blinds',
    Url: 'dimout-roller-blinds',
    errorUrl: '/blinds/roller-blinds/dimout-blinds',
  },
  {
    productName: 'Blackout Curtains',
    Url: 'blackout-curtains-dubai',
    errorUrl: '/curtains/blackout-curtains',
  },
  {
    productName: 'Sheer Curtains',
    Url: 'made-to-measure-sheer-curtains',
    errorUrl: '/curtains/sheer-curtains',
  },
  {
    productName: 'Tracked Shutters',
    Url: 'tracked-window-shutters',
    errorUrl: '/shutters-range/tracked-shutters',
  },
  {
    productName: 'Hotel Curtains',
    Url: 'hotel-curtains-dubai',
    errorUrl: '/curtains/hotel-curtains',
  },
  {
    productName: 'Skylight blinds',
    Url: 'skylight-blinds-dubai',
    errorUrl: '/blinds/skylight-blinds',
  },
  {
    productName: 'Chiffon Curtains',
    Url: 'made-to-measure-chiffon-curtains',
    errorUrl: '/curtains/chiffon-curtains',
  },
  {
    productName: 'Linen Curtains',
    Url: 'made-to-measure-linen-curtains',
    errorUrl: '/curtains/linen-curtains',
  },
  {
    productName: 'Theatre Curtains',
    Url: 'stage-and-theatre-curtains',
    errorUrl: '/curtains/theatre-curtains',
  },
 
  {
    productName: 'Ripplefold/Wave Curtains',
    Url: 'wave-curtains',
    errorUrl: '/curtains/ripplefoldwave-curtains',
  },
  {
    productName: 'hotels-restaurants',
    Url: 'hotels-restaurants-blinds-curtains',
    errorUrl: '/hotels-restaurants',
  },
  {
    productName: 'blackout-roller-blinds',
    Url: '/roller-blinds/blackout-roller-blinds',
    errorUrl: '/blinds/blackout-roller-blinds',
  },
  // {
  //   productName: 'balcony',
  //   Url: '/balcony-blinds-and-curtains',
  //   errorUrl: '/blinds/blackout-roller-blinds',
  // },
];


export const predefinedPaths = {
  'office-blinds': '/commercial',
  'offices-blinds': '/commercial',
  // "study-room-blinds" : '/commercial',
  theatre: '/curtains/stage-and-theatre-curtains',
  hospitals: '/curtains/hospital-curtains',
  // restaurants: '/hotels-restaurants-blinds-curtains',
  'hotels-restaurants': '/hotels-restaurants-blinds-curtains',
  schools: '/blinds/school-blinds',
  offices: '/commercial',
  gym: '/curtains/gym-curtains',
  skylight : '/blinds/skylight-blinds-dubai',
  balcony: '/balcony-blinds-and-curtains',

};

export const ChangedProductUrl = (title: string): string => {
  let products = urls.find((url: { productName: string; Url: string }) => {
    return url.Url === title;
  });
  let flag = products ? generateSlug(products.productName) : title;
  return flag;
};

export const ChangedProductUrl_handler = (title: string): string => {
  // console.log(title, 'title');

  let products = urls.find((url: { productName: string; Url: string }) => {
    return url.productName === title;
  });

  return products ? products.Url : generateSlug(title);
};



export const CommercialUrl=[
  {urlName:"hospitals", Redirect:"/curtains/hospital-curtains"},
  {urlName:"restaurants", Redirect:"/hotels-restaurants-blinds-curtains"},
  {urlName:"hotels", Redirect:"/hotels-restaurants-blinds-curtains"},
  {urlName:"offices", Redirect:"/curtains/office-window-curtains"},
  {urlName:"schools", Redirect:"/blinds/school-blinds"},
  {urlName:"gym", Redirect:"/curtains/gym-curtains"},
  {urlName:"theatre", Redirect:"/curtains/stage-and-theatre-curtains"},
  {urlName:"wooden-aluminium-blinds", Redirect:"/blinds/wooden-venetian"},
  {urlName:"study-room-blinds", Redirect:"/commercial"},
  // {urlName:"balcony", Redirect:"/balcony-blinds-and-curtains"},
  {urlName:"aric-blinds", Redirect:"/"},
]

export const getProduct = [
  'Roller Blinds',
  'Roman Blinds',
  'Wooden Blinds',
  'Day/Night Blinds',
  'Vertical Blinds',
  'Blackout Blinds',
  'Motorised blinds',
  'Aluminium Blinds',
  'Sheer Horizon Blinds',
  'Sunscreen/Transparent',
  'Dimout Blinds',
  'Bedroom Blinds',
  'Kitchen Blinds',
  'Living Room Blinds',
  'Motorised curtains',
  'Blackout Curtains',
  'Ripplefold/Wave Curtains',
  'Pinch Pleat Curtains',
  'Linen Curtains',
  'Eyelet Curtains',
  'Sheer Curtains',
  'Bedroom Curtains',
  'Living Room Curtains',
  'Textured Curtains',
  'Theatre Curtains',
  'Kids Prints Curtains',
  'Geometric Curtains',
  'Tab Top Curtains',
  'Full Height Shutters',
  'Bay Window Shutters',
  'Tracked Shutters',
  'Special Shape Shutters',
  'Tier On Tier Shutters',
  'Solid Panel Shutters',
  'Cafe Style Shutters',
  'Living Room Shutters',
  'Kitchen Shutters',
  'Bedroom Shutters',
  'Bathroom Shutters',
  'Bi Fold Shutters',
  'Outdoor Shutters',
  'Staircase Shutters'
];