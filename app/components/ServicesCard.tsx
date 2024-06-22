import Image from 'next/image';
import React from 'react'

interface ServicesCardProps {
  imgURL: any;
  label: string;
  subtext: string;
}
const ServicesCard: React.FC<ServicesCardProps> = ({ imgURL, label, subtext }) => {
  return (
    <div className="  flex-1 sm:w-[350px] sm:min-w-[350px] rounded-3xl w-full shadow-3xl px-10 py-16">
      <div className=' w-6 h-6 bg-coral-red rounded-full'>
        <Image
          src={imgURL}
          width={24}
          height={24}
          alt='little symbols of hope' />
      </div>
      <h1 className='  font-bold font-palanquin mt-2  leading-normal text-3xl '>{label}</h1>
      <p className='  mt-3 text-lg break-words font-montserrat text-slate-gray  '>Alakoko ma je pe a o kin fi asiko awon onibara wa sofo rara rara, igba ranpe ni a fi n da yin loun </p>
    </div>
  )
}

export default ServicesCard