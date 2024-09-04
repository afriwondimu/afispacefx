'use client'
import React, {useState} from 'react'
import CodeSpace from './CodeSpace'
import HoverCard from './HoverCard'
import {motion} from "framer-motion"

type Props = {}

const About = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                <div className='flex flex-col items-center'>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3}} viewport={{once:false}} className='relative'>
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase ">
                       
                        </svg>
                        <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
                    </motion.div>
                    <motion.div initial={{height:0}} whileInView={{height: '100%' }} transition={{duration:0.4, delay:0.6}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ff8080]" ></motion.div>
                </div>
                <div className=' md:w-10/12 mb-24'>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4, duration:0.3}} viewport={{once:false}} className="text-[20px] md:text-2xl mb-7 font-medium text-[#ff8080] js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>About</motion.div>  
                    <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5,duration:0.3}} viewport={{once:false}} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium shiny-dark js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                        AFI SPACE is a group of community that a unique blend of expertise in forex trading to empower individuals seeking success in the financial markets. 
                    </motion.h3>
                </div>
            </div>
            
            <CodeSpace/>
            <div className='relative z-[1] '>
                
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                    <HoverCard backgroundColor='#ff8080' direction='flex-col' left='0'>
                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#c9c9c9]">Fostering  supportive network for Ethiopian and Habesha traders worldwide through forex insights.</p>
                        </div>
                        <div className='overflow-hidden rounded-s-lg'>
                            {/* Use object-contain to keep the image within the container without cropping */}
                            <img className="w-full h-auto max-h-48 object-contain js-build-in-item build-in-scale-fade build-in-animate" width="120" height="60" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/Candleloader%201.gif" />
                        </div>
                    </HoverCard>
                    <HoverCard backgroundColor='#7ee787' direction='flex-col' left='-4000'>
                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#dadada]">From a beginners to experts, we believe that learning, growing, and succeeding together.</p>
                        </div>
                        <div className='overflow-hidden rounded-s-lg'>
                            {/* Use object-contain to keep the image within the container without cropping */}
                            <img className="w-full h-auto max-h-48 object-contain" width="120" height="60" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/growth.gif" />
                        </div>
                        
                    </HoverCard>
                </div>
            </div>
            <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.3}} viewport={{once:false}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#00ffbf] to-[#008d76]" ></motion.div>
            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='mb-10 md:mb-32 pb-4 '>
                <div className='py-4 text-left'>
                    <h3 className="text-[#32ff43] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">You Can</h3>
                    <p className="mb-3 md:text-xl text-base font-medium text-white">Calculate Your Postion Size Here</p>
                </div>
            </motion.div>
        </div>
    )
}

export default About
