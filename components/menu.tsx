import React from 'react'
import Close from '../public/icons/icon-close.svg'
import Image from 'next/image';

interface MenuProps {
  handleIsMenuActive: () => void;
  isMenuActive: Boolean;
}

const Menu = ({handleIsMenuActive, isMenuActive}: MenuProps) => {
  return (
    <div>
        {isMenuActive ? <div className='h-screen fixed z-50  w-full bg-black/70'>
            <section className='p-6 bg-white h-full w-7/10 flex flex-col gap-10' >
                <div><Image src={Close} alt='close' onClick={handleIsMenuActive}/></div>
                <div>
                    <ul className='flex flex-col gap-4'>
                    {['Collections', 'Men', 'Women', 'About', 'Contact'].map((item, index) => {
                        return(
                            <li key={index} className='font-bold'>
                                {item}
                            </li>
                        )
                    })}
                </ul>
                </div>
            </section>
        </div> : ''}
      
    </div>
  )
}

export default Menu