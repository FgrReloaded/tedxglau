"use client"
import React, { use, useState } from 'react'
import localFont from 'next/font/local'

const navItem = localFont({ src: '../fonts/font-nav.otf' })
import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const iconVariants = {
        animate: { rotate: 0, opacity: 1 },
        initial: { rotate: 90, opacity: 0 },
        exit: { rotate: 0, opacity: 1 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    const pathname = usePathname();

    const routes = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Events',
            link: '/events'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Team',
            link: '/team'
        }
    ]

    return (
        <div className='overflow-hidden'>
            <span onClick={() => { setIsOpen(!isOpen) }} className='p-2 absolute top-[5%] right-[5%] rounded-full border-2 border-white dark:border-black cursor-pointer z-50'>
                {isOpen ? (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={iconVariants}
                        key="x-icon"
                    >
                        <X size={28} className='text-white dark:text-black' />
                    </motion.div>
                ) : (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={iconVariants}
                        key="menu-icon"
                    >
                        <Menu size={28} className='text-white dark:text-black' />
                    </motion.div>
                )}
            </span>
            <motion.div initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                animate={{ clipPath: isOpen ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                transition={{ duration: 0.75, ease: "circOut" }} className="fixed top-0 left-0 w-screen h-screen flex bg-[#141412] will-change-transform z-40">
                {
                    isOpen && (
                        <motion.div style={navItem.style}
                            className="fixed top-0 left-0 w-screen h-screen flex gap-4 flex-col justify-center items-center"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={containerVariants}
                        >
                            {routes.map((item, index) => (
                                <motion.div
                                    className="flex cursor-pointer"
                                    key={index}
                                    variants={itemVariants}
                                >
                                    <p className={cn('relative text-center text-[10vw] text-white leading-[80%] will-change-transform transition-all duration-300 hover:tracking-[0.75rem]', pathname === item.link && "text-tedx")}>
                                        <Link onClick={()=>{setIsOpen(false)}} href={item.link}>{item.title}</Link>
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: isOpen ? "1" : "0", x: isOpen ? 0 : -100 }} transition={{ duration: 0.75, delay: 0.75 }} className="absolute bottom-[10%] md:top-1/2 md:-translate-y-1/2 left-0 pl-6" style={navItem.style}>
                    <p className='md:text-[2.5vw] text-[5vw] uppercase text-white'>
                        <a target='_blank' href="https://www.instagram.com/tedxglau?igsh=MTVqZWdxYjhobHAzOA==">Instagram</a>
                    </p>
                    <p className='md:text-[2.5vw] text-[5vw] uppercase text-tedx'>
                        <a target='_blank' href="https://twitter.com/tedxglau">X</a>
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: isOpen ? "1" : "0", x: isOpen ? 0 : 100 }} transition={{ duration: 0.75, delay: 0.75 }} className="absolute bottom-[10%] md:top-1/2 md:-translate-y-1/2 right-0 pr-6 text-right" style={navItem.style}>
                    <p className='md:text-[2.5vw] text-[5vw] uppercase text-tedx'>
                        <a target='_blank' href="https://www.facebook.com/tedxglau/">Facebook</a>
                    </p>
                    <p className='md:text-[2.5vw] text-[5vw] uppercase text-white'>
                        <a target='_blank' href="https://www.linkedin.com/company/tedxglau/">Linkedin</a>
                    </p>
                </motion.div>
            </motion.div>
           
        </div>
    )
}

export default Navbar