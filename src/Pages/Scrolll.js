import React from 'react'
import { FaHtml5, FaNode } from 'react-icons/fa'
import AdobeExpress from '../Asstes/Photoshopicons/Adobe_Express.png'
import corel from '../Asstes/Photoshopicons/corel.png'
import photoshop from '../Asstes/Photoshopicons/photoshop.png'
import illustrator from '../Asstes/Photoshopicons/illustrator.png'
import canva from '../Asstes/Photoshopicons/icons8-canva-48.png'

import Marquee from "react-fast-marquee";
import { SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
const Scrolll = () => {
  return (
<main className="relative flex flex-col justify-center  overflow-hidden">
  <div className="w-full max-w-5xl  mx-auto px-4 md:px-6 py-24">
    <div className="text-center">
      {/* Logo Carousel animation */}
      <div
       
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <Marquee speed={100} delay={0}
      
        pauseOnHover
         
          className="flex items-center justify-center list-none md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          
          <li>
          <img src={AdobeExpress} className='w-12 h-12' alt="Spark" />
          </li>
          <li>
          <img src={corel} className='w-12 h-12' alt="Spark" />
          </li>
          <li>
          <img src={photoshop} className='w-12 h-12' alt="Spark" />
          </li>
          <li>
          <img src={canva} className='w-12 h-12' alt="Spark" />
          </li>
         
          <li>
          <img src={illustrator} className='w-12 h-12' alt="Spark" />
          </li>
         
         
         
        </Marquee>
      </div>
      {/* End: Logo Carousel animation */}
    </div>
  </div>
</main>

  )
}

export default Scrolll
