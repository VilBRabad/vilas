import React, { Suspense } from 'react'
import { RxExternalLink } from "react-icons/rx";
import frame from "/assets/mac_layout.png";
import { useNavigate } from 'react-router-dom';
import { project_data } from "../data/data.js";
import { motion } from 'framer-motion';

function Projects() {
    const navigate = useNavigate();
    const toProjectDetails = (id) => {
        navigate(`/project?id=${id}`);
    }

    return (
        <div id='Projects' className='relative w-screen min-h-screen text-white flex flex-col items-center gap-8 mb-4'>
            <div className="relative main-container p-2 flex flex-col items-center justify-center rounded-xl md:rounded-[1.8rem] overflow-hidden bg-gradient-to-r from-zinc-500/50 via-white/50 transition-all duration-500 delay-500 hover:via-white hover:to-zinc-500/50 to-zinc-500/50 z-20">
                <div className='absolute w-[99.4%] h-[99%] bg-[#000A25] rounded-xl md:rounded-[1.7rem]'></div>
                <div className='absolute w-[99.4%] h-[99%] color-changer rounded-xl md:rounded-[1.7rem]'></div>
                <div onClick={() => toProjectDetails(1)} className='relative w-full flex flex-col items-center'>
                    <div className='h-[5rem] w-full pl-14'>
                        <h2 className='mt-4 text-2xl font-bold'>{project_data[0].title}</h2>
                        <p className='text-zinc-300'>{project_data[0].sort_hand} - {project_data[0].date}</p>
                    </div>
                    <div className='relative translate-y-1 mt-16 lg:mt-4 flex flex-col items-center justify-end lg:h-[38rem] h-auto w-[90%] lg:w-auto w-fit'>
                        <img src={frame} className='absolute lg:h-[38.6rem] w-[91%] lg:w-[100%]  -bottom-2 z-20' alt="" />
                        <video src={project_data[0].cover_video} className='relative lg:h-[34rem] w-[90%] lg:w-[98.7%] z-10' autoPlay muted loop type="video/webm" />
                    </div>
                </div>
            </div>
            <div className='relative other-project-container flex gap-3 max-[1136px]:justify-center justify-between flex-wrap'>
                {
                    project_data.slice(1).map((proj, ind) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => toProjectDetails(ind + 2)} key={proj.id} className='card cursor-pointer relative h-auto w-[22rem] p-[1px] overflow-hidden flex items-center justify-center rounded-xl bg-gradient-to-r from-zinc-500 via-zinc-500 hover:via-white to-zinc-500 hover:to-zinc-500'>
                            <div className="absolute bg-[#000A25] h-[99%] w-[99%] rounded-[0.7rem]" />
                            <div className="absolute color-change h-[99%] w-[99%] rounded-[0.7rem]" />
                            <div className='relative overflow-hidden flex flex-col items-center'>
                                <div className='relative flex mt-7 justify-center'>
                                    <img src={proj.cover_video} alt="" className=' w-[90%] transtion duration-150' />
                                    <div className="absolute -bottom-1 h-[3rem] w-[99.5%] bg-gradient-to-b from-black/0 to-black" />
                                </div>
                                <div className='min-h-[11.5rem] w-[99.5%] bg-zinc-800 p-3 rounded-b-[0.7rem]'>
                                    <p className='text-lg font-semibold'>{proj.title}</p>
                                    <p className='text-zinc-400'>{proj.sort_hand} -  {proj.date}</p>
                                    <div className='flex gap-2 flex-wrap mt-1'>
                                        {
                                            proj.tools.map((tool, ind) => (
                                                <p key={ind} className='px-4 py-1 bg-zinc-500/40 rounded-full text-sm'>{tool}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: true }}
                href='https://github.com/VilBRabad?tab=repositories' target='_blank' className='text-lg font-semibold px-8 py-4 bg-gradient-to-br from-indigo-950 to-blue-950/20 rounded-full flex items-center gap-2 transition shadow-xl'>More on GitHub <RxExternalLink />
            </motion.a>
        </div>
    )
}

export default Projects