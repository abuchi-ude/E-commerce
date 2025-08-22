'use client'
import React from "react";
import Images from "../../components/Images";
import Cart from "../../components/Cart";
import Nav from "../../components/Navbar";
import Img1 from "../../public/images/image-product-1.jpg";
import Img2 from "../../public/images/image-product-2.jpg";
import Img3 from "../../public/images/image-product-3.jpg";
import Img4 from "../../public/images/image-product-4.jpg";
import { StaticImageData } from "next/image";
import Menu from "../../components/menu";

type Items = {
  name: string;
  img: string | StaticImageData;
  price: string;
  number: number;
};

const ECommerce = () => {

  const [count, setCount] = React.useState(0)
   const [cartActivated, setCartActivated] = React.useState(false)
   const [items, setItems] = React.useState<Items[]>([])
    const [currentImage, setCurrentImage] = React.useState(0);
    const [value, setValue] = React.useState(0)
    const [isMenuActive, setIsMenuActive] = React.useState(false)
    const [isImageModalActive, setIsImageModalActive] = React.useState(false)

  const images = [Img1, Img2, Img3, Img4];

   const price = '$125.00'

   const handleIsMenuActive = () => {
    setIsMenuActive(!isMenuActive)
   }

   const handleDelete = (name: string) => {
    const updatedItems = items.filter((item) => item.name !== name)
    const itemToRemove = items.find((item) => item.name === name);
     setItems(updatedItems)
      if (!itemToRemove) return;
    setValue(value - itemToRemove.number)
   }

   const handleCart = () => {

    setCartActivated(!cartActivated)
  }
  const handlePlus = () => {
    setCount(count + 1)
  }
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    
  }

  const handleAddToCart = () =>{
    if (count <= 0) return;
    const existingItemIndex = items.findIndex(i => i.name === 'Fall Limited Edition Sneakers');
    if (existingItemIndex >= 0) {
    // Update quantity
    const updatedItems = [...items];
    updatedItems[existingItemIndex].number += count;
    setValue(updatedItems[existingItemIndex].number)
    setItems(updatedItems);
    setCount(0)
    }
    else{
    const item = {
      name: 'Fall Limited Edition Sneakers',
      img: images[currentImage],
      price: price,
      number: count,
    }
    setItems([item, ...items])
    setValue(item.number)
    setCount(0)
  }
  }
 
  return (
    <div>
    <main className="md:hidden">
      <section className="relative">
        <Menu handleIsMenuActive ={handleIsMenuActive} isMenuActive={isMenuActive}/>
      </section>
      <section>
        <Nav handleCart = {handleCart} count= {value} handleIsMenuActive={handleIsMenuActive}/>
      </section>
      <section className="relative">
        <div >
          {cartActivated && <Cart items={items} handleDelete={handleDelete}/>}
        </div>
        <div><Images currentImage={currentImage} setCurrentImage={setCurrentImage}/></div>
        
      </section>
      <section className="p-4 flex flex-col gap-1">
        <h2 className="text-[#6E727A] font-bold">Sneaker Company</h2>
        <p className="font-bold text-3xl mb-2">Fall Limited Edition Sneakers</p>
        <p className="text-[#BFC6D4] font-medium">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </section>
      <section className="p-4 flex flex-col gap-4 mb-8">
        <div className="flex justify-between">
          <div className="w-1/3">
            <p className="text-3xl font-bold">{price}</p>
          </div>
          <div className="flex gap-4 self-end h-1/3 w-3/5 justify-between items-end">
            <p className="text-white bg-black w-fit py-1 px-2 rounded-md font-medium text-xs h-full">
              50%
            </p>
            <p className="line-through text-[#6E727A] h-full font-semibold">
              $250.00
            </p>
          </div>
        </div>
        <div className="relative text-center mt-2  ">
          <div className="bg-[#F4F7FE] w-full py-2 rounded-[10px]">
            <input value={count} readOnly onChange={() => setCount(count)} className="font-bold text-center focus:border-0" />
          </div>
          <div className="flex justify-between absolute w-full top-6/18 items-center px-4">
            <svg onClick={handleMinus} className="minus h-3 w-3 text-[#1D2024]" xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4">
              <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" fill="#FF7E1B" fillRule="nonzero"/>
            </svg>
            <svg onClick={handlePlus} className="plus h-3 w-3 text-[#D1D5DB]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
              <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" fill="#FF7E1B" fillRule="nonzero"/>
            </svg>
          </div>
        </div>
        <div className="py-4 bg-[#FF8F44] text-black rounded-lg">
          <button className="flex gap-2 w-full justify-center items-center">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill='currentColor'
                fillRule="nonzero"
              />
            </svg>
            <p className="text-[#1D2024] font-bold" onClick={handleAddToCart}>Add to Cart</p>
          </button>
        </div>
      </section>
    </main>
    {/* Main for bigger screens */}
    <main className="hidden md:block px-[10%]">
      <section className="relative">
        <Nav handleCart = {handleCart} count= {value} handleIsMenuActive={handleIsMenuActive}/>
        <div >
          {cartActivated && <Cart items={items} handleDelete={handleDelete}/>}
        </div>
      </section>
      <section className="flex px-[8%] mt-20 gap-20">
        <div>
          <Images currentImage={currentImage} setCurrentImage={setCurrentImage} isImageModalActive={isImageModalActive} setIsImageModalActive={setIsImageModalActive}/>
        </div>
        <div>
          <section className="p-4 flex flex-col gap-1">
            <h2 className="text-[#6E727A] font-bold">Sneaker Company</h2>
        <p className="font-bold text-3xl mb-6">Fall Limited Edition Sneakers</p>
        <p className="text-[#BFC6D4] font-medium">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
          </section>
          <section className="p-4 flex flex-col gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <div className=" flex gap-4">
            <p className="text-3xl font-bold">{price}</p>
            <p className="text-white bg-black w-fit py-1 px-2 rounded-md font-medium text-xs h-full self-end">
              50%
            </p>
          </div>
          <div className="">
            <p className="line-through text-[#6E727A] h-full font-semibold">
              $250.00
            </p>
          </div>
        </div>
        <div className="flex gap-2">
        <div className="relative text-center mt-2 w-1/3">
          <div className="bg-[#F4F7FE] py-2 rounded-[10px]">
            <input value={count} readOnly onChange={() => setCount(count)} className="font-bold text-center w-full focus:border-0" />
          </div>
          <div className="flex justify-between absolute w-full top-6/18 items-center px-4">
            <svg onClick={handleMinus} className={`${isImageModalActive && 'hover:text-[#FF8F44]/50' } minus cursor-pointer h-3 w-3 text-[#FF7E1B]`} xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4">
              <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" fill="currentColor" fillRule="nonzero"/>
            </svg>
            <svg onClick={handlePlus} className="plus cursor-pointer h-3 w-3 text-[#D1D5DB]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
              <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" fill="#FF7E1B" fillRule="nonzero"/>
            </svg>
          </div>
        </div>
        <div className="py-2 bg-[#FF8F44] text-black rounded-lg w-2/3  flex justify-center items-center">
          <button className={`flex gap-2 w-full justify-center items-center `}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill='currentColor'
                fillRule="nonzero"
              />
            </svg>
            <p className="text-[#1D2024] font-bold" onClick={handleAddToCart}>Add to Cart</p>
          </button>
        </div>
        </div>
          </section>
        </div>
       
        
      
      </section>
      
    </main>
    </div>
  );
};

export default ECommerce;
