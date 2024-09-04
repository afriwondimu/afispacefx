'use client'
import React, { useState } from 'react'

type Props = {}

const Hero = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <div className='relative max-w-[1280px] h-[1000px] lg:pt-1 md:px-10 mx-auto pt-16 '>

        <div className='flex'>

            <div className= ' absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12'>
   
                <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold shiny-dark">SPACE FX</h1>
                <p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px]  mb-5 md:mb-12 md:10/12 font-semibold lg:w-9/12 shiny-dark">
                Let`s analyze the market with us
                </p>

            </div>
        </div>
       
    </div>
    
  )
}

export default Hero;