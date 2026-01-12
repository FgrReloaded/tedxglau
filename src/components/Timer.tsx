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
        const targetDate = new Date('2025-11-28T10:00:00+05:30'); // 10 AM IST on Nov 28, 2025
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        } as TimeLeft;

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

    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='flex items-center gap-16 justify-between md:flex-row flex-col'>
            <p className="text-2xl text-center flex items-center mt-6 md:mt-0">
                <span className='text-tedx text-6xl'>28</span><span className='bg-gradient-to-r dark:from-red-300 dark:to-slate-600 from-slate-900 to-slate-400 bg-clip-text text-transparent self-start'>TH</span> <br /> <span className='text-2xl text-gray-400 content-center ml-4 uppercase'>November</span>
            </p>
            <div className="flex gap-4 md:gap-8 text-center my-6 md:my-0">
                <div className="flex flex-col items-center">
                    <div className="relative bg-black/50 backdrop-blur-sm border border-tedx/30 rounded-lg p-4 min-w-[80px] md:min-w-[100px]">
                        <span className="text-4xl md:text-6xl font-bold text-tedx">
                            {timeLeft.days.toString().padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-2 font-medium">DAYS</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative bg-black/50 backdrop-blur-sm border border-tedx/30 rounded-lg p-4 min-w-[80px] md:min-w-[100px]">
                        <span className="text-4xl md:text-6xl font-bold text-tedx">
                            {timeLeft.hours.toString().padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-2 font-medium">HOURS</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative bg-black/50 backdrop-blur-sm border border-tedx/30 rounded-lg p-4 min-w-[80px] md:min-w-[100px]">
                        <span className="text-4xl md:text-6xl font-bold text-tedx">
                            {timeLeft.minutes.toString().padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-2 font-medium">MIN</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative bg-black/50 backdrop-blur-sm border border-tedx/30 rounded-lg p-4 min-w-[80px] md:min-w-[100px]">
                        <span className="text-4xl md:text-6xl font-bold text-tedx">
                            {timeLeft.seconds.toString().padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-2 font-medium">SEC</span>
                </div>
            </div>
        </div>
    );
}

export default Timer;
