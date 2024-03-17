'use client'
import React, { useEffect, useState } from 'react';



const StickyNav = () => {  
  
  const [isSticky, setIsSticky] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [about,setabout] = useState(false)
  const [social,setsocial] = useState(false)
  const [Community,setCommunity] = useState(false)
  const [about1,setabout1] = useState(false)
  const [social1,setsocial1] = useState(false)
  const [Community1,setCommunity1] = useState(false)
  const [smallNav,setSmallNav] = useState(false)

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // console.log('Hello World');
      }
      const element = document.getElementById('nav');
      const topCoordinate = element?.getBoundingClientRect().top;
      const About = document.getElementById('About')
      const topAbout = About?.getBoundingClientRect().top;
      const Social = document.getElementById('Social')
      const topSocial = Social?.getBoundingClientRect().top;
      const Community = document.getElementById('community')
      const topCommunity = Community?.getBoundingClientRect().top;
      if (topCoordinate && topCoordinate < 0) {
        setIsSticky(true);
      }
      if (topCoordinate && topCoordinate < -20) {
        setIsFixed(true);
      }
      if (topCoordinate && topCoordinate > -20) {
        setIsFixed(false);
      }
      if (topCoordinate && topCoordinate > 0) {
        setIsSticky(false);
      }
      if(topAbout && topAbout < 10){
        setabout(true)
        setsocial(false)
        setCommunity(false)
      }
      if(topSocial && topSocial< 10){
        setabout(false)
        setsocial(true)
        setCommunity(false)
      }
      if(topCommunity && topCommunity < 10){
        setabout(false)
        setsocial(false)
        setCommunity(true)
      }
      // console.log(topCoordinate);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id='nav' className={`absolute h-[100px] z-[3] transition ease-in duration-150 ${isSticky ? "visible": "invisible"}`}>
        <div className=''></div>
        <div className={`w-screen ${isFixed ? "fixed": "sticky"}  py-2 bg-[#000000bb] shadow-slate-550 shadow-md top-0 `}>
            <div className='max-w-[1280px] mx-auto pb-2 lg:pb-3 pt-1 flex lg:px-3 px-12 items-center max-lg:flex-col relative'>
              <button onClick={() => setSmallNav(!smallNav)} className='lg:hidden absolute right-12 top-4'>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white ${smallNav ? "hidden": ""}`}>
                      <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
                  </svg>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white ${smallNav ? "": "hidden"}`}>
                      <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
              </button>
              <div className='flex lg:flex-row flex-col text-[16px] justify-start max-lg:w-full flex-auto lg:space-x-4  shiny-dark'>
                  <a href="#About" onClick={() => setSmallNav(false)} onMouseEnter={() => setabout1(true)} onMouseLeave={() => setabout1(false)} className={` max-lg:pt-2  ${about1 ? "lg:text-blue-500": ""}  ${about || smallNav ? "lg:text-blue-500 max-lg:pb-6": "max-lg:hidden"} `}>About <div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-200 ${about1 ? "scale-100 bg-blue-500":""} ${about ? "scale-100 bg-blue-500":""}`}></div></a>
                  <a href="#Social" onClick={() => setSmallNav(false)} onMouseEnter={() => setsocial1(true)} onMouseLeave={() => setsocial1(false)} className={` max-lg:pt-2 ${social1 ? "lg:text-blue-500": ""} ${social || smallNav ? "lg:text-blue-500 max-lg:pb-6": "max-lg:hidden"} `}>Social<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${social1 ? "scale-100 bg-blue-500":""} ${social ? "scale-100 bg-blue-500":""}`}></div></a>
                  <a href="#Community" onClick={() => setSmallNav(false)} onMouseEnter={() => setCommunity1(true)} onMouseLeave={() => setCommunity1(false)} className={` max-lg:pt-2 ${Community1 ? "lg:text-blue-500": ""} ${Community|| smallNav ? "lg:text-blue-500 ": "max-lg:hidden"} `}>Community<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${Community1 ? "scale-100 bg-blue-500":""} ${Community ? "scale-100 bg-blue-500":""}`}></div></a>
                  
              </div>

            </div>
        </div>
    </div>
  )
}

export default StickyNav
