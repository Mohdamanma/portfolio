'use client';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import MagicButton from './ui/MagicButton';

function Hero() {
  return (
    <div className="pb-20 pt-36" id="#about">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        {/* <Spotlight className="top-20 left-full h-[80vh] w-[50vh]" fill="purple" /> */}
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex px-8 py-10 sm:flex-row flex-col justify-between items-center h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute -z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="w-full">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink-600">
              Hello, I'm <span className="text-white">Aman</span>
            </span>
            <br />
          </h1>
          <TypeAnimation
            sequence={['Web Developer', 1000, 'App developer', 1000, 'Full Stack developer', 1000]}
            className="text-3xl font-medium"
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />

          {/* <p className="text-base sm:text-lg lg:text-xl mb-9">
            Transforming Concepts into Seamless Experience
          </p> */}
          <div className="flex space-x-4  ">
            <a href="#about">
              <MagicButton title="Hire me" />
            </a>
            <a href="#resume">
              <MagicButton title="Resume" />
            </a>
          </div>
        </div>
        <div className="bg-white-100 rounded-full lg:mt-0 mt-6  lg:h-[380px] lg:w-[500px] ">
          <Image src="/Asset/my-pic.png" alt="hero Image" className="" width={300} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
