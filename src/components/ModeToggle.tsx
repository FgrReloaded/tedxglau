"use client"
import { motion } from "framer-motion";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <motion.span initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
            whileTap={{ rotate: 90 }} onClick={handleTheme} className='p-2 border-2 border-white dark:border-black rounded-full absolute top-[18%] -left-[6%] cursor-pointer'>
            <SunMoon size={28} className='text-white dark:text-black' />
        </motion.span>
    )

}