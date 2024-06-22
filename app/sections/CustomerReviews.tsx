import { star } from '@/public/assets/icons'
import { customer1 } from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'
import CustomerCard from '../components/CustomerCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className="padding bg-pale-blue">
      <section className="  flex flex-col max-container ">
        <div className=" flex flex-col text-center mt-2 ">
          <h1 className='font-bold text-4xl font-palanquin px-6'>
            Kini Awon <span className='text-coral-red'> Onibara Wa </span>  So?
          </h1>
          <p className='text-slate-gray break-words'>Gbo lati enu awon onibara wa to ti to adun awon oja wa wo ti won si gbadun ohun ti won ra ju bo ti ye lo won si gbadun ohun ti won ra ju bo ti ye lo</p>

        </div>
        <div className='  flex gap-20 max-sm:gap-4 justify-center flex-wrap flex-row'>
          {reviews.map((eachReview) => (
            <CustomerCard key={eachReview.customerName} {...eachReview} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default CustomerReviews