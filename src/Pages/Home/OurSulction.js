import React from 'react'
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import herorow from "../../Asstes/Solutions/Raw.jpg";
import herodone from "../../Asstes/Solutions/Done.jpg"
import { SiStreamrunners } from "react-icons/si";

const OurSulction = () => {
  return (
    <div>
<section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-24">
      <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-[#d04901] text-main">
   Top challenges you might be facing
All resolved
</h1>


      {/* Item */}
    {/* Component */}
    <div className="relative pt-60">

      <div className="sticky bottom-60 z-[3] -mt-48 mb-36 grid items-center gap-8 rounded-xl bg-[#e9e9f0] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-3xl lg:grid lg:gap-32">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0 text-[#d04901]">
           Inconsistent images
unprofessional vibes
          </h2>
          <p className="max-w-md text-sm text-[#636262] sm:text-base">
           To cultivate user trust and spark their interest in the vehicles, visual consistency is crucial. Thus, our solution assists you in fine-tuning your online listing with captivative car images to increase user on-page time, which consequently boosts the conversion rate.
          </p>
          <p className="hidden text-2xl font-bold lg:block">// 01</p>
        </div>
        <div className="flex h-[480px] w-full items-center justify-center text-[#858585]">
         <img src={herorow} alt="" />
        </div>
        <p className="block text-2xl font-bold lg:hidden">// 01</p>
      </div>
      {/* Item */}
      <div className="sticky bottom-36 top-auto z-[2] -mt-24 mb-12 grid items-center gap-8 rounded-xl bg-[#f2f2f2] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-3xl lg:grid lg:gap-32">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0 text-main">
         Get more Views
          </h2>
          <p className="max-w-md text-sm text-[#636262] sm:text-base">
           Low click rates? We deliver
car images that drive both
views and clicks.

Car Studio Al's Al-
generated vehicle images
of high quality can boost
your engagement rate by on
average 74%
          </p>
          <p className="hidden text-2xl font-bold lg:block">// 02</p>
        </div>
        <div className="flex h-[480px] w-full items-center justify-center text-[#858585]">
           <img src={herodone} alt="" />
        </div>
        <p className="block text-2xl font-bold lg:hidden">// 02</p>
      </div>
      {/* Item */}
      <div className="sticky bottom-12 top-auto mb-12 grid items-center gap-8 rounded-xl bg-[#d9d9d9] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-3xl lg:grid lg:gap-32">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0 text-SubTwo">
        Save Time In Operations
          </h2>
          <p className="max-w-md text-sm text-[#636262] sm:text-base">
            Time is of the essence when it comes to selling vehicles. However, the laggardly posting of car photos can disrupt sales flow. We understand the imperative of speed in yielding lucrative gains, so ImageIEdit expedites the process with batch image enhancement and allows you to list your cars promptly.
          </p>
          <p className="hidden text-2xl font-bold lg:block">// 03</p>
        </div>
        <div className="flex h-[480px] w-full items-center justify-center text-[#858585]">
          <img className='' src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <p className="block text-2xl font-bold lg:hidden">// 03</p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default OurSulction
