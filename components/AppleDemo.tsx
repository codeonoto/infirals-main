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

const InfiralsS1 = () => {
  return (
    <>
      <div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
        <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
          <span className='font-bold text-neutral-700 dark:text-neutral-200'>
            Over the years, we&apos;ve launched countless SMPs, each with its
            own unique flavor and community.
          </span>{' '}
          But there&apos;s one that stands out above the rest - our most loved
          SMP
        </p>
        <Image
          src='/INF_S1-Logo.png'
          alt='Macbook mockup from Aceternity UI'
          height='500'
          width='500'
          className='md:w-1/2 md:h-1/2 h-full w-full mt-8 mx-auto object-contain rounded-3xl'
        />
      </div>
      <div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
        <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
          <span className='font-bold text-neutral-700 dark:text-neutral-200'>
            The response we&apos;ve received from this server has been
            overwhelming
          </span>{' '}
          with players from all corners of our community coming together to
          create something truly special.
        </p>
        <Image
          src='https://media.discordapp.net/attachments/1019697361515204679/1271408937308131338/2023-11-26_16.30.09.png?ex=66b7e418&is=66b69298&hm=1e895e4b35fcbe79d1bb0e0d8fa6571cbed3f99aa4d740a4672a7cf723285d2c&=&format=webp&quality=lossless&width=1193&height=671'
          alt='Macbook mockup from Aceternity UI'
          height='500'
          width='500'
          className='md:w-1/2 md:h-1/2 h-full w-full mt-8 mx-auto object-contain rounded-3xl'
        />
      </div>
      <div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
        <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
          <span className='font-bold text-neutral-700 dark:text-neutral-200'>
            The love, creativity, and camaraderie
          </span>{' '}
          we&apos;ve witnessed here have surpassed all our expectations, making
          this SMP a cornerstone of what Infirals is all about.
        </p>
        <Image
          src='https://media.discordapp.net/attachments/1019697361515204679/1175726911423516753/image.png?ex=66b7d943&is=66b687c3&hm=13a68d34f533ab0c4afcf32d6140418f54862dc07ca4919efb83958bf040e2ac&=&format=webp&quality=lossless&width=1183&height=671'
          alt='Macbook mockup from Aceternity UI'
          height='500'
          width='500'
          className='md:w-1/2 md:h-1/2 h-full w-full mt-8 mx-auto object-contain rounded-3xl'
        />
      </div>
      <div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
        <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
          <span className='font-bold text-neutral-700 dark:text-neutral-200'>
            We&apos;re humbled and thrilled to see
          </span>{' '}
          how much this server has meant to everyone, and we&apos;re committed
          to making it even better as we move forward.
        </p>
        <Image
          src='https://media.discordapp.net/attachments/1019697361515204679/1271408936674918491/2023-12-03_13.20.27.png?ex=66b7e418&is=66b69298&hm=aa29c457e2c99a0bdcd44edb19b674dc7e5b5b61e45bcb57b98b6e268738a96a&=&format=webp&quality=lossless&width=1193&height=671'
          alt='Macbook mockup from Aceternity UI'
          height='500'
          width='500'
          className='md:w-1/2 md:h-1/2 h-full w-full mt-8 mx-auto object-contain rounded-3xl'
        />
      </div>
    </>
  );
};

const data = [
  {
    category: 'Infirals  S1',
    title: "Our community's favorite, most beloved SMP.",
    src: '/infirals-1.png',
    content: <InfiralsS1 />,
  },
  {
    category: 'Half Heart S4',
    title: 'The Ultimate Lifesteal Challenge',
    src: '/hhs4-1.png',
    content:
      'Experience the latest and greatest in our Lifesteal series. HalfHeart S4 brings new challenges, alliances, and high-stakes gameplay that will keep you on the edge of your seat.',
  },
  {
    category: 'Half Heart S3',
    title: 'Thrills and Triumphs',
    src: '/hhs3-2.png',
    content:
      'Relive the intense moments and epic battles of HalfHeart S3. Witness how players navigated the dangers and excitement of our Lifesteal SMP in this thrilling season.',
  },
  {
    category: 'Half Heart S2',
    title: 'Rising Tensions',
    src: '/hhs2-9.png',
    content:
      'Dive into the action of HalfHeart S2, where rivalries heated up and strategies evolved. This season pushed the boundaries of survival and competition.',
  },
  {
    category: 'WinZestiers S3',
    title: 'The Dawn of Survival',
    src: '/wz3-1.png',
    content:
      'Step into the latest chapter of WinZestiers with S3. This season introduces new challenges, expanded territories, and exciting survival gameplay that will test your skills and strategies.',
  },
  {
    category: 'Half Heart S1',
    title: 'The Beginning of an Era',
    src: '/hhs2-1.png',
    content:
      'Join us at the start of the Lifesteal journey with HalfHeart S1. Discover how it all began and the foundations that set the stage for future seasons of this gripping SMP.',
  },
  {
    category: 'EraBlock S2',
    title: 'The Next Evolution',
    src: 'https://media.discordapp.net/attachments/1019697361515204679/1026671707806765076/Lunar_Client_1.19.2-e39d2b1_master_04-10-2022_00_06_00.png?ex=66b81809&is=66b6c689&hm=4ace58b99899a2afcde7dfd17fb57ffc5ff934d09c9e48df77b0a4042013debd&=&format=webp&quality=lossless&width=1052&height=592',
    content:
      'Uncover the advancements of EraBlock S2 with brand-new features and crossplay integration, enhancing your gameplay and broadening your adventure horizons.',
  },
  {
    category: 'EraBlock S1',
    title: 'A New SMP Era Begins',
    src: 'https://media.discordapp.net/attachments/1019697361515204679/1066776290176270377/IMG_5974.png?ex=66b7a7d7&is=66b65657&hm=fa2ed8e0c9125ae5278adfa3de6b4926f6153431619f58424831a43d98dbf925&=&format=webp&quality=lossless',
    content:
      'Step into EraBlock S1, where our public SMP journey begins with unique features and crossplay, laying the groundwork for an exciting new chapter in survival gaming.',
  },
  {
    category: 'WinZestiers S2',
    title: 'Evolving Challenges',
    src: '/wz2.png',
    content:
      'Experience the evolution of survival with WinZestiers S2. As the world grows and the stakes rise, players face increasingly complex challenges and thrilling adventures.',
  },
  {
    category: 'WinZestiers S1',
    title: 'The Dawn of Survival',
    src: 'https://media.discordapp.net/attachments/1019697361515204679/1059677630317731900/Screenshot_55.png?ex=66b789f2&is=66b63872&hm=5d152199ef6a052e6c5ce62fd62e8de07abf0cf59ec1fe71d4684bf9ee665444&=&format=webp&quality=lossless&width=1193&height=671',
    content:
      'Discover the origins of WinZestiers with S1, where it all began. This inaugural season set the stage for epic survival experiences and established the foundation for future adventures.',
  },
];
