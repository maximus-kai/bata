import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '@/public/assets/icons'

const Subscribe = () => {
  return (
    <section className="padding-x w-full py-16 sm:py-32">
      <section id='contact-us' className="max-container justify-between items-center gap-10 flex max-lg:flex-col">
        <h3 className='font-bold text-center font-palanquin leading-[68px] text-4xl'>
          E kan si wa fun <span className="text-coral-red">Iroyin</span>  & Iwe oun tuntun!
        </h3>
        <div className='border border-slate-gray rounded-full w-full flex flex-row max-sm:flex-col max-sm:border-white p-2.5 gap-5 justify-center  '>
          <input
            type='text'
            placeholder='subscribe@bata.com'
            className='input'
          />
        <Button
          label='E Sa Mi Je'
          iconUrl={arrowRight}
          />
          </div>
        <div>
        </div>
      </section>
    </section>
  )
}

export default Subscribe