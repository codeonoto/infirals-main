'use client';
import Image from 'next/image';
import React from 'react';
import { Card, Carousel } from './ui/AppleCardCarousel';

export function AppleDemo() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
    />
  ));

  return (
    <div className='w-full h-full'>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
            <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
              <span className='font-bold text-neutral-700 dark:text-neutral-200'>
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src='https://assets.aceternity.com/macbook.png'
              alt='Macbook mockup from Aceternity UI'
              height='500'
              width='500'
              className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: 'Infirals  S1',
    title: 'Most Loved SMP',
    src: '/infirals-1.png',
    content: <DummyContent />,
  },
  {
    category: 'Half Heart S4',
    title: 'Most Loved SMP',
    src: '/hhs4-1.png',
    content: <DummyContent />,
  },
  {
    category: 'Half Heart S3',
    title: 'Most Loved SMP',
    src: '/hhs3-2.png',
    content: <DummyContent />,
  },
  {
    category: 'Half Heart S2',
    title: 'Most Loved SMP',
    src: '/hhs2-9.png',
    content: <DummyContent />,
  },
  {
    category: 'WinZestiers S3',
    title: 'Most Loved SMP',
    src: '/wz3-1.png',
    content: <DummyContent />,
  },
  {
    category: 'Half Heart S1',
    title: 'Most Loved SMP',
    src: '/hhs2-1.png',
    content: <DummyContent />,
  },
  {
    category: 'EraBlock S1',
    title: 'Most Loved SMP',
    src: '/hhs2-1.png',
    content: <DummyContent />,
  },
  {
    category: 'WinZestiers S2',
    title: 'After receiving love from people in Season 1, we started Season 2',
    src: '/wz2.png',
    content: <DummyContent />,
  },
  {
    category: 'WinZestiers S1',
    title: 'This is our first Minecraft server.',
    src: '/wz1.png',
    content: <DummyContent />,
  },
];
