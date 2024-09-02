"use client"
import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}


const Timer = () => {
    const calculateTimeLeft = (): TimeLeft => {
        const targetDate = new Date('September 13, 2024 00:00:00');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        let timeLeft = {} as TimeLeft;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    if (!mounted) {
        return null;
    }

    return (
        <div className='flex items-center gap-16 justify-between md:flex-row flex-col'>
            <p className="text-2xl text-center flex items-center mt-6 md:mt-0">
                <span className='text-tedx text-6xl'>13</span><span className='bg-gradient-to-r dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 bg-clip-text text-transparent self-start'>TH</span> <br /> <span className='text-2xl text-gray-400 content-center ml-4 uppercase'>September</span>
            </p>
            <div className="grid grid-flow-col gap-6 text-center auto-cols-max my-6 md:my-0">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown text-5xl text-tedx">
                        <span>{timeLeft.days}</span>
                    </span>
                    DAYS
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown text-5xl text-tedx">
                        <span>{timeLeft.hours}</span>
                    </span>
                    HOURS
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown text-5xl text-tedx">
                        <span>{timeLeft.minutes}</span>
                    </span>
                    MIN
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown text-5xl text-tedx">
                        <span >{timeLeft.seconds}</span>
                    </span>
                    SEC
                </div>
            </div>
        </div>
    );
}

export default Timer;
