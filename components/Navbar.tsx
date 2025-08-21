'use client'
import React from 'react'
import Menu from '../public/icons/icon-menu.svg'
import Cart from '../public/icons/icon-cart.svg'
import Image from 'next/image'
import Avatar from '../public/images/image-avatar.png'
import Logo from '../public/icons/logo.svg'

interface NavProps {
  handleCart: () => void; // A function that returns nothing
  count: number
  handleIsMenuActive: () => void;
}
const Nav = ( {handleCart, count, handleIsMenuActive}: NavProps ) => {
   
  return (
    <div className='relative '>
    <nav className='flex justify-between p-6 w-full  relative md:hidden'>
      <div className='flex items-center gap-4'>
        <Image src={Menu} alt='menu' height={20} width={20} className="w-auto h-auto" onClick={handleIsMenuActive}/>
        <Image src={Logo} alt='logo-sneakers' height={20}/>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex'>
          <Image src={Cart} alt='Cart' height={20} width={20} onClick={handleCart} className=''/>
          <p className='text-white bg-[#FF8F44] absolute top-4 right-15 text-[12px] px-2 rounded-[20px]'>{count}</p>
        </div>
        <Image src={Avatar} alt='Avatar' width={20} height={20}/>
      </div>
    </nav>
    {/* <div className=''>
    NAV FOR BIGGER SCREEN
    </div> */}
    <nav className='hidden md:flex justify-between p-6 mb-4 w-full relative border-b border-[#d8dce6]'>
      <div className='flex items-center gap-8'>
        <Image src={Logo} alt='logo-sneakers' height={20}/>
        <ul className='flex gap-4'>
                    {['Collections', 'Men', 'Women', 'About', 'Contact'].map((item, index) => {
                        return(
                            <li key={index} className='text-[#BFC6D4] text-xs'>
                                {item}
                            </li>
                        )
                    })}
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex'>
          <Image src={Cart} alt='Cart' height={20} width={20} onClick={handleCart} className=''/>
          <p className='text-white bg-[#FF8F44] absolute top-6 right-19 text-[12px] px-2 rounded-[20px]'>{count}</p>
        </div>
        <Image src={Avatar} alt='Avatar' width={40} height={40}/>
      </div>
    </nav>
    </div>
  )
}

export default Nav