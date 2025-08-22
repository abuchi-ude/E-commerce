"use client";
// import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Img1 from "../public/images/image-product-1.jpg";
import Img2 from "../public/images/image-product-2.jpg";
import Img3 from "../public/images/image-product-3.jpg";
import Img4 from "../public/images/image-product-4.jpg";
import Delete from "../public/icons/icon-close.svg";
import Img5 from "../public/images/image-product-1-thumbnail.jpg";
import Img6 from "../public/images/image-product-2-thumbnail.jpg";
import Img7 from "../public/images/image-product-3-thumbnail.jpg";
import Img8 from "../public/images/image-product-4-thumbnail.jpg";
import { useState, useEffect } from "react";

interface ImagesProps {
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  isImageModalActive?: boolean;
  setIsImageModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Images = ({
  currentImage,
  setCurrentImage,
  isImageModalActive,
  setIsImageModalActive,
}: ImagesProps) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 768);
    }
  }, []);

  const images = [Img1, Img2, Img3, Img4];

  const thumbnail = [Img5, Img6, Img7, Img8];

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  const handleModal = () => {
    if (setIsImageModalActive && typeof isImageModalActive === "boolean") {
      setIsImageModalActive(!isImageModalActive);
    }
  };
  return (
    <div className="relative">
      <section className="hidden md:block">
        {isImageModalActive && (
          <ImageModal
            thumbnail={thumbnail}
            handleModal={handleModal}
            images={images}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
      </section>
      <section>
        <Image
          src={images[currentImage]}
          alt={`${images[currentImage]}`}
          onClick={isDesktop ? handleModal : undefined}
          className="h-[300px] md:rounded-xl cursor-pointer"
        />
      </section>
      <section className="flex justify-between absolute w-full md:top-4/12 top-5/12 px-3">
        <div
          className="p-3 bg-white rounded-[50%] flex items-center justify-center"
          onClick={handlePrev}
        >
          <svg
            className="h-3 w-3 stroke-2 text-[#1D2024] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="18"
            viewBox="0 0 12 18"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          {/* <Image
            src={Previous}
            alt="previous"
            onClick={handlePrev}
            height={7}
            width={7}
          /> */}
        </div>
        <div
          className="p-3 bg-white rounded-[50%] flex items-center justify-center"
          onClick={handleNext}
        >
          <svg
            className="h-3 w-3 stroke-2 text-[#1D2024] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="18"
            viewBox="0 0 13 18"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              fillRule="evenodd"
            />
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
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden "
            >
              <Image
                src={image}
                alt={`Image ${currentImage}`}
                className={`${
                  currentImage === index ? "border-3 border-[#FF8F44]" : ""
                } rounded-xl hover:bg-[#FF7E1B]/60`}
              />

              {currentImage === index ? (
                <div className="absolute inset-0 bg-white/60 rounded-xl"></div>
              ) :               
              <div onClick={() => setCurrentImage(index)} className="absolute inset-0 hover:bg-white/60  transition-opacity duration-200 rounded-xl "></div>
}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Images;

interface ImageModalProps {
  thumbnail: StaticImageData[];
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handlePrev: () => void;
  images: StaticImageData[];
  handleModal: () => void;
}

const ImageModal = ({
  thumbnail,
  handleNext,
  handlePrev,
  images,
  currentImage,
  setCurrentImage,
  handleModal,
}: ImageModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
      {/* Main image */}
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" onClick={handleModal} className="text-white cursor-pointer xl:ml-[23%] lg:ml-[26%] mb-4 hover:text-[#FF8F44]">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
      <section className="relative flex items-center justify-center">
        <Image
          src={images[currentImage]}
          alt={`Image ${currentImage}`}
          className="w-[350px] h-[300px] object-cover  rounded-xl"
        />

        {/* Prev Button */}
        <div
          className="absolute left-[-20px] p-4 bg-white rounded-full flex items-center justify-center cursor-pointer"
          onClick={handlePrev}
        >
          <svg
            className="h-4 w-4 text-[#1D2024]"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="18"
            viewBox="0 0 12 18"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>

        {/* Next Button */}
        <div
          className="absolute right-[-20px] p-4 bg-white rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleNext}
        >
          <svg
            className="h-4 w-4 text-[#1D2024]"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="18"
            viewBox="0 0 13 18"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* Thumbnails */}
      <section className="hidden md:flex gap-4 mt-8">
        {thumbnail.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer overflow-hidden rounded-xl border-2 ${
              currentImage === index ? "border-[#FF8F44]" : "border-transparent"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-[100px] h-[100px] object-cover rounded-xl"
            />
            {currentImage === index ? (
                <div className="absolute inset-0 bg-white/60 rounded-xl"></div>
              ) :               
              <div onClick={() => setCurrentImage(index)} className="absolute inset-0 hover:bg-white/60  transition-opacity duration-200 rounded-xl "></div>
            }
          </div>
        ))}
      </section>
    </div>
  );
};
