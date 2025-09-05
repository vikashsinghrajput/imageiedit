import React from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Timer = () => {
    const [counterone, setcounterone] = React.useState(false);
  return (
    <>
     <ScrollTrigger
          onEnter={() => setcounterone(true)}
          onExit={() => setcounterone(false)}
        >

                    <div className="bg-[#F3F3F3] py-24 sm:py- mb-10">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
         No brand identity in your visuals?
        </h2>
        <p className="text-lg leading-8 text-SubTwo">
         Include your unique visual branding. Showcase your <br /> cars professionally with a custom background that reflects your brand identity
        </p>
      </div>
<hr className='bg-gray-500' />
      <dl className="mt-16 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-white text- p-8">
          <dt className="text-1xl font-semibold leading-6 text-main ">
         Save Costs
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-gray-500 ">+
           {counterone && (
                    <CountUp start={0}  className="text-gray-500" end={89} duration={2} delay={0} />
                  )}{" "}
  %
          </dd>
        </div>
        <div className="flex flex-col bg-white p-8">
          <dt className="text-1xl font-semibold leading-6 text-main ">
            Boost Views
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-gray-500">
             {counterone && (
                    <CountUp start={0}  className="text-gray-500" end={74} duration={2} delay={0} />
                  )}{" "}
  %
          </dd>
        </div>
        <div className="flex flex-col bg-white p-8">
          <dt className="text-1xl font-semibold leading-6 text-main">
            Time Saving
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-gray-500">
            {counterone && (
                    <CountUp start={0}  className="text-gray-500" end={76} duration={2} delay={0} />
                  )}{" "}
  %
          </dd>
        </div>
        
        <div className="flex flex-col bg-white p-8">
          <dt className="text-1xl font-semibold leading-6 text-main">
          Maximum Consistency 
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-gray-500    ">
           {counterone && (
                    <CountUp start={0}  className="text-gray-500" end={100} duration={2} delay={0} />
                  )}{" "}
  %
          </dd>
        </div>
      </dl>
     
    </div>
    
  </div>
  <div className='flex justify-center h-0 mt-2 '>
        <button  href="#" class="flex  mt-3 w-40 h-12 bg-transparent hover:bg-white text-gray-500 border border-main rounded-xl items-center justify-center">
    <div class="mr-3">
       
    </div>
    <div>
        <div class="text-2xs text-gray-500">Book a Demo</div>
       
    </div>
</button>
    </div>
</div>
        </ScrollTrigger>

    </>



  )
}

export default Timer
