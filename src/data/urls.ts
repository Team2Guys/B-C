import { generateSlug } from "./data"

export const urls = [
  {
    productName : "Living Room Curtains",
    Url : "made-to-measure-living-room-curtains",
    errorUrl:"/curtains/living-room-curtains"
  },
    {
        productName : "Kids Room Blinds",
        Url : "blinds-for-kids-room",
        errorUrl:"kids-room-blinds"

    },
    {
      productName : "Zipline Outdoor Blinds",
      Url : "zipline-blinds"
    },
    {
      productName : "Ripplefold / Wave Curtains",
      Url : "wave-curtains"
    },
    {
      productName : "Special Shape Shutters",
      Url : "special-shape-shutters-wooden-shutters"
    },
    {
      productName : "Tier On Tier Shutters Wooden Shutters",
      Url : "tier-on-tier-shutters-wooden-shutters"
    },
    {
      productName : "Solid Panel Shutters",
      Url : "solid-panel-shutters-plantation-shutters-dubai"
    },
    {
      productName : "Kids Prints Curtains",
      Url : "curtain-prints-for-kids"
    },
    {
      productName : "Wood Venetian",
      Url : "wooden-venetian"
    },
    {
      productName : "Transculent Blinds",
      Url : "translucent-blinds"
    },
    {
      productName : "Double Pinch Pleat",
      Url : "double-pleat-curtains"
    },
    {
      productName : "Velvet Curtains",
      Url : "velvet-curtains"
    },
    {
      productName : "Office Curtains",
      Url : "office-window-curtains"
    },
    {
      productName : "Staircase Shutters",
      Url : "staircase-shutters"
    },
    {
      productName : "White Shutters",
      Url : "white-shutters"
    },
    {
      productName : "Off White Shutters",
      Url : "off-white-shutters"
    },
    
    {
      productName : "Black Shutters",
      Url : "black-shutters"
    },
    {
      productName : "Dark Woods Shutters",
      Url : "dark-wood-shutters"
    },
    {
      productName : "Bold Colours Shutters",
      Url : "bold-colours-shutters"
    },
    {
      productName : "Grey Shutters",
      Url : "grey-shutters"
    },
    {
      productName : "Bedroom Curtains",
      Url : "made-to-measure-bed-room-curtains",
      errorUrl:"/curtains/bedroom-curtains"
    },
    {
      productName : "Bathroom Blinds",
      Url : "bathroom-blinds-dubai",
      errorUrl:"/blinds/bathroom-blinds"
    },
  
    ]


export const ChangedProductUrl = (title: string): string => {

    let products = urls.find((url: { productName: string, Url: string }) => {
        return (url.Url === title)
    })
let flag = products ? generateSlug(products.productName) : title
console.log(flag, "title", title)
    return flag


}


export const ChangedProductUrl_handler = (title: string): string => {
  console.log(title, 'title')

  let products = urls.find((url: { productName: string, Url: string }) => {
    return (url.productName === title)
  })

  return products ? products.Url : generateSlug(title)

}