'use client';

import React from 'react';
import { WobbleCard } from './ui/WobbleCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/HeroHighlight';

const About = () => {
  return (
    <div className='w-full pt-2'>
      <div className='py-8'>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className='text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '>
          Infirals is a vibrant community for gamers and content creators to
          connect and thrive with{' '}
          <Highlight className='text-black dark:text-white'>
            Creators and Minecraft servers.
          </Highlight>
        </motion.h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full '>
        <WobbleCard
          containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'
          className=''>
          <div className='max-w-xs'>
            <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              Creator Network
            </h2>
            <p className='mt-4 text-left  text-base/6 text-neutral-200'>
              Our platform supports a diverse range of content creators across
              various gaming genres. From Let&apos;s Plays to tutorials, our
              creators share their passion and expertise, enriching the
              community with engaging and high-quality content..
            </p>
          </div>
          <Image
            src='/grass.png'
            width={500}
            height={500}
            alt='linear demo image'
            className='absolute -right-4 lg:-right-[40%] -bottom-40 object-contain rounded-2xl'
          />
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
          <h2 className='max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Collaboration
          </h2>
          <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
            We believe in the power of working together. Infirals fosters a
            community where creators can collaborate on projects, share ideas,
            and support each other in their content creation journey.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
          <div className='max-w-sm'>
            <h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              Community Events
            </h2>
            <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
              We regularly host events, tournaments, and live streams to bring
              our community together. Participate in exciting activities,
              showcase your skills, and connect with fellow gamers and creators.
            </p>
          </div>
          <Image
            src='/diamondore.png'
            width={500}
            height={500}
            alt='linear demo image'
            className='absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-40 object-contain rounded-2xl'
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default About;
