import React from 'react'
import BoxReveal from '../ui/box-reveal'
import { SpeakerImg } from './SpeakerImg'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'


interface SpeakerCardProps {
    reverse?: boolean
}

const SpeakerCard = ({ reverse }: SpeakerCardProps) => {
    return (
        <div className={cn('flex md:flex-row flex-col justify-center gap-8 items-center', reverse && "md:flex-row-reverse")} >
            <SpeakerImg />
            <Card className='md:w-1/2 w-4/5  bg-transparent dark:bg-transparent border-none md:px-4 cursor-default'>
                <BoxReveal boxColor={"#eb0027"} duration={0.5}>
                    <p className="text-base text-center md:text-justify uppercase pt-4 mx-auto leading-6"><span className='text-tedx bg-none'>Anant Bhardwaj</span><span className='text-transparent bg-clip-text bg-gray-800 dark:bg-gray-400'>, the CEO & founder of Instabase has worked hard to reach where he is! From rural Bihar to Stanford and then to Silicon Valley stardom, Anant completed his undergraduate degree in Computer Engineering from the University of Pune.</span></p>
                </BoxReveal>
                <BoxReveal boxColor={"#eb0027"} duration={0.5}>
                    <p className="text-base text-center md:text-justify uppercase pb-4 mx-auto text-transparent bg-clip-text bg-gradient-to-t from-gray-300 to-gray-900 dark:from-gray-900 dark:to-gray-300">He then moved to the United States in 2010 to attend Stanford University where he earned a Masters in Computer Science. In 2012, he went to the Massachusetts Institute of Technology to pursue a Ph.D. He dropped out of the Ph.D. program in 2015 to start Instabase, where he serves as the CEO.</p>
                </BoxReveal>
            </Card>
        </div>
    )
}

export default SpeakerCard