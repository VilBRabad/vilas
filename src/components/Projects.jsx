import React, { useState } from 'react'
import { RxExternalLink } from "react-icons/rx";
import frame from "/assets/mac_layout.png";
import { useNavigate } from 'react-router-dom';
import { project_data } from "../data/data.js";
import { motion } from 'framer-motion';
import ImageWithLoading from './ImageWithLoading.jsx';

function Projects() {
    // const [isLoading1, setLoading1] = useState(true);
    const [areVisible, setVisible] = useState(false);

    const navigate = useNavigate();
    const toProjectDetails = (id) => {
        navigate(`/project?title=${id}`);
    }

    return (
        <div id='Projects' className='relative w-screen min-ht text-white flex flex-col items-center gap-8 mb-4'>
            <div className="relative main-container1 p-2 flex flex-col items-center justify-center rounded-xl md:rounded-[1.8rem] overflow-hidden bg-gradient-to-r from-zinc-500/50 via-white/50 transition-all duration-500 delay-500 hover:via-white hover:to-zinc-500/50 to-zinc-500/50 z-20">
                <div className='absolute w-[99.4%] h-[99.7%] lg:h-[99%] bg-[#000A25] rounded-xl md:rounded-[1.7rem]'></div>
                <div className='absolute w-[99.4%] h-[99.7%] lg:h-[99%] color-changer rounded-xl md:rounded-[1.7rem]'></div>
                <div className='relative w-full flex max-lg:flex-col items-center lg:h-[45rem] xl:h-[40rem] gap-5 lg:pl-10 md:py-7 pt-7 pb-2'>
                    <div className='relative lg:h-full flex items-center justify-center h-[30rem] md:h-[40rem] w-auto lg:w-[35%]'>
                        <img src="/assets/mobile_frame.svg" alt="" className='absolute w-[30rem] h-[97.5%] z-20' />
                        <video
                            src="https://res.cloudinary.com/dr91ybej4/video/upload/f_auto:video,q_auto/ad9f2f608c52263e1a095d140ee75890"
                            onLoadedData={() => setLoading1(false)}
                            onError={() => console.error("Video failed to load")}
                            className="relative h-[95%] w-[28rem] z-10"
                            autoPlay
                            muted
                            loop
                            type="video/webm"
                        />
                        {/* {
                            isLoading1 && (
                                <div
                                    className="relative h-[95%] w-[28rem] z-10 bg-gray-300 animate-pulse rounded"
                                    aria-busy="true"
                                    aria-hidden="true"
                                />
                            )
                        } */}

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
            <div className="relative main-container2 cursor-pointer p-2 flex flex-col items-center justify-center rounded-xl md:rounded-[1.8rem] overflow-hidden bg-gradient-to-r from-zinc-500/50 via-white/50 transition-all duration-500 delay-500 hover:via-white hover:to-zinc-500/50 to-zinc-500/50 z-20">
                <div className='absolute w-[99.4%] h-[99%] bg-[#000A25] rounded-xl md:rounded-[1.7rem]'></div>
                <div className='absolute w-[99.4%] h-[99%] color-changer rounded-xl md:rounded-[1.7rem]'></div>
                <div onClick={() => toProjectDetails("vidstream")} className='relative w-full flex flex-col items-center'>
                    <div className='h-[5rem] w-full pl-4 md:pl-14'>
                        <h2 className='mt-4 text-2xl font-bold'>{project_data['vidstream'].title}</h2>
                        <p className='text-zinc-300'>{project_data['vidstream'].sort_hand} - {project_data['vidstream'].date}</p>
                    </div>
                    <div className='relative translate-y-1 mt-16 lg:mt-4 flex flex-col items-center justify-end lg:h-[38rem] h-auto w-[90%] lg:w-auto w-fit'>
                        <img src={frame} className='absolute lg:h-[38.6rem] w-[91%] lg:w-[100%]  -bottom-2 z-20' alt="" />
                        <video
                            src={project_data['vidstream'].cover_video}
                            onError={() => console.error("Video failed to load")}
                            className="relative lg:h-[34rem] w-[90%] lg:w-[98.7%] transition duration-150 z-10"
                            autoPlay
                            muted
                            loop
                            type="video/webm"
                        />
                    </div>
                </div>
            </div>
            <div className={`relative other-project-container flex gap-3 ${areVisible ? "h-auto" : "max-md:h-[10rem] overflow-hidden"} max-[1136px]:justify-center justify-between flex-wrap`}>
                <ImageWithLoading
                    navigateToDetails={() => toProjectDetails("twitter-clone")}
                    proj={project_data["twitter-clone"]}
                    areVisible={areVisible}
                />
                <ImageWithLoading
                    navigateToDetails={() => toProjectDetails("donate-me")}
                    proj={project_data["donate-me"]}
                    areVisible={areVisible}
                />
                <ImageWithLoading
                    navigateToDetails={() => toProjectDetails("big-mart-sales-visualizer")}
                    proj={project_data["big-mart-sales-visualizer"]}
                    areVisible={areVisible}
                />
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