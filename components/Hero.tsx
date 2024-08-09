import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { TextRevealCard } from './ui/CardReval';
import { CardStack } from './ui/CardStack';
import { cn } from '@/lib/utils';

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
  const CARDS = [
    {
      id: 0,
      name: 'Napoleon Hill',
      content: (
        <p>
          Victory is always possible for the person who refuses to{' '}
          <Highlight>stop fighting</Highlight>.
        </p>
      ),
    },
    {
      id: 1,
      name: 'Vince Lombardi',
      content: (
        <p>
          Winners never <Highlight>quit</Highlight>, and quitters never{' '}
          <Highlight>win</Highlight>.
        </p>
      ),
    },
    {
      id: 2,
      name: 'Winston Churchill',
      content: (
        <p>
          Success is not final, <Highlight>failure</Highlight> is not fatal: It
          is the <Highlight>courage</Highlight> to continue that counts.
        </p>
      ),
    },
    {
      id: 3,
      name: 'Les Brown',
      content: (
        <p>
          The harder the <Highlight>battle</Highlight>, the sweeter the{' '}
          <Highlight>victory</Highlight>.
        </p>
      ),
    },
  ];

  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='white'
        />
      </div>

      <div className='h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.15] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
          <h2 className='uppercase tracking-wider text-xs text-center text-cyan-50'>
            ABHI NHI TOH, KABHI NHI ! 🚀
          </h2>

          <TextGenerateEffect
            className='text-center text-[24px] md:text-5xl lg:text-6xl  uppercase'
            words='Infirals - A Community For Gamers & Content Creators'
          />

          <div className='md:block hidden'>
            <TextRevealCard
              text='You bring the skills...'
              revealText='We bring the adventure  '
              className=' '
            />
          </div>

          <div className='h-[24rem] flex items-center justify-center w-full '>
            <CardStack items={CARDS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
