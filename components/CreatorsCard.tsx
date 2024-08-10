'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';

export function CreatorsCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-10'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className='fixed inset-0  grid place-items-center z-[100]'>
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6'
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className='w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden'>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={800}
                  height={800}
                  src={active.src}
                  alt={active.title}
                  className='w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top'
                />
              </motion.div>

              <div>
                <div className='flex justify-between items-start p-4'>
                  <div className=''>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className='font-medium text-neutral-700 dark:text-neutral-200 text-base'>
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className='text-neutral-600 dark:text-neutral-400 text-base'>
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target='_blank'
                    className='px-4 py-3 text-sm rounded-full font-bold bg-cyan-500 text-white'>
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className='pt-4 relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'>
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className='max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4'>
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className='p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer'>
            <div className='flex gap-4 flex-col  w-full'>
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={800}
                  height={800}
                  src={card.src}
                  alt={card.title}
                  className='h-60 w-full  rounded-lg object-cover object-top'
                />
              </motion.div>
              <div className='flex justify-center items-center flex-col'>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className='font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base'>
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className='text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base'>
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'Owner & Creator',
    title: 'SBlockGamer',
    src: '/sbg-1.jpg',
    ctaText: 'CheckOut',
    ctaLink: 'https://www.youtube.com/@SBlockGamer',
    content: () => {
      return (
        <p>
          SBlockGamer is the driving force behind Infirals, blending a passion
          for gaming with a talent for content creation. <br /> <br />
          As the founder and owner of Infirals, SBlockGamer has built a thriving
          community where gamers and creators can connect, collaborate, and
          grow. With a keen eye for innovation and a deep love for Minecraft,
          SBlockGamer has not only developed engaging content but also fostered
          an environment where creativity and teamwork flourish. <br /> <br />
          Whether leading the charge in our most beloved SMP or crafting
          captivating YouTube videos, SBlockGamer&apos;s dedication to the
          gaming world is truly inspiring.
        </p>
      );
    },
  },
  {
    description: 'Manager & Creator',
    title: 'DarkRadian',
    src: '/Darky.jpg',
    ctaText: 'CheckOut',
    ctaLink: 'https://www.youtube.com/@Dark_Radian',
    content: () => {
      return (
        <p>
          DarkRadian is the backbone of Infirals, serving as both a skilled
          manager and a talented content creator. <br /> <br />
          As the community&apos;s manager, DarkRadian ensures that everything
          runs smoothly, from organizing events to maintaining our vibrant
          Minecraft servers. His strategic thinking and attention to detail help
          keep the Infirals community thriving. <br /> <br />
          On top of his managerial role, DarkRadian is a passionate content
          creator, known for producing engaging and high-quality videos that
          capture the spirit of our community. Whether he&apos;s behind the
          scenes or in front of the camera, DarkRadian&apos;s dedication and
          creativity shine through in everything he does.
        </p>
      );
    },
  },

  {
    description: 'Content Creator',
    title: 'Arontex Gaming',
    src: '/Aron.jpg',
    ctaText: 'CheckOut',
    ctaLink: 'https://www.youtube.com/@arontexgaming',
    content: () => {
      return (
        <p>
          Arontex Gaming is a dynamic content creator within the Infirals
          community, known for his captivating videos and creative gameplay.{' '}
          <br /> <br />
          With a deep love for Minecraft and a talent for storytelling, Arontex
          Gaming consistently delivers content that resonates with viewers. His
          unique perspective and engaging style make him a standout creator,
          attracting a dedicated audience who appreciate his passion for the
          game. <br /> <br />
          Arontex Gaming is not just a content creator, but a key part of what
          makes Infirals a vibrant and exciting community. His contributions
          help inspire and entertain gamers and creators alike.
        </p>
      );
    },
  },
];
