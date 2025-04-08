"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Sugini Injani',
                            1700, // wait 1s before replacing
                            'Frontend Developer',
                            1700,
                            'UI/UX Designer',
                            1700
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-gray-400 text-base pr-8 sm:text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio minima quo quae deleniti commodi repudiandae consequatur eaque unde iusto! Nisi veniam qui commodi quo ut error impedit nobis laborum maxime?
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200 mr-4'>
                        Hire me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#03071E] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image 
                src={'/images/profile.png'}
                alt='profile'
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={300}
                height={300}/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection;
