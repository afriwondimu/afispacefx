import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero-section/Hero';
import StickyNav from './components/Navbar/StickyNav';
import About from './components/About/About';
import Social from './components/Social/Social';
import Community from './components/Community/Community';
import Globe from './components/Footer/Globe';
import Footer from './components/Footer/Footer';

export default function Home() {
  
  return (
    <div className=' '>
      <div className='relative z-50'>
        <div className='absolute'>
        <Navbar/>
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img className='absolute top-0 transition ease-in duration-200 max-xl:right-[-200px] xl:right-[-30px] -z-30 image' width='2000' height="1916" src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/2bg.jpg" alt="" />
          </div>
          <div className='hero-section px-3 '>
            <Hero/>
          </div>
          <StickyNav/>
          <div id='About' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <About/>
          </div>
          <div id='Social' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Social/>
          </div>
          <div id='Community' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Community/>
          </div>
         <Globe/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
