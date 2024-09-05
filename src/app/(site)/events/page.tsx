"use client";

import { Events } from "@/components/Events";
import HeroSection from "@/components/HeroSection";

export default function EventPage() {


    return (
       <>
        <HeroSection heading="Events" tagline="Explore the previous TedxGlau event" />
        <Events />
       </>
    )
}