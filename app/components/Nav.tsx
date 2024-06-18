import {navLinks} from '@/app/constants/index'
import Image from 'next/image'
const Nav = () => {
  return (
    <header className='padding-x py-8  bg-white  fixed z-30 w-full'>
      <nav className='  flex justify-between items-center p-1 max-container'>
        <a href='/'>
          <Image
            src="/assets/images/header-logo.svg"
            width={130}
            height={39}
            alt="Logo"
         />
        </a>
        <ul className="  flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((eachLink, index) => (
            <li key={eachLink.label} >
              <a key={eachLink.label} href={eachLink.href}
                 className=' font-montserrat leading-normal text-lg text-slate-gray' >{eachLink.label}
            </a>
            </li>
            
          ))}
        </ul>
        <div className=' lg:hidden p-1'>
          <Image
            src='/assets/icons/hamburger.svg'
            width={25}
            height={25}
          alt='Hamburger icon'/>
        </div>
      </nav>
    </header>
  )
}

export default Nav