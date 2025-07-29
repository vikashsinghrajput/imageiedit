import React, { useRef, useState } from 'react'
import Blackcar from '../../Asstes/360/Black.jpg'
import Bulecar from '../../Asstes/360/Blue.jpg'
import greencar from '../../Asstes/360/green.jpg'
import LightYellowcar from '../../Asstes/360/LightYellow.jpg'
import pinkcar from '../../Asstes/360/Pink.jpg'
import Redcar from '../../Asstes/360/Red.jpg'
import yellowcar from '../../Asstes/360/Yellow.jpg'
import { Range } from "react-range";


const ColorChnage = () => {
    const inputRef = useRef(null);
  const [carcolor ,setCarcolor] = useState(false)
  

  const imgChangeHandler =()=>{
    if(!carcolor) {
            setCarcolor(true);



        }else{
            setCarcolor(false)
        }
  }



   

  const ChnageColorGreen=()=>{
    setCarcolor([
      LightYellowcar

    ])
  }

  return (

<div className="p-2  px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  lg:py-10">

<div className=''>
   

{
  carcolor ? <img src={!carcolor ? Bulecar : Redcar  }/> : <img src={Blackcar} alt="" className='rounded-xl' />
}

</div>
<h1 className='text-sm text-gray-500'>Drag to interact</h1>

<div className="flex justify-center mt-12 space-x-3">
          <button  onClick={()=>{ChnageColorGreen(!carcolor)}} className="indicator-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300 active-dot" />
          <button className="indicator-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300" />
          <button className="indicator-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300" />
          <button className="indicator-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300" />
        </div>
  <div className="w-50 flex justify-between text-xs px-2 mt-5  ">


  <span>|</span>
  <span >|</span>
  <span >|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  </div>
  
  <input
    type="range"

onChange= {()=>{imgChangeHandler  ()}}


    
    className="h-1 border-dashed  w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed"
   
  />

</div>


  )
}

export default ColorChnage
