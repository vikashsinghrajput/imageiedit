import { X } from 'lucide-react'
import React, { useRef } from 'react'
import Demoimg from '../../Asstes/Demo.png'

const Detailspage = ({onClose}) => {
    const modalRef = useRef()
    const Closemodle =(e)=>{
        if(modalRef.current ===e.target){
            onClose()
        }
    }
  return (
    <div className="main-continer">


      <div ref={modalRef} onClick={Closemodle} className=" z-10 mx-auto p-5 sm:p-20 md:p-10 fixed inset-0   backdrop-blur-xl   ">
  <div className="rounded  flex flex-col justify-center  w-3xs md:max-w-3xs mx-auto fixed inset-0 bg-opacity-50   ">
  
    <div className="bg-white rounded-2xl p-6 flex flex-col  justify-center    md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 max-w-7xl shadow-md mx-auto hover:border-main ">
    
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left ">
        <h2 className="text-xl font-semibold text-black mb-2">
          Last phone standing.
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          iPhone is protected by Ceramic Shield, which is tougher than any smartphone glass. Little spill? No biggie — iPhone also stands up to splashes from everyday liquids like water, coffee and soft drink.<sup className="align-super text-xs">7</sup>
        </p>
      </div>


      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center ">
        <img
          src={Demoimg}
          className="rounded-xl w-full max-w-lg object-cover"
        />
      </div>
       <X   size={30} onClick={onClose} className="bg-[#333336] text-[#d6d6d7] rounded-3xl"></X>
    </div>

   
    
   
  </div>
  
</div>



    </div>
  )
}

export default Detailspage
