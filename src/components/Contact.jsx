import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='w-screen min-h-screen text-white flex flex-col items-center overflow-x-hidden'>
        <div className='mt-[6rem] h-full w-full flex flex-col items-center'>
            <div className='w-full flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>CONTACT</h1>
            </div>
            <div className='conatai flex flex-col gap-6 items-center mt-[7rem]'>
                <form className='contact-width flex flex-col items-center gap-4'>
                  <input type="text" placeholder='Enter name' className='h-[2.8rem] w-full px-4 outline-0 bg-slate-800'/>
                  <input type="email" placeholder='Enter email' className='h-[2.8rem] w-full px-4 outline-0 bg-slate-800'/>
                  <textarea name="message" placeholder='Type message' className='w-full outline-0 bg-slate-800 p-4 h-[12rem]' id=""></textarea>
                  <button type="submit" className='bg-violet-900 py-3 w-full text-lg font-semibold'>SEND</button>
                </form>
                <p className='text-lg'>OR</p>
                <div className='relative bg-gradient-to-br flex justify-between items-center from-white to-zinc-500 rounded-lg h-[8rem] contact-width text-black px-4 [417px]:px-8'>
                  <div>
                    <p className='text-lg'>Vilas Rabad</p>
                    <p className='text-lg'>Mobile No.: +91 7387410172</p> 
                    <p className='text-lg'>Email id: rabadvilas11@gmail.com</p>
                  </div>
                  <div className='mr-6 h-full flex items-center justify-center'>
                    <p className='-rotate-90 font-bold text-xl'>CARD</p>
                  </div>
                  <div className='absolute h-full right-8 flex gap-1'>
                    <div className='h-full w-[0.5rem] bg-green-800'/>
                    <div className='h-full w-[0.5rem] bg-orange-800'/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact