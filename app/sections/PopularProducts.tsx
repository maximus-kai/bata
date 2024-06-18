import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section className=" padding">
      <section id="products" className="  max-container max-sm:mt-12 ">
        <div className="flex  flex-col gap-5 justify-start ">
          <h1 className='text-4xl  font-bold font-palanquin leading-tight'>Awon Oja Wa to 
            <span className='text-coral-red'> Gbajumo</span> Lawujo</h1>
            <p className='text-slate-gray lg:max-w-lg mt-2 font-montserrat'>Je igbadun awon orisirisi ara ti awon oja wa ni, a sese n mu eye bo lapo ni. Awon anfani to wa lori awon oja yi ju bee lo sugbon a o ni so fun yin titi ti e o fi ra bii meta si mewa</p>
        </div>
        <div className=' mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-14 border-blue-400'>
          {
            products.map((eachProduct) => (
                <PopularProductsCard key={eachProduct.name}  {...eachProduct}/>
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default PopularProducts