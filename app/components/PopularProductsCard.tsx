import { star } from '@/public/assets/icons';
import Image from 'next/image'
import React from 'react'
interface PopularProductsCardProps{
    name: string;
    imgURL: any;
    price: string;
    rating?: number;
}

const PopularProductsCard:React.FC<PopularProductsCardProps> = ({name,imgURL,price,rating}) => {
  return (
      <div className=' flex flex-col w-full max-sm:w-full '>
         
          <Image
              src={imgURL}
              alt='the available products'
              height={280}
              width={280} />
          <div className=' mt-8 flex flex-1 justify-start gap-2.5'>
                            <Image
                  src={star}
                  height={24}
                width={24}
                alt='star rating'
              />
              <p className='font-montserrat text-xl leading-normal text-slate-gray ' >({rating?.toFixed(1)})</p>
          </div>
         <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3> 
          <p className='mt-2 text-2xl leading-normal font-semibold text-coral-red font-montserrat '>{price} </p>
      </div>
  )
}

export default PopularProductsCard