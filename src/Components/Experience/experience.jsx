import React from 'react'
import "../Experience/experience.css"
import Image from "../assets/logo.jpg"
import Image1 from "../assets/3pillarglobal.png"
import Image2 from "../assets/knotters.png"
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Experience() {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    document.addEventListener('DOMContentLoaded', () => {
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => {
            step.addEventListener('click', () => {
                steps.forEach(s => s.classList.remove('active'));
                step.classList.add('active');
            });
        });
    });
    return (
        <>
            <section className="phone flex flex-row justify-between items-center text-start experience" style={{ paddingInline: "30px", paddingTop: "50px" }}>
                <div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className='text-3xl lg:text-7xl text-white'>Experience</motion.h1>
                </div>
                <div className="container" style={{ paddingInline: "30px" }}>
                    <motion.div className="step completed">
                        <div className="v-stepper">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="circle"></motion.div>
                            <div className="line"></div>
                        </div>
                        <div className="content flex justify-start md:justify-end" style={{ paddingInline: "30px" }}>
                            <div className='text-white'>
                                <motion.h1 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className='font-semibold text-5xl' style={{ fontFamily: "Poppins" }}>Co-Founder,CTO</motion.h1>
                                <div className='flex justify-between w-full mt-1'>
                                    <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className='text-2xl' style={{ fontFamily: "Poppins", fontWeight: "500" }}>Polibuzz</motion.h2>
                                    <motion.h2 initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className='text-xl' style={{ fontFamily: "Poppins", fontWeight: "500", paddingRight: "50px" }}>Feb 2023 - Present</motion.h2>
                                </div>
                                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className='short text-l'>As the Co-Founder and CTO of Polibuzz, I spearheaded the development of a social media platform centered around Indian politics. The Polibuzz android app is currently available to download on the play
                                    store.
                                </motion.p>
                                <br /><br />
                            </div>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src={Image} />
                        </div>
                    </motion.div>
                    <motion.div transition={{ delay: 0.5 }} className="step active">
                        <div className="v-stepper">
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="content flex justify-start md:justify-end" style={{ paddingInline: "30px" }}>
                            <div className='text-white'>
                                <motion.h1 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className='font-semibold text-5xl' style={{ fontFamily: "Poppins" }}>Data Analyst</motion.h1>
                                <div className='flex justify-between w-full mt-1'>
                                    <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className='text-2xl' style={{ fontFamily: "Poppins", fontWeight: "500" }}>3 Pillar Global</motion.h2>
                                    <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className='text-xl' style={{ fontFamily: "Poppins", fontWeight: "500", paddingRight: "50px" }}>June 2023 - July 2023</motion.h2>
                                </div>
                                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className='short text-l'>During my internship at 3Pillar Global, I worked on recommendation projects utilizing machine learning, some of which include a Music Recommendation System with customizable metrics and Spotify integration, and a Movie Recommendation System featuring sentiment analysis for review feedback and similar movie suggestions.</motion.p>
                                <br /><br />
                            </div>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src={Image1} />
                        </div>
                    </motion.div>
                    <motion.div transition={{ delay: 0.75 }} className="step">
                        <div className="v-stepper">
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="content flex justify-start md:justify-end" style={{ paddingInline: "30px" }}>
                            <div className='text-white'>
                                <motion.h1 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className='font-semibold text-5xl' style={{ fontFamily: "Poppins" }}>Back End Developer</motion.h1>
                                <div className='flex justify-between w-full mt-1'>
                                    <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className='text-2xl' style={{ fontFamily: "Poppins", fontWeight: "500" }}>Knotters</motion.h2>
                                    <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className='text-xl' style={{ fontFamily: "Poppins", fontWeight: "500", paddingRight: "50px" }}>March, 2023 - April, 2023</motion.h2>
                                </div>
                                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className='short text-l'>During my internship at Knotters, I contributed to the construction of their platform, and a few of their upcoming projects. It was my first exposure to utilizing tools like Django, MongoDB, Postman API, and Redis in a commercial setting.</motion.p>
                                <br /><br />
                            </div>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src={Image2} />
                        </div>
                    </motion.div>
                </div>
            </section >

        </>
    )
}
