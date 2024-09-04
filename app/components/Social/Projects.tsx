import React, {useState} from 'react'
import {motion} from "framer-motion"

type Props = {}

const Projects = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className='flex relative md:pl-10'>
    <div className='flex items-center flex-row relative'>
        

    </div>
    <div className='lg:pl-24 md:pl-16 pl-6'>
        <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
            <div className='py-4 mb-2 w-full'>
                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='md:pr-6'>
                    <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#e2e2e2]"> Your one destination for the art of forex trading across various social media platforms! Here at SPACE FX</h2> 
                </motion.div>
            </div>
            <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='py-4 px-6 w-full'>
                <div className='relative'>
                    <div className='relative'>
                        <div className='md:absolute z-[1] top-[-100px] lg:top-[-200px] right-0 shadow-2xl'>
                        <img src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/candle%202.gif" alt="" loading="lazy" decoding="async" width="1190" height="1004" className="w-full h-auto d-block rounded-lg" />
                        </div>  
                    </div>
                </div>
            </motion.div>
        </div>

    </div>
  </div>
  
  )
}

export default Projects