"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        id: 'skills',
        title: 'Skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>ReactJS</li>
                <li>CSS</li>
            </ul>
        )
    },
    {
      id: 'education',
      title: 'Education',
      content: (
        <ul className='list-disc pl-2'>
            <li>ReactJs for Frontend developer</li>
            <li>Computer Science at Universitas Negeri Semarang</li>
        </ul>
      )  
    },
    {
        id: 'experience',
        title: 'Experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Intership Steradian</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image alt='about me' src={'/images/about.JPG'} height={500} width={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl text-white font-bold mb-4'>About Me</h2>
            <p className='text-base lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi modi maxime officiis nam explicabo ipsa corporis numquam nobis tenetur enim ab quia voluptas, quisquam nostrum fuga suscipit libero ipsum.
            </p>
            <div className="flex flex-row mt-8">
                <TabButton 
                selectTab={() => handleTabChange('skills')} 
                active={tab === 'skills'}>
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange('education')} 
                active={tab === 'education'}>
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange('experience')} 
                active={tab === 'experience'}>
                    {" "}
                    Experince{" "}
                </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
