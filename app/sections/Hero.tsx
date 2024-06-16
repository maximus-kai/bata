import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '@/public/assets/icons'
import { statistics } from '../constants'
import Image from 'next/image'
import { bigShoe1 } from '@/public/assets/images'

const Hero = () => {
  return (
    <section className="xl:padding-l xl:padding-t">
      <section id="home" className='min-h-screen  max-container justify-center gap-10 flex flex-col xl:flex-row  w-full'>
        <div className=' relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-8 max-xl:padding-x'>
          <p className='text-xl font-montserrat text-coral-red'>Our Harmattan Collection</p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]  font-semibold'>
            <span className='  xl:bg-white  rounded-full xl:whitespace-nowrap z-10 pr-10'>
              The New Arrival
            </span>
            <br /> 
            <span className='text-coral-red inline-block font-bold mt-3'>Bata'</span> Shoes
            
          </h1>
          <p className='  font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Bata arrivals. Quality, comfort, and innovation for your active life</p>
          <Button label='shop now' iconUrl={arrowRight} />
          <div className=" gap-16 flex mt-20 justify-start items-start flex-wrap w-full ">
            {statistics.map((eachStat) => (
              <div key={eachStat.label}>
                <p className='text-4xl font-palanquin font-bold '>{eachStat.value}</p>
              <p className=' leading-7 font-montserrat text-slate-gray'>{eachStat.label} </p>
                </div>
           ))}
          </div>
        </div> 
        
        <div className='max-xl:py-40 bg-cover bg-center bg-primary bg-hero  flex-1 flex justify-center xl:min-h-screen items-center'>
          <Image
            className=' object-contain relative z-10'
            src={bigShoe1}
            width={610}
            height={500}
          alt='first big shoe'/>
        </div>
    </section>
    </section>
  )
}

export default Hero