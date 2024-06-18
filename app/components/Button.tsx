import Image from 'next/image'
import React from 'react'
interface ButtomMap{
    label: string;
    iconUrl: any;
}

const Button:React.FC<ButtomMap> = ({label,iconUrl}) => {
  return (
      <button className='border max-sm:w-full border-coral-red flex justify-center gap-2 px-7 py-4 text-lg bg-coral-red text-white rounded-full leading-none font-montserrat items-center'>
          {label}
          <Image
              className='shadow ml-2 rounded-full'
              src={iconUrl}
              height={20}
              width={20}
          alt='Arrow right icon'/>
      </button>
  )
}

export default Button