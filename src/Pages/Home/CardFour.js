import React from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { CiPen } from "react-icons/ci";
import { FiUserCheck } from "react-icons/fi";

const CardFour = () => {
  return (
    <section id="works" className="relative bg-gray-200 py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl text-gray-600 font-extrabold mx-auto md:text-6xl lg:text-5xl">
          How does it work?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-base text-SubTwo leading-relaxed  ">
          We understand the value of ultra-fine images for the success of your automobile business. Therefore, we have 24x7 Manual QC's, who inspect AI-retouched images and ensure 100% accuracy every time.

upload image



        </p>
      </div>
      <div className="relative mt-12 lg:mt-20">
        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
          <img
            alt=""
            loading="lazy"
            width={1000}
            height={500}
            decoding="async"
            data-nimg={1}
            className="w-full"
            style={{ color: "transparent" }}
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
          />
        </div>
        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold text-main"><IoCloudUploadOutline /></span>
            </div>
            <h3 className="mt-6 text-xl  text-main font-semibold leading-tight md:mt-10">
           Upload Images
            </h3>
            
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold text-main"><CiPen/></span>
            </div>
            <h3 className="mt-6 text-xl text-main font-semibold leading-tight md:mt-10">
      Manual Production
            </h3>
           
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold text-main"><FiUserCheck /></span>
            </div>
            <h3 className="mt-6 text-xl text-main font-semibold leading-tight md:mt-10">
          Manual QC & Correction
            </h3>
            
          </div>

          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold text-main"><IoCloudUploadOutline /></span>
            </div>
            <h3 className="mt-6 text-xl  text-main font-semibold leading-tight md:mt-10">
          100% Accurate Results
            </h3>
            
          </div>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
      style={{
        background:
          "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)"
      }}
    ></div>
  </section>
  
  )
}

export default CardFour
