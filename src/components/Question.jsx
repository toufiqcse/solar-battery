/* eslint-disable no-unused-vars */
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
export default function Question() {
    return (
        <div className='w-full bg-background py-12'>
            <div className='max-w-6xl mx-auto px-3 md:px-0'>
                <h2 className='text-primary md:text-[32px] text-[25px] font-semibold mb-3'>Frequently Asked Questions</h2>
                {/* question */}
                <div className='bg-white border border-[#CFD3DB] px-7 py-5 rounded-xl cursor-pointer select-none mb-6'>
                    <div className='flex justify-between items-center '>
                        <p className='text-primary md:text-[18px] md:font-semibold font-medium'>How can i offer a such a low price</p>
                        <button><img src="/arrow-down.png" alt="" /></button>
                    </div>
                </div>
                <div className='bg-white border border-[#CFD3DB] px-7 py-5 rounded-xl cursor-pointer select-none mb-6'>
                    <div className='flex justify-between items-center mb-2'>
                        <p className='text-primary md:text-[18px] md:font-semibold font-medium'>How can i offer a such a low price</p>
                        <button><img src="/arrow.png" alt="" /></button>
                    </div>
                    <p className='text-primary text-[14px] font-normal '>Lorsque vous entreprenez des travaux de rénovation énergétique dans votre maison ou votre appartement. Vous devez en premier lieu prêter attention à la qualité de l’isolation thermique. Vous devez en premier lieu prêter attention à la qualité de l’isolation thermique. Lorsque vous entreprenez des travaux de rénovation.</p>
                </div>
                <div className='bg-white border border-[#CFD3DB] px-7 py-5 rounded-xl cursor-pointer select-none mb-6'>
                    <div className='flex justify-between items-center '>
                        <p className='text-primary md:text-[18px] md:font-semibold font-medium'>What happens after I register?</p>
                        <button><img src="/arrow-down.png" alt="" /></button>
                    </div>
                </div>
                <div className='bg-white border border-[#CFD3DB] px-7 py-5 rounded-xl cursor-pointer select-none mb-6'>
                    <div className='flex justify-between items-center '>
                        <p className='text-primary md:text-[18px] md:font-semibold font-medium'>What materials are used for solar panels and inverter?</p>
                        <button><img src="/arrow-down.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
