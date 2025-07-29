import React, { useState } from 'react'
import video1 from '../../Asstes/Video2.mp4'
import video2 from '../../Asstes/Video1.mp4'
import video3 from '../../Asstes/video3.mp4'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Scrolll from '../Scrolll';



const CardTwo = () => {
  const [counterone, setcounterone] = useState(false);
  return (
   <>
     <ScrollTrigger
        onEnter={() => setcounterone(true)}
        onExit={() => setcounterone(false)}
      >
        <div data-aos="fade-up-right">
      <section className="py-24 relative bg">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
               
                <video className='rounded-xl object-cover w-400 h-480 ' src={video1} autoPlay loop muted/>
              </div>
              < video className='rounded-xl object-cover w-400 h-480 ' src={video2} autoPlay loop muted/>
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-main text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Photo Retouching Services
                  </h2>
                  <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                  We are amongst the most professional companies when it comes to eCommerce Photo editing Services in India. An overall experience of 5+ years coupled with advanced technology and artificial intelligence make us one of the most sought-after companies for E-Commerce and Fashion Retouching. 
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-main text-4xl font-bold font-manrope leading-normal">
                    {counterone && (
                  <CountUp start={0} end={1052230} duration={2} delay={0} />
                )}
                    </h3>
                    <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                    Images Delivered

                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-main text-4xl font-bold font-manrope leading-normal">
                      5+
                    </h4>
                    <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                    Years of Experience

                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-main text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 cursor-pointer">
              <div className="border-2  border-main text-main emibold px-8 py-3 rounded-full  flex  hover:bg-white  ">
              Browse Our Portfolio
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <Scrolll/>
      </div>
      <section className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-main">
            Web Development
              <br className="hidden lg:inline-block" />
             
            </h1>
            <p className="mb-8 leading-relaxed text-gray-600">
            The web is rapidly changing and our development team strives to keep up the passion for the digital world. Our web developers work as a team to debate and agree upon the best practice for use. We mainly use NODE platform, MangoDB XML, JSON, for web development.
             
            </p>
            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-main text-4xl font-bold font-manrope leading-normal">
                    {counterone && (
                  <CountUp start={0} end={300} duration={2} delay={0} />
                )}+
                    </h3>
                    <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                    Images Delivered

                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-main text-4xl font-bold font-manrope leading-normal">
                      5+
                    </h4>
                    <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                    Years of Experience

                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-main text-4xl font-bold font-manrope leading-normal">
                      33+
                    </h4>
                    <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
            <div className="flex flex-col mt-5 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="border-2  border-main text-main emibold px-8 py-3 rounded-full  flex  hover:bg-white  ">
              Browse Our Portfolio
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
           
             <video className=' object-cover object-center rounded w-612 h-464 ' src={video3} autoPlay loop muted/>
          </div>
        </div>
        <Scrolll/>
      </section>
     
      </ScrollTrigger>
      <>

</>




   </>
  )
}

export default CardTwo
