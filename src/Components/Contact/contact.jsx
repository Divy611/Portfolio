import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
    return (
        <>
            <section className="body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-2xl lg:text-4xl text-3xl font-medium title-font mb-4 text-white">Contact Me</h1>
                        <div className="container px-48 py-8 mx-auto">
                            <div className="grid gap-20 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                <motion.a initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} href='mailto: divy.parikh@hotmail.com'>
                                    <div className="p-4 rounded-lg md:p-6 bg-opacity-0">
                                        <i className="fa-regular fa-envelope-open lg:text-5xl text-white"></i>
                                        <h2 className="mt-4 text-base font-medium text-white">Email</h2>
                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">divy.parikh@hotmail.com</p>
                                    </div>
                                </motion.a>
                                <motion.a initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }} href="https://github.com/Divy611">
                                    <div className="p-4 rounded-lg md:p-6 bg-opacity-0">
                                        <i className="fa-brands fa-github lg:text-5xl text-white"></i>
                                        <h2 className="mt-4 text-base font-medium text-white">GitHub</h2>
                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Divy611</p>
                                    </div>
                                </motion.a>
                                <motion.a initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.25 }} href="https://www.linkedin.com/in/divyparikh611/">
                                    <div className="p-4 rounded-lg md:p-6 bg-opacity-0">
                                        <i class="fa-brands fa-linkedin-in lg:text-5xl text-white"></i>
                                        <h2 className="mt-4 text-base font-medium text-white">LinkedIn</h2>
                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Divy Parikh</p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-200">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </motion.div>
                            </div>
                            <div className="p-2 w-1/2">
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 }} className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-200">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </motion.div>
                            </div>
                            <div className="p-2 w-full">
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.25 }} className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-200">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </motion.div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Message Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact