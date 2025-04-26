import HomeHeader from '@/components/headers/home-header'
import React from 'react'

export default function HomeLayout({ children }) {
  return (
    <div className='home-container'>
        <div className='home-page'>
            <HomeHeader />
            {children}
        </div>
    </div>
  )
}