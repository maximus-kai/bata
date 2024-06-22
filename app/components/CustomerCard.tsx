import { star } from '@/public/assets/icons'
import Image from 'next/image'
import React from 'react'

interface CustomerCardProps{
    customerName: string;
    imgURL: any;
    rating: number;
    feedback: string;
}

const CustomerCard:React.FC<CustomerCardProps> = ({customerName,imgURL,rating,feedback}) => {
  return (
      <div className=" flex flex-col text-slate-gray  justify-center text-center items-center w-80 mt-7 px-4 py-4 gap-2">

          <Image
              className='rounded-full '
              src={imgURL}
              alt='first customer'
              width={50}
              height={50} />

          <p className=''>{ feedback}</p>
          <div className='flex flex-row gap-2 text-center justify-center items-center content-center'>

              <Image
                  src={star}
                  alt='star rating'
                  width={20}
                  height={20} />
              <p>({rating})</p>
          </div>
          <h1 className='font-bold text-black'>{customerName}</h1>
      </div>
  )
}

export default CustomerCard