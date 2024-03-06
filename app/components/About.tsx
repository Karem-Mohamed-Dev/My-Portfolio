import Image from "next/image"
import React from "react"

import img from "@/public/me.jpg"

const About = () => {
    return (
        <section id="about" className="border-b-[1px] border-gray-600">
            <div className="min-h-screen py-28 px-5 container mx-auto flex flex-col items-center justify-around">
                <h2 className="text-4xl font-bold mb-20 underline underline-offset-8 decoration-4 decoration-main">About Me</h2>
                <div className="flex flex-col xl:flex-row xl:items-center gap-x-5">
                    <div className="flex justify-center">
                        <Image className="w-[100%] h-fit max-w-[500px]" src={img} alt="Karim" />
                    </div>
                    <div className="p-5 max-w-[700px]">
                        <p>Hi there! I'm Karim,</p>
                        <p>a MERN stack developer passionate about crafting exceptional web experiences.</p>

                        <br />

                        <p>- With a foundation built on HTML, CSS (including Sass and Tailwind for that extra flair),
                            and JavaScript (including TypeScript for added robustness).</p>
                        <p>I've delved into the world of modern web development with technologies like React.js and Next.js to create dynamic and responsive user interfaces.</p>

                        <br />

                        <p>- My journey into the realm of full-stack development led me to explore the backend with Node.js and Express.js, where I've honed my skills in building scalable and efficient server-side applications.</p>
                        <p>- MongoDB has been my go-to database solution, allowing me to seamlessly integrate data storage into my projects.</p>
                        <p>- Driven by a relentless curiosity and a love for solving complex problems,
                            I thrive in collaborative environments where I can leverage my skills to turn ideas into reality.</p>
                        <p>- Whether it's building a sleek frontend design, architecting a robust backend system, or optimizing performance for seamless user experiences, I'm always eager to tackle new challenges head-on.</p>
                        <p>- When I'm not coding, you can find me exploring the latest trends in web development,

                            experimenting with new technologies, or simply enjoying a good cup of coffee while brainstorming my next project.</p>
                        <p>- Let's connect and explore how we can bring your ideas to life together!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
