'use client';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import Icons from '../icon';
import { Text, textVariants } from '../text';
import { socialMedia } from '@src/config';
import { motion } from 'framer-motion';

const Zero = () => {
  return (
    <div>
      <Text size={'h6'} className="text-slate">
        {' '}
        Hello
        <br />
      </Text>
    </div>
  );
};
const One = () => {
  return (
    <div className="">
      <Text size={'displayL'} className="text-lightSlate">
        {`I'm`}{' '}
        <span
          className={textVariants({
            weight: 'extraBold',
            className: 'text-green'
          })}
        >
          Shukerlang Jyrwa
        </span>
        <br />
      </Text>
    </div>
  );
};
const Two = () => {
  return (
    <Text
      size={'displayL'}
      className="tracking-wide text-slate"
      weight={'extraBold'}
    >
      Architectural{' '}
      <span
        className={textVariants({
          className: 'capitalize text-white'
        })}
      >
        designer
      </span>
      <br />
    </Text>
  );
};

const Three = () => {
  return (
    <Text size={'displayM'} className="text-center text-lightestSlate">
      {' '}
      Based In Shillong, Meghalaya,{' '}
      <span
        className={textVariants({
          size: 'displayL',
          weight: 'semiBold',
          className: 'leading-xl text-green'
        })}
      >
        India.
      </span>
      <br />
    </Text>
  );
};
const Four = () => {
  return (
    <div className="w-[95%] pt-4">
      <Text size={'p2'} className="text-center text-slate md:text-start">
        {' '}
        Experience the harmonious blend of tradition and innovation in every
        design. Each project honors cultural heritage while integrating
        contemporary techniques, creating spaces that resonate with history and
        embrace modernity. Explore a collection where every project bridges the
        past with the future, crafting environments that are both enduring and
        forward-thinking.
      </Text>
    </div>
  );
};
const items = [Zero, One, Two, Three, Four];

const Hero = () => {
  return (
    <div className="grid h-screen grid-cols-12 gap-y-5">
      <div className="order-2 col-span-12 px-5 md:order-1 md:col-span-8 md:h-full md:px-0">
        <div className="flex h-full flex-col items-center justify-start space-y-0 md:items-start md:justify-center md:space-y-2">
          {items.map((Item, index) => (
            <Item key={index} />
          ))}
        </div>
      </div>
      <div className="order-1 col-span-12 flex h-auto w-full items-end px-5 md:order-2 md:col-span-4 md:h-full md:items-center md:px-0">
        <motion.img
          src="/seo/head-shot.jpg"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
            type: 'just'
          }}
          className="aspect-video h-auto rounded-xl object-cover md:aspect-square"
        />
      </div>
      <SocialMenuBar />
    </div>
  );
};

export default Hero;

export const SocialMenuBar = () => {
  return (
    <div className="fixed bottom-0 z-50 hidden md:block">
      <div className="flex space-x-5">
        {socialMedia.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <Link
              href={link.url}
              target="_blank"
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
                className:
                  'border-1 flex items-center justify-center rounded-full border-slate bg-transparent text-center  font-bold text-slate hover:scale-110 hover:border-green  hover:text-green'
              })}
            >
              <Icons
                name={link.name}
                className="h-6 w-6 fill-none text-inherit"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
