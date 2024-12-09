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
  },
  {
    productName: 'Ripplefold/Wave Curtains',
    Url: 'wave-curtains',
  },
  {
    productName: 'Kids Prints Curtains',
    Url: 'curtain-prints-for-kids',
  },
  {
    productName: 'Transculent Blinds',
    Url: 'translucent-blinds',
  },
  {
    productName: 'Double Pinch Pleat Curtains',
    Url: 'double-pleat-curtains',
  },
  {
    productName: 'Velvet Curtains',
    Url: 'velvet-curtains',
  },
  {
    productName: 'Office Curtains',
    Url: 'office-window-curtains',
    errorUrl: 'office-curtains',
  },
  {
    productName: 'Staircase Shutters',
    Url: 'staircase-shutters',
  },
  {
    productName: 'White Shutters',
    Url: 'white-shutters',
  },
  {
    productName: 'Off White Shutters',
    Url: 'off-white-shutters',
  },

  {
    productName: 'Black Shutters',
    Url: 'black-shutters',
  },
  {
    productName: 'Dark Woods Shutters',
    Url: 'dark-wood-shutters',
  },
  {
    productName: 'Bold Colours Shutters',
    Url: 'bold-colours-shutters',
  },
  {
    productName: 'Grey Shutters',
    Url: 'grey-shutters',
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
    productName: 'Sunscreen/Transparent',
    Url: 'sunscreen-roller-blinds',
    errorUrl: '/blinds/roller-blinds/sunscreentransparent',
  },
  {
    productName: 'Dimout Blinds/Semi Transparent',
    Url: 'dimout-roller-blinds',
    errorUrl: '/blinds/roller-blinds/dimout-blindssemi-transparent',
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
    productName: 'Tier On Tier Shutters',
    Url: 'tier-on-tier-shutters-wooden-shutters',
    errorUrl: '/shutters-range/tier-on-tier-shutters',
  },
  // {
  //   productName: 'Solid Panel Shutters',
  //   Url: 'solid-panel-shutters-plantation-shutters-dubai',
  //   errorUrl: '/shutters-range/solid-panel-shutters',
  // },
  // {
  //   productName: 'Special Shape Shutters',
  //   Url: 'special-shape-shutters-wooden-shutters',
  //   errorUrl: '/shutters-range/special-shape-shutters',
  // },
  {
    productName: 'Theatre Curtains',
    Url: 'stage-and-theatre-curtains',
    errorUrl: '/curtains/theatre-curtains',
  },
  {
    productName: 'Dimout Blinds/Semi Transparent',
    Url: 'roller-blinds/dimout-roller-blinds',
    errorUrl: '/blinds/dimout-blindssemi-transparent',
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
];


export const predefinedPaths = {
  'offices-blinds': '/commercial',
  theatre: '/curtains/stage-and-theatre-curtains',
  hospitals: '/curtains/hospital-curtains',
  // restaurants: '/hotels-restaurants-blinds-curtains',
  'hotels-restaurants': '/hotels-restaurants-blinds-curtains',
  schools: '/blinds/school-blinds',
  offices: '/commercial',
  gym: '/curtains/gym-curtains',
};

export const ChangedProductUrl = (title: string): string => {
  let products = urls.find((url: { productName: string; Url: string }) => {
    return url.Url === title;
  });
  let flag = products ? generateSlug(products.productName) : title;
  console.log(flag, 'title', title);
  return flag;
};

export const ChangedProductUrl_handler = (title: string): string => {
  console.log(title, 'title');

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
]

