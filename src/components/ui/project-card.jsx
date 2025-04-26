import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function ProjectCard({ data }) {
  return (
    <div className="bg-[#818181]/30 rounded-[14px] overflow-hidden">
        <Image
            src={data.img}
            height={50}
            width={600}
            alt="vidstream"
            className="w-full"
        />
        <div className="p-6 flex flex-col justify-between h-[46%]">
            <div>
                <h2 className="text-white text-xl font-bold">{data.title}</h2>
                <p className="text-(--gray-color) mt-2 text-normal">{data.description}</p>
            </div>
            <div className="flex justify-between w-full items-center">
                <p className="text-(--gray-color) opacity-80 text-sm">{data.date}</p>
                <div className="p-1 bg-black rounded-full">
                    <FaGithub size={25}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard