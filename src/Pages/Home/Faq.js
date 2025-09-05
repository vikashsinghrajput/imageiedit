import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
const Faq = () => {
  const [isOpen,setisOpen] = useState(true)
 const HandleClick =()=>{
  setisOpen(!isOpen)
 }
 const faqans =[
  {
    id:"1",
    question: "What exactly is AutoBG??",
    answer: "Welcome to AutoBG, the leading Al-powered car background removal tool for automotive professionals. Our platform transforms ordinary car photos into stunning, studio-quality images + - helping you showcase your inventory with professional visuals that boost clicks and buyer trust."
  ,},{
    id:"2",
    question:"How does Car Studio AI work?",
    answer:"t’s simple! Our advanced AI detects the car 🚗, removes the background, adds realistic shadows, and places it in a studio setting. Within seconds, you get high-quality images ready to impress your customers. Seamless, right?"
  },{
    id:"3",
    question:"What are the benefits of using AutoBG?",
    answer:"With Car Studio AI, you save up to 88% on costs 💸 and 76% on time ⏱️, while increasing your views by 74% 📈. Enjoy consistent, professional-quality images that enhance customer trust and engagement, ultimately driving better sales results 🚀"
    },{
      id:"4",
      question:"How do I start using Car Studio AI?",
      answer:"Getting started is a breeze! Sign up on our website or download our app 📲. Upload your car photos 📷, and let our AI do the rest. Experience the future of car photography today."
      },
      {
        id:"5",
        question:"What is the cost of using Car Studio AI?",
        answer:"Great news! We offer a free trial for new users. Explore our various subscription plans to find the perfect fit for your needs. Visit our pricing page or contact our sales team for personalized offers."

      },
      {
        id:"6",
        question:"Is there a free trial available?",
        answer:"es! We offer a free trial for new users to experience the magic of Car Studio AI before committing ✨. Try it out and see the difference for yourself."
        },
        {
          id:"7",
          question:"What if I am not satisfied with the results?",
          answer:"No worries! Our 24/7 support team is here to help 😊. If you have any issues with the processed images, we’ll review and address them promptly. Your satisfaction is our top priority."
          },
          {
            id:"8",
            question:"How do I contact Car Studio AI for support?",
            answer:"Need help? Reach out to us via email at support@carstudio.ai  or call us at +90 850 308 2931. Our team is ready to assist you!"
    },]
  return (

<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
    <div className="max-w-2xl mx-auto text-center ">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Explore Common Questions
      </h2>
    </div>
    <div className="grid items-center  mt-20 gap-1 sm:gap-5 md:grid-cols-2">
    {
          faqans.map((item)=>(

            <div key={item.id} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:border-main">
        <button
   onClick={HandleClick}
          type="button"
          id="question1"
          data-state="closed"
          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        >
        <div></div>
          <span className="flex text-lg font-semibold text-black">
  {
    item.question
  }
          </span>
          {
            isOpen ? <GoPlus  className="w-6 h-6 text-main" /> :
            <AiOutlineMinus   className="w-6 h-6 text-red-500" />
          }
         
          
        </button>
        <div>
         {isOpen ? (
                          <button className="hidden"> Hide </button>
                        ) : (
                          <button
                            type="button"
                            className="text-gray-900"
                            onClick={HandleClick}
                          >
                         <p className="px-4 pb-5 sm:px-6 sm:pb-5  sm:py-5">
           {item.answer}
          </p>
                       
                          </button>
                        )}
          
        </div>
      </div>
          )
            
          )
        } 
      
     
     
      
    </div>
    <p className="text-center text-gray-600 textbase mt-9">
      Still have questions?
      <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
        Contact our support
      </span>
    </p>
  </div>
  
</section>

  )
}

export default Faq
