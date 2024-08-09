'use client';

import React from 'react';
import { AppleDemo } from './AppleDemo';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/HeroHighlight';

const MinecraftServer = () => {
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
          Here Are Some Of Our{' '}
          <Highlight className='text-black dark:text-white '>
            Minecraft Servers !
          </Highlight>
        </motion.h1>
      </div>

      <AppleDemo />
    </div>
  );
};

export default MinecraftServer;
