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
  // console.log(title, 'title');

  let products = urls.find((url: { productName: string; Url: string }) => {
    return url.productName === title;
  });

  return products ? products.Url : generateSlug(title);
};

export const CommercialUrl = [
  { urlName: 'hospitals', Redirect: '/curtains/hospital-curtains' },
  // { urlName: 'restaurants', Redirect: '/hotels-restaurants-blinds-curtains' },
  // { urlName: 'hotels', Redirect: '/hotels-restaurants-blinds-curtains' },
  { urlName: 'offices', Redirect: '/curtains/office-window-curtains' },
  { urlName: 'school-blinds', Redirect: '/blinds/school-blinds' },
  { urlName: 'gym', Redirect: '/curtains/gym-curtains' },
  { urlName: 'theatre', Redirect: '/curtains/stage-and-theatre-curtains' },
  { urlName: 'wooden-aluminium-blinds', Redirect: '/blinds/wooden-venetian' },
  { urlName: 'study-room-blinds', Redirect: '/commercial' },
  { urlName: 'aric-blinds', Redirect: '/' },
  { urlName: 'outdoor-blinds', Redirect: '/commercial/outdoor' },
  { urlName: 'ripplefoldwave-curtains', Redirect: '/curtains/wave-curtains' },
  {
    urlName: 'special-shape-shutters-wooden-shutters',
    Redirect: '/shutters-range/special-shape-shutters',
  },
  {
    urlName: 'tier-on-tier-shutters-wooden-shutters',
    Redirect: '/shutters-range/tier-on-tier-shutters',
  },
  {
    urlName: 'solid-panel-shutters-plantation-shutters-dubai',
    Redirect: '/shutters-range/solid-panel-shutters',
  },
  { urlName: 'installed-office-blinds-dubai', Redirect: '/commercial' },
];

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
  'Staircase Shutters',
];

export const allowedTitles = [
  'Roman Blinds',
  'Vertical Blinds',
  'Wooden Blinds',
  'Aluminium Blinds',
  'Zebra Blinds',
  'Blackout Curtains',
  'Sheer Curtains',
  'Shutters MDF',
  'Roller Blinds',
  'Shutters Basswood',
];

export const predefinedOrder = [
  'Roller Blinds',
  'Roman Blinds',
  'Vertical Blinds',
  'Wooden Blinds',
  'Aluminium Blinds',
  'Zebra Blinds',
  'Blackout Curtains',
  'Sheer Curtains',
  'Shutters MDF',
  'Shutters Basswood',
];

export const blogCategoryUrl = [
  { url: '/blog/blinds', name: 'Blinds' },
  { url: '/blog/curtains', name: 'Curtains' },
  { url: '/blog/shutters', name: 'Shutters' },
];

export const blogPostUrl = [
  {
    url: '/how-to-clean-dusty-curtains',
    redirectUrl: '/blog/how-to-clean-dusty-curtains',
  },
  {
    url: '/how-to-install-window-blinds-without-drilling',
    redirectUrl: '/blog/how-to-install-window-blinds-without-drilling',
  },
  {
    url: '/guide-to-pulling-up-and-rolling-down-blinds',
    redirectUrl: '/blog/guide-to-pulling-up-and-rolling-down-blinds',
  },
  {
    url: '/types-of-popular-roman-blinds',
    redirectUrl: '/blog/types-of-popular-roman-blinds',
  },
  {
    url: '/types-of-roller-blinds-a-definitive-guide',
    redirectUrl: '/blog/types-of-roller-blinds-a-definitive-guide',
  },
  {
    url: '/can-you-paint-a-roller-blind',
    redirectUrl: '/blog/can-you-paint-a-roller-blind',
  },
  {
    url: '/how-to-choose-curtains-for-the-living-room',
    redirectUrl: '/blog/how-to-choose-curtains-for-the-living-room',
  },
  {
    url: '/should-curtains-match-the-wall-color',
    redirectUrl: '/blog/should-curtains-match-the-wall-color',
  },
  {
    url: '/different-types-of-curtains-for-windows',
    redirectUrl: '/blog/different-types-of-curtains-for-windows',
  },
  {
    url: '/blinds-vs-curtains-which-is-energy-efficient',
    redirectUrl: '/blog/blinds-vs-curtains-which-is-energy-efficient',
  },
  {
    url: '/lined-vs-unlined-curtains',
    redirectUrl: '/blog/lined-vs-unlined-curtains',
  },
  {
    url: '/how-to-cover-entire-wall-with-curtains',
    redirectUrl: '/blog/how-to-cover-entire-wall-with-curtains',
  },
  {
    url: '/the-modern-window-treatments-in-dubai',
    redirectUrl: '/blog/the-modern-window-treatments-in-dubai',
  },
  {
    url: '/vertical-blinds-for-windows',
    redirectUrl: '/blog/vertical-blinds-for-windows',
  },
  { url: '/our-installation', redirectUrl: '/gallery' },
  { url: '/call-me-back', redirectUrl: '/request-appointment' },
  { url: '/blinds-projects', redirectUrl: '/projects' },
  { url: '/curtains-projects', redirectUrl: '/projects' },
  { url: '/shutters-projects', redirectUrl: '/projects' },
  { url: '/motorised-projects', redirectUrl: '/projects' },
  { url: '/why-choose-blinds-curtains', redirectUrl: '/why-choose-blinds-curtains' },
  { url: '/downtown-dubai', redirectUrl: '/projects' },
  { url: '/al-barsha', redirectUrl: '/projects' },
  { url: '/business-bay-dubai', redirectUrl: '/projects' },
  { url: '/jumeirah-beach-residence', redirectUrl: '/projects' },
  { url: '/arabian-ranches', redirectUrl: '/projects' },
  { url: '/jumeirah-bay-island', redirectUrl: '/projects' },
  { url: '/dubai-hills', redirectUrl: '/projects' },
  { url: '/palm-jumeirah', redirectUrl: '/projects' },
];

