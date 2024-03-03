import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Projects() {
    const [expand, setexpand] = useState(false);
    const [expand1, setexpand1] = useState(false);
    const [expand2, setexpand2] = useState(false);
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 2], ["0%", "250%"]);
    return (
        <>
            <div className='' style={{ y }}>
                <section className="" style={{ paddingBottom: "30px" }}>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-12">
                        <div className="mx-auto max-w-lg text-center text-white">
                            <motion.h1 className="text-3xl font-bold sm:text-4xl text-center headertext" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ fontFamily: "poppins", fontWeight: "600" }}>My Projects</motion.h1>
                            {/* <motion.p className="mt-4 text-gray-300 headersubtext text-center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} style={{ fontFamily: "poppins", fontWeight: "500" }}>India is the world's largest democracy with 900 million eligible voters. Help us revolutionise the way people connect with their leaders.</motion.p> */}
                        </div>
                        <br />
                        <div className="mt-8 grid gap-8 lg:grid-cols-3 container">
                            <motion.div transition={{ layout: { duration: 0.4 } }} layout onMouseEnter={() => setexpand(!expand)} onMouseOut={() => setexpand(expand)} onMouseLeave={() => setexpand(expand)} className="scroll rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-500/10">
                                <div fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <img src="https://www.nitcoinc.com/static/1f794df56b9d96b278d638e49b7fc5bc/a7715/d7c4e4a1ba24f91814baa734f9486088.jpg" style={{ borderRadius: "15px" }} alt="" />
                                </div>
                                <motion.h2 layout="position" className="mt-4 text-xl font-bold text-white " style={{ fontFamily: "poppins" }}>Virtual Assistant</motion.h2>
                                {expand && (
                                    <motion.p style={{ fontFamily: "poppins" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="mt-1 text-sm text-gray-300">A virtual assistant like Google assistant, Alexa, Cortana, made with python.
                                        It can perform basic tasks like doing a general conversation, open apps, search the browser for info, do
                                        calculations, and many more...
                                    </motion.p>)}
                            </motion.div>
                            <motion.div transition={{ layout: { duration: 0.4 } }} layout onMouseEnter={() => setexpand1(!expand1)} onMouseOut={() => setexpand1(expand1)} onMouseLeave={() => setexpand1(expand1)} className="scroll rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-500/10">
                                <div fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <img src="https://www.tarakeswardegreecollege.org/images/departments/msic.jpg" alt="" style={{ borderRadius: "15px" }} />
                                </div>
                                <motion.h2 layout="position" className="mt-4 text-xl font-bold text-white " style={{ fontFamily: "poppins" }}>Music Recommendation System</motion.h2>
                                {expand1 && (
                                    <motion.p style={{ fontFamily: "poppins" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="mt-1 text-sm text-gray-300">My music recommendation system takes up various music metrics as input and suggests music based
                                        on the metric values given. And with the help of Spotify API, we are also able to directly play those songs
                                        through the user interface itself.</motion.p>)}
                            </motion.div>
                            <motion.div transition={{ layout: { duration: 0.4 } }} layout onMouseEnter={() => setexpand2(!expand2)} onMouseOut={() => setexpand2(expand2)} onMouseLeave={() => setexpand2(expand2)} className="scroll rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-500/10">
                                <div fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <img src="https://www.retrogames.cz/games/530/DOS_03.gif" alt="" style={{ borderRadius: "15px" }} />
                                </div>
                                <motion.h2 layout="position" className="mt-4 text-xl font-bold text-white " style={{ fontFamily: "poppins" }}>Ping-Pong using Hand Gestures</motion.h2>
                                {expand2 && (
                                    <motion.p style={{ fontFamily: "poppins" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="mt-1 text-sm text-gray-300">This project is a ping pong game made in python, but instead of using keyboard and mouse, we use our
                                        hand movements to play the game.
                                    </motion.p>)}
                            </motion.div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
