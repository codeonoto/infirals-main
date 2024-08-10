'use client';

import React from 'react';
import { Highlight } from './ui/HeroHighlight';
import { motion } from 'framer-motion';
import { CreatorsCard } from './CreatorsCard';
import { Cover } from './ui/Cover';

const ContentCreators = () => {
  return (
    <div className='w-full pt-36'>
      <div className=''>
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
          Creators Bringing Our{' '}
          <Highlight className='text-black dark:text-white '>
            Community to Life !
          </Highlight>
        </motion.h1>
      </div>

      <div className='flex items-center justify-center py-8'>
        <h2 className='uppercase tracking-wider text-md text-center max-w-2xl text-cyan-50'>
          Meet the star creators who shine brightly and make a significant
          impact on Infirals with their content.
        </h2>
      </div>

      <div>
        <h1 className='text-3xl md:text-3xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white pb-8'>
          The Star Creators of <Cover> Infirals !</Cover>
        </h1>
      </div>
      <CreatorsCard />
    </div>
  );
};

export default ContentCreators;
