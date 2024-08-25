"use client"
import HeroSection from "@/components/HeroSection";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { socialMedia } from "@/lib/constant";
import { useTheme } from "next-themes";
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })

export default function AboutPage() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col mb-16">
            <WavyBackground backgroundFill={theme === "dark" ? "#000" : "#fff"} className="max-w-4xl mx-auto pb-20">
                <HeroSection className="dark:bg-transparent bg-transparent" heading="Unveiled" tagline="Whispers of Wisdom" />
            </WavyBackground>
            <p className="text-transparent bg-gradient-to-r dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 text-7xl font-extrabold mt-6 text-center uppercase bg-clip-text">TED<span className="lowercase text-tedx">x</span>GLAU</p>
            <CardSpotlight className="h-fit w-full sm:w-4/5 mx-auto dark:bg-black bg-white">
                <p className="text-xl relative z-20 mt-2 text-black dark:text-white sm:text-justify text-center" style={openSans.style}>
                    <span className="text-tedx font-extrabold">TEDxGLAU</span> is an initiative started in 2016, dedicated to spreading innovative ideas and fostering creativity within our community. Each year, we organize a series of events that bring together diverse speakers, performers, and thought leaders to share their unique insights on a wide range of topics, from science and technology to art and social issues. Since its inception, <span className="text-tedx font-extrabold">TEDxGLAU</span> has become a beacon of intellectual and creative activity, continually striving to elevate the quality and impact of our programming. Join us on this journey to ignite minds and transform ideas into action.
                    <span className="text-tedx"> Organized by the Entrepreneurship Cell (<span className="font-extrabold">E-CELL</span>) at GLA University
                    </span>
                </p>
            </CardSpotlight>
            <p className="text-transparent bg-gradient-to-r dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 text-7xl font-extrabold mt-6 text-center uppercase bg-clip-text">E-<span className="text-tedx">CELL</span> GLAU</p>
            <CardSpotlight className="h-fit w-full sm:w-4/5 mx-auto dark:bg-black bg-white">
                <p className="text-xl relative z-20 mt-2 text-black dark:text-white sm:text-justify text-center" style={openSans.style}>
                    The Entrepreneurship Cell (<span className="text-tedx font-extrabold">E-CELL</span>) at GLA University is the driving force behind <span className="text-tedx font-extrabold">TEDxGLAU</span>. <span className="text-tedx font-extrabold">E-CELL</span> is dedicated to nurturing the entrepreneurial spirit within the university community. We provide students with the resources, mentorship, and opportunities to transform their innovative ideas into successful ventures. By organizing events like <span className="text-tedx font-extrabold">TEDxGLAU</span>, <span className="text-tedx font-extrabold">E-CELL</span> aims to create a vibrant ecosystem that encourages creativity, collaboration, and entrepreneurial thinking.
                </p>
            </CardSpotlight>
            <div className="flex flex-row items-center justify-center mt-32 mb-10 w-full">
                <AnimatedTooltip items={socialMedia} />
            </div>
        </div>
    );
}
