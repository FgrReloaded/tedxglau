import React from 'react'

interface EventFooterProps {
    organizer: string;
    day: string;   
    date: string;
}

const EventFooter = ({organizer, date, day}: EventFooterProps) => {
    return (
        <div className='mt-8 p-4 bg-gray-900 md:w-4/5 w-full mx-auto md:rounded-md flex ml-auto'>
            <div className='px-8 w-1/2'>
                <h1 className='text-2xl font-semibold'>About The Event</h1>
                <p className='text-sm'><span className='text-tedx'>TEDxGLAU</span> is an initiative started in the year 2016. From then, till now, series of events are happening under this banner.</p>
                <div className='flex items-center gap-2'>
                    <h1>Organizer:</h1> 
                    <p className='text-sm text-tedx'>{organizer}</p>
                </div>
            </div>
            <div className='w-1/2 flex gap-6 justify-end pr-8'>
                <div>
                    <h1 className='text-xl font-semibold'>Where</h1>
                    <p className='text-sm'>AB-2, EC Conference Hall</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>When</h1>
                    <p className='text-sm'>{day}</p>
                    <p className='text-sm'>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default EventFooter