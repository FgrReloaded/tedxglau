"use client"

import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import Link from 'next/link'

interface HeroSectionProps {
  tagline: string
  heading?: string
  className?: string
}

const HeroSection = ({ tagline, heading, className }: HeroSectionProps) => {
  const { theme } = useTheme()
  const pathname = usePathname();

  // Common background sparkles for consistency and performance
  const SparklesBackground = () => (
    <div className="w-full absolute inset-0 h-full">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );

  if (pathname === '/') {
    return (
      <div className={cn("min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden", className)}>
        <SparklesBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                Welcome to
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                Independently organized TED event
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <h1 className="text-6xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  TEDx<span className="text-tedx">GLAU</span>
                </h1>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/events"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Explore Events →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/about"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  About Us
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <div className="mt-10 max-w-2xl mx-auto">
            <TextGenerateEffect words={tagline} className='text-center text-sm md:text-xl text-neutral-400' />
          </div>
        </div>
      </div>
    )
  }

  // Simplified view for other pages to reduce noise
  return (
    <div className={cn("h-[50vh] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden", className)}>
      <SparklesBackground />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          TEDx<span className="text-tedx">GLAU</span>
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          {heading || "Ideas Worth Spreading"}
        </p>
      </div>
    </div>
  )
}

export default HeroSection