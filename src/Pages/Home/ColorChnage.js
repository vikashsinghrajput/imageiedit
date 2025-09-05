import React, { useRef, useState } from 'react'
import Blackcar from '../../Asstes/360/Black.jpg'
import Bulecar from '../../Asstes/360/Blue.jpg'
import greencar from '../../Asstes/360/green.jpg'
import car from '../../Asstes/360/car.png'
import turck from '../../Asstes/360/turck.png'
import Redcar from '../../Asstes/360/Red.jpg'
import Bike from '../../Asstes/360/Bike.png'
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
      setCarcolor(!carcolor);

    setCarcolor([
      car

    ])
  }
    const handleBike=()=>{
      setCarcolor(!carcolor);
    setCarcolor([
    Bike
    ])
  }
   const handleTurck=()=>{
      setCarcolor(!carcolor);
    setCarcolor([
    turck
    ])
  }

  return (
    <>
<div className="p-2  px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  lg:py-10">

<div className=''>
   

{
  carcolor ? <img src={!carcolor ? Bulecar : carcolor  }/> : <img src={Blackcar} alt="" className='rounded-xl' />
}

</div>



 


<div className="w-full max-w-8xl  mt-10  ">
  {/* Category Labels */}
  <div className="flex justify-around text-gray-700 text-sm mb-2">
    <span className='cursor-pointer'
   onClick={ChnageColorGreen}>

     Passenger vehicles</span>
    <span className='cursor-pointer' onClick={handleBike}>Electric vehicles</span>
    <span className='cursor-pointer' onClick={handleTurck}>Commercial vehicles</span>
    <span className='cursor-pointer'>Luxury vehicles</span>
  </div>
  {/* Track */}
  <div className="relative">
    <div className="h-4  max-w-7xl bg-blue-100 rounded" />
    {/* Active Selection */}
    <div className={`absolute top-0  h-4 w-1/4 bg-blue-900 rounded  ${carcolor ? 'active' :''}`}
    style={{ color:carcolor ?'red':'blue', backgroundColor:carcolor ?'blue':'black',}}
     >


    </div>
  </div>
</div>
  
  </div>
  
    </>


  
 
  




  )
}

export default ColorChnage
