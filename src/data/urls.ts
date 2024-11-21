
export const urls = [
    {
        productName: "Kids Room Blinds",
        Url: "blinds-for-kids-room"
    },
    {
        productName: "Ripplefold Curtains",
        Url: "wave-curtains"
    },
]




export const ChangedProductUrl = (title: string): string => {

    let products = urls.find((url: { productName: string, Url: string }) => {
        return (url.Url === title)
    })
let flag = products ? products.productName : title
console.log(flag, "title")
    return flag


}