/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Hero() {
    const calculateTimeLeft = () => {
        const now = new Date();
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        // @ts-ignore
        const difference = nextMonth - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    return (
        <div className='w-full bg-green pt-7 pb-[100px]'>
            <div className='flex justify-center items-center mb-10'>
                <img className='mr-2' src="/logo.png" alt="" />
                <p className='text-white text-xl font-medium'>zonnepanelen </p>
                <span className='text-button text-xl font-medium'>energie</span>
            </div>
            <div className='max-w-6xl mx-auto flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px] gap-y-8 items-center'>
                    <div className='flex flex-col items-start'>
                        <h3 className='text-white md:text-[32px] text-3xl font-semibold leading-10 px-3 text-center md:text-justify md:px-0'>Join Poland’s first solar panels group buy and <span className='text-button'>save together</span></h3>
                        <div className='mt-8 px-3 md:px-0'>
                            <div className='bg-white rounded-md md:rounded-none px-8 py-7 flex justify-center items-center flex-col'>
                                <p>So far <strong>378 Polish families</strong> have already registered for the first group buy in Poland.</p>
                                <button className='outline-none border-none cursor-pointer text-buttonText text-[18px] font-semibold rounded-full bg-button py-4 px-7 my-7 select-none'>Unlock Your Offer</button>
                                {/* coutdown timer */}
                                <div className='flex justify-center items-center gap-x-2 md:gap-x-6 select-none'>
                                    <div className='flex flex-col items-center'>
                                        {timeLeft.days > 0 && (
                                            <> <h2 className='text-greenText text-[32px] font-semibold'>{timeLeft.days}</h2>
                                                {timeLeft.days === 1 ? <p className='text-greenText text-[14px] font-medium'>Day</p> : <p className='text-greenText text-[14px] font-medium'>Days</p>}{' '}
                                            </>

                                        )}

                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <h2 className='text-greenText text-[32px] font-semibold'>{timeLeft.hours}</h2>
                                        {/* --------if days-- = 0 */}
                                        {timeLeft.days === 0 && timeLeft.hours > 0 && (
                                            <p>
                                                {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                                            </p>
                                        )}
                                        <p className='text-greenText text-[14px] font-medium'>Hours</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <h2 className='text-greenText text-[32px] font-semibold'>{timeLeft.minutes}</h2>
                                        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes > 0 && (
                                            <p>
                                                {timeLeft.minutes}m {timeLeft.seconds}s
                                            </p>
                                        )}
                                        <p className='text-greenText text-[14px] font-medium'>Minutes</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <h2 className='text-greenText text-[32px] font-semibold'>{timeLeft.seconds}</h2>
                                        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && (
                                            <p>{timeLeft.seconds}s</p>
                                        )}
                                        <p className='text-greenText text-[14px] font-medium'>Seconds</p>
                                    </div>
                                    {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
                                        <p>Countdown expired!</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <img className='md:ml-auto mx-auto max-w-full' src="/hero.png" alt="" />

                    </div>
                </div>
            </div>

        </div>
    )
}
