"use client"
import HeroSection from "@/components/HeroSection";
import { Teams } from "@/components/ParallaxScroll";
import ProfileCard from "@/components/ProfileCard";
import { TeamCard } from "@/components/TeamCard";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { socialMedia, teamHeads } from "@/lib/constant";
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })

export default function TeamPage() {

    return (
        <div className="flex flex-col mb-16">
            <HeroSection className="dark:bg-transparent bg-transparent" heading="TEAM" tagline="Meet The Team" />
            <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl md:text-6xl uppercase font-bold text-center mt-4 bg-gradient-to-b from-red-600 to-black bg-clip-text text-transparent">Team Heads</h1>
             
                {
                    teamHeads.map((head, idx) => (
                        <TeamCard key={idx} src={head.pic} name={head.name} designation={head.designation} />
                    ))
                }

                <h1 className="text-4xl md:text-6xl uppercase font-bold text-center mt-4 bg-gradient-to-b from-red-600 to-black bg-clip-text text-transparent">Team Members</h1>
                <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                <Teams />
                
                {/* <ProfileCard /> */}
                {/* <ProfileCard /> */}
                {/* <ProfileCard /> */}
                {/* <ProfileCard /> */}
            </div>
        </div>
    );
}
