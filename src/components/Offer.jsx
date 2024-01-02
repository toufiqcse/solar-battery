/* eslint-disable no-unused-vars */
import React from 'react'

export default function Offer() {
    return (
        <div className='bg-background'>
            <div className='max-w-6xl mx-auto px-3 md:px-0 py-10'>
                <div className='my-2 md:my-8'>
                    <h2 className='text-primary text-center md:text-[32px] text-[25px] font-semibold'>Discover our packages and offers</h2>
                    <p className='text-primary mx-auto  md:w-1/2 w-full md:text-center font-medium text-[16px] text-justify'>We offer solutions and packages for every household. Pick and customize your own offer to simulate your price.</p>
                </div>
                {/* card */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 md:gap-y-0 mx-auto '>
                    <div className='border border-[#CFD3DB] rounded-lg border-t-8 border-t-button md:pl-8 pl-2 md:pr-6 pr-2 pt-6 pb-9 bg-white'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-primary md:text-[24px] text-[20px] font-semibold '>Solar Panels</h2>
                            <img src="/trina.png" alt="" />
                        </div>
                        <div className='flex flex-col items-start'>
                            <div className='flex justify-start items-center mb-3 md:mb-1  w-full'>
                                <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#FAA51A" />
                                </svg></span>
                                <h3 className='text-primary text-[16px] '> <span className='font-bold'>420Wp Black Frame</span> panel with 21.8% efficiency</h3>
                            </div>
                            <div className='flex justify-start items-center mb-3 md:mb-1'>
                                <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#FAA51A" />
                                </svg></span>
                                <h3 className='text-primary text-[16px] '>Glass-foil panel with <span className='font-bold'> 30 years warranty</span></h3>
                            </div>
                            <div className='flex justify-start items-center mb-3 md:mb-1'>
                                <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#FAA51A" />
                                </svg></span>
                                <h3 className='text-primary text-[16px] '>N-type technology for <span className='font-bold'>better lifespan</span></h3>
                            </div>
                            {/* price */}
                            <div className='mt-7 mb-5 border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> 12 solar panels <span className='text-secondary'>{"(5040Wp)"}</span></p>
                                        <p className='text-primary text-[16px] font-bold'>$4.456</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> Ideal for 2-3 people </p>
                                        <p className='text-secondary text-[16px] font-normal'>was $6.230</p>
                                    </div>
                                </>
                            </div>
                            <div className=' mb-5 border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> 8 solar panels <span className='text-secondary'>{"(3360Wp)"}</span></p>
                                        <p className='text-primary text-[16px] font-bold'>$3.240</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> Ideal for 2 people </p>
                                        <p className='text-secondary text-[16px] font-normal'>was $5.230</p>
                                    </div>
                                </>
                            </div>
                            <div className=' mb-5 border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> 8 solar panels <span className='text-secondary'>{"(3360Wp)"}</span></p>
                                        <p className='text-primary text-[16px] font-bold'>$3.240</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> Ideal for 2 people </p>
                                        <p className='text-secondary text-[16px] font-normal'>was $5.230</p>
                                    </div>
                                </>
                            </div>
                            <div className=' border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> 20 solar panels <span className='text-secondary'>{"(8040Wp)"}</span></p>
                                        <p className='text-primary text-[16px] font-bold'>$7.576</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> Ideal for 4-6 people </p>
                                        <p className='text-secondary text-[16px] font-normal'>was $7.670</p>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#CFD3DB] rounded-lg border-t-8 border-t-greenText md:pl-8 pl-2 md:pr-6 pr-2 pt-6  pb-9 bg-white'>
                        <div className='flex justify-between items-center  mb-4'>
                            <h2 className='text-primary md:text-[24px] text-xl font-semibold '>Battery System <span className='text-[18px]'>{"(optional)"}</span></h2>
                            <img src="/trina.png" alt="" />
                        </div>
                        <div className='flex flex-col items-start '>
                            <div className='flex justify-start items-center mb-1'>
                                <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#FAA51A" />
                                </svg></span>
                                <h3 className='text-primary text-[16px] '> <span className='font-bold'>Smart monitoring</span> panel with 21.8% efficiency</h3>
                            </div>
                            <div className='flex justify-start items-center mb-1'>
                                <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#FAA51A" />
                                </svg></span>
                                <h3 className='text-primary text-[16px] '>Ideal for <span className='font-bold'> electric heating or EV</span></h3>
                            </div>
                            <div className='flex justify-start items-center mb-1'>
                                <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#FAA51A" />
                                </svg></span>
                                <h3 className='text-primary text-[16px] '>Reduce <span className='font-bold'>your energy bill further</span></h3>
                            </div>
                            {/* price */}
                            <div className='mt-7 mb-5 border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> No Battery selected </p>

                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> max 25% self-consumption </p>

                                    </div>
                                </>
                            </div>
                            <div className=' mb-5 border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> 5 kwh battery </p>
                                        <p className='text-primary text-[16px] font-bold'>$3.830</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> 30 to 50% self-consumption </p>
                                        <p className='text-secondary text-[16px] font-normal'>was $5.230</p>
                                    </div>
                                </>
                            </div>
                            <div className=' mb-5 border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> 10 kwh battery </p>
                                        <p className='text-primary text-[16px] font-bold'>$6.280</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> 40 to 60% self-consumption </p>
                                        <p className='text-secondary text-[16px] font-normal'>was $5.230</p>
                                    </div>
                                </>
                            </div>
                            <div className='  border border-[#CFD3DB] rounded-md md:px-5 px-2 py-3 w-full'>
                                <>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary text-[16px] font-bold'> 15 kwh battery </p>
                                        <p className='text-primary text-[16px] font-bold'>$9.686</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-secondary text-[16px] font-normal'> 50 to 60% self-consumption </p>
                                        <p className='text-secondary text-[16px] font-normal'>was $5.670</p>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
                {/* discount */}
                <div className='my-5 bg-green px-9 py-7 rounded-md'>
                    <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center'>
                        <p className='text-white text-[24px] font-semibold'>$4.066
                        </p>
                        <span className='text-white text-[16px] font-normal ml-3 mr-auto text-center mb-2 md:mb-0'>After <strong className='font-semibold'>24% discount </strong>applied. Get your offer free quote</span>
                        <button className='outline-none border-none text-buttonText font-semibold text-[18px] px-8 py-4 rounded-full bg-white'>Unlock your offer</button>
                    </div>

                </div>
                <p className='text-center text-primary text-[14px] font-normal'>(*) Price estimates based for an installation on a normal sloping roof.</p>
            </div>
        </div>
    )
}
