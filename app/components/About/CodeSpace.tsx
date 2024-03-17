'use client'
import React, {useState} from 'react'
import {motion} from "framer-motion"

type Props = {}

const CodeSpace = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)

    const lineVariant = {
        hidden: {height: 0},
        show:{height:'100%'}
    }
  return (

<div className='flex relative md:pl-10'>
<div className='flex items-center flex-row relative'>
    

</div>
<div className='lg:pl-24 md:pl-16 pl-6'>
    <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
        <div className='py-4 mb-2 w-full'>
            <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='md:pr-6'>
                <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#233675]"><span className='font-semibold text-black'>With years of experience in the forex industry,</span>  I`ve navigated the complexities of currency trading and developed strategies that have proven effective in diverse market conditions. My journey began as a passionate developer with a keen interest in financial markets, eventually leading me to become a proficient forex trader.</h2> 
                <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="https://www.instagram.com/afri.w.zeleke?igsh=MXVwaW15MXV6Zm42OA==" className='py-1 inline-block text-xl text-black font-semibold'>
                    Visit my profile
                    <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-black transition inline-block ml-3 ease-in duration-300  ${hovered ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                    <div className={` ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-black rounded-full`}></div>
                </a>
            </motion.div>
        </div>
        <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='py-4 px-6 w-full'>
            <div className='relative'>
                <div className='relative'>            
                    <img src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/candle%202.gif" alt="" loading="lazy" decoding="async" width="746" height="368" className="width-full d-block h-auto border-[#000000] border-[0.5px] rounded-xl shadow-2xl md:flex" />        
                </div>
            </div>
        </motion.div>
    </div>

</div>
</div>

  )
}

export default CodeSpace