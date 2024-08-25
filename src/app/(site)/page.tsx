import HeroSection from "@/components/HeroSection";
import { Oswald } from "next/font/google";
import Speakers from "@/components/speaker";
import { BackgroundBeams } from "@/components/ui/background-beams";
import BlurIn from "@/components/ui/blur-in";
import Timer from "@/components/Timer";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

export default function Page() {

  return (
    <>
      <HeroSection tagline="Creativity Unveils the Mind" />
      <h1 style={oswald.style} className="text-7xl mt-6 font-bold mt-6 text-center uppercase bg-clip-text bg-gradient-to-r dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 text-transparent">Join <br /> <span className="text-tedx text-8xl">Ted<span className="text-4xl content-start">X</span></span>Glau 20<span className="text-tedx text-8xl">24</span></h1>
      <p className="mx-auto uppercase text-gray-400 w-fit border-t border-gray-800">Organised by E-CELL GLAU</p>
      <p className="text-lg md:text-2xl text-center uppercase py-4 md:w-1/2 mx-auto text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-900 dark:from-gray-900 dark:to-gray-300">for an unforgettable experience with groundbreaking ideas and influential </p>
      <Speakers />
      <div className="flex mt-6 flex-col gap-6">
        <p className="text-4xl text-center font-bold mt-2 uppercase text-transparent bg-gradient-to-tr dark:from-black dark:to-tedx from-slate-400 to-slate-900 bg-clip-text">
          Become a part of overwhelming experience
        </p>
        <div className="text-center">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex uppercase h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-base font-medium text-white backdrop-blur-3xl px-6">
              Join Now <span className="ml-2">🚀</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-4 mt-32 flex-col items-center gap-2">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Explore Past Events"
        />
        <div className="text-center">
          <Link href={"/events"} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex uppercase h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-base font-medium text-white backdrop-blur-3xl px-6">
              Explore <span className="ml-2">🔎</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mb-4 mt-32 flex-col items-center gap-2">
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
        <BlurIn
          duration={1}
          word="Save the date"
          className="text-7xl font-bold mt-2 uppercase text-transparent bg-gradient-to-r dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 bg-clip-text"
        />
        <Timer />
      </div>

    </>


  )
}
