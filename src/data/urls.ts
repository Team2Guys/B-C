
export const urls = [
    {
        productName : "Kids Room Blinds",
        Url : "blinds-for-kids-room"
    }
    ]




export  const ChangedProductUrl = (title: string): string => {

    let products = urls.find((url: { productName: string, Url: string }) => {
      return (url.Url === title)
    })

    return products ? products.productName :title


  }