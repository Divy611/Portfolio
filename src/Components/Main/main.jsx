import React from 'react'
import "../styles/Buttons.css"
import { motion, useScroll, useTransform } from 'framer-motion'

function Main() {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    return (
        <>
            <motion.div className="container px-12 py-28 mx-auto" style={{ y }}>
                <motion.div className="items-center lg:flex">
                    <motion.div className="w-full lg:w-1/2">
                        <motion.div className="lg:max-w-lg">
                            <motion.h1 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-3xl font-semibold text-white text-4xl lg:text-7xl">I'm Divy Parikh.
                                <br />
                            </motion.h1>
                            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }}>
                                <motion.span className="font-semibold text-blue-500 text-3xl lg:text-7xl" style={{ paddingTop: "15px" }}>A Full Stack Developer.</motion.span>
                            </motion.div>
                            <motion.p initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-3 text-white" style={{ paddingTop: "15px" }}>A full-stack developer, pursuing BTech in Electronics and Communications Engineering. Passionate about technology, entrepreneurship, sports, and music.
                                I constantly look forward to new opportunities to apply my skills and acquire new ones. I look forward to meeting new people, and learn something new everyday.
                            </motion.p>
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
        <></>
    )
}

export default Main