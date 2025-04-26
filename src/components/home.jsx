import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <section id='home' className='w-full h-[40rem] flex justify-between'>
        <div className='h-full w-[60%] flex flex-col justify-center font-[family-name:var(--font-ubuntu-sans)]'>
            <div className='h-[450px]'>
                <p className='text-[1.5rem]'>Hello there</p>
                <h2 className='text-[3.8rem] font-bold'>I am <span className='text-(--blue-color)'>web developer.</span></h2>
                <p className='text-(--gray-color) textmd w-[90%]'>This is <strong>Vilas Rabad</strong>, a student and web developer who loves turning ideas into beautiful, user-friendly websites. s turning ideas into beautiful, user-friendly websites. turning ideas into beautiful, user-friendly websites. s turning ideas into beautiful, user-friendly websites.</p>
                
            </div>
        </div>
        <div className='h-full flex items-center'>
            <Image 
                src={'/assets/images/photo.jpg'}
                width={400}
                height={400}
                alt='Vilas Rabad'
                className='rounded-[14px]'
            />
        </div>
    </section>
  )
}

export default Home