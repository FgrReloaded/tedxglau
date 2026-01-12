"use client"
import HeroSection from "@/components/HeroSection";
import { Teams } from "@/components/ParallaxScroll";
import ProfileCard from "@/components/ProfileCard";
import { TeamCard } from "@/components/TeamCard";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { socialMedia, teamHeads, hostTeam, cohostTeam } from "@/lib/constant";
import { Open_Sans } from "next/font/google"
import Image from "next/image"

const openSans = Open_Sans({ subsets: ["latin"] })

export default function TeamPage() {

    return (
        <div className="flex flex-col mb-16">
            <HeroSection className="dark:bg-transparent bg-transparent" heading="TEAM" tagline="Meet The Team" />
            <div className="flex flex-col gap-4 items-center sm:px-0 px-2">
                <h1 className="text-4xl md:text-6xl uppercase font-bold text-center mt-4 bg-gradient-to-b from-red-600 to-black bg-clip-text text-transparent">Organizers</h1>
                {
                    teamHeads.map((head, idx) => (
                        <TeamCard key={idx} src={head.pic} name={head.name} designation={head.designation} />
                    ))
                }
                <h1 className="text-4xl md:text-6xl uppercase font-bold text-center mt-8 bg-gradient-to-b from-red-600 to-black bg-clip-text text-transparent">Host Team</h1>
                <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                {hostTeam.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 max-w-6xl mx-auto px-4">
                        {hostTeam.map((image, idx) => (
                            <div key={idx} className="group relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4 sm:p-5 hover:border-tedx/70 hover:shadow-2xl hover:shadow-tedx/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-48 sm:w-56 md:w-60">
                                <div className="absolute inset-0 bg-gradient-to-br from-tedx/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                <Image src={image} alt={`Host member ${idx + 1}`} width={250} height={300} className="rounded-xl object-cover w-full h-auto shadow-lg" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-400 mt-4">Host team members coming soon...</p>
                )}
                
                <h1 className="text-4xl md:text-6xl uppercase font-bold text-center mt-16 bg-gradient-to-b from-red-600 to-black bg-clip-text text-transparent">Co-Host Team</h1>
                <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                {cohostTeam.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 max-w-6xl mx-auto px-4">
                        {cohostTeam.map((image, idx) => (
                            <div key={idx} className="group relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4 sm:p-5 hover:border-tedx/70 hover:shadow-2xl hover:shadow-tedx/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-48 sm:w-56 md:w-60">
                                <div className="absolute inset-0 bg-gradient-to-br from-tedx/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                <Image src={image} alt={`Co-host member ${idx + 1}`} width={250} height={300} className="rounded-xl object-cover w-full h-auto shadow-lg" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-400 mt-4">Co-host team members coming soon...</p>
                )}
                

            </div>
        </div>
    );
}
