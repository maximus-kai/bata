import { shieldTick, support, truckFast } from '@/public/assets/icons'
import Image from 'next/image'
import React from 'react'
import { services } from '../constants'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
    <section className="  padding-x py-10">
      <section className=' max-container flex flex-row flex-wrap  max-lg:items-center max-lg:gap-8 justify-center gap-4'>
          {
            services.map((eachService) => (
              <div key={eachService.imgURL}>
                <ServicesCard {...eachService} />
              </div>
            ))
         }
      </section>
    </section>
  )
}

export default Services