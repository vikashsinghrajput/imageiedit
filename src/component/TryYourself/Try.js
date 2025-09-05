

import React, { useState } from 'react'
import raw from '../../Asstes/tryyourself/raw.jpg'
import removeBg from '../../Asstes/tryyourself/Remove_Bg.jpg'
import Addshadowimg from '../../Asstes/tryyourself/add shadow.png'
import Windowclipping1 from '../../Asstes/tryyourself/cliping Windos.png'
import Background from '../../Asstes/tryyourself/add bacdrop.jpg'
import levlecorrections from '../../Asstes/tryyourself/color.jpg'
import MakeNc from '../../Asstes/tryyourself/make_Nc.jpg'
import plateOne from '../../Asstes/tryyourself/add_Plate-2.jpg'
import carcolor1 from '../../Asstes/tryyourself/chnage_color-4.jpg'
import carcolor2 from '../../Asstes/tryyourself/chnage_color-2.jpg'
import carcolor3 from '../../Asstes/tryyourself/chnage_color-3.jpg'
import carcolor4 from '../../Asstes/tryyourself/chnage_color-1.jpg'
import carcolor5 from '../../Asstes/tryyourself/chnage_color-5.jpg'
import plateiconsOne from '../../Asstes/tryyourself/_plate-js.png'
import plateiconsTwo from '../../Asstes/tryyourself/_plate.png'
import Detailspage from './Detailspage'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Menu from './Menu'


const Try = () => {
 
     const [showmodle, setShowmodle] = useState(false)
       const [isOpen, setIsOpen] = useState(false);
     
  const [img, setimg] = useState(false);

 const ChangePicture = () => {
    setimg([
      removeBg

    ])};
     const Addshadow = () => {
    setimg([
      Addshadowimg
    ])};
    const Windowclipping = () => {
      setimg([
        Windowclipping1
        ])};
         const AddBackdrop = () => {
      setimg([
        Background
        ])};


 const levelAndcorrections = () => {
      setimg([
        levlecorrections
        ])};
         const MakeNormalCut = () => {
      setimg([
     MakeNc
        ])};
        
// chnage Car color
const ChangeCarColorOne = () => {
  setimg([
    carcolor1
  ])
}
const ChangeCarColorTwo = () => {
  setimg([
    carcolor2
  ])
}
const ChangeCarColorThree = () => {
  setimg([
    carcolor3
  ])
}
const ChangeCarColorFour = () => {
  setimg([
    carcolor4
  ])
}

const ChangeCarColorFive = () => {
  setimg([
    carcolor5
  ])
}




  const cars = [
    { name: "Remove Bg", price: "see more", img: removeBg, imgChnage: ChangePicture },
    { name: "Add Shadow", price: "£57,135", img: Addshadowimg , imgChnage:Addshadow },
    { name: "Window clipping", price: "£62,795", img: Windowclipping1, imgChnage:Windowclipping},
    { name: "Add Backdrop ", price: "£62,795", img: Background, imgChnage:AddBackdrop},
    { name: "Color & level corrections ", price: "£62,795", img: levlecorrections, imgChnage:levelAndcorrections},
    { name: " Make Normal Cut", price: "£62,795", img: MakeNc, imgChnage:MakeNormalCut},
  ];

  return (
   <div className="min-h-screen bg-white font-sans">
      {/* Top Nav */}
    
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 text-sm   self-start sticky top-0    ">
        <div className="flex space-x-6 ">
          {/* <a href="#" className="hover:underline">VEHICLES</a>
          <a href="#" className="hover:underline">SHOP</a>
          <a href="#" className="hover:underline">ACCESSORIES</a>
          <a href="#" className="hover:underline">OWNERS</a>
          <a href="#" className="hover:underline">EXPLORE</a> */}
        </div>
        <div className="font-bold tracking-widest text-center ">DEFENDER</div>
        <div className="flex space-x-4 ">
          <button>BUILDS</button>
          <button>ACCOUNT</button>
        </div>
      </nav>

      {/* Sub Menu */}

       {/* <div className=" md:flex  justify-center space-x-4 text-xs border-b text-center border-gray-200 py-3    ">
      
        {[
          "INSPIRATION", "BODYSTYLE", "MODEL", "ENGINE", "ACCESSORY PACKS", "EXTERIOR",
          "WHEELS", "INTERIOR", "HEADLINING", "PACKS", "OPTIONS", "ACCESSORIES", "SUMMARY"
        ].map((item) => (
          <button key={item} className=" text-center hover:underline">{item}</button>
        ))}
      </div>  */}

      {/* Mobile Dropdown */}
       
       <Menu/>
     {/* <div className='w-full bg-gray-50 py-2 px-2 border flex flex-row items-center space-x-6 overflow-x-auto'>
      
      <div className=" justify-center space-x-4 text-xs border-b text-center border-gray-200 py-3    ">
      
        {[
          "INSPIRATION", "BODYSTYLE", "MODEL", "ENGINE", "ACCESSORY PACKS", "EXTERIOR",
          "WHEELS", "INTERIOR", "HEADLINING", "PACKS", "OPTIONS", "ACCESSORIES", "SUMMARY"
        ].map((item) => (
          <button key={item} className=" text-center hover:underline">{item}</button>
        ))}
      </div>

     </div> */}
       
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-8 
">
        {/* Car Image */}
        <div className="lg:col-span-3 flex flex-col items-center self-start sticky top-0 " >
        {
          img? <img
            src={img} // Replace with actual image
            alt="Defender"
            className="w-full max-w-4xl object-contain "
          />:<img
            src={raw} // Replace with actual image
            alt="Defender"
            className="w-full max-w-4xl object-contain "
          />
        }
          
          <div className="flex items-center space-x-2 mt-4 z-0 ">
            {/* <button className="px-4 py-2 text-xs border rounded">3D VIEW</button> */}
            {/* <span className="text-gray-400">1 / 7</span> */}
          </div>
        </div>

        {/* Bodystyle Selector */}
        <div className=''>
          <div className="space-x-2 mb-4  z-10  " >
            <span className="px-2 py-1 bg-gray-100 rounded text-xs">Diesel</span>
            <span className="px-2 py-1 bg-gray-100 rounded text-xs">Petrol</span>
            <span className="px-2 py-1 bg-gray-100 rounded text-xs">Plug-In Electric Hybrid</span>
          </div>

          <h2 className="font-semibold text-lg mb-4 ">Bodystyle (6)</h2>

        <div className="p-6 overflow-y-auto max-h-screen ">
        <h2 className="text-lg font-semibold mb-4">Change Car Color</h2>
        <div className="space-y-4 cursor-pointer">
         <p className="text-sm text-gray-500 mb-2">Metallic</p>
        <div className="flex space-x-3 mb-4">
          <div onClick={ChangeCarColorOne} className="w-12 h-12 bg-[#2896ce] border rounded-md"></div>
          <div onClick={ChangeCarColorTwo} className="w-12 h-12 bg-[#3158ce] border rounded-md"></div>
          <div onClick={ChangeCarColorThree} className="w-12 h-12 bg-[#2bd04c] border rounded-md"></div>
          <div  onClick={ChangeCarColorFour} className="w-12 h-12 bg-[#bf31ad] border rounded-md"></div>
          <div onClick={ChangeCarColorFive} className="w-12 h-12 bg-[#c6c831] border rounded-md"></div>
        </div>
   
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between   p-4 rounded-lg cursor-pointer"
            >
              <div>
                <h3 onClick={car.imgChnage} className="font-medium ">{car.name}</h3>

                <p  onClick={()=>setShowmodle(true)}  className="text-sm text-gray-600 hover:underline"> {car.price}</p>
                 {showmodle && <Detailspage onClose={()=> setShowmodle(false)}/>}
              </div>
              <img src={car.img} alt={car.name} className="w-16 h-auto rounded" />
            </div>
          ))}
          <hr />
          <h1 className='text-center text-main'>Add Number plate </h1>
           <div className="flex space-x-3 mb-4 cursor-pointer ">
          <div  className="w-18 h-12 rounded-md border  ">
            <img src={plateiconsOne} alt='' className="w-12  mt-5 rounded" />
          </div>
           <div  className="w-18 h-12 rounded-md border  ">
            <img src={plateiconsTwo} alt='' className="w-12  mt-5 rounded" />
          </div>
         
        </div>
<hr />
         <h1 className='text-center  text-[#d04901]'>Choose our backdrop </h1>
           <div className="flex space-x-3 mb-4 cursor-pointer ">
          <div  className="w-18 h-12 rounded-md border  ">
            <img src={raw} alt='' className="w-16  rounded" />
          </div>
           <div  className="w-18 h-12 rounded-md border  ">
          <img src={raw} alt='' className="w-16  rounded" />
          </div>
         
        </div>
        
        </div>
      </div>

          <div className="mt-6">
            <p className="text-xl font-semibold">£84,070 <span className="text-sm text-gray-500">On the road</span></p>
            <button className="mt-3 w-full bg-black text-white py-2 rounded">SUMMARY</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Try
