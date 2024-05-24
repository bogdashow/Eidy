import React from 'react'
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion"

function Benefits() {
    return (
        <div id='Benefits' className='w-full bg-slate-950 px-4'>
            <div className='max-w-[1240px] justify-center items-center flex flex-col mx-auto'>
                <motion.div className='my-20'
                    initial={{ y: 75, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <ReactTyped className='font-title text-7xl text-green-500 max-md:text-5xl'
                        strings={[
                            "Benefits",

                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    />
                </motion.div>

                <motion.p className='font-title text-slate-500 text-lg text-center mb-20 max-md:text-base'
                    initial={{ y: 35, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Eidy is poised to transform the healthcare landscape, making specialist-level care
                    more accessible and efficient than ever before through innovative technology and
                    streamlined services
                </motion.p>

                <motion.div className='mb-32 grid grid-cols-3 gap-6 max-md:grid-cols-1'
                    initial={{ y: 35, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className='text-white bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='font-title text-2xl pb-3'>Enhanced Accessibility</h3>
                        <p className='text-slate-500 text-lg'>
                            Eidy provides 24/7 medical support, eliminating geographical
                            or time constraints to quality healthcare</p>
                    </div>
                    <div className='bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='text-white font-title text-2xl pb-3'>Improved Efficiency</h3>
                        <p className='text-slate-500 text-lg'>
                            Eidy streamlines the initial consultation process,
                            potentially reducing wait times for specialist appointments</p>
                    </div>
                    <div className='bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='text-white font-title text-2xl pb-3'>Empowered Patients</h3>
                        <p className='text-slate-500 text-lg'>
                            Eidy equips patients with knowledge and insights,
                            fostering informed decision-making about their health</p>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Benefits