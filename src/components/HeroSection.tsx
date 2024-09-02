"use client"

import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { cn } from '@/lib/utils'
import { Vortex } from './ui/vortex'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

interface HeroSectionProps {
  tagline: string
  heading?: string
  className?: string
}

const HeroSection = ({ tagline, heading, className }: HeroSectionProps) => {
  const { theme } = useTheme()
  const pathname = usePathname();

  if (pathname === '/') {

    return (
      // <Vortex
      //   baseHue={300}
      //   backgroundColor={theme === "dark" ? "#000" : "#fff"}
      //   className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      // >
        <div className={cn(" sm:h-[80vh] w-full rounded-md flex md:items-center md:justify-center bg-white antialiased bg-grid-white/[0.02] relative overflow-hidden", className)}>
          <div className='absolute sm:h-full z-10 opacity-10'>

          <video autoPlay loop preload="auto" src="/TEDxGLAU WEB VID.mp4"></video>
          </div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20 fixed"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl uppercase md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-red-600 to-red-800 bg-opacity-50">
              Ted<span className='text-2xl sm:text-5xl'>X</span><span className='bg-gradient-to-b bg-clip-text  text-transparent from-gray-600 to-black dark:from-red-600 dark:to-red-800 bg-opacity-50'>Glau</span> <p className='flex justify-center items-center'><span className='text-tedx text-sm font-bold'>x </span><span className='text-xs'>=</span><span className='text-sm'> Independently organized TED event</span></p> <span className='bg-gradient-to-t dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 bg-clip-text text-transparent'>{heading}</span>
            </h1>
            <TextGenerateEffect words={tagline} className='text-center uppercase text-sm font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-900 dark:from-gray-900 dark:to-gray-300' />
          </div>
        </div>
      // </Vortex>
    )
  } else {
    return (
      <div className={cn("sm:h-[80vh] w-full rounded-md flex md:items-center md:justify-center bg-white antialiased bg-grid-white/[0.02] relative overflow-hidden", className)}>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 fixed"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl uppercase md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-red-600 to-red-800 bg-opacity-50">
            Ted<span className='text-2xl sm:text-5xl'>X</span><span className='bg-gradient-to-b bg-clip-text  text-transparent from-gray-600 to-black dark:from-red-600 dark:to-red-800 bg-opacity-50'>Glau</span> <p className='flex justify-center items-center'><span className='text-tedx text-sm font-bold'>x </span><span className='text-xs'>=</span><span className='text-sm'> Independently organized TED event</span></p> <span className='bg-gradient-to-t dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 bg-clip-text text-transparent'>{heading}</span>
          </h1>
          <TextGenerateEffect words={tagline} className='text-center uppercase text-sm font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-900 dark:from-gray-900 dark:to-gray-300' />
        </div>
      </div>)
  }

}

export default HeroSection