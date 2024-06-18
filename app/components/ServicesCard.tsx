import Image from 'next/image';
import React from 'react'

interface ServicesCardProps{
    imgURL: any;
    label: string;
    subtext: string;
}
const ServicesCard:React.FC<ServicesCardProps> = ({imgURL,label,subtext}) => {
  return (
    <div className=" shadow-3xl rounded-md w-full sm:min-w-[350px] sm:w-[350] px-10 py-16 flex flex-col">
    <div className='border border-coral-red'>
      <Image
                    src={'/assets/icons/truck-fast.svg'}
                    width={50}
                    height={50}
                    alt='little symbols of hope' />
    </div>
    
    
    <h1 className=' font-bold font-palanquin mt-2 leading-tight text-xl'>{label}</h1>
    <p className='  mt-2 font-montserrat text-slate-gray leading-tight '>Alakoko ma ni pe a o kin fi asiko awon onibara wa sofo rara rara, igba ranpe ni a fi n da yin loun </p>
  </div>
  )
}

export default ServicesCard