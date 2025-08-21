"use client";
// import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Img1 from "../public/images/image-product-1.jpg";
import Img2 from "../public/images/image-product-2.jpg";
import Img3 from "../public/images/image-product-3.jpg";
import Img4 from "../public/images/image-product-4.jpg";
import Img5 from "../public/images/image-product-1-thumbnail.jpg";
import Img6 from "../public/images/image-product-2-thumbnail.jpg";
import Img7 from "../public/images/image-product-3-thumbnail.jpg";
import Img8 from "../public/images/image-product-4-thumbnail.jpg";
import { useState, useEffect } from "react";

interface ImagesProps {
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  isImageModalActive?: boolean;
  setIsImageModalActive?: React.Dispatch<React.SetStateAction<boolean>>
}


const Images = ({ currentImage, setCurrentImage, isImageModalActive, setIsImageModalActive}: ImagesProps) => {
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  if (typeof window !== "undefined") {
    setIsDesktop(window.innerWidth >= 768);
  }
}, []);

  const images = [
    Img1, Img2, Img3, Img4];

  const thumbnail = [Img5, Img6, Img7, Img8]

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  const handleModal = () => {
    if (setIsImageModalActive && typeof isImageModalActive === "boolean"){
    setIsImageModalActive(!isImageModalActive)
    }
  }
  return (
    <div className="relative">
      <section className="hidden md:block">
        {isImageModalActive && <ImageModal thumbnail={thumbnail} images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} handleNext={handleNext} handlePrev={handlePrev}/>
}
      </section>
      <section>
        <Image src={images[currentImage]} alt={`${images[currentImage]}`} onClick={isDesktop ? () => handleModal : undefined} className="h-[300px] md:rounded-xl" />
      </section>
      <section className="flex justify-between absolute w-full top-5/12 px-3">
        <div className="p-3 bg-white rounded-[50%] flex items-center justify-center" onClick={handlePrev}>
          <svg className="h-3 w-3 stroke-2 text-[#1D2024]" xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18">
            <path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="5" fill="none" fillRule="evenodd"/>
          </svg>
          {/* <Image
            src={Previous}
            alt="previous"
            onClick={handlePrev}
            height={7}
            width={7}
          /> */}
        </div>
        <div className="p-3 bg-white rounded-[50%] flex items-center justify-center" onClick={handleNext}>
          <svg className="h-3 w-3 stroke-2 text-[#1D2024]" xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18">
            <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="5" fill="none" fillRule="evenodd"/>
          </svg>
          {/* <Image
            src={Next}
            alt="next"
            onClick={handleNext}
            height={10}
            width={10}
          /> */}
        </div>
      </section>
      <section className="hidden md:flex gap-4 mt-8">
        {thumbnail.map((image, index) => {
          return (
            <div key={index} className="relative cursor-pointer overflow-hidden">
              <Image src={image} alt={`Image ${currentImage}`} onClick={() => setCurrentImage(index)} className={`${currentImage === index ? 'border-3 border-[#FF8F44]' : ''} rounded-xl`}/>
              <div className="absolute inset-0 bg-white/60 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"></div>

              {currentImage === index && (
                <div className="absolute inset-0 bg-white/60 rounded-xl"></div>
              )}
            </div>
          )
        })}
      </section>
    </div>
  );
};

export default Images;

interface ImageModalProps {
  thumbnail: StaticImageData[],
  currentImage: number,
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>,
  handleNext: () => void,
  handlePrev: () => void
  images: StaticImageData[],

}

const ImageModal = ( {thumbnail, handleNext, handlePrev, images, currentImage, setCurrentImage}: ImageModalProps) => {
  return (
    <div className="fixed">
      <section>
        <Image src={images[currentImage]} alt={`${images[currentImage]}`} className="h-[300px] md:rounded-xl" />
      </section>
      <section className="flex justify-between absolute w-full top-5/12 px-3">
        <div className="p-3 bg-white rounded-[50%] flex items-center justify-center" onClick={handlePrev}>
          <svg className="h-3 w-3 stroke-2 text-[#1D2024]" xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18">
            <path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="5" fill="none" fillRule="evenodd"/>
          </svg>
          {/* <Image
            src={Previous}
            alt="previous"
            onClick={handlePrev}
            height={7}
            width={7}
          /> */}
        </div>
        <div className="p-3 bg-white rounded-[50%] flex items-center justify-center" onClick={handleNext}>
          <svg className="h-3 w-3 stroke-2 text-[#1D2024]" xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18">
            <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="5" fill="none" fillRule="evenodd"/>
          </svg>
          {/* <Image
            src={Next}
            alt="next"
            onClick={handleNext}
            height={10}
            width={10}
          /> */}
        </div>
      </section>
      <section className="hidden md:flex gap-4 mt-8">
        {thumbnail.map((image, index) => {
          return (
            <div key={index} className="relative cursor-pointer overflow-hidden">
              <Image src={image} alt={`Image ${currentImage}`} onClick={() => setCurrentImage(index)} className={`${currentImage === index ? 'border-3 border-[#FF8F44]' : ''} rounded-xl`}/>
              {currentImage === index && (
                <div className="absolute inset-0 bg-white/60 rounded-xl"></div>
              )}
            </div>
          )
        })}
      </section>
    </div>
  )
}


