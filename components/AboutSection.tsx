'use client';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from './ui/TabButton';
import { Tab_Data } from '@/data';

function AboutSection() {
  const [tab, setTab] = useState('Skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    console.log("object",id)
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src='/Asset/my-pic.png' alt="hero Image" className="" width={300} height={100}/>
        <div className='px-8'>
          <h1 className="text-4xl font-bold text-white my-4">About Me</h1>
          <p className="text-base lg:text-lg">
            I am a Full stack web developer with a passion for creating interactive and Responsive
            web application.I have experience working with javascript,React, Redux, Node.js,
            Express, PostgreSQL, Sequelize, Html, Css and Git. I am quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and I am excited to
            work with other to create amazing application.
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton selectTab={() => handleTabChange('Skills')} active={tab == 'Skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('Education')} active={tab == 'Education'}>
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('Certification')}
              active={tab == 'Certification'}
            >
              {' '}
              Certification{' '}
            </TabButton>
          </div>
          <div className="mt-6">
            {Tab_Data.find((t)=> t.id === tab)?.content }
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
