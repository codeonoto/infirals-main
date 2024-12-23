import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { TextRevealCard } from './ui/CardReval';
import { CardStack } from './ui/CardStack';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HoverBorderGradient } from './ui/HoverBorderGrad';
import AdBanner from './AdBanner';

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-cyan-100 text-cyan-700 dark:bg-cyan-700/[0.2] dark:text-cyan-500 px-1 py-0.5',
        className
      )}>
      {children}
    </span>
  );
};

const Hero = () => {
  return (
    <div className='pb-20 pt-20 h-full min-h-screen relative'>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
          <AdBanner />
          <Image
            src={`/cooking.gif`}
            alt='hero'
            height={600}
            width={600}
            className='mx-auto rounded-2xl object-cover h-full object-left-top'
            draggable={false}
          />
          <br />
          <h2 className='uppercase tracking-wider text-lg text-center text-gray-800'>
            Something is cooking, just wait a bit! 🍳🔥
          </h2>

          <br />
          <div className='flex items-center justify-center '>
            <a
              href='https://discord.gg/UPMrvqPD3P'
              target='_blank'>
              <HoverBorderGradient
                containerClassName='rounded-full'
                as='button'
                className='dark:bg-black-200 dark:text-white flex items-center space-x-2'>
                <span>Join Discord</span>
                <img
                  src='/discord.png'
                  alt='dc'
                  className='w-6 h-6'
                />
              </HoverBorderGradient>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
