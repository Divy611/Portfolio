import React from 'react'
import "../styles/Buttons.css"
import "../Main/main.css"
import { motion, useScroll, useTransform } from 'framer-motion'

function Main() {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "145%"]);
    return (
        <>
            <motion.div className="container px-12 py-28 mx-auto" style={{ y }}>
                <motion.div className="items-center lg:flex">
                    <motion.div className="w-full lg:w-1/2">
                        <motion.div className="lg:max-w-lg">
                            {/* <motion.h1 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl lg:text-4xl font-semibold text-white">Hello There!</motion.h1> */}
                            <motion.h1 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-5xl lg:text-7xl font-semibold text-white">I'm Divy Parikh.
                                <br />
                            </motion.h1>
                            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }}>
                                <motion.span className="font-semibold text-blue-500 text-5xl lg:text-7xl" style={{ paddingTop: "15px" }}>A Full Stack Developer.</motion.span>
                            </motion.div>
                            {/* <motion.p initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-3 text-white" style={{ paddingTop: "15px" }}>A full-stack developer, pursuing BTech in Electronics and Communications Engineering. Passionate about technology, entrepreneurship, sports, and music.
                                I constantly look forward to new opportunities to apply my skills and acquire new ones. I look forward to meeting new people, and learn something new everyday.
                            </motion.p> */}
                            <ButtonRow />
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-3xl" src="" alt="" style={{ display: "none" }} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

function ButtonRow() {
    return (
        <>
            <div class="icons" style={{ paddingTop: "50px" }}>
                <a href="https://github.com/Divy611">
                    <div class="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-github"></span>
                    </div>
                    <div class="text">
                        GitHub
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/divyparikh611/">
                    <div class="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-linkedin-in"></span>
                    </div>
                    <div class="text">
                        LinkedIn
                    </div>
                </a>
                <a href="https://www.instagram.com/divy_parikh/">
                    <div class="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-instagram"></span>
                    </div>
                    <div class="text">
                        Instagram
                    </div>
                </a>
            </div>
        </>
    )
}

export default Main