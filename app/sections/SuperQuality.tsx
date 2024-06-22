import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '@/public/assets/icons'
import Image from 'next/image'
import { shoe8 } from '@/public/assets/images'

const SuperQuality = () => {
  return (
    <section className="padding">
      <section id='about-us' className='flex max-container flex-row max-xl:flex-col  w-full justify-between gap-10 items-center'>
        
          <div className='w-full flex flex-col '>
           <h1 className='font-bold capitalize font-palanquin text-4xl leading-tight'> Idunu wa ni lati pese           
         <span className='text-coral-red'> Akoni</span> bata, tio ni Afiwe     
        </h1>
         <p className='leading-tight mt-2 text-slate-gray font-montserrat '>
         Awon bata ti a ni inu awon ile itaja wa kaakakiri agbaye o se kon le, won je gbajumo laarin awon egbe won, won sii se fi yangan lawujo, sibe sibe ti e ba wo awon bata yi, e maa ri pe gbogbo isoro yin yio pada ma see ni okankan ti yio fi tan patapata
          </p>
          <p className='leading-tight mt-3 text-slate-gray font-montserrat '>
            E fun wa ni itowo kan na ki e si wo boya e ni pada wa ra bii mejo si merindinlogota
            </p>
            <div className='mt-8'>
              <Button label='Mo nipa re si' iconUrl={arrowRight} />
            </div>
          
          </div>
          <div className='w-full  flex items-center justify-center '>
            <div className='object-contain'>
              <Image
                alt='Super quality shoe'
                width={570}
                height={522}
              src={shoe8}/>
            </div>
          </div>  
    </section>
    </section>
  )
}

export default SuperQuality