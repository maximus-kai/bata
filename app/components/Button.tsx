import Image from 'next/image'
import React from 'react'
interface ButtonProps{
    label: string;
    iconUrl?: any;
    BgColor?:string
    TxColor?:string
}

const Button:React.FC<ButtonProps> = ({label,iconUrl,BgColor,TxColor}) => {
  return (
      <button className={`border max-sm:w-full ${BgColor || 'border-coral-red'} ${TxColor ||'text-white'} flex justify-center gap-2 px-7 py-4 text-lg bg-coral-red  rounded-full leading-none font-montserrat items-center`}>
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