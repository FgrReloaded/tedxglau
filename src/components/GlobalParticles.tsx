"use client";

import { SparklesCore } from "./ui/sparkles";

export default function GlobalParticles() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[60]">
      <SparklesCore
        id="globalparticles"
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={80}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
}