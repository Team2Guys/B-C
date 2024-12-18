import Image from 'next/image';
import React from 'react'
import { EstimatorProps } from 'types/interfaces';


const EstimatorProduct: React.FC<EstimatorProps> = ({ selectProduct,setActiveProduct,activeProduct  })  => {

    const handleProductSelect = (product: EstimatorProps) => {
        setActiveProduct(product);
      };

  return (
    <div className='container px-0 border rounded-xl bg-white p-2'>
        <div className='grid grid-cols-2  xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 xl:grid-cols-5 sm:justify-items-center sm:gap-4 p-3 '>
            {selectProduct.map((product,index)=>(
            <div key={index}
            onClick={() => handleProductSelect(product as any)}
            className={`cursor-pointer mt-2 sm:mt-0 ${
                activeProduct?.id === product.id ? 'font-semibold' : ''
              }`}
            >
            <div className={``}>
            <Image className={`w-20 h-20 rounded-lg mx-auto border-4 ${activeProduct?.id === product.id ? '  border-secondary' : 'border-white'}`}
             width={200} height={200} src={product.posterImage[0].imageUrl} alt='image'/>
            </div>
            <div className={`mt-2 text-center text-14 xl:text-16 px-1 ${activeProduct?.id === product.id ? ' border-b-2  border-secondary w-fit mx-auto' : ''}`}>
            {product.title.split(" ").map((word, index) => (
                <p key={index}>{word}</p>
            ))}
            </div>
            </div>
               )) 
            }
        </div>
    </div>
  )
}

export default EstimatorProduct