/* eslint-disable no-unused-vars */
import React from 'react'
import { FaStar } from 'react-icons/fa'
export default function Review() {
    return (
        <div className='max-w-6xl mx-auto px-3 md:px-0 my-14'>
            <div className='rounded-xl border border-[#CFD3DB]'>
                <div className='  flex flex-col justify-center items-center'>
                    <div className=' mb-5 rounded-tr-xl rounded-tl-xl w-full review-bg md:h-[230px] h-[200px]'>
                        <h1 className='text-white md:text-[32px] text-[26px] font-semibold text-center md:my-8 my-4'>Trusted and vetted installation partner </h1>
                    </div>
                    <div className='  bg-white md:py-9 py-5 px-1 md:px-0  mt-[-90px] md:mt-[-136px] z-10 md:mx-auto rounded-xl shadow-2xl md:w-1/3 w-[85%] mx-4   '>
                        <div className='flex justify-start items-center'>
                            <div className='  bg-[#23644E] py-3 rounded-xl flex flex-col items-center justify-center md:ml-[-90px] ml-[-20px]  md:px-4 px-1'>
                                <p className='text-white text-[12px] font-normal leading-5'>43 reviews</p>
                                <p className='text-white font-semibold md:text-[42px] my-2 text-[25px]'>4.7</p>
                                <div className='flex text-white md:text-2xl text-xl md:px-4'><span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center md:ml-6 ml-2  '>
                                <img src="/group.png" alt="" />
                                <div className='mt-4'>
                                    <p className='mb-1 text-primary text-[14px] md:text-[16px] font-normal'><strong>4.9</strong> Service and quality</p>
                                    <p className='mb-1 text-primary text-[14px] md:text-[16px]  font-normal'><strong>4.7</strong> Installation and technique</p>
                                    <p className='mb-1 text-primary text-[14px]  md:text-[16px] font-normal'><strong>4.8</strong> Pricing and quote</p>
                                    <p className='mb-1 text-primary text-[14px] md:text-[16px]  font-normal'><strong>4.8</strong> Responsive time</p>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='mt-4 md:mt-0 px-10 pb-9'>
                    <div className='mb-4'>
                        <h3 className='text-primary text-[18px] font-semibold mb-1'>About NOVA Energy</h3>
                        <p className='text-primary text-[16px] font-normal'>Lorsque vous entreprenez des travaux de rénovation énergétique dans votre maison ou votre appartement. Vous devez en premier lieu prêter attention à la qualité de l’isolation thermique</p>
                    </div>
                    <div className=''>
                        <h3 className='text-primary text-[18px] font-semibold mb-1'> Why NOVA Energy </h3>
                        <p className='text-primary text-[16px] font-normal'>Lorsque vous entreprenez des travaux de rénovation énergétique dans votre maison ou votre appartement. Vous devez en premier lieu prêter attention à la qualité de l’isolation thermique</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
