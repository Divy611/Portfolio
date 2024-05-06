import React from 'react'
import "../Main/main.css"
import "../styles/Buttons.css"
// import MyImage from "../assets/Me.jpg"
import { motion, useScroll, useTransform } from 'framer-motion'

function Main() {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
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
                        {/* <img
                            class="object-cover object-center rounded myImg" height='450px' width='450px' src={MyImage}
                            alt='' />
                            <img className="w-full h-full lg:max-w-3xl" src="" alt="" /> */}
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

function ButtonRow() {
    return (
        <>
            <div className="icons" style={{ paddingTop: "50px" }}>
                <motion.a initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} href="https://github.com/Divy611">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-github"></span>
                    </div>
                    <div className="text">GitHub</div>
                </motion.a>
                <motion.a initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.25 }} href="https://www.linkedin.com/in/divyparikh611/">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-linkedin-in"></span>
                    </div>
                    <div className="text">LinkedIn</div>
                </motion.a>
                <motion.a initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.45 }} href="https://www.instagram.com/divy_parikh/">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-instagram"></span>
                    </div>
                    <div className="text">Instagram</div>
                </motion.a>
            </div>
        </>
    )
}

export default Main