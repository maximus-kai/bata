import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '@/public/assets/icons'
import Image from 'next/image'
import { offer, shoe7, thumbnailShoe1 } from '@/public/assets/images'

const SpecialOffers = () => {
  return (
    <section className="border padding">
      <section className="max-container flex flex-row justify-wrap items-center max-xl:flex-col-reverse gap-10">
        <div className='object-contain w-full'>
          <Image
            alt='awon bata to yato'
            src={offer}
            width={773}
            height={687}
          />
        </div>
        <div className=' flex flex-col'>
          <div className=" w-full flex flex-col">

            <h1 className='font-bold capitalize font-palanquin text-4xl leading-tight'>
              <span className='text-coral-red'>Oja</span> Oto
            </h1>
            <p className='leading-tight mt-2 text-slate-gray font-montserrat  '>Je igbadun awon oja tuntun ti o ti jade si owo ara ilu ninu iolongo tuntun ti a mo si bonaza tio jade ni ojo kini osu tia wa yi ni asiko oru oganjan paa</p>
            <p className='leading-tight mt-3 text-slate-gray font-montserrat'>abala keji oro inu ipele akoko ley. Je igbadun awon oja tuntun ti o ti jade si owo ara ilu ninu iolongo tuntun ti a mo si bonaza tio jade ni ojo kini osu tia wa yi ni asiko oru oganjan paa</p>
          </div>
          <div className='flex flex-row gap-4 mt-7 max-sm:flex-col'>
            <Button label='Raa Sile bayii' iconUrl={arrowRight} />
            <Button label='Gbo nipa tuntun' TxColor='text-slate-gray' BgColor='bg-white' iconUrl={arrowRight} />
          </div>
        </div>


      </section>
    </section>
  )
}

export default SpecialOffers