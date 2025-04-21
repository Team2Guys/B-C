export const links = [
  { href: '/made-to-measure-blinds', label: 'Blinds', id: 2,     
    
    script:{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://blindsandcurtains.ae/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blinds",
              "item": "https://blindsandcurtains.ae/made-to-measure-blinds/"
            }
               ]
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://blindsandcurtains.ae/#professionalservice",
          "name": "Blinds and Curtains Dubai",
          "image": "https://blindsandcurtains.ae/_next/image?url=%2Fassets%2Fimages%2FBlinds%2Flanding%2Flanding.webp&w=1080&q=75",
          "url": "https://blindsandcurtains.ae/made-to-measure-blinds/",
          "telephone": "+971544945339",
          "priceRange": "AED 250",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 43, 22nd St – Al Quoz Industrial Area 4",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.117692,
            "longitude": 55.1532843
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "08:30",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/blindsandcurtainsdubai",
            "https://www.instagram.com/blindsandcurtainsdubai/",
            "https://www.pinterest.com/blindsandcurtainsdubai/"
          ],
          "description": "Dubai’s leading made to measure blinds company. Choose from over 2000 different materials. We covers all shades of sunscreen blinds and blackout blinds."
        }
      ]
    }
    
    
    }
      
      ,
  { href: '/made-to-measure-curtains', label: 'Curtains', id: 5, script: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://blindsandcurtains.ae/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Curtains",
            "item": "https://blindsandcurtains.ae/made-to-measure-curtains/"
        }
    ]
} },
  { href: '/shutters-range', label: 'Shutters', id: 9, script: 
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://blindsandcurtains.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Shutters",
            "item": "https://blindsandcurtains.ae/shutters-range/"
          }
        ]
      } },
  { href: '#', label: 'Motorised',id: 20},
  { href: '/commercial', label: 'Commercial', id: 12 },
  { href: '/gallery', label: 'Gallery' },
  { href: '/estimator', label: 'Estimator' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us'},
];



export const blogLinks = [
  { href: 'blinds', label: 'Blinds', id: 2 },
  { href: 'curtains', label: 'Curtains', id: 5 },
  { href: 'shutters', label: 'Shutters', id: 9 },
];