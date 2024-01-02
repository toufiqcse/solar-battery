/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCheck } from 'react-icons/fa'
export default function Why() {
    return (
        <div className='max-w-6xl mx-auto px-3 md:px-0 my-[50px]'>
            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center'>
                <div>
                    <h2 className='text-primary text-[24px] font-semibold   mb-1'>Why join a group buy?</h2>
                    <div className='flex items-center justify-start mb-1'>
                        <img src="/check.png" className='mr-2' alt="" />
                        <p className='text-primary text-[16px] font-normal'>Registering is free and you get a no obligation estimate</p>
                    </div>
                    <div className='flex items-center justify-start mb-1'>
                        <img src="/check.png" className='mr-2' alt="" />
                        <p className='text-primary text-[16px] font-normal'> It takes 30 seconds to register</p>
                    </div>
                    <div className='flex items-center justify-start mb-1'>
                        <img src="/check.png" className='mr-2' alt="" />
                        <p className='text-primary text-[16px] font-normal'> It takes 30 seconds to register</p>
                    </div>
                    <div className='flex items-center justify-start mb-1'>
                        <img src="/check.png" className='mr-2' alt="" />
                        <p className='text-primary text-[16px] font-normal'> Installation done by our trusted and vetted installer</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <img src="/check.png" className='mr-2' alt="" />
                        <p className='text-primary text-[16px] font-normal'>4 years average payback period</p>
                    </div>
                </div>
                <img className='' src="/user.png" alt="" />
                <div className='flex flex-col justify-center md:justify-start'>
                    <h2 className='text-primary text-[32px] font-bold text-center md:text-left'>379 families</h2>
                    <p className='text-primary text-[14px] font-normal mb-2 text-center md:text-left'>have already registered to save on their bill. Join the today</p>
                    <button className='outline-none border-none cursor-pointer text-buttonText text-[18px] font-semibold rounded-full bg-button py-4 px-7 my-7 select-none'>Register today</button>
                </div>
            </div>
        </div>
    )
}
