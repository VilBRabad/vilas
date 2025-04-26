"use client";

import Link from 'next/link'
import React from 'react'

const navItems = [
    {
        title: "About",
        href: "/"
    },
    {
        title: "Projects",
        href: "/"
    },
    {
        title: "Journey",
        href: "/"
    },
    {
        title: "Skills",
        href: "/"
    },
]

function HomeHeader() {
  return (
    <header className='w-full flex justify-end'>
        <nav className='h-[3.4rem] flex items-center px-7 pr-1 gap-8 my-3 bg-[#27272A] border border-[#464646] rounded-[14px] font-[family-name:var(--font-ubuntu-sans)]'>
            <h1 className='text-md font-bold cursor-pointer'>Vilas Rabad</h1>
            <ul className='flex'>
                {
                    navItems.map((item) => (
                        <li className='px-6 py-2 rounded-md hover:bg-[#464646]' key={item.title}>
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}

export default HomeHeader