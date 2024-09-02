"use client";

import { teams } from "@/lib/constant";
import { ParallaxScroll } from "./ui/parallax-scroll";

export function Teams() {
  return <ParallaxScroll  images={teams} />;
}

