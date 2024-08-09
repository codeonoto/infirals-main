'use client';

import React from 'react';
import { Highlight } from './ui/HeroHighlight';
import { motion } from 'framer-motion';

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
    </div>
  );
};

export default ContentCreators;
