
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ShoeCardProps{
    imgURL: StaticImageData;
    changeBigShoeImage: (imgURL:StaticImageData)=>void;
    bigShoeImg: StaticImageData;

}

const ShoeCard:React.FC<ShoeCardProps> = ({imgURL,bigShoeImg,changeBigShoeImage}) => {
    
    const HandleChange = () => {
        if (bigShoeImg !== imgURL) {
            changeBigShoeImage(imgURL)
        } 
    }
    
  return (
      <div onClick={HandleChange} className={
          `
          ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'}
          border-2 rounded-xl cursor-pointer max-sm:flex-1`}>
          <div className='flex justify-center items-center bg-[url("/assets/images/thumbnail-background.svg")]  bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <Image
            className='object-contain'
            src={imgURL}
            width={127}
            height={103}
            alt='shoe collection' />
          </div>

    </div>
  )
}

export default ShoeCard