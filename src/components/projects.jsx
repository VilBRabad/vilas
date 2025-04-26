"use client";

import Image from "next/image";
import ProjectCard from "./ui/project-card";

const projectData = [
    {
        img: "/assets/images/project2.png",
        title: "VidStream",
        description: "Platform to search movies, filters with different different genres.",
        date: "20 Jan 2024"
    },
    {
        img: "/assets/images/project3.png",
        title: "Twitter clone",
        description: "Fully functional clone of twitter, build through course.",
        date: "20 Jan 2024"
    },
    {
        img: "/assets/images/project4.png",
        title: "Donate.me",
        description: "Blood bank system, using python and reactjs.",
        date: "20 Jan 2024"
    },
    {
        img: "/assets/images/project5.png",
        title: "Big-mart sales visualizer",
        description: "Sales visualizer using advanced python libraries.",
        date: "20 Jan 2024"
    },
]

function Projects() {
  return (
    <section id='projects' className='w-full py-4 font-[family-name:var(--font-ubuntu-sans)] mb-14'>
        <div>
            <h2 className='text-4xl font-bold'>Projects</h2>
            <span className='my-1 text-lg font-semibold text-(--blue-color)'>A few things I've built</span>
        </div>
        <div className="flex gap-4 w-full mt-10">
            <div className="w-[37%] max-h[90vh] h-[50rem] flex justify-center items-center bg-[#818181]/30 rounded-[14px]">
                <Image
                    src={'/assets/images/project1.png'}
                    width={360}
                    height={500}
                    alt="ventures"
                    className="h-[95%] w-auto"
                />
            </div>
            <div className="max-h[90vh] h-[50rem] grid gap-4 grid-cols-2 grid-rows-2 w-[63%]">
                {
                    projectData.map((project) => (
                        <ProjectCard data={project} key={project.title}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Projects