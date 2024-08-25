"use client"
import HeroSection from "@/components/HeroSection";
import ProfileCard from "@/components/ProfileCard";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { socialMedia } from "@/lib/constant";
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })

export default function TeamPage() {

    return (
        <div className="flex flex-col mb-16">
            <HeroSection className="dark:bg-transparent bg-transparent" heading="TEAM" tagline="Meet The Team" />
            <div className="flex flex-col gap-4 items-center">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    );
}
