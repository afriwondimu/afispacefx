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

        <div className='flex justify-between items-center'>
                <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                    <HoverCard backgroundColor='#ff8080' direction='flex-col' left='0'>
                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#c9c9c9]">Missed a Zoom meeting? Don’t worry! You can catch the live stream replay on our YouTube channel. Stay connected with AFI SPCE and never miss out on valuable insights</p>
                        </div>
                        <div className='overflow-hidden rounded-s-lg'>
                            {/* Use object-contain to keep the image within the container without cropping */}
                            <img className="w-full h-auto max-h-48 object-contain js-build-in-item build-in-scale-fade build-in-animate" width="120" height="60" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/Youtubei.gif" />
                        </div>
                        <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="https://youtube.com/@afispacefx?si=d6sXmq4lb7hgQ2v3" className='flex items-center max-lg:w-full bg-white font-semibold px-3 py-3 justify-center rounded-md text-base'>
                    Subscribe US
                      <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`} width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                  </a>
                    </HoverCard>
                    <HoverCard backgroundColor='#ff2f97' direction='flex-col' left='-4000'>
                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#dadada]">Instagram for motivational quotes, trading tips, and behind-the-scenes content. Get inspired and stay connected with AFI SPACE community through engaging visuals.</p>
                        </div>
                        <div className='overflow-hidden rounded-s-lg'>
                            {/* Use object-contain to keep the image within the container without cropping */}
                            <img className="w-full h-auto max-h-48 object-contain" width="120" height="60" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/InstaG.gif" />
                        </div>
                        <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="https://instagram.com/afispacefx" className='flex items-center max-lg:w-full bg-white font-semibold px-3 py-3 justify-center rounded-md text-base'>
                    Follow US
                      <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`} width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                  </a>
                    </HoverCard>
                </div>
            </div>
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#a8220a] to-[#b42929]" ></motion.div>
    </div>
  )
}

export default Security