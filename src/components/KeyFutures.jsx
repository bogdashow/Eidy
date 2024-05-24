import React from 'react'
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion"

function KeyFutures() {
    return (
        <div id='KeyFutures' className='w-full bg-slate-950 px-4'>
            <div className='max-w-[1240px] justify-center items-center flex flex-col mx-auto'>
                <motion.div className='my-20'
                    initial={{ y: 75, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <ReactTyped className='font-title text-7xl text-green-500 max-md:text-5xl'
                        strings={[
                            "Key Futures",
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    />
                </motion.div>

                <motion.p className='font-title text-slate-500 text-lg text-center mb-20 max-md:text-base'
                    initial={{ y: 75, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Eidy's development is driven by a powerful combination of medical expertise
                    and cutting-edge AI knowledge, ensuring its ability to provide accurate, insightful,
                    and constantly evolving healthcare guidance
                </motion.p>

                <motion.div className='mb-40 grid grid-cols-3 gap-6 max-md:grid-cols-1'
                    initial={{ y: 75, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className='text-white bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='font-title text-2xl pb-3'>Specialist-Level Consultations</h3>
                        <p className='text-slate-500 text-lg'>
                            Eidy goes beyond basic symptom checking offering in-depth analysis and guidance
                            typically associated with specialist consultations</p>
                    </div>

                    <div className='bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='text-white font-title text-2xl pb-3'>AI-Powered Accuracy</h3>
                        <p className='text-slate-500 text-lg'>
                            Advanced machine learning algorithms continuously enhance Eidy's diagnostic
                            capabilities and treatment recommendations, ensuring consistent improvement</p>
                    </div>

                    <div className='bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='text-white font-title text-2xl pb-3'>Vast Medical Knowledge Base</h3>
                        <p className='text-slate-500 text-lg'>
                            Eidy possesses a comprehensive database of medical information, enabling it
                            to address a wide range of health concerns</p>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}

export default KeyFutures