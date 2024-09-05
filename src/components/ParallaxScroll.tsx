"use client";

import { teams } from "@/lib/constant";
import { ParallaxScroll } from "./ui/parallax-scroll";
import Image from "next/image";

export function Teams() {
  return (

    <div className="w-full flex items-center justify-center flex-wrap gap-8">
      {
        teams.map((team, idx) => (
          <Image key={idx}
            src={team}
            className="h-80 object-contain rounded-lg gap-10 !m-0 !p-0"
            height="400"
            width="400"
            alt="thumbnail"
          />
        ))
      }
    </div>
  )
}

