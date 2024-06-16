import {navLinks} from '@/app/constants/index'
import Image from 'next/image'
const Nav = () => {
  return (
    <header className='padding-x py-8  shadow absolute z-10 w-full'>
      <nav className=' shadow flex justify-between items-center p-1 max-container'>
        <a href='/'>
          <Image
            src="/assets/images/header-logo.svg"
            width={130}
            height={39}
            alt="Logo"
         />
        </a>
        <ul className=" shadow flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((eachLink, index) => (
            <li >
              <a href={eachLink.href}
                 className='shadow font-montserrat leading-normal text-lg text-slate-gray' key={eachLink.label}>{eachLink.label}
            </a>
            </li>
            
          ))}
        </ul>
        <div className='shadow lg:hidden p-1'>
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