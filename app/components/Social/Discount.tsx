import React, {useState} from 'react'
import {motion} from "framer-motion"

type Props = {}

const Discount = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className='flex relative md:pl-10'>
    <div className='flex items-center flex-row relative'>
        <motion.div initial={{height:0}} whileInView={{height:'100%'}} className='w-[3px] h-full increase1'></motion.div>

    </div>
    <div className='lg:pl-24 md:pl-16 pl-6'>
        <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
            <div className='py-4 mb-2 w-full'>
                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='md:pr-6'>
                    <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full font-semibold text-[#f8fafc]"><span className='font-semibold text-[#309bff]'>zoom</span> webinars for live trading sessions, Q&A with experts, and interactive workshops. Our space offers valuable learning opportunities to help you master forex trading.</h2> 

                </motion.div>
            </div>

        </div>
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='mb-10 md:mb-32 pb-4 '>
            <div className='py-4 text-left'>
                <h3 className="text-[#ff8668] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">Trend Is Your Frind</h3>
                <p className="mb-3 md:text-xl text-base font-medium text-white">The market always right!</p>
            </div>
        </motion.div>
    </div>
  </div>
  )
}

export default Discount