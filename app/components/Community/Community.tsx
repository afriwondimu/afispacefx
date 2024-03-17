'use client'
import React, {useState} from 'react'
import HoverCard from '../About/HoverCard'

import {motion} from "framer-motion"

type Props = {}

const Community = (props: Props) => {
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
                <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{delay:0.8}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ce4949] via-[#db2626] to-transparent" ></motion.div>
            </div>
            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
                <h2 className="text-[20px] md:text-2xl mb-7 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>Community</h2>  
                <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <p className="text-[#454fe0]">Supportive community</p>
                     Connect with like-minded individuals and build a network of fellow traders.
                </h3>
            </motion.div>
        </motion.div>

       

        <div className='flex flex-col md:flex-row gap-10 '>
                <HoverCard backgroundColor = '#939aff' direction='flex-col' left='0'>
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#183153]"><span className='text-black font-semibold'>Get valuable perspectives</span>   on current market trends and potential opportunities & Share ideas, ask questions, and learn from other traders.</p>
                        <div>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                        <img className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate" width="1209" height="890" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/candle1.gif" />
                    </div>
                </HoverCard>
                <HoverCard backgroundColor = '#939aff' direction='flex-col' left='-400px'>
                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#183153]"><span className='text-black font-semibold'>On AFI Space </span>  community share their profits screenshot to motivate traders, deal with how they execute that tade, and rejoice together</p>
                        <div>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                    <img className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/pnl.png" />
                    </div>
                </HoverCard>
        </div>

        <div className='relative z-[1]'>
            <HoverCard backgroundColor = '#939aff' direction='' left='0'>
            <div className='overflow-auto md:flex flex-col md:space-y-20 flex-1 py-20 md:p-10 p-5 my-6    justify-between md:min-w-[400px]'>
                <p className=" text-xl md:text-2xl mb-6 font-medium text-[#21406b]"><span className='text-black font-medium'>We</span>   all have Ethiopian hubeshan folks and a supportive community to grow with!</p>
                <div>
                </div>
            </div>
            <motion.div initial={{scale:0.9, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{type:'tween'}} className='rounded-r-md overflow-hidden flex items-center'>
                <img className="responsive js-build-in-item build-in-scale-fade build-in-animate origin-bottom-right" width="1288" height="992" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/up.gif" />
            </motion.div>
            </HoverCard>
        </div>
    </div>
  )
}

export default Community