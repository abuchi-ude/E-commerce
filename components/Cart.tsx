import React from 'react'
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Delete from '../public/icons/icon-delete.svg'

type Items = {
  name: string;
  img: string | StaticImageData; // allow both  price: string;
  number: number;
  price: string
};

interface CartProps {
  items: Items[];
  handleDelete: (name: string) => void;  // An array of Item objects
}
const Cart = ( { items, handleDelete } : CartProps ) => {

  
  return (
    <div className='absolute z-50 md:right-0 md:top-18 md:rounded-lg md:text-xs md:bg-white  shadow-xl md:h-fit md:z-50  pt-2 px-3  pb-8 w-full h-full  md:w-fit'>
      <div className='bg-white h-full rounded-lg'>
        <section className='border-b h-3/10 p-5'>
          <h1 className='font-bold'>Cart</h1>

        </section>
        <section className='h-7/10  flex flex-col gap-4 items-center justify-center'>
       {items.length === 0 ? (
        <div className=' text-[#6E727A] font-bold w-[85%] md:w-[200px] md:h-[80px] md:pt-10 md:flex md:items-center md:justify-center text-center'><p>Your cart is empty</p></div>
        ) : (
              items.map((item, index) => {
                const unitPrice = parseFloat(item.price.replace("$", ""));
                const totalPrice = unitPrice * item.number;
                return (
                <div key={index} className='flex justify-start gap-4 mt-5'>
                <section >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  
                </section>
                <section className="flex flex-col text-[#6E727A]  flex-grow mt-2">
                  
                    <p>{item.name}</p>
                    <p className=''>
                      {item.price} x {item.number}{" "}
                      <span className="font-bold text-black">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </p>
                  
                </section>
                <section className='flex items-center' onClick={() => {handleDelete(item.name)}}>
                    <Image src={Delete} alt=''/>
                </section>
                </div>
            )})
        )}
        <div className=' w-[85%]'>
          {items.length > 0 && (<button className='text-black cursor-pointer bg-[#FF8F44] py-4 md:py-2 font-bold w-full rounded-md'>
            Checkout
          </button>)}
        </div>
        
        </section>
      </div>
    </div>
  )
}

export default Cart