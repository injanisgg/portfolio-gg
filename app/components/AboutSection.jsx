"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion } from 'framer-motion';

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
    <motion.section 
        id='about' 
        className='text-white scroll-mt-20'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image alt='about me' src={'/images/about.JPG'} height={500} width={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl text-white font-bold mb-4'>About Me</h2>
            <p className='text-base lg:text-lg text-justify'>
                I'm an informatics engineering graduate passionate about frontend development. I specialize in turning ideas into responsive, user-focused interfaces often by customizing and building upon design templates. I've led teams, built various frontend projects, and am now expanding my skills into mobile app development.
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
    </motion.section>
  )
}

export default AboutSection;
