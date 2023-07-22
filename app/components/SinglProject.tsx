import React from "react"

import Image from "next/image"
import Link from "next/link"

import { MdOutlineOpenInNew } from "react-icons/md"
import { BsGithub } from "react-icons/bs"

const SinglProject = ({ id, img, title, desc, tech, live_link, github_link, reverce }: projectCard) => {
    return (
        <div id={id.toString()} className={`border-[1px] border-gray-600 flex ${reverce ? "flex-row-reverse" : ""} p-5 rounded-lg gap-x-5 w-[1000px]`}>
            <Image className="rounded-lg" src={img} alt={title} width={500} height={500} />
            <div className="flex flex-col gap-y-5 justify-around items-center w-full">
                <h2 className="uppercase text-2xl font-semibold">{title}</h2>
                <p className="text-gray-400 text-center">{desc}</p>
                <div className="flex gap-x-5">
                    {tech.map((tech ,i) => (
                        <div key={i} className="py-1 px-4 bg-white text-black rounded">{tech}</div>
                    ))}
                </div>
                <div className="gap-8 flex text-xl">
                    <Link className="flex items-center gap-2" href={live_link} target="_blank">
                        <MdOutlineOpenInNew /> Live Demo
                    </Link>
                    <Link className="flex items-center gap-2" href={github_link} target="_blank">
                        <BsGithub /> Code
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SinglProject