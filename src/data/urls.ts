
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
    ]



export  const ChangedProductUrl = (title: string): string => {

    let products = urls.find((url: { productName: string, Url: string }) => {
      return (url.Url === title)
    })

    return products ? products.productName :title


  }