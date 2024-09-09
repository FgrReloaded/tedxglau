import React from 'react'
import BoxReveal from '../ui/box-reveal'
import { SpeakerImg } from './SpeakerImg'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'


interface SpeakerCardProps {
    speaker: any
    reverse?: boolean
}

const SpeakerCard = ({ speaker, reverse }: SpeakerCardProps) => {
    return (
        <div className={cn('flex md:flex-row flex-col justify-center gap-8 items-center', reverse && "md:flex-row-reverse")} >
            <SpeakerImg src={speaker?.image} />
            <Card className='md:w-1/2 w-4/5  bg-transparent dark:bg-transparent border-none md:px-4 cursor-default'>
                <BoxReveal boxColor={"#eb0027"} duration={0.5}>
                    <p className="text-base text-center md:text-justify uppercase pt-4 mx-auto leading-6"><span className='text-tedx bg-none'>{speaker?.name}</span><span className='text-transparent bg-clip-text bg-gray-800 dark:bg-gray-400'>, {speaker.bioOne}</span></p>
                </BoxReveal>
                <BoxReveal boxColor={"#eb0027"} duration={0.5}>
                    <p className="text-base text-center md:text-justify uppercase pb-4 mx-auto text-transparent bg-clip-text bg-gradient-to-t from-gray-300 to-gray-900 dark:from-gray-900 dark:to-gray-300">{speaker.bioTwo}</p>
                </BoxReveal>
            </Card>
        </div>
    )
}

export default SpeakerCard