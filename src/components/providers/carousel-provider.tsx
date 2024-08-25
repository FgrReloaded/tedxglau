"use client"
import HeroSection from "@/components/HeroSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Oswald } from "next/font/google";
import Speakers from "@/components/speaker";
import BlurIn from "@/components/ui/blur-in";
import Timer from "@/components/Timer";

const oswald = Oswald({ subsets: ["latin"] });

interface CarouselProviderProps {
    children: React.ReactNode
}

const CarouselProvider = ({ children }: CarouselProviderProps) => {
    const carouselRef = useRef(null)
    const { scrollY } = useScroll({
        container: carouselRef
    })

    const width = useTransform(scrollY, [0, 1], ["90%", "99%"])

    return (
        <motion.div ref={carouselRef} className='w-11/12 h-full overflow-y-scroll overflow-x-hidden bg-white dark:bg-black rounded-3xl  transition-all main-container' style={{ width }}>
            {children}
        </motion.div>
    )
}

export default CarouselProvider