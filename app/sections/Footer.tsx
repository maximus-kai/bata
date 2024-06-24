import { facebook, instagram, twitter } from '@/public/assets/icons'
import { footerLogo } from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'
import { footerLinks, navLinks } from '../constants'

const Footer = () => {
  return (
    <section className="padding-x bg-black padding-t pb-8 text-white">
      <section className='p-4  -white flex flex-col'>
        <div className='flex  -white py-4'>
          <Image
            alt='bata logo'
            src={footerLogo}
            width={100}
            height={100}
            className='' />

          <h2 className='font-palanquin text-lg'>Bata</h2>
        </div>
        <h3 className='text-left break-words w-80 font-palanquin'>
          Gba awon bata re lowo awon alabata wa to sun mo e ju nipa eto tuntun ti a ti se fun awon alabara wa.
        </h3>
        <div className='flex justify-left gap-4 py-8'>
          <Image
            alt='bata logo'
            src={facebook}
            width={50}
            height={50}
            className=' bg-white rounded-full p-2' />
          <Image
            alt='bata logo'
            src={twitter}
            width={50}
            height={50}
            className=' bg-white rounded-full p-2' />
          <Image
            alt='bata logo'
            src={instagram}
            width={50}
            height={50}
            className=' bg-white rounded-full p-2' />
        </div>
        <div className='flex'>
          <div className='flex flex-col'>

            <ul className="  flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {footerLinks.map((eachLink, index) => (
                <li key={eachLink.title} >
                  <a key={eachLink.title} href={eachLink.title}
                    className='  font-palanquin font-bold leading-normal text-lg text-white' >{eachLink.title}
                  </a>
                  <h1>{ eachLink.title}</h1>
                  <h1>{ eachLink.title}</h1>
                  <h1>{ eachLink.title}</h1>
                  
                </li>

              ))}
            </ul>
          </div>

        </div>
      </section>
    </section>

  )
}

export default Footer