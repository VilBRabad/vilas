import React, { useState } from 'react'
import { RxExternalLink } from "react-icons/rx";
import frame from "/assets/mac_layout.png";
import { useNavigate } from 'react-router-dom';
import { project_data } from "../data/data.js";
import { motion } from 'framer-motion';
import { SyncLoader } from "react-spinners";

function Projects() {
    const [isLoading, setLoading] = useState(true);
    const [areVisible, setVisible] = useState(false);

    const navigate = useNavigate();
    const toProjectDetails = (id) => {
        navigate(`/project?id=${id}`);
    }

    return (
        <div id='Projects' className='relative w-screen min-h-screen text-white flex flex-col items-center gap-8 mb-4'>
            <div className="relative main-container1 p-2 flex flex-col items-center justify-center rounded-xl md:rounded-[1.8rem] overflow-hidden bg-gradient-to-r from-zinc-500/50 via-white/50 transition-all duration-500 delay-500 hover:via-white hover:to-zinc-500/50 to-zinc-500/50 z-20">
                <div className='absolute w-[99.4%] h-[99.7%] lg:h-[99%] bg-[#000A25] rounded-xl md:rounded-[1.7rem]'></div>
                <div className='absolute w-[99.4%] h-[99.7%] lg:h-[99%] color-changer rounded-xl md:rounded-[1.7rem]'></div>
                <div className='relative w-full flex max-lg:flex-col items-center lg:h-[45rem] xl:h-[40rem] gap-5 lg:pl-10 md:py-7 pt-7 pb-2'>
                    <div className='relative lg:h-full flex items-center justify-center h-[30rem] md:h-[40rem] w-auto lg:w-[35%]'>
                        <img src="/assets/mobile_frame.svg" alt="" className='absolute w-[30rem] h-[97.5%] z-20' />
                        <video src="https://res.cloudinary.com/dr91ybej4/video/upload/f_auto:video,q_auto/ad9f2f608c52263e1a095d140ee75890" className='relative h-[95%] w-[28rem] z-10' autoPlay muted loop type="video/webm" />
                    </div>
                    <div className='h-full p-5 lg:w-[60%]'>
                        <h1 className='text-2xl font-bold'>Ventures</h1>
                        <p className='text-zinc-300 max-md:text-sm'>Mobile application to find companies to invest - Nov 2024</p>
                        <div className='mt-8'>
                            <h2 className='text-md md:text-lg font-semibold'>Description</h2>
                            <div className='max-md:text-sm md:ml-4 mt-2'>
                                <p>
                                    Our mobile application connects investors with startups by providing a dynamic platform for discovery, interaction. Investors can register, create profiles and search for startups using advanced filters. It offers investor-startup pairing through a machine learning algorithm, ensuring matches based on factors like focus, geographic preferences, history and savelist.
                                </p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h2 className='text-md md:text-lg font-semibold'>Features</h2>
                            <div className='max-md:text-sm md:ml-4 mt-2'>
                                <p>1. ML based personilized reccommendations system.</p>
                                <p>2. Search and Filter functionalities.</p>
                                <p>3. Savelist and History capturing functionalities.</p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h2 className='text-md md:text-lg font-semibold'>Techstactks</h2>
                            <div className='md:ml-4 mt-2 flex gap-2 flex-wrap text-sm'>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>React Native</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>Typescript</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>Redux</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>Tanstack Query (React Query)</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>Node Js</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>Flask</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>Python</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>MongoDB</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>Docker</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>AWS ECR</p>
                                </div>
                                <div className='px-4 py-1 bg-zinc-500/40 rounded-full'>
                                    <p>AWS Lambda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative main-container2 p-2 flex flex-col items-center justify-center rounded-xl md:rounded-[1.8rem] overflow-hidden bg-gradient-to-r from-zinc-500/50 via-white/50 transition-all duration-500 delay-500 hover:via-white hover:to-zinc-500/50 to-zinc-500/50 z-20">
                <div className='absolute w-[99.4%] h-[99%] bg-[#000A25] rounded-xl md:rounded-[1.7rem]'></div>
                <div className='absolute w-[99.4%] h-[99%] color-changer rounded-xl md:rounded-[1.7rem]'></div>
                <div onClick={() => toProjectDetails(1)} className='relative w-full flex flex-col items-center'>
                    <div className='h-[5rem] w-full pl-4 md:pl-14'>
                        <h2 className='mt-4 text-2xl font-bold'>{project_data[0].title}</h2>
                        <p className='text-zinc-300'>{project_data[0].sort_hand} - {project_data[0].date}</p>
                    </div>
                    <div className='relative translate-y-1 mt-16 lg:mt-4 flex flex-col items-center justify-end lg:h-[38rem] h-auto w-[90%] lg:w-auto w-fit'>
                        <img src={frame} className='absolute lg:h-[38.6rem] w-[91%] lg:w-[100%]  -bottom-2 z-20' alt="" />
                        {
                            isLoading &&
                            <div className='relative lg:h-[34rem] w-[90%] lg:w-[98.7%] z-10 bg-gray-600/40 flex items-center justify-center'>
                                <SyncLoader size={8} color="#758694" />
                            </div>
                        }
                        <video src={project_data[0].cover_video} onLoadedData={() => setLoading(false)} className='relative lg:h-[34rem] w-[90%] lg:w-[98.7%] z-10' autoPlay muted loop type="video/webm" />
                    </div>
                </div>
            </div>
            <div className={`relative other-project-container flex gap-3 ${areVisible ? "h-auto" : "max-md:h-[10rem] overflow-hidden"} max-[1136px]:justify-center justify-between flex-wrap`}>
                {
                    project_data.slice(1).map((proj, ind) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => toProjectDetails(ind + 2)} key={proj.id} className={`${(ind > 0 && !areVisible) ? "max-md:hidden" : "flex"} md:flex card cursor-pointer relative h-auto w-[22rem] p-[1px] overflow-hidden items-center justify-center rounded-xl bg-gradient-to-r from-zinc-500 via-zinc-500 hover:via-white to-zinc-500 hover:to-zinc-500`}>
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
                <div onClick={() => setVisible(pre => !pre)} className={`absolute ${areVisible ? "hidden" : "block"} md:hidden bg-gradient-to-b from-[#000A25]/0 via-[#000A25]/50 to-[#000A25] h-[6rem] w-full bottom-0 flex items-center justify-center pt-12 font-bold`}>
                    <div className='px-8 py-2 bg-gradient-to-br from-indigo-950 to-blue-950/40 shadow-xl rounded-full'>
                        <p>More</p>
                    </div>
                </div>
            </div>
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: true }}
                href='https://github.com/VilBRabad?tab=repositories' target='_blank' className={`${areVisible ? "flex" : "max-md:hidden"} md:text-lg font-semibold px-8 py-4 bg-gradient-to-br from-indigo-950 to-blue-950/20 rounded-full flex items-center gap-2 transition shadow-xl`}>More on GitHub <RxExternalLink />
            </motion.a>
        </div>
    )
}

export default Projects