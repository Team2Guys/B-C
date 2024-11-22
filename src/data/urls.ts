import { generateSlug } from "./data"

export const urls = [
    {
        productName : "Kids Room Blinds",
        Url : "blinds-for-kids-room"
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
      productName : "Tracked System Shutters",
      Url : "tracked-window-shutters"
    },
    {
      productName : "Special Shape Shutters",
      Url : "special-shape-shutters-wooden-shutters"
    },
    {
      productName : "Tier On Tier Shutters",
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