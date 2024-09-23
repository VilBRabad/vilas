import React from 'react'
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

function Contact() {
  return (
    <div id='Contact' className='mt-[6rem] w-screen text-white bg-zinc-950 flex flex-col items-center overflow-x-hidden'>
        <div className='w-full flex items-center conta my-7 gap-8 max-sm:flex-wrap'>
          <div className='text-[3rem] sm:text-[6rem] whitespace-normal font-extrabold text-white/80 flex flex-col max-[455px]:flex-row max-[455px]:gap-6'>
              <p className='h-[4rem] sm:h-[6rem]'>LET'S</p>
              <p>MEET</p>
          </div>
          <div className='w-1 bg-white/50 h-[10rem] max-[455px]:hidden'/>
          <div>
            <p className='text-xl font-semibold'>Vilas B. Rabad</p>
            <p>Pune, India</p>
            <div className='flex gap-3'>
              <a href='https://www.linkedin.com/in/vilas-rabad-3a8081211' target='_blank' className='mt-4 bg-zinc-800 h-[3rem] w-[3rem] flex items-center justify-center rounded-full cursor-pointer transition hover:bg-[#0077B5]'>
                <BiLogoLinkedin size={24}/>
              </a>
              <a href='https://github.com/VilBRabad' target='_blank' className='mt-4 bg-zinc-800 h-[3rem] w-[3rem] flex items-center justify-center rounded-full cursor-pointer transition hover:bg-[#000000]'>
                <BiLogoGithub size={24}/>
              </a>
              <a href='https://www.instagram.com/vilbghost/' target='_blank' className='mt-4 bg-zinc-800 h-[3rem] w-[3rem] flex items-center justify-center rounded-full cursor-pointer transition hover:bg-[#E1306C]'>
                <BiLogoInstagram size={24}/>
              </a>
              <a href='mailto:rabadvilas11@gmail.com' target='_blank' className='mt-4 bg-zinc-800 h-[3rem] w-[3rem] flex items-center justify-center rounded-full cursor-pointer transition hover:bg-[#c71610]'>
                <GrMail size={22}/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact