import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import plate from "../../Asstes/Solutions/plate.jpg";
import customBackground from "../../Asstes/Solutions/custom Background.jpg";
import Realistic_Shadow from "../../Asstes/Solutions/Realistic_Shadow.jpg";
import SmoothEdge from "../../Asstes/Solutions/Smooth Edge.jpg";
import Window from "../../Asstes/Solutions/Window.jpg";

const OurSolutions = () => {
  const images = [
    {
      url: plate,
      caption: "Plate",
      id: 1,
    },
    {
      url: customBackground,

      id: 2,
    },
    {
      url: Realistic_Shadow,
      caption: "Realistic Shadow",
      id: 3,
    },
    {
      url: SmoothEdge,
      caption: "Smooth Edge",
      id: 4,
    },
    {
      url: Window,
      caption: "Window",
      id: 5,
    },
  ];



  const properties = {
    prevArrow: (
      <button className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-lightmain">
        <i className="fas fa-chevron-left text-xl" />
      </button>
    ),
    nextArrow: (
      <button
        id="next"
        className="nav-button absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-lightmain"
      >
        <i className="fas fa-chevron-right text-xl" />
      </button>
    ),
  };
  return (
    <div className="max-w-7xl w-full mx-auto px-4  py-9">
      <div className=" mb-16  grid grid-cols-1 gap-0.5 overflow-hidden sm:grid-cols-2 ">
<div>        <h1 class="text-2xl md:text-3xl  border-l-4 px-2  font-sans font-bold border-[#d04901] text-main">
   Our Solutions
</h1></div>

        
        <p className=" text-gray-600 max-w-2xl mx-auto mr-4 text-justify">
         ImageIEdit  is an Munual Images retoucher program trained in the removal and replacement of automotive image backgrounds. Just upload your images and see the magic happen for yourself. Get perfect car images with dealer branding.
        </p>
      </div>
      <div className="relative">
        {/* Navigation Arrows */}

        <Slide {...properties}  autoplay={true} duration={500} pauseOnHover={true}>
          {/* Carousel Container */}
          <div id="carousel" className="overflow-hidden relative">
            <div
              id="testimonial-track"
              className="flex transition-transform duration-500 ease-in-out"
            >
              {/* Testimonial 1 */}
              {
                images.map((item)=>(
 <div key={item.id} className="testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="bg-white  rounded-xl  h-full  ">
                  <div className="flex items-center ">
                   <img className="w-full  rounded-md" src={item.url} alt={item.caption} />
                  </div>
                 
                 
                </div>
              </div>
                ))
              }
             
             
              
            </div>
          </div>
        </Slide>
        {/* Indicators */}
        
      </div>
    </div>
  );
};

export default OurSolutions;
