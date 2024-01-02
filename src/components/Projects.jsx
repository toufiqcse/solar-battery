/* eslint-disable no-unused-vars */
import React from 'react'

export default function Projects() {
    return (
        <div className='max-w-6xl mx-auto px-3 md:px-0 my-10'>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-7 gap-y-4 md:gap-y-0'>
                <img src="/solar-bg.png" alt="" />
                <div className='flex items-start flex-col'>
                    <h3 className='text-primary md:text-[32px] text-[25px] font-semibold mb-3 text-center md:text-left'>Going solar is a sound and beneficial investment</h3>
                    <p className='text-[16px] text-center md:text-left text-primary text-normal mb-4 '>Lorsque vous entreprenez des travaux de rénovation énergétique dans votre maison ou votre appartement.

                    </p>
                    <p className='text-[16px] text-center md:text-left text-primary text-normal mb-4'>Vous devez en premier lieu prêter attention à la qualité de l’isolation thermique</p>
                    <button className='outline-none border-none cursor-pointer text-buttonText text-[18px] font-semibold rounded-full bg-button py-4 px-7  select-none mx-auto'>Unlock Your Offer</button>
                </div>
            </div>
            <div className='my-12'>
                <div className='flex justify-between gap-y-2 md:gap-y-0 flex-wrap sm:flex-nowrap items-center'>
                    <div className='flex items-center justify-start'>
                        <img src="/Frame.png" alt="" className='mr-3' />
                        <p>average payback period of 6 years</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <img src="/Frame-2.png" alt="" className='mr-3' />
                        <p>Installation will work
                            for more than 25 years</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <img src="/Frame-3.png" alt="" className='mr-3' />
                        <p>An average solar installation
                            is like planting 2,300 trees</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
