"use client";

import Image from 'next/image'

function Home() {
  return (
    <section id='home' className='w-full max-[900px]:mb-16 max-[900px]:h-auto h-[40rem] flex max-[900px]:flex-col justify-between'>
        <div className='h-full max-[900px]:w-full w-[60%] flex flex-col justify-center font-[family-name:var(--font-ubuntu-sans)]'>
            <div className='max-[900px]:py-16 max-[900px]:h-auto h-[450px]'>
                <p className='text-[1.5rem]'>Hello there</p>
                <h2 className='text-[3rem] lg:text-[3.5rem] xl:text-[3.8rem] font-bold'>I am <span className='text-(--blue-color)'>web developer.</span></h2>
                <p className='text-(--gray-color) textmd w-[90%]'>This is <strong>Vilas Rabad</strong>, a student and web developer who loves turning ideas into beautiful, user-friendly websites. s turning ideas into beautiful, user-friendly websites. turning ideas into beautiful, user-friendly websites. s turning ideas into beautiful, user-friendly websites.</p>
                <button onClick={() => window.open("https://github.com/VilBRabad")} className='cursor-pointer mt-8 h-[3rem] w-[9rem] text-black bg-(--blue-color) font-bold rounded-[10px]'>
                    Visit GitHub
                </button>
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