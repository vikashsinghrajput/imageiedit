import React, { useRef } from "react";
import { X } from "lucide-react";
import car360 from "../../Asstes/360/White_Backdrop.o2vr";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosArrowRoundUp } from "react-icons/io";
import ObjectViewer from "./ObjectViewer";
const Toggle360 = ({onClose}) => {
  const modalRef= useRef()

 const closemodal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div className="main-continer">


      <div ref={modalRef} onClick={closemodal} className=" w-2xs z-10 mx-auto p-5 sm:p-20 md:p-10 fixed inset-0  bg-opacity-50 backdrop-blur-sm   ">
  <div className="rounded overflow-hidden flex flex-col w-3xs md:max-w-3xs mx-auto fixed inset-0 bg-main bg-opacity-50 backdrop-blur-sm  ">
  <button className="place-self-end relative top-40 right-36 bg-main bg-opacity-40 hover:bg-lightmain focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">

    <X  size={30} onClick={onClose} className="text-white"></X>
  </button>
   <div className="w-full  h-60">
     <a href="#">
      <ObjectViewer/>
      
    </a>
    
   </div>
   <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2 ">
  <div className="pointer-events-auto flex w-full max-w-md divide-x rounded-lg  shadow-xl ">
    <div className="flex w-0 flex-1 items-center p-4">
      <div className="w-full">
        <p className="text-sm font-medium text-white">Tutorial</p>
        <p className="mt-1 text-sm text-white">
          How to creating animated blog cards with Astrojs and Tailwind CSS
        </p>
        <p className="mt-2 text-xs text-orange-600 underline">
          {" "}
          <a href="https://lexingtonthemes.com"> by © Lexington Themes</a>{" "}
        </p>
      </div>
    </div>
    <div className="flex">
      <div className="flex flex-col divide-y 0">
        <div className="flex h-0 flex-1">
          {" "}
          <a
            href="https://lexingtonthemes.com/tutorials/how-to-create-animated-blog-cards-with-astrojs-and-tailwind-css/"
            type="button"
            className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            Tutorial
          </a>{" "}
        </div>
        <div className="flex h-0 flex-1">
          {" "}
          <a
            href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/animated-blog-cards/index.astro"
            className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            Get the code
          </a>{" "}
        </div>
      </div>
    </div>
  </div>
</div>

   
    
   
  </div>
  
</div>

    </div>



  );
};

export default Toggle360;
