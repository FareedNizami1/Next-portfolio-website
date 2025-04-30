"use client"

import * as React from 'react';
import { motion } from 'framer-motion';

export function TypingEffect({ text = 'Hi, My Name is Fareed! \n Welcome to my portfolio!' }) {
  return (
    <h2
      className="text-3xl text-center sm:text-5xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] py-5"
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }} // Fade in and out
          transition={{
            duration: 15, // Duration for each letter
            delay: index * 0.02, // Delay for each letter
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}