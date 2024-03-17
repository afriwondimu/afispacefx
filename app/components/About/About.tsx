'use client'
import React, {useState} from 'react'
import CodeSpace from './CodeSpace'
import HoverCard from './HoverCard'
import {motion} from "framer-motion"

type Props = {}

const About= (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)


  return (
    <div className='max-w-[1280px] mx-auto'>
        <div className='flex md:pl-10 space-x-3 md:space-x-10'>
            <div className='flex flex-col items-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3}} viewport={{once:false}} className='relative'>
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase text-white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z" fill="#1C274C"/>
                    </svg>
                    <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
                </motion.div>
                <motion.div initial={{height:0}} whileInView={{height: '100%' }} transition={{duration:0.4, delay:0.6}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#000000]" ></motion.div>
            </div>
            <div className=' md:w-10/12 mb-24'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4, duration:0.3}} viewport={{once:false}} className="text-[20px] md:text-2xl mb-7 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>About</motion.div>  
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5,duration:0.3}} viewport={{once:false}} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <span className="shiny-light">AFI Space Fx, </span>
                     is a group of community that a unique blend of expertise in forex trading to empower individuals seeking success in the financial markets. By the founder of <span className="shiny-light">Afri Wondimu</span>
                </motion.h3>
            </div>
        </div>
        
        <CodeSpace/>
        <div className='relative z-[1] '>
            
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                <HoverCard backgroundColor='#7ee787' direction='flex-col' left='0'>
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                        <p className="text-xl md:text-2xl mb-6 font-medium text-[#423977]"><span className='text-black font-semibold'>AFI Space FX </span> helps Ethiopian and hubesha traders worldwide realize their goals by providing forex information and methods. It encourages individuals to prosper in this dynamic industry.</p>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                        <img className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate" width="1209" height="890" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/candle4.gif" />
                    </div>
                </HoverCard>
                <HoverCard backgroundColor='#7ee787' direction='flex-col' left='-400px'>
                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                        <p className="text-xl md:text-2xl mb-6 font-medium text-[#423977]"><span className='text-black font-semibold'>AFI Space FX  </span> fosters a  supportive  community  for  forex  traders  of all levels, from the beginners to experienced Advanced levels. We believe in learning, growing, and succeeding together.</p>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                    <img className=" w-full  h-auto" width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/candleswing.gif" />
                    </div>
                </HoverCard>
            </div>
        </div>
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.3}} viewport={{once:false}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#00ffbf] to-[#008d76]" ></motion.div>
    </div>
  )
}

export default About