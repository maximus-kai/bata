'use client'
import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '@/public/assets/icons'
import { shoes, statistics } from '../constants'
import Image from 'next/image'
import { bigShoe1,bigShoe2,bigShoe3 } from '@/public/assets/images'
import ShoeCard from '../components/ShoeCard'



const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe2)
  return (
    <section className=" relative xl:padding-l xl:padding-t">
      <section id="home" className='min-h-screen max-container justify-center gap-10 flex flex-col xl:flex-row  w-full'>
        <div className=' relative z-20 xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 max-xl:padding-x'>
          <p className='text-xl font-montserrat text-coral-red'>Awon Bata fun asiko 'Harmattan' ti a wa yii</p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-semibold'>
            <span className='  xl:bg-white  rounded-full xl:whitespace-nowrap  pr-10'>
              Tuntun ti Wolu o 
            </span>
            <br /> 
            <span className='text-coral-red inline-block font-bold mt-3'>Bata'&apos;'</span> Shoes
            
          </h1>
          <p className='  font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>E fo'ju yin lounje. O tuntun, O dun' wo, O tun wa dani lara ya fun igbadun aye kan yii</p>
          <Button label='Ra meta sile' iconUrl={arrowRight} />
          <div className=" gap-16 flex mt-20 justify-start items-start flex-wrap w-full ">
            {statistics.map((eachStat,index) => (
              <div key={index}>
                <p className='text-4xl font-palanquin font-bold '>{eachStat.value}</p>
              <p className=' leading-7 font-montserrat text-slate-gray'>{eachStat.label} </p>
                </div>
           ))}
          </div>
        </div> 
        
        <div className='  relative  max-xl:py-40 bg-cover bg-center  bg-[url("/assets/images/collection-background.svg")] bg-coral-red flex-1  flex justify-center xl:min-h-screen items-center'>
          
        <Image
            className='  object-contain relative z-10'
            src={bigShoeImg}
            width={610}
            height={500}
            alt='first big shoe' />
          
          <div className='sm:left-[10%] max-sm:px-6 flex flex-row gap-4 sm:gap-6  absolute -bottom-[5%]   '> 
            
          {shoes.map((eachShoe,index) => (
            <div key={index}>
              <ShoeCard
                imgURL={eachShoe.thumbnail}
                changeBigShoeImage={() => {setBigShoeImg(eachShoe.thumbnail) }}
                bigShoeImg={bigShoeImg} />
            </div>
                      ))}
        </div>
       
       
        </div>
    </section>
    </section>
  )
}

export default Hero