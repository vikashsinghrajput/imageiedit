import { useState } from "react";
import { X, Search, ShoppingBag } from "lucide-react";
import { MdChevronRight } from 'react-icons/md';
import { BiMobileVibration } from 'react-icons/bi';
import { } from "lucide-react";
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaChevronRight } from "react-icons/fa";
import bike from '../../Asstes/Svg/motorbike_2684195.png'
import turck from '../../Asstes/Svg/truck.png'
import cycle from '../../Asstes/Svg/cycle.png'
import Van from '../../Asstes/Svg/van_7455926.png'
import cardoor from '../../Asstes/Svg/car-door_8359146.png'
import carboot from '../../Asstes/Svg/trunk_1464710.png'
import tractor from '../../Asstes/Svg/tractor.png'

const Menu = () => {
   const [isOpen, setIsOpen] = useState(false);

   const navItems = [
  {
    label: "Bike Images",
    icon: (
   
      <img className="size-8 shrink-0"src={bike} alt="" />
      
    ),
  },
  {
    label: "iPhone 16",
    icon: (
     <img  className="size-8 shrink-0"src={turck} alt="" />
      
    ),
  },
  {
    label: "iPhone 16e",
    icon: (
       <img  className="size-8 shrink-0" src={cycle} alt="" />
    ),
  },
  {
    label: "iPhone 15",
    icon: (
      <img className="size-8 shrink-0"src={tractor} alt="" />
    ),
  },
  {
    label: "Compare",
    icon: (
      <img   className="size-8 shrink-0"src={Van} alt="" />
    ),
  },
  {
    label: "AirPods",
    icon: (
      <img  className="size-8 shrink-0" src={cardoor} alt="" />
    ),
  },
  {
    label: "AirTag",
    icon: (
      <img   className="size-8 shrink-0" src={carboot} alt="" />
    ),
  },
];

  return (
  <>
    <div className="w-full bg-gray-50 py-1 px-10 border cursor-pointer flex flex-row justify-center mx-auto space-x-6 overflow-x-auto">
    
      {navItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center min-w-[80px] text-[#d04901]">
          <div>{item.icon}</div>
          <span className="text-xs mt-1 text-[#d04901] font-normal">{item.label}</span>
        </div>
      ))}
 
    </div>
  </>
     
  )
}

export default Menu
