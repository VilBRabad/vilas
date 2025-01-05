import React from 'react'
import { motion } from 'framer-motion'

function ImageWithLoading({ navigateToDetails, proj, areVisible }) {
    // const [isLoading, setLoading] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={navigateToDetails}
            className={`${(proj.id > 2 && !areVisible) ? "max-md:hidden" : "flex"} md:flex card cursor-pointer relative h-auto w-[22rem] p-[1px] overflow-hidden items-center justify-center rounded-xl bg-gradient-to-r from-zinc-500 via-zinc-500 hover:via-white to-zinc-500 hover:to-zinc-500`}>
            <div className="absolute bg-[#000A25] h-[99%] w-[99%] rounded-[0.7rem]" />
            <div className="absolute color-change h-[99%] w-[99%] rounded-[0.7rem]" />
            <div className='relative overflow-hidden flex flex-col justify-between items-center'>
                <div className='relative flex mt-7 justify-center'>
                    {/* {isLoading && <div className="w-[90%] h-[200px] bg-gray-300 animate-pulse rounded"></div>} */}
                    <img src={proj.cover_video} onLoad={() => setLoading(false)} on alt="" className=' w-[90%] transtion duration-150' />
                    <div className="absolute -bottom-1 h-[3rem] w-[99.5%] bg-gradient-to-b from-black/0 to-black" />
                </div>
                <div className='min-h-[11.5rem] w-[99.5%] bg-zinc-800 p-3 rounded-b-[0.7rem]'>
                    <p className='text-lg font-semibold'>{proj.title}</p>
                    <p className='text-zinc-400'>{proj.sort_hand} -  {proj.date}</p>
                    <div className='flex gap-2 flex-wrap mt-1'>
                        {
                            proj.tools.map((tool, i) => (
                                <p key={i} className='px-4 py-1 bg-zinc-500/40 rounded-full text-sm'>{tool}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ImageWithLoading