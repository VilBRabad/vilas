"use client"

import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";

function Experience() {
  return (
    <section className='py-10 w-full font-[family-name:var(--font-ubuntu-sans)] mb-16'>
        <div>
            <h2 className='text-4xl font-bold'>Education & Experience</h2>
            <span className='my-1 text-lg font-semibold text-(--blue-color)'>my life</span>
        </div>
        <div className='mt-10 w-full max-h-[30rem]'>
            <div className='w-full px-14 grid grid-cols-8'>
                <div className='relative'>
                    <p className='mt-[1px]'>20 Jan 2025</p>
                    <div className='absolute top-0 right-0 w-[2px] bg-gray-500 h-[200%]'/>
                    <div className='absolute top-1 -right-[9px] h-5 w-5 bg-(--blue-color) animate-ping rounded-full' />
                    <div className='absolute top-1 -right-[7px] h-4 w-4 bg-(--blue-color) rounded-full' />
                </div>
                <div className='col-span-7 pl-14 mt-[1px]'>
                    <h3 className='text-xl font-semibold text-white'>ReactJs inter at <span className="text-(--blue-color)">ConQt/Fyoocher</span></h3>
                    <p className='text-(--gray-color) text-[15px]'>26 Feb 2025 -- Present</p>
                    <p className='text-(--gray-color) text-[16px]'>Remote</p>
                    <div className="flex items-center gap-2 mt-2">
                        <IoCheckmarkOutline size={18}/>
                        <p className='text-(--gray-color) text-[15px]'>Worked on next.js web project as frontend developer.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoCheckmarkOutline size={18}/>
                        <p className='text-(--gray-color) text-[15px]'>Created user-friendly UI components.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoCheckmarkOutline size={18}/>
                        <p className='text-(--gray-color) text-[15px]'>Managed redux for API calling, form handling.</p>
                    </div>
                </div>

                <div className='relative mt-10'>
                    <p>26 Aug 2021</p>
                    {/* <div className='absolute top-0 right-0 w-[2px] bg-gray-500 h-[200%]'/> */}
                    <div className='absolute top-1 -right-[5px] h-3 w-3 bg-gray-400 rounded-full' />
                </div>
                <div className='col-span-6 pl-14 mt-10'>
                    <h3 className='text-xl font-semibold text-white'>Vishwakarma Institute of Information Technology (VIIT), Pune</h3>
                    <p className='text-(--gray-color) text-[15px]'>26 Aug 2021 -- Present</p>
                    <p className='text-(--gray-color) text-[16px]'>Pune</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience