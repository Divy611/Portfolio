import React from 'react'
import { motion } from 'framer-motion'
import MLCert from '../assets/CourseraML.png'
import AWSCert from '../assets/CourseraAWS.png'
import AWSCert1 from '../assets/CourseraAWS1.png'
import AngularCert from '../assets/CourseraAngular.png'
import BlockchainCert from '../assets/InfyBlockchain.png'

export default function Certifications() {
    return (
        <><section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex w-full mb-20 flex-wrap">
                    <motion.h1 initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} class="text-5xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">My Certifications</motion.h1>
                    {/* <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
                </div>
                <div class="flex flex-wrap md:-m-2 -m-1">
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-1/2">
                            <motion.img initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.07 }} transition={{ duration: 0.35 }} alt="" class="w-full object-cover h-full object-center block" src={AWSCert1} />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <motion.img initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.07 }} transition={{ duration: 0.35, delay: 0.15 }} alt="" class="w-full object-cover h-full object-center block" src={BlockchainCert} />
                        </div>
                        <div class="md:p-2 p-1 w-full">
                            <motion.img initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.04 }} transition={{ duration: 0.35, delay: 0.35 }} alt="" class="w-full h-full object-cover object-center block" src={MLCert} />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-full">
                            <motion.img initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.04 }} transition={{ duration: 0.35, delay: 0.55 }} alt="" class="w-full h-full object-cover object-center block" src={AWSCert} />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <motion.img initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.07 }} transition={{ duration: 0.35, delay: 0.75 }} alt="" class="w-full object-cover h-full object-center block" src={AngularCert} />
                        </div>
                        {/* <div class="md:p-2 p-1 w-1/2">
                            <motion.img initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.07 }} transition={{ duration: 0.35, delay: 0.95 }} alt="" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                        </div> */}
                    </div>
                </div>
            </div>
        </section></>
    )
}
