import React from "react"
import Link from "next/link"

import { IoDocumentTextOutline } from "react-icons/io5";
import { BsGithub } from "react-icons/bs"

const BackProject = ({ id, title, desc, documintation, github_link, tech }: BackEndData) => {
    return (
        <div id={id.toString()} className={`p-5 border flex flex-col lg:flex-row`}>
            <div className="flex flex-col justify-center gap-5 lg:max-w-[300px]">
                <p className="text-xl font-semibold text-center">{title}</p>
                <div className="flex flex-wrap justify-center gap-5">
                    {tech.map((ele, i) => <div key={i} className="py-1 px-4 bg-white text-black rounded w-fit">{ele}</div>)}
                </div>
                <div className="hidden justify-around items-center text-lg lg:flex">
                    {documintation && (
                        <Link className="flex items-center gap-2" href={documintation} target="_blank">
                            <IoDocumentTextOutline /> Documentation
                        </Link>
                    )}
                    {github_link && (
                        <Link className="flex items-center gap-2" href={github_link} target="_blank">
                            <BsGithub /> Code
                        </Link>
                    )}
                </div>
            </div>
            <p className="p-5 max-w-[500px]">{desc}</p>
            <div className="flex lg:hidden justify-around items-center text-lg">
                    {documintation && (
                        <Link className="flex items-center gap-2" href={documintation} target="_blank">
                            <IoDocumentTextOutline /> Documentation
                        </Link>
                    )}
                    {github_link && (
                        <Link className="flex items-center gap-2" href={github_link} target="_blank">
                            <BsGithub /> Code
                        </Link>
                    )}
                </div>
        </div>
    )
}

export default BackProject
