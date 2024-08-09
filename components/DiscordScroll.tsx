'use client';
import React from 'react';
import Image from 'next/image';
import { ContainerScroll } from './ui/ContainerScrollAnimation';
import { HoverBorderGradient } from './ui/HoverBorderGrad';

export function DiscordScroll() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>
              Join the ultimate gaming hub on <br />
              <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                Discord Server
              </span>
            </h1>
          </>
        }>
        <Image
          src={`/dcBg.png`}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </ContainerScroll>

      <div className='flex items-center justify-center md:-mt-60 -mt-48'>
        <a
          href='https://discord.gg/UPMrvqPD3P'
          target='_blank'>
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'>
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
  );
}
