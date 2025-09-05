import React, { useState } from 'react'
import mp4 from '../../Asstes/Bg.mp4'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Raw from '../../Asstes/HomeImg/Raw.jpg'
import png from '../../Asstes/HomeImg/png.jpg'
import carSdudio from '../../Asstes/HomeImg/carSdudio.jpg'
import Addplate from '../../Asstes/HomeImg/Addplate.jpg'
import { TbView360Number } from "react-icons/tb";
import Toggle360 from './Toggle360'
import ColorChnage from './ColorChnage'
import OurSolutions from './OurSolutions'
import Timer from './Timer'
import Work from './Work'
import HowDoWork from './HowDoWork'
import OurSulction from './OurSulction'
import Faq from './Faq'
import Try from '../../component/TryYourself/Try'
import Test from '../../component/TryYourself/Test'


const Home = () => {
 

const [showmodle, setShowmodle] = useState(false)

   const [isAgeValid,setisAgeValid]=useState(false)
 const ChangePicture = () => {
    setisAgeValid([
      Raw

    ]);
  };
 const ChangePicturetwo = () => {
    setisAgeValid([
      png

    ]);
  };
  const ChangePictureThree = () => {
    setisAgeValid([
     carSdudio

    ]);
  };
  const ChangePicturefour = () => {
    setisAgeValid([
     Addplate

    ]);
  };


  return (
    <>
<div className="mt-20">

  <section className="pt-12 pb-30 sm:pb-16 lg:pt-8">
    <div className="px-4 mx-auto max-w-7xl sm:px-10 lg:px-8">
      <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
        <div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-600 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
            We
Define.Design.
Build. Market
            </h1>
            <p className="mt-2 text-lg text-main sm:mt-8 font-inter">
            We are your one-stop solution for your complete 
Web Development
and graphic design requirements. Uplift your brand's perception through our unmatched creative solutions.
            </p>
            <form action="#" method="POST" className="mt-8 sm:mt-10">
              <div className="relative p-2 sm:border sm:border-lightmain group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-main sm:focus-within:border-main">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter email address"
                  className="block w-full px-4 py-4 text-SubTwo placeholder bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                  required=""
                />
                <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                  <button
                    type="submit"
                    className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-SubTwo rounded-lg focus:outline-none focus:bg-SubTwo font-pj hover:bg-lightSubMain"
                  >
                    Get Free 
                    trial
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
            <div className="flex items-center">
              <p className="text-3xl font-medium text-main sm:text-4xl font-pj">
              5+
              </p>
              <p className="ml-3 text-sm text-SubTwo font-pj">
              Years of 
                <br />
                Experience
              </p>
            </div>
            <div className="hidden sm:block">
              <svg
                className="text-gray-400"
                width={16}
                height={39}
                viewBox="0 0 16 39"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
              </svg>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-medium text-main sm:text-4xl font-pj">
                300+
              </p>
              <p className="ml-3 text-sm text-SubTwo font-pj">
              Project
                <br />
                Completed
              </p>
            </div>
          </div>
        </div>
        
        <div  className='grid  ' >
        <div className='z-1 absolute right-20 cursor-pointer'>
        <div className='bg-black/20 py-1 p-1 '>
   
           <TbView360Number onClick={()=>setShowmodle(true)}  className='text-white' size={30}/>
           
        </div>
         {showmodle && <Toggle360 onClose={()=> setShowmodle(false)}/>}
        </div>

          
        {
          isAgeValid ?   <img src={isAgeValid}/>: < video className='w-full ' src={mp4}  autoPlay loop muted/>
        }
        
    

      
      



      <div  className="flex justify-center items-baseline flex-wrap  mt-10 mb-5  " >
     
              
  <button  type="button"  onClick={()=>{ChangePicture(!isAgeValid)}}  className=" flex  items-center rounded-s border-2 border-primary-100 px-6 pb-[5px] pt-2 md:px-10 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 motion-reduce:transition-none dark:border-primary-400 dark:text-primary-300 ">Raw Image	</button>
  <button  type="button" onClick={()=>{ChangePicturetwo(!isAgeValid)}}  className=" flex  items-center rounded-s border-2 border-primary-100 px-6 pb-[5px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 motion-reduce:transition-none dark:border-primary-400 dark:text-primary-300 ">Complete Cut	</button>
  <button  type="button" onClick={()=>{ChangePicturefour(!isAgeValid)}}  className=" flex  items-center rounded-s border-2 border-primary-100 px-6 pb-[5px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 motion-reduce:transition-none dark:border-primary-400 dark:text-primary-300 ">	Car Studio	</button>
  <button  type="button" onClick={()=>{ChangePicturefour(!isAgeValid)}}  className=" flex  items-center rounded-s border-2 border-primary-100 px-6 pb-[5px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 motion-reduce:transition-none dark:border-primary-400 dark:text-primary-300 ">Try for Free!<MdOutlineKeyboardDoubleArrowRight className='ml-1 text-main font-semibold text-xl' /></button>
 
 
     
  
</div>


      


        </div>

        
      </div>
    </div>
  </section>
</div>
<Timer/>
<OurSolutions/>
<ColorChnage/>
<HowDoWork/>
<OurSulction/>
<Work/>
<Try/>
<Faq/>
<Test/>





    </>
  )
}

export default Home
