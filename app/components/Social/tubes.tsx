'use client'
import React, {useState} from 'react'
import HoverCard from '../About/HoverCard'
import Projects from './Projects'
import {motion} from "framer-motion"

type Props = {}

const Security = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:0.4,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, scale:0.8 },
        show: { opacity: 1, scale:1},
    };
  return (
    <div className='max-w-[1280px] mx-auto'>
        <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
            <div className='flex flex-col items-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='relative'>
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-lock text-white">
                       
                    </svg>
                    <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
                </motion.div>
                <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{delay:0.8}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#4952ce] via-[#262cdb] to-transparent" ></motion.div>
            </div>

        </motion.div>

        <Projects/>

        <div className='flex flex-col md:flex-row gap-10 '>
                <HoverCard backgroundColor = '#fa6b69' direction='flex-col' left='0'>
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#183153]"><span className='text-black font-semibold'>YouTube,</span>  for live streams and podcasts, we cover a diverse range of topics designed to deepen your understanding of trading principles and techniques.</p>
                        <div>
                            <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="https://youtube.com/@AFISpaceFx?si=heDqidHzmzBV-x6U" className='py-1 inline-block text-xl text-black font-semibold'>
                            Subscribe the Space
                                <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-black transition inline-block ml-3 ease-in duration-300  ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                <div className={` ${hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-black rounded-full`}></div>
                            </a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                        <img className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate" width="1209" height="890" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/yt.gif" />
                    </div>
                </HoverCard>
                <HoverCard backgroundColor = '#0cd7ed' direction='flex-col' left='-400px'>
                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#183153]"><span className='text-black font-semibold'>
                            TikTok,</span> We`ve got everything you need to succeed in the forex market to develop your mindset, provided in short, powerful videos.</p>
                        <div>
                            <a onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)} href="https://tiktok.com/@AFISpaceFX" className='py-1 inline-block text-xl text-black font-semibold'>
                            Follow the Space
                                <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-black transition inline-block ml-3 ease-in duration-300  ${hovered2 ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered2 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                <div className={` ${hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-black rounded-full`}></div>
                            </a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                    <img className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/tiktok.gif" />
                    </div>
                </HoverCard>
        </div>
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#a80a0a] to-[#b42929]" ></motion.div>
    </div>
  )
}

export default Security