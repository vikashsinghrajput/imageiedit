import React from 'react'
import { FiPenTool, FiUserCheck } from 'react-icons/fi'
import { GoTools } from "react-icons/go";
import { IoCloudDoneOutline, IoCloudUploadOutline } from 'react-icons/io5'

const HowDoWork = () => {
  return (
    <>
      <section >
  {/* Container */}
  <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
    {/* HEADING TEXT */}
    <p className="font-inter mb-2 text-center text-sm font-medium text-[#d04901]">
      4 EASY STEPS
    </p>
    <h1 className="text-center text-3xl font-bold md:text-4xl text-main">How it works</h1>
    <p className="font-inter mx-auto mb-12 mt-4 max-w-lg px-5 text-center text-base font-light text-gray-500">
     We understand the value of ultra-fine images for the success of your automobile business. 
    </p>
 <hr className='w-full'/>
    {/* HOW IT WORKS STEPS */}
    
    <div className="flex flex-col items-start justify-center md:flex-row">
    
      {/* BLOCK */}
      <div className="relative my-8 flex w-full rounded-md md:mx-8 md:flex-col">
        <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
          <h2 className="text-3xl font-medium"><IoCloudUploadOutline className='text-[#50996D]' /></h2>
        </div>
        <div className="ml-6 md:ml-0">
          <h2 className="mb-5 text-xl font-medium md:mt-8  text-SubTwo">Upload Images</h2>
          <p className="font-inter max-w-md pr-5 text-base text-gray-500">
           Capture vehicle photos from any location and angle, then upload them to ImageIEdit manual production using our intuitive mobile or web app.
          </p>
        </div>
        {/* MOBILE - HOW IT WORKS LINE */}
        <svg
          className="absolute -bottom-12 left-7 md:hidden"
          width={12}
          height={70}
          viewBox="0 0 12 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
            fill="black"
          />
        </svg>
        {/* DESKTOP - HOW IT WORKS LINE */}
        <svg
          className="absolute right-0 top-7 hidden md:block"
          width={170}
          height={12}
          viewBox="0 0 170 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="relative my-8 flex w-full rounded-md md:mx-8 md:flex-col">
        <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
          <h2 className="text-3xl font-medium"><GoTools  className='text-[#50996D]   '  /></h2>
        </div>
        <div className="ml-6 md:ml-0">
          <h2 className="mb-5 text-xl font-medium md:mt-8 text-SubTwo"> manual production Image
Processing</h2>
          <p className="font-inter max-w-md pr-5 text-base text-gray-500">
            Optimize brand consistency and elevate quality standards with ImagesIEdit s cutting-edge imaging solutions. Streamline vehicle listings and slash operational costs by up to 88% through
          </p>
        </div>
        {/* MOBILE - HOW IT WORKS LINE */}
        <svg
          className="absolute -bottom-12 left-7 md:hidden"
          width={12}
          height={70}
          viewBox="0 0 12 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
            fill="black"
          />
        </svg>
        {/* DESKTOP - HOW IT WORKS LINE */}
        <svg
          className="absolute right-0 top-7 hidden md:block"
          width={170}
          height={12}
          viewBox="0 0 170 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
            fill="black"
          />
        </svg>
      </div>
      {/* BLOCK */}
      <div className="relative my-8 flex w-full rounded-md md:mx-8 md:flex-col">
        <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
          <h2 className="text-3xl font-medium"><FiUserCheck className='text-[#50996D]'  /></h2>
        </div>
        <div className="ml-6 md:ml-0">
          <h2 className="mb-5 text-xl font-medium md:mt-8 text-SubTwo">Manual QC &
Correction</h2>
          <p className="font-inter max-w-md pr-5 text-base text-gray-500">
            Manual Quality Control (QC) & Correction involves the thorough inspection, verification, and correction of Images
          </p>
        </div>
        {/* MOBILE - HOW IT WORKS LINE */}
        <svg
          className="absolute -bottom-12 left-7 md:hidden"
          width={12}
          height={70}
          viewBox="0 0 12 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
            fill="black"
          />
        </svg>
        {/* DESKTOP - HOW IT WORKS LINE */}
        <svg
          className="absolute right-0 top-7 hidden md:block"
          width={170}
          height={12}
          viewBox="0 0 170 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
            fill="black"
          />
        </svg>
      </div>
      {/* BLOCK */}
      <div className="relative my-8 flex w-full rounded-md md:mx-8 md:flex-col">
        <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
          <h2 className="text-3xl font-medium"><IoCloudDoneOutline className='text-[#50996D]'  /></h2>
        </div>
        <div className="ml-6 md:ml-0">
          <h2 className="mb-5 text-xl font-medium md:mt-8 text-SubTwo">Download and Update Listings</h2>
          <p className="font-inter max-w-md pr-5 text-base text-gray-500">
            Download your processed images or use our API to update your online listings instantly.
          </p>
        </div>
      </div>
      {/* BLOCK */}
      
    </div>

    
  </div>
</section>

    </>
  )
}

export default HowDoWork