export const subCategoryUrls = [
  { url: 'blackout-blinds', name: 'Blackout/Private Blinds' },
];

export const customSortingOrder = [
  //Blinds By Type

  'roller-blinds',
  'roman-blinds',
  'vertical-blinds',
  'wooden-blinds',
  'aluminium-blinds',
  'zebra-blinds',
  'zipline-outdoor-blinds',
  'panel-blinds',

  //Blinds By Room

  'living-room-blinds',
  'dining-room-blinds',
  'bedroom-blinds',
  'kids-room-blinds',
  'kitchen-blinds',
  'conservatory-blinds',
  'staircase-blinds',
  'study-room-blinds',
  'bathroom-blinds',

  //Blinds By Funtions
  'blackout-blinds',
  'dimout-blinds',
  'sunscreentransparent-blinds',

  //Curtain By Type
  'triple-pinch-pleat-curtains',
  'double-pinch-pleat-curtains',
  'pencil-pleat-curtains',
  'ripplefoldwave-curtains',
  'eyelet-curtains',
  'tab-top-curtains',

  //Curtain By Room
  'kids-room-curtains',
  'living-room-curtains',
  'bedroom-curtains',
  'dining-room-curtains',
  'kitchen-curtains',
  'staircase-curtains',
  'conservatory-curtains',

  //Curtain By fabric

  'blackout-curtains',
  'sheer-curtains',
  'natural-fabric-curtains',
  'textured-curtains',
  'geometric-curtains',
  'plain-curtains',
  'stripes-curtains',
  'kids-prints-curtains',
  'patterned-curtains',

  //Shutter By Style

  'full-height-shutters',
  'bi-fold-shutters',
  'bi-pass-shutters',
  'solid-panel-shutters',
  'tier-on-tier-shutters',
  'cafe-style-shutters',
  'bay-window-shutters',
  'outdoor-shutters',

  //Shutter By Room
  'living-room-shutters',
  'bedroom-shutters',
  'bathroom-shutters',
  'dining-room-shutters',
  'kitchen-shutters',
  'staircase-shutters',

  //Shutter By Color

  'white-shutters',
  'off-white-shutters',
  'grey-shutters',
  'light-wood-shutters',
  'dark-wood-shutters',
  'bold-colours-shutters',
];

export const MoterisedData = [
  {
    title: 'Automated Blinds',
    link: '/automated-blinds',
    imageSrc: 'assets/images/Blinds/landing/Automatedblinds.webp',
  },
  {
    title: 'Automated Curtains',
    link: '/automated-curtains',
    imageSrc: 'assets/images/Curtain/landing/Automatedcurtains.webp',
  },
];

export const allProductsOrder = [
  'roller-blinds',
  'roman-blinds',
  'vertical-blinds',
  'wooden-blinds',
  'aluminium-blinds',

  'triple-pinch-pleat-curtains',
  'double-pinch-pleat-curtains',
  'pencil-pleat-curtains',
  'ripplefoldwave-curtains',

  'full-height-shutters',
  'bi-fold-shutters',
  'bi-pass-shutters',
  'solid-panel-shutters',
];

export const customTitles = [
  { slug: 'hotels-restaurants', name: 'Hotels & Restaurant Window Coverings' },
  { slug: 'auditoriums', name: 'Made To Measure Auditorium Window Coverings' },
];
