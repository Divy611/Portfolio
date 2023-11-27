import React from 'react'
import { motion } from 'framer-motion'
import Image from "../assets/Divy.jpeg"

function About() {
    return (
        <>
            <section class="body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="" src={Image} width={"720px"} style={{ display: "none" }} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <motion.h1 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} class="title-font text-3xl lg:text-5xl mb-4 text-white font-semibold" style={{ fontFamily: "Poppins" }}>About Me</motion.h1>
                        <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.3 }} class="mb-8 leading-relaxed text-gray-300 text-l lg:text-xl py-4" style={{ fontFamily: "Poppins" }}>A full-stack developer, pursuing BTech in Electronics and Communications <br />Engineering from Manipal University Jaipur. Passionate about technology, entrepreneurship, sports, and music.
                            I constantly look forward to new opportunities<br /> to apply my skills and acquire new ones. I look forward to meeting new people, and<br /> learn something new everyday.</motion.p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About