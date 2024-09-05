"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export const SpeakerImg = () => {
    return (
        <div className="h-[30rem] w-fit flex items-center justify-center ">
            <PinContainer
                title="Anant Bhardwaj"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                        <Image src={"/images/anant.webp"} alt="anant" layout="fill" />
                    </div>
                </div>
            </PinContainer>
        </div>
    );
}
