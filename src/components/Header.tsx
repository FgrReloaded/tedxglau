import { ModeToggle } from "./ModeToggle"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import Link from "next/link"

export const Header = () => {
    return (
        <div className='w-4/5 h-[15%] md:bg-white dark:md:bg-black rounded-t-3xl relative'>
            <div className="flex justify-center text-center absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                    <Link target="_blank" href={'https://docs.google.com/forms/d/e/1FAIpQLSeiGDC_Wi-HuaCm530y7lVCZxM4Kx0u-b73hav8YtpRLQaALw/viewform'}>
                        <span className='md:text-base text-sm'>Get Tickets Now</span>
                    </Link>
                </HoverBorderGradient>
            </div>
            <span className='w-[10%] h-full md:bg-white dark:md:bg-black absolute -left-[10%] top-0' />
            <span className='w-[10%] h-full bg-black dark:bg-white rounded-ee-3xl absolute -left-[10%]' />

            <span className='w-[10%] h-full md:bg-white dark:md:bg-black absolute -right-[10%] top-0' />
            <span className='w-[10%] h-full bg-black dark:bg-white rounded-es-3xl absolute -right-[10%]' />

            <ModeToggle />
        </div>
    )
}