'use client'
import React, {useState} from 'react'

type Props = {}

const Globe = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <div className='overflow-hidden relative'>
    <div className='max-w-[1280px] mx-auto relative z-[2]'>
      <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
          <div className='py-3 mb-2 flex flex-col justify-center items-center'>
            <h2 className='px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold shiny-dark  '>You`re just starting out or looking to take your trading to the next level, Our Space Fx is the perfect place to be.</h2>
            <p className="mb-4 md:text-xl text-[16px] text-[#2490ce] px-4 mx-auto md:w-7/12">We believe in fostering a positive mindset and resilience to help you overcome challenges and achieve your trading goals.</p>
            <div className='lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5'>
            </div>
          </div>
      </div>
    </div>
   
  </div>
  )
}

export default Globe