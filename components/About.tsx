import React from 'react';
import { TypewriterEffectSmooth } from './ui/TypewriterEffect';
import { AnimatedTooltip } from './ui/AnimatedTooltip';

const About = () => {
  const words = [
    {
      text: 'Here',
    },
    {
      text: 'is',
    },
    {
      text: 'our',
    },
    {
      text: 'team',
    },
    {
      text: 'ready',
    },
    {
      text: 'to',
    },
    {
      text: 'level',
    },
    {
      text: 'up',
    },
    {
      text: 'your',
    },
    {
      text: 'gaming',
    },
    {
      text: 'experience',
      className: 'text-blue-500 dark:text-cyan-500',
    },
  ];
  const people = [
    {
      id: 1,
      name: 'SBlockGamer',
      designation: 'Owner',
      image: '/sbg.jpg',
    },
    {
      id: 2,
      name: 'Aruhi Agarwal',
      designation: 'Co-Owner',
      image: '/aruhi.png',
    },
    {
      id: 3,
      name: 'DarkRadian',
      designation: 'Community Manager',
      image: '/Darky.jpg',
    },
    {
      id: 5,
      name: 'Sunny',
      designation: 'Server Manager',
      image: '/sunny.png',
    },
    {
      id: 6,
      name: 'Vinayak',
      designation: 'Manager',
      image: '/vinayak.png',
    },
    {
      id: 7,
      name: 'Tejas Negi',
      designation: 'Admin',
      image: '/tejas.png',
    },
    {
      id: 8,
      name: 'Rupesh',
      designation: 'Admin',
      image: '/rupesh.png',
    },
    {
      id: 9,
      name: 'Arontex',
      designation: 'Content Creator',
      image: '/Aron.jpg',
    },
    {
      id: 10,
      name: 'Tanishk Saini',
      designation: 'Minecraft Dev',
      image: '/tanishk.jpg',
    },
  ];
  return (
    <div className='pb-16 pt-36 '>
      <div className='flex items-center text-center justify-center'>
        <TypewriterEffectSmooth
          words={words}
          className='mt-10'
        />
      </div>

      <div className=' flex flex-row items-center justify-center mb-10 '>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
};

export default About;
