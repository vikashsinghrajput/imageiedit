import React from 'react'
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import herorow from "../../Asstes/Ecom-Photoshop/Automotive Retouching/raw.jpg";
import herodone from "../../Asstes/Ecom-Photoshop/Automotive Retouching/hero-done.jpg"
import { SiStreamrunners } from "react-icons/si";
const Work = () => {
  return (
    <>
         <div>
<header>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
    {/* Component */}
    <div className="grid items-center gap-8 sm:gap-16 md:grid-cols-2">
      <div>
        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold md:text-2xl md:leading-tight text-main">
         Capture. Connect. Convert. Experience The New Era of Car Photography
        </h1>
        <p className="mb-6 text-sm text-gray-500 sm:text-1xl lg:mb-8">
         Capture. Connect. Convert. Experience The New Era of Car Photography
Save time and money with Car Studio AI’s automated car photography solutions tailored for dealerships. Improve competitiveness and operational efficiency with consistent, high-quality listings that attract more buyers.
        </p>   
        <div className="mb-6 flex items-stretch md:mb-10 lg:mb-12">
          <button
            href="javascript:void(0);"
            className="mr-5 rounded-md bg-gray-200 px-8 py-4 text-center font-semibold text-main md:mr-6 lg:mr-8"
          >
            Get Started
          </button>
          <button
        
            className="flex items-center justify-center rounded-md border border-solid border-main text-[#d04901] px-6 py-3 text-center font-bold"
          >
            Book Demo
          </button>
        </div>     
      </div> 
       <ImgComparisonSlider
                  hover="hover"
                  keyboard="enabled"
                  className=" object-cover object-center  cursor-pointer rounded w-612 h-464 inline-block lg:max-w-lg "
                >
                  <svg
                    slot="handle"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    viewBox="-8 -3 16 6"
                  >
                    <path
                      stroke="#fff"
                      d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                      stroke-width="1"
                      fill="#fff"
                      vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                  <figure slot="first" className="before">
                    <img width="100%" src={herorow} />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure slot="second" class="after">
                    <img width="100%" src={herodone} />
                    <figcaption>After</figcaption>
                  </figure>
                </ImgComparisonSlider>
    </div>
    {/* About */}
     <section className="mr-10">
  <div className="mx-auto max-w-7xl px- py-16 px-1 md:px-10 md:py-20 mr-">

   
    {/* Testimonial Wall */}
    <div className="mb-8 gap-5 py-4 md:mb-12 columns-1  c-col-1 sm:columns-2 c-sm-col-2 md:columns-3 c-md-col-3 lg:mb-16">
      {/* Item */}
      <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid  hover:border-main bg-white p-8">
        <div className="mb-4 flex flex-row">
         <div className='mr-4 inline-block h-16 w-16  bg-gray-300 py-5 px-4'>
            <SiStreamrunners size={30} />
         </div>
        
          <div className="flex flex-col">
            
          </div>
        </div>
        <h6>Streamlined Online Presence</h6>
        <p className="mb-4 text-sm text-gray-500">
          Standardize and enhance your car advertisements, building increased customer trust and engagement.
        </p>
       
      </div>
      {/* Item */}
       <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid  hover:border-main bg-white p-8">
        <div className="mb-4 flex flex-row">
         <div className='mr-4 inline-block h-16 w-16  bg-gray-300 py-5 px-4'>
            <SiStreamrunners size={30} />
         </div>
        
          <div className="flex flex-col">
            
          </div>
        </div>
        <h6>Significant Cost and Time Savings</h6>
        <p className="mb-4 text-sm text-gray-500">
          Save up to 88% on costs and 76% on time with our efficient AI solutions.
        </p>
       
      </div>
      {/* Item */}
       <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid  hover:border-main bg-white p-8">
        <div className="mb-4 flex flex-row">
         <div className='mr-4 inline-block h-16 w-16  bg-gray-300 py-5 px-4'>
            <SiStreamrunners size={30} />
         </div>
        
          <div className="flex flex-col">
            
          </div>
        </div>
        <h6>Enhanced Competitiveness</h6>
        <p className="mb-4 text-sm text-gray-500">
          Achieve consistent high-quality listings, setting your dealership apart from the competition.
        </p>
       
      </div>
      {/* Item */}
       <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid  hover:border-main bg-white p-8">
        <div className="mb-4 flex flex-row">
         <div className='mr-4 inline-block h-16 w-16  bg-gray-300 py-5 px-4'>
            <SiStreamrunners size={30} />
         </div>
        
          <div className="flex flex-col">
            
          </div>
        </div>
        <h6>Seamless Integration</h6>
        <p className="mb-4 text-sm text-gray-500">
         Experience improved digital engagement and higher sales with superior vehicle visuals.
        </p>
       
      </div>
      {/* Item */}
       <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid  hover:border-main bg-white p-8">
        <div className="mb-4 flex flex-row">
         <div className='mr-4 inline-block h-16 w-16  bg-gray-300 py-5 px-4'>
            <SiStreamrunners size={30} />
         </div>
        
          <div className="flex flex-col">
            
          </div>
        </div>
        <h6>Increased Customer Engagement</h6>
        <p className="mb-4 text-sm text-gray-500">
          Boost engagement by 74% with high-quality images that drive more interaction and faster sales.
        </p>
       
      </div>
      {/* Item */}
       <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid  hover:border-main bg-white p-8">
        <div className="mb-4 flex flex-row">
         <div className='mr-4 inline-block h-16 w-16  bg-gray-300 py-5 px-4'>
            <SiStreamrunners size={30} />
         </div>
        
          <div className="flex flex-col">
            
          </div>
        </div>
        <h6>Faster Sales Cycle</h6>
        <p className="mb-4 text-sm text-gray-500">
          Reduce vehicle time-to-market with eye-catching, professional images.
        </p>
       
      </div>
    </div>
  </div>
</section>
  </div>
  
</header>

    </div>
    {/*  */}
 

    </>
   

  )
}

export default Work
