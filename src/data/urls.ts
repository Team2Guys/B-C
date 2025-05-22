import { generateSlug } from './data';

export const urls = [
  {
    productName: 'Living Room Curtains',
    Url: 'made-to-measure-living-room-curtains',
    errorUrl: '/curtains/living-room-curtains',
  },
  {
    productName: 'Dining Room Curtains',
    Url: 'dining-room-curtains-dubai',
    errorUrl: '/curtains/dining-room-curtains',
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
    errorUrl: '/curtains/zipline-outdoor-blinds',
  },
  {
    productName: 'Ripplefold/Wave Curtains',
    Url: 'wave-curtains',
    errorUrl: '/curtains/ripplefoldwave-curtains',
  },
  {
    productName: 'Kids Prints Curtains',
    Url: 'curtain-prints-for-kids',
    errorUrl: '/curtains/kids-prints-curtains',
  },
  {
    productName: 'Double Pinch Pleat Curtains',
    Url: 'double-pleat-curtains',
    errorUrl: '/curtains/double-pleat-pleat-curtains',
  },

  {
    productName: 'Office Curtains',
    Url: 'office-window-curtains',
    errorUrl: '/curtains/office-curtains',
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
    productName: 'hotels-restaurants',
    Url: 'hotels-restaurants-blinds-curtains',
    errorUrl: '/hotels-restaurants',
  },
  {
    productName: 'blackout-roller-blinds',
    Url: '/roller-blinds/blackout-roller-blinds',
    errorUrl: '/blinds/blackout-roller-blinds',
  },
  {
    productName: 'Skylight Blinds',
    Url: 'skylight-blinds-dubai',
    errorUrl: '/commercial/skylight',
  },
  {
    productName: 'Skylight Blinds',
    Url: 'skylight-blinds-dubai',
    errorUrl: '/commercial/skylight-blinds',
  },
  {
    productName: 'Skylight Blinds',
    Url: 'skylight-blinds-dubai',
    errorUrl: '/blinds/skylight-blinds',
  },
  {
    productName: 'Outdoor Blinds And Curtains',
    Url: 'outdoor',
    errorUrl: '/commercial/outdoor-blinds-and-curtains',
  },
  {
    productName: 'Indoor Blinds And Curtains',
    Url: 'indoor',
    errorUrl: '/commercial/indoor-blinds-and-curtains',
  },
  {
    productName: 'Pergola Curtains',
    Url: 'pergola',
    errorUrl: '/commercial/pergola-curtains',
  },
  {
    productName: 'Dining Room Curtains',
    Url: 'dining-room-curtains-dubai',
    errorUrl: '/curtains/dining-room-curtains',
  },
];

export const predefinedPaths = {
  'office-blinds': '/commercial',
  'offices-blinds': '/commercial',
  theatre: '/curtains/stage-and-theatre-curtains',
  hospitals: '/curtains/hospital-curtains',
  'hotels-restaurants': '/hotels-restaurants-blinds-curtains',
  // schools: '/blinds/school-blinds',
  offices: '/commercial',
  gym: '/curtains/gym-curtains',
  skylight: '/blinds/skylight-blinds-dubai',
  'skylight-blinds': '/blinds/skylight-blinds-dubai',
  'balcony-blinds-and-curtains': '/balcony-blinds-and-curtains',
};

export const ChangedProductUrl = (title: string): string => {
  let products = urls.find((url: { productName: string; Url: string }) => {
    return url.Url === title;
  });
  let flag = products ? generateSlug(products.productName) : title;
  return flag;
};

export const ChangedProductUrl_handler = (title: string): string => {

  let products = urls.find((url: { productName: string; Url: string }) => {
    return url.productName === title;
  });

  return products ? products.Url : generateSlug(title);
};

export const blogCategoryUrl = [
  { url: '/blog/blinds', name: 'Blinds' },
  { url: '/blog/curtains', name: 'Curtains' },
  { url: '/blog/shutters', name: 'Shutters' },
];


export const desiredProductTitles = [
  'Sunscreen/Transparent Blinds',
  'Blackout Roller Blinds',
  'Dimout Blinds',
  'Translucent Blinds',
];

