import React from 'react';
import { Spotlight } from './ui/Spotlight';
import Image from 'next/image';

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        {/* <Spotlight className="top-20 left-full h-[80vh] w-[50vh]" fill="purple" /> */}
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex px-8 py-10 justify-between sm:flex-row flex-col items-center h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
         {/* Radial gradient for the container to give a faded look */}
        <div className="absolute -z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Aman</h1>
          <p className="text-lg lg:text-xl mb-9 font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa obcaecati
          </p>
          <div>
            <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire me</button>
            <button className='px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 border border-white'>Download CV</button>
          </div>
        </div>
          <div className='bg-white-100 rounded-full mt-6  lg:h-[400px] lg:w-[300px] '>
            <Image src="/Asset/my-pic.png" alt="hero Image" className='' width={300} height={200} />
            </div>

      </div>
    </div>
  );
}

export default Hero;
