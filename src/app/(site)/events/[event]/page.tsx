"use client";

import EventFooter from "@/components/EventFooter";
import HeroSection from "@/components/HeroSection";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import { events } from "@/lib/constant";
import Image from "next/image";

export default function EventPage({ params }: { params: { event: string } }) {
    const event = events[params.event];
    const speakers = event.speakers || [];
    return (
        <>
            <HeroSection heading={params.event} tagline={event.tagLine} />
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Experience Past Events <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none uppercase bg-clip-text text-transparent bg-gradient-to-tr from-tedx to-red-600 dark:from-red-700 dark:to-tedx">
                                    TedTalks
                                </span>
                            </h1>
                        </>
                    }
                >
                    <iframe className="mx-auto rounded-2xl object-cover h-full object-left-top sm:w-full w-80" width="960" height="315" src={event.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </ContainerScroll>
            </div>
            <div className="w-full bg-transparent dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-transparent bg-gradient-to-b bg-clip-text dark:from-tedx from-black dark:to-black  relative z-20  mt-8">
                    SPEAKERS
                </h1>
                <div className="w-[40rem] h-40 relative">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <HoverEffect items={speakers} />
            <EventFooter organizer={event.organizer} day={event.day} date={event.date} />
        </>
    )
}